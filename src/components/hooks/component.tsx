"use client";

import {
  ComponentType,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

/**
 * Defines the properties required by the `useDynamicComponent` hook.
 */
interface useDynamicComponentProps {
  directory: string;
  componentName: string;
}

/**
 * Represents the structure of dynamically imported file data.
 */
interface FileData {
  html: string;
  react: string;
  [key: string]: string | ComponentType | (() => ReactNode);
}

/**
 * A custom hook for dynamically importing and rendering components.
 *
 * @param {useDynamicComponentProps} params - The directory and component name for dynamic import.
 * @returns {object} - An object containing the rendered component, HTML content, loading state, error state, and a reload function.
 */
const useDynamicComponent = ({
  directory,
  componentName,
}: useDynamicComponentProps) => {
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Ensure proper handling of singular directory names
  const singular = directory.endsWith("s") ? directory.slice(0, -1) : directory;

  const Component: ComponentType | null = fileData
    ? (fileData[`${singular}Demo`] as ComponentType) ||
      (() => <div>Component not found</div>)
    : () => <div>Loading...</div>;

  /**
   * Dynamically loads the specified component.
   */
  const loadComponent = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const importedData = await import(
        `@/components/${directory}/${componentName}`
      );
      setFileData(importedData);
    } catch (err) {
      setError(`Failed to load component: ${(err as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  }, [componentName, directory]);

  useEffect(() => {
    loadComponent();
  }, [componentName, directory, loadComponent]);

  return {
    html: fileData?.html || "",
    react: fileData?.react || "",
    Component,
    isLoading,
    error,
    reload: loadComponent,
  };
};

export { useDynamicComponent };
