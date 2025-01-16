import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDynamicComponent } from "./hooks/component";

const PreviewComponent = () => {
  const searchParams = useSearchParams();
  const componentName = searchParams.get("component") || "";
  const directory = searchParams.get("directory") || "";

  const { Component, isLoading, error } = useDynamicComponent({
    directory,
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
        { type: `${componentName}-iframeHeight`, height },
        "*",
      );
    };
    sendHeightToParent(); // Initial height on load

    const observer = new MutationObserver(sendHeightToParent);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("resize", sendHeightToParent);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sendHeightToParent);
    };
  }, [Component, componentName]);

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center gap-2">
        {/* <div className="spinner"></div>Loading... */}
      </div>
    );
  }
  return <Component />;
};

export default PreviewComponent;
