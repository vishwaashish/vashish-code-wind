import React from "react";

function LoaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-14 {
          width: var(--loader-width);
          height: var(--loader-width);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          border: var(--loader-border) solid;
          border-color: var(--loader-secondary) var(--loader-secondary) transparent;
          box-sizing: border-box;
          animation: rotation14 var(--loader-speed) linear infinite;
        }

        .loader-14::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: var(--loader-border) solid;
          border-color: transparent var(--loader-primary) var(--loader-primary);
          width: calc(var(--loader-width) - 20px);
          height: calc(var(--loader-width) - 20px);
          border-radius: 50%;
          animation: rotationBack14 0.5s linear infinite;
          transform-origin: center center;
        }

        @keyframes rotation14 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotationBack14 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        `}
      </style>
      <div className="loader-14"></div>
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

  .loader-14 {
    width: var(--loader-width);
    height: var(--loader-width);
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: var(--loader-border) solid;
    border-color: var(--loader-secondary) var(--loader-secondary) transparent;
    box-sizing: border-box;
    animation: rotation14 var(--loader-speed) linear infinite;
  }

  .loader-14::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: var(--loader-border) solid;
    border-color: transparent var(--loader-primary) var(--loader-primary);
    width: calc(var(--loader-width) - 20px);
    height: calc(var(--loader-width) - 20px);
    border-radius: 50%;
    animation: rotationBack14 0.5s linear infinite;
    transform-origin: center center;
  }

  @keyframes rotation14 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotationBack14 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
<div class="loader-14"></div>`;

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
        .loader-14 {
          width: var(--loader-width);
          height: var(--loader-width);
          border-radius: 50%;
          display: inline-block;
          position: relative;
          border: var(--loader-border) solid;
          border-color: var(--loader-secondary) var(--loader-secondary) transparent;
          box-sizing: border-box;
          animation: rotation14 var(--loader-speed) linear infinite;
        }

        .loader-14::after {
          content: '';
          box-sizing: border-box;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: var(--loader-border) solid;
          border-color: transparent var(--loader-primary) var(--loader-primary);
          width: calc(var(--loader-width) - 20px);
          height: calc(var(--loader-width) - 20px);
          border-radius: 50%;
          animation: rotationBack14 0.5s linear infinite;
          transform-origin: center center;
        }

        @keyframes rotation14 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes rotationBack14 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        \\\`}
      </style>
      <div className="loader-14"></div>
    </>
  );
}
`;

export { LoaderDemo, html, react };
