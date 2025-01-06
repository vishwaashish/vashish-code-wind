import React from "react";

function LoaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-13 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation13 var(--loader-speed) linear infinite;
        }

        .loader-13::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          background: var(--loader-primary);
          width: calc(var(--loader-border) + 10px);
          height: calc(var(--loader-border) + 10px);
          transform: translate(-50%, 50%);
          border-radius: 50%;
        }

        @keyframes rotation13 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <div className="loader-13"></div>
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

  .loader-13 {
    width: var(--loader-width);
    height: var(--loader-width);
    border: var(--loader-border) solid var(--loader-secondary);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation13 var(--loader-speed) linear infinite;
  }

  .loader-13::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--loader-primary);
    width: calc(var(--loader-border) + 10px);
    height: calc(var(--loader-border) + 10px);
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }

  @keyframes rotation13 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div class="loader-13"></div>`;

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
        .loader-13 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation13 var(--loader-speed) linear infinite;
        }

        .loader-13::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          background: var(--loader-primary);
          width: calc(var(--loader-border) + 10px);
          height: calc(var(--loader-border) + 10px);
          transform: translate(-50%, 50%);
          border-radius: 50%;
        }

        @keyframes rotation13 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        \\\`}
      </style>
      <div className="loader-13"></div>
    </>
  );
}
`;

export { LoaderDemo, html, react };
