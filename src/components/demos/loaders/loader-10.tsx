import React from "react";

function LoaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-10 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation10 var(--loader-speed) linear infinite;
        }

        .loader-10::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: calc(var(--loader-width) + 15px);
          height: calc(var(--loader-width) + 15px);
          border-radius: 50%;
          border: var(--loader-border) solid;
          border-color: var(--loader-primary) transparent;
        }

        @keyframes rotation10 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <div className="loader-10"></div>
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

  .loader-10 {
    width: var(--loader-width);
    height: var(--loader-width);
    border: var(--loader-border) solid var(--loader-secondary);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation10 var(--loader-speed) linear infinite;
  }

  .loader-10::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(var(--loader-width) + 15px);
    height: calc(var(--loader-width) + 15px);
    border-radius: 50%;
    border: var(--loader-border) solid;
    border-color: var(--loader-primary) transparent;
  }

  @keyframes rotation10 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div class="loader-10"></div>`;

const react = `
function LoaderDemo() {
  return (
    <>
      <style>
        {\\\`
        :root {
        --loader-primary: hsl(var(--primary));
        --loader-secondary: hsl(var(--muted));
        --loader-border: 5px;
        --loader-width: 48px;
        --loader-speed: 1s;
        }
        .loader-10 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation10 var(--loader-speed) linear infinite;
        }

        .loader-10::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: calc(var(--loader-width) + 15px);
          height: calc(var(--loader-width) + 15px);
          border-radius: 50%;
          border: var(--loader-border) solid;
          border-color: var(--loader-primary) transparent;
        }

        @keyframes rotation10 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        \\\`}
      </style>
      <div className="loader-10"></div>
    </>
  );
}
`;

export { LoaderDemo, html, react };
