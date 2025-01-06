import React from "react";

function LoaderDemo() {
  return (
    <>
      <style>
        {`
.loader-06 {
      width: var(--loader-width);
      height: var(--loader-width);
      border-radius: 50%;
      position: relative;
      animation: rotate6 var(--loader-speed) linear infinite;
   }
    .loader-06::before, .loader-06::after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0px;
      border-radius: 50%;
      border: var(--loader-border) solid var(--loader-secondary);
      animation: prixClipFix6 2s linear infinite;
   }
    .loader-06::after {
      border-color: var(--loader-primary);
      animation: prixClipFix6 2s linear infinite, rotate 0.5s linear infinite reverse;
      inset: 6px;
   }
    @keyframes rotate6 {
      0% {
        transform: rotate(0deg);
     }
      100% {
        transform: rotate(360deg);
     }
   }
    @keyframes prixClipFix6 {
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
      <div className="loader-06"></div>
    </>
  );
}

const html = `
<style>
 :root {
    --loader-primary: hsl(var(--primary));
    --loader-secondary: hsl(var(--muted));
    --loader-border: 5px;
    --loader-width: 48px;
    --loader-speed: 1s;
  }
  .loader-06 {
        width: var(--loader-width);
        height: var(--loader-width);
        border-radius: 50%;
        position: relative;
        animation: rotate6 var(--loader-speed) linear infinite;
  }
  .loader-06::before, .loader-06::after {
        content: &quot;&quot;;
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: var(--loader-border) solid var(--loader-secondary);
        animation: prixClipFix6 2s linear infinite;
  }
  .loader-06::after {
        border-color: var(--loader-primary);
        animation: prixClipFix6 2s linear infinite, rotate 0.5s linear infinite reverse;
        inset: 6px;
  }
  @keyframes rotate6 {
        0% {
          transform: rotate(0deg);
       }
        100% {
          transform: rotate(360deg);
       }
     }
  @keyframes prixClipFix6 {
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
<div class="loader-06"></div>
`;

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
      .loader-06 {
         width: var(--loader-width);
         height: var(--loader-width);
         border-radius: 50%;
         position: relative;
         animation: rotate6 var(--loader-speed) linear infinite;
      }
       .loader-06::before, .loader-06::after {
         content: "";
         box-sizing: border-box;
         position: absolute;
         inset: 0px;
         border-radius: 50%;
         border: var(--loader-border) solid var(--loader-secondary);
         animation: prixClipFix6 2s linear infinite;
      }
       .loader-06::after {
         border-color: var(--loader-primary);
         animation: prixClipFix6 2s linear infinite, rotate 0.5s linear infinite reverse;
         inset: 6px;
      }
       @keyframes rotate6 {
         0% {
           transform: rotate(0deg);
        }
         100% {
           transform: rotate(360deg);
        }
      }
       @keyframes prixClipFix6 {
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
      <div className="loader-06"></div>
    </>
  );
}`;

export { LoaderDemo, html, react };
