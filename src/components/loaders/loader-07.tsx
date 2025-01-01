import React from "react";

function loaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-07 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation7 var(--loader-speed) linear infinite;
        }

        .loader-07::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: calc(var(--loader-width) + 18px);
          height: calc(var(--loader-width) + 18px);
          border-radius: 50%;
          border: var(--loader-border) solid transparent;
          border-bottom-color: var(--loader-primary);
        }

        @keyframes rotation7 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <div className="loader-07"></div>
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

  .loader-07 {
    width: var(--loader-width);
    height: var(--loader-width);
    border: var(--loader-border) solid var(--loader-secondary);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation7 var(--loader-speed) linear infinite;
  }

  .loader-07::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(var(--loader-width) + 18px);
    height: calc(var(--loader-width) + 18px);
    border-radius: 50%;
    border: var(--loader-border) solid transparent;
    border-bottom-color: var(--loader-primary);
  }

  @keyframes rotation7 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div class="loader-07"></div>`;

const react = `
function loaderDemo() {
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
        .loader-07 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation7 var(--loader-speed) linear infinite;
        }

        .loader-07::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: calc(var(--loader-width) + 18px);
          height: calc(var(--loader-width) + 18px);
          border-radius: 50%;
          border: var(--loader-border) solid transparent;
          border-bottom-color: var(--loader-primary);
        }

        @keyframes rotation7 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        \\\`}
      </style>
      <div className="loader-07"></div>
    </>
  );
}
`;

export { loaderDemo, html, react };
