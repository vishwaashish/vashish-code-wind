import React from "react";

function headerDemo() {
  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="30"
              viewBox="0 0 42 30"
              fill="none"
            >
              <path
                d="M24.9463 0L13.4363 24.8431H3.66446L1.73828 29.9181L16.349 29.9591L27.9793 4.91132H37.49L39.9799 0H24.9463Z"
                className="fill-white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2282 8.95173L13.3946 0.0410156H12.5969L4.29718 17.9777L9.81311 17.8939C11.1255 15.087 12.4328 12.2814 13.3946 10.2131L15.6471 14.4446L18.2282 8.95173ZM8.39825 20.9157L2.89903 20.9993L0.0202526 27.2207C-0.0579602 27.8989 0.0484092 29.3528 1.09959 29.7434C2.41356 30.2317 4.1498 29.6213 4.61908 28.8483C4.81674 28.5226 6.47147 25.0244 8.39825 20.9157Z"
                className="fill-[#4f39f6]"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.8183 19.4816L21.2344 24.9659L23.9122 30H28.7042L37.0336 12H31.4345C29.5031 16.1479 27.4707 20.6003 26.0733 23.7381L23.8183 19.4816ZM32.8393 9H38.4219L41.9995 1.2688C41.8272 0.845883 41.1632 0.0082294 39.8854 0.0409716C38.2881 0.0818993 37.6463 0.243089 36.9257 0.818585C36.6565 1.03349 34.9317 4.5589 32.8393 9Z"
                className="fill-[#4f39f6]"
              ></path>
            </svg>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="mr-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
            >
              Get started
            </a>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <a
                  href="#"
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-white dark:text-white lg:bg-transparent lg:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Marketplace
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
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

  .loader-01 {
    width: var(--loader-width);
    height: var(--loader-width);
    border: var(--loader-border) solid var(--loader-secondary);
    border-bottom-color: var(--loader-primary);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation var(--loader-speed) linear infinite;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<div className="loader-01"></div>`;

const react = `
function headerDemo() {
  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="30"
              viewBox="0 0 42 30"
              fill="none"
            >
              <path
                d="M24.9463 0L13.4363 24.8431H3.66446L1.73828 29.9181L16.349 29.9591L27.9793 4.91132H37.49L39.9799 0H24.9463Z"
                className="fill-white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.2282 8.95173L13.3946 0.0410156H12.5969L4.29718 17.9777L9.81311 17.8939C11.1255 15.087 12.4328 12.2814 13.3946 10.2131L15.6471 14.4446L18.2282 8.95173ZM8.39825 20.9157L2.89903 20.9993L0.0202526 27.2207C-0.0579602 27.8989 0.0484092 29.3528 1.09959 29.7434C2.41356 30.2317 4.1498 29.6213 4.61908 28.8483C4.81674 28.5226 6.47147 25.0244 8.39825 20.9157Z"
                className="fill-[#4f39f6]"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.8183 19.4816L21.2344 24.9659L23.9122 30H28.7042L37.0336 12H31.4345C29.5031 16.1479 27.4707 20.6003 26.0733 23.7381L23.8183 19.4816ZM32.8393 9H38.4219L41.9995 1.2688C41.8272 0.845883 41.1632 0.0082294 39.8854 0.0409716C38.2881 0.0818993 37.6463 0.243089 36.9257 0.818585C36.6565 1.03349 34.9317 4.5589 32.8393 9Z"
                className="fill-[#4f39f6]"
              ></path>
            </svg>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="mr-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
            >
              Get started
            </a>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <a
                  href="#"
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-white dark:text-white lg:bg-transparent lg:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Marketplace
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
`;

export { headerDemo, html, react };
