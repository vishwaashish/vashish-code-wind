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
export interface useDynamicComponentProps {
  directory: string;
  component: string;
  componentName: string;
}

/**
 * Represents the structure of dynamically imported file data.
 */
export interface FileData {
  html: string;
  react: string;
  title: string;
  fullScreen?: boolean;
  [key: string]:
    | string
    | ComponentType
    | (() => ReactNode)
    | boolean
    | undefined;
}

/**
 * A custom hook for dynamically importing and rendering components.
 *
 * @param {useDynamicComponentProps} params - The directory and component name for dynamic import.
 * @returns {object} - An object containing the rendered component, HTML content, loading state, error state, and a reload function.
 */
const useDynamicComponent = ({
  directory,
  component,
  componentName,
}: useDynamicComponentProps) => {
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Ensure proper handling of singular directory names
  // const singular = directory.endsWith("s") ? directory.slice(0, -1) : directory;
  // const componentFunc = singular.charAt(0).toUpperCase() + singular.slice(1);

  const Component: ComponentType | null = fileData
    ? (fileData[componentName] as ComponentType) ||
      (() => <div className="p-4">Component not found</div>)
    : () => <div></div>;

  /**
   * Dynamically loads the specified component.
   */
  const loadComponent = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const importedData = await import(`../${directory}/${component}`);
      setFileData(importedData);
    } catch (err) {
      setError(`Failed to load component: ${(err as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  }, [component, directory]);

  useEffect(() => {
    loadComponent();
  }, [component, directory, loadComponent]);

  return {
    html: fileData?.html || "",
    react: fileData?.react || "",
    title: fileData?.title || "",
    fullScreen: fileData?.fullScreen || false,
    Component,
    isLoading,
    error,
    reload: loadComponent,
  };
};

export { useDynamicComponent };

