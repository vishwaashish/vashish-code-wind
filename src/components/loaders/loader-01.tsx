import React from "react";

function loaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-01 {
      width: var(--loader-width);
      height: var(--loader-width);
      border: var(--loader-border) solid var(--loader-secondary);
      border-bottom-color: var(--loader-primary);
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation var(--loader-speed) linear infinite;
    }
    
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
    
      100% {
        transform: rotate(360deg);
      }
    }
      `}
      </style>
      <div className="loader-01"></div>
    </>
  );
}

const html = `<style>
  :root {
    --loader-primary: hsl(var(--primary));
    --loader-secondary: hsl(var(--muted));
    --loader-border: 5px;
    --loader-width: 48px;
    --loader-speed: 1s;
  }

      .loader-01 {
    width: var(--loader-width);
    height: var(--loader-width);
    border: var(--loader-border) solid var(--loader-secondary);
    border-bottom-color: var(--loader-primary);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation var(--loader-speed) linear infinite;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div class="loader-01"></div>`;
const react = `function loaderDemo() {
return <div>loaderDemo1</div>;
}`;

export { loaderDemo, html, react };
