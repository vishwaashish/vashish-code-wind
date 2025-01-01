import React from "react";

function loaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-11 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation11 var(--loader-speed) linear infinite;
        }

        .loader-11::after,
        .loader-11::before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          background: var(--loader-primary);
          width: var(--loader-border);
          height: var(--loader-border);
          transform: translate(150%, 150%);
          border-radius: 50%;
        }

        .loader-11::before {
          left: auto;
          top: auto;
          right: 0;
          bottom: 0;
          transform: translate(-150%, -150%);
        }

        @keyframes rotation11 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <div className="loader-11"></div>
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

  .loader-11 {
    width: var(--loader-width);
    height: var(--loader-width);
    border: var(--loader-border) solid var(--loader-secondary);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation11 var(--loader-speed) linear infinite;
  }

  .loader-11::after,
  .loader-11::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: var(--loader-primary);
    width: var(--loader-border);
    height: var(--loader-border);
    transform: translate(150%, 150%);
    border-radius: 50%;
  }

  .loader-11::before {
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
    transform: translate(-150%, -150%);
  }

  @keyframes rotation11 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div class="loader-11"></div>`;

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
        .loader-11 {
          width: var(--loader-width);
          height: var(--loader-width);
          border: var(--loader-border) solid var(--loader-secondary);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          animation: rotation11 var(--loader-speed) linear infinite;
        }

        .loader-11::after,
        .loader-11::before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          background: var(--loader-primary);
          width: var(--loader-border);
          height: var(--loader-border);
          transform: translate(150%, 150%);
          border-radius: 50%;
        }

        .loader-11::before {
          left: auto;
          top: auto;
          right: 0;
          bottom: 0;
          transform: translate(-150%, -150%);
        }

        @keyframes rotation11 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        \\\`}
      </style>
      <div className="loader-11"></div>
    </>
  );
}
`;

export { loaderDemo, html, react };
