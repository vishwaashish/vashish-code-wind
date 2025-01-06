import React from "react";

function LoaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-12 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation12 var(--loader-speed) linear infinite;
        }

        .loader-12::after,
        .loader-12::before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          background: var(--loader-primary);
          width: calc(var(--loader-border));
          height: calc(var(--loader-border));
          border-radius: 50%;
        }

        .loader-12::before {
          left: auto;
          top: auto;
          right: 0;
          bottom: 0;
        }

        @keyframes rotation12 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <div className="loader-12"></div>
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

  .loader-12 {
    width: var(--loader-width);
    height: var(--loader-width);
    border: var(--loader-border) solid var(--loader-secondary);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation12 var(--loader-speed) linear infinite;
  }

  .loader-12::after,
  .loader-12::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--loader-primary);
    width: calc(var(--loader-border));
    height: calc(var(--loader-border));
    border-radius: 50%;
  }

  .loader-12::before {
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
  }

  @keyframes rotation12 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div class="loader-12"></div>`;

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
        .loader-12 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation12 var(--loader-speed) linear infinite;
        }

        .loader-12::after,
        .loader-12::before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          background: var(--loader-primary);
          width: calc(var(--loader-border));
          height: calc(var(--loader-border));
          border-radius: 50%;
        }

        .loader-12::before {
          left: auto;
          top: auto;
          right: 0;
          bottom: 0;
        }

        @keyframes rotation12 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        \\\`}
      </style>
      <div className="loader-12"></div>
    </>
  );
}
`;

export { LoaderDemo, html, react };
