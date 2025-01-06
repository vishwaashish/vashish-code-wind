import { cn } from "@/lib/utils";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import Link from "next/link";

// 📚 Menu Item Type
type MenuItem = {
  label: string;
  url: string;
  active: boolean;
};

// 📊 Menu Data (could be fetched dynamically)
const menuData: MenuItem[] = [
  { label: "Home", url: "/", active: true },
  { label: "Blog", url: "#blog", active: false },
  { label: "Why us", url: "#why-us", active: false },
  { label: "Marketplace", url: "#marketplace", active: false },
  { label: "Contact", url: "#contact", active: false },
];

// 📚 Sub-component: Navigation Links
const NavLinks = ({ items }: { items: MenuItem[] }) => (
  <ul className="mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8">
    {items.map((item) => (
      <li key={item.label}>
        <Link
          href={item.url}
          className={cn(
            "block rounded py-2 pl-3 pr-4 text-black/50 hover:text-black/95 focus:outline-none dark:text-white/80 dark:hover:text-white/95 dark:focus:text-white/95 lg:bg-transparent lg:p-0",
            item.active &&
              "font-bold text-[#4f39f6] hover:text-[#4f39f6] dark:text-[#4f39f6]",
          )}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

// 📚 Sub-component: Mobile Menu
const MobileMenu = ({ items }: { items: MenuItem[] }) => {
  const { Root, Trigger, Close, Overlay, Portal, Content, Title } =
    SheetPrimitive;

  return (
    <Root>
      <Trigger
        aria-label="Open main menu"
        className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-black/50 focus:outline-none focus:ring-4 dark:text-white/80 lg:hidden"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </Trigger>
      <Portal>
        <Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <Content className="fixed inset-y-0 left-0 z-50 flex h-full w-full max-w-xs flex-col overflow-auto border-r bg-background shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
            <Title className="sr-only">Mobile Menu Dialog</Title>
            <div className="flex items-center gap-2 px-6 py-4 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="30"
                viewBox="0 0 42 30"
                fill="none"
              >
                <path
                  d="M24.9463 0L13.4363 24.8431H3.66446L1.73828 29.9181L16.349 29.9591L27.9793 4.91132H37.49L39.9799 0H24.9463Z"
                  className="fill-black dark:fill-white"
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
              </svg>{" "}
              <span>CodeWind</span>
              <Close
                aria-label="Close menu"
                className="ml-auto cursor-pointer text-black/50 opacity-70 transition-all hover:text-black/95 hover:opacity-100 focus:text-black/95 focus:outline-none dark:text-white/80 dark:hover:text-white dark:focus:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </Close>
            </div>
            <nav>
              <ul>
                {items.map((item) => (
                  <li key={item.label}>
                    <Close asChild>
                      <Link
                        href={item.url}
                        className={cn(
                          "block rounded px-6 py-3 font-medium text-black/50 transition-all hover:text-black/95 focus:text-black/95 focus:outline-0 dark:text-white/80 dark:hover:text-white/95 dark:focus:text-white/95",
                          item.active &&
                            "font-bold text-[#4f39f6] hover:text-[#4f39f6] dark:text-[#4f39f6]",
                        )}
                      >
                        {item.label}
                      </Link>
                    </Close>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto w-full space-y-6 px-6 py-6">
              <ul className="flex max-w-xs flex-wrap justify-between gap-2">
                <li>
                  <Link
                    className="block rounded-full border border-black/10 p-3 text-black/50 transition-all hover:border-black/95 hover:text-black/95 focus:text-black/95 focus:outline-0 dark:border-white/50 dark:text-white/80 dark:hover:text-white/95 dark:focus:text-white/95"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded-full border border-black/10 p-3 text-black/50 transition-all hover:border-black/95 hover:text-black/95 focus:text-black/95 focus:outline-0 dark:border-white/50 dark:text-white/80 dark:hover:text-white/95 dark:focus:text-white/95"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded-full border border-black/10 p-3 text-black/50 transition-all hover:border-black/95 hover:text-black/95 focus:text-black/95 focus:outline-0 dark:border-white/50 dark:text-white/80 dark:hover:text-white/95 dark:focus:text-white/95"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="block rounded-full border border-black/10 p-3 text-black/50 transition-all hover:border-black/95 hover:text-black/95 focus:text-black/95 focus:outline-0 dark:border-white/50 dark:text-white/80 dark:hover:text-white/95 dark:focus:text-white/95"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>

              <button className="w-full rounded-full bg-[#4f39f6] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4">
                Get started
              </button>
            </div>
          </Content>
        </Overlay>
      </Portal>
    </Root>
  );
};
function HeaderDemo() {
  return (
    <div>
      <header className="fixed top-0 w-full border-gray-200 bg-white px-4 py-2.5 shadow dark:bg-gray-800 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus:outline-none"
            aria-label="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="30"
              viewBox="0 0 42 30"
              fill="none"
            >
              <path
                d="M24.9463 0L13.4363 24.8431H3.66446L1.73828 29.9181L16.349 29.9591L27.9793 4.91132H37.49L39.9799 0H24.9463Z"
                className="fill-black dark:fill-white"
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto">
            <NavLinks items={menuData} />
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center lg:order-2">
            <button
              aria-label="Get started"
              className="mr-2 rounded-full bg-[#4f39f6] px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
            >
              Get Started
            </button>

            {/* Mobile Menu */}
            <MobileMenu items={menuData} />
          </div>
        </div>
      </header>
      <div className="">
        <section
          id="blog"
          className="grid h-[400px] place-content-center bg-orange-100 text-2xl font-bold text-orange-300"
        >
          Blog
        </section>
        <section
          id="marketplace"
          className="grid h-[400px] place-content-center bg-white text-2xl font-bold text-black/30"
        >
          Market place
        </section>
        <section
          id="why-us"
          className="grid h-[400px] place-content-center bg-green-100 text-2xl font-bold text-green-300"
        >
          Why Us
        </section>
        <section
          id="contact"
          className="grid h-[400px] place-content-center bg-white text-2xl font-bold text-black/30"
        >
          Contact
        </section>
      </div>
    </div>
  );
}

const html = ``;

const react = ``;

const fullScreen = false;

const title =
  "Responsive Navigation Header with Mobile Drawer and Dynamic Links";

export { HeaderDemo, html, react, fullScreen, title };
