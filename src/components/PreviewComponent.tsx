"use client";
import { useEffect } from "react";
import { useDynamicComponent, useDynamicComponentProps } from "./hooks/component";

const PreviewComponent = ({
  component,
  directory,
  componentName,
}: useDynamicComponentProps) => {
  const { Component, isLoading, error } = useDynamicComponent({
    directory,
    component,
    componentName,
  });

  useEffect(() => {
    const handleThemeMessage = (event: MessageEvent) => {
      if (event.data.type === "updateTheme") {
        const newTheme = event.data.theme || "light";
        document.documentElement.className = newTheme;
        document.documentElement.style.colorScheme = newTheme;
      }
    };

    window.addEventListener("message", handleThemeMessage);

    return () => {
      window.removeEventListener("message", handleThemeMessage);
    };
  }, []);

  useEffect(() => {
    const sendHeightToParent = () => {
      const height = document.body.clientHeight;
      window.parent.postMessage(
        { type: `${component}-iframeHeight`, height },
        "*",
      );
    };
    sendHeightToParent();

    const observer = new MutationObserver(sendHeightToParent);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("resize", sendHeightToParent);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sendHeightToParent);
    };
  }, [Component, component]);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2">
        {/* <div className="spinner"></div>Loading... */}
      </div>
    );
  }
  return <Component />;
};

export default PreviewComponent;
