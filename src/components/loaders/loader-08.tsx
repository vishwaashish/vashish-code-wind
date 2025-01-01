
function loaderDemo() {
  return (
    <>
      <style>
        {`
        .loader-08 {
          width: var(--loader-width);
          height: var(--loader-width);
          border-radius: 50%;
          display: inline-block;
          border-top: var(--loader-border) solid var(--loader-secondary);
          border-right: var(--loader-border) solid transparent;
          box-sizing: border-box;
          animation: rotation8 var(--loader-speed) linear infinite;
        }

        @keyframes rotation8 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <div className="loader-08"></div>
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

  .loader-08 {
    width: var(--loader-width);
    height: var(--loader-width);
    border-radius: 50%;
    display: inline-block;
    border-top: var(--loader-border) solid var(--loader-secondary);
    border-right: var(--loader-border) solid transparent;
    box-sizing: border-box;
    animation: rotation8 var(--loader-speed) linear infinite;
  }

  @keyframes rotation8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div class="loader-08"></div>`;

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
        .loader-08 {
          width: var(--loader-width);
          height: var(--loader-width);
          border-radius: 50%;
          display: inline-block;
          border-top: var(--loader-border) solid var(--loader-secondary);
          border-right: var(--loader-border) solid transparent;
          box-sizing: border-box;
          animation: rotation8 var(--loader-speed) linear infinite;
        }

        @keyframes rotation8 {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        \\\`}
      </style>
      <div className="loader-08"></div>
    </>
  );
}
`;

export { html, loaderDemo, react };

