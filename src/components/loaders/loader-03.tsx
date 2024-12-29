import React from "react";

function loaderDemo() {
  return (
    <>
      <style>
        {`
      .loader-03 {
      width: var(--loader-width);
      height: var(--loader-width);
      border-radius: 50%;
      position: relative;
      animation: rotate3 var(--loader-speed) linear infinite;
   }

   .loader-03::after, .loader-03::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: var(--loader-border) solid var(--loader-secondary);
    animation: prixClipFix3 2s linear infinite;
 }
  .loader-03::after {
    transform: rotate3d(90, 90, 0, 180deg);
    border-color: var(--loader-primary);
 }

  @keyframes rotate3 {
    0% {
      transform: rotate(0deg);
   }
    100% {
      transform: rotate(360deg);
   }
 }
  @keyframes prixClipFix3 {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
   }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
   }
    75%, 100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
   }
 }
   
 `}
      </style>
      <div className="loader-03"></div>
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
  .loader-03 {
       width: var(--loader-width);
       height: var(--loader-width);
       border-radius: 50%;
       position: relative;
       animation: rotate3 var(--loader-speed) linear infinite;
  }
  .loader-03::after, .loader-03::before {
     content: &#x27;&#x27;;
     box-sizing: border-box;
     position: absolute;
     inset: 0px;
     border-radius: 50%;
     border: var(--loader-border) solid var(--loader-secondary);
     animation: prixClipFix3 2s linear infinite;
  }
  .loader-03::after {
     transform: rotate3d(90, 90, 0, 180deg);
     border-color: var(--loader-primary);
  }
   @keyframes rotate3 {
     0% {
       transform: rotate(0deg);
    }
     100% {
       transform: rotate(360deg);
    }
  }
   @keyframes prixClipFix3 {
     0% {
       clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
     50% {
       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
     75%, 100% {
       clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
  }
</style>
<div class="loader-03"></div>`;

const react = ``;

export { loaderDemo, html, react };
