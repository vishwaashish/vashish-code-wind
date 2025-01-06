"use client";

import PreviewComponent from "@/components/PreviewComponent";
import { Suspense } from "react";

const PreviewPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <div className="spinner"></div>Loading Component...
        </div>
      }
    >
      <PreviewComponent />
    </Suspense>
  );
};

export default PreviewPage;
