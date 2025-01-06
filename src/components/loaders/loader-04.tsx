import React from "react";

function LoaderDemo() {
  return (
    <>
      <style>
        {`
     .loader-04 {
      width: var(--loader-width);
      height: var(--loader-width);
      border-radius: 50%;
      position: relative;
      animation: rotate4 var(--loader-speed) linear infinite;
   }
    .loader-04::before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: var(--loader-border) solid var(--loader-primary);
      animation: prixClipFix4 2s linear infinite;
   }
    @keyframes rotate4 {
      100% {
        transform: rotate(360deg);
     }
   }
    @keyframes prixClipFix4 {
      0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
     }
      25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
     }
      50% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
     }
      75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
     }
      100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
     }
   }
 `}
      </style>
      <div className="loader-04"></div>
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
  .loader-04 {
     width: var(--loader-width);
     height: var(--loader-width);
     border-radius: 50%;
     position: relative;
     animation: rotate4 var(--loader-speed) linear infinite;
  }
  .loader-04::before {
     content: &#x27;&#x27;;
     box-sizing: border-box;
     position: absolute;
     inset: 0px;
     border-radius: 50%;
     border: var(--loader-border) solid var(--loader-primary);
     animation: prixClipFix4 2s linear infinite;
  }
   @keyframes rotate4 {
     100% {
       transform: rotate(360deg);
    }
  }
   @keyframes prixClipFix4 {
     0% {
       clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
     25% {
       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
     50% {
       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
     75% {
       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
     100% {
       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
</style>
<div class="loader-04"></div>`;

const react = `function LoaderDemo() {
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

     .loader-04 {
        width: var(--loader-width);
        height: var(--loader-width);
        border-radius: 50%;
        position: relative;
        animation: rotate4 var(--loader-speed) linear infinite;
      }
      .loader-04::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: var(--loader-border) solid var(--loader-primary);
        animation: prixClipFix4 2s linear infinite;
      }
      @keyframes rotate4 {
        100% {
            transform: rotate(360deg);
        }
      }
      @keyframes prixClipFix4 {
        0% {
          clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
       }
        25% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
       }
        50% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
       }
        75% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
       }
        100% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
       }
      }
 \\\`}
      </style>
      <div className="loader-04"></div>
    </>
  );
}`;

export { LoaderDemo, html, react };
