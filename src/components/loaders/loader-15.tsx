import React from "react";

function LoaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-15 {
          width: var(--loader-width);
          height: var(--loader-width);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          border: var(--loader-border) solid;
          border-color: var(--loader-secondary) var(--loader-secondary) transparent transparent;
          box-sizing: border-box;
          animation: rotation15 var(--loader-speed) linear infinite;
        }

        .loader-15::after,
        .loader-15::before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: var(--loader-border) solid;
          border-color: transparent transparent var(--loader-primary) var(--loader-primary);
          width: calc(var(--loader-width) - 24px);
          height: calc(var(--loader-width) - 24px);
          border-radius: 50%;
          animation: rotationBack15 0.5s linear infinite;
          transform-origin: center center;
        }

        .loader-15::before {
          width: calc(var(--loader-width) - 12px);
          height: calc(var(--loader-width) - 12px);
          border-color: var(--loader-secondary) var(--loader-secondary) transparent transparent;
          animation: rotation15 1.5s linear infinite;
        }

        @keyframes rotation15 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotationBack15 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        `}
      </style>
      <div className="loader-15"></div>
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

  .loader-15 {
    width: var(--loader-width);
    height: var(--loader-width);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: var(--loader-border) solid;
    border-color: var(--loader-secondary) var(--loader-secondary) transparent transparent;
    box-sizing: border-box;
    animation: rotation15 var(--loader-speed) linear infinite;
  }

  .loader-15::after,
  .loader-15::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: var(--loader-border) solid;
    border-color: transparent transparent var(--loader-primary) var(--loader-primary);
    width: calc(var(--loader-width) - 24px);
    height: calc(var(--loader-width) - 24px);
    border-radius: 50%;
    animation: rotationBack15 0.5s linear infinite;
    transform-origin: center center;
  }

  .loader-15::before {
    width: calc(var(--loader-width) - 12px);
    height: calc(var(--loader-width) - 12px);
    border-color: var(--loader-secondary) var(--loader-secondary) transparent transparent;
    animation: rotation15 1.5s linear infinite;
  }

  @keyframes rotation15 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotationBack15 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
<div class="loader-15"></div>`;

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
        .loader-15 {
          width: var(--loader-width);
          height: var(--loader-width);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          border: var(--loader-border) solid;
          border-color: var(--loader-secondary) var(--loader-secondary) transparent transparent;
          box-sizing: border-box;
          animation: rotation15 var(--loader-speed) linear infinite;
        }

        .loader-15::after,
        .loader-15::before {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: var(--loader-border) solid;
          border-color: transparent transparent var(--loader-primary) var(--loader-primary);
          width: calc(var(--loader-width) - 24px);
          height: calc(var(--loader-width) - 24px);
          border-radius: 50%;
          animation: rotationBack15 0.5s linear infinite;
          transform-origin: center center;
        }

        .loader-15::before {
          width: calc(var(--loader-width) - 12px);
          height: calc(var(--loader-width) - 12px);
          border-color: var(--loader-secondary) var(--loader-secondary) transparent transparent;
          animation: rotation15 1.5s linear infinite;
        }

        @keyframes rotation15 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotationBack15 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        \\\`}
      </style>
      <div className="loader-15"></div>
    </>
  );
}
`;

export { LoaderDemo, html, react };
