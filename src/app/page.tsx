import Header from "@/components/Header";
import Search from "@/components/SearchModal";
import { Button } from "@/components/ui/button";
import { navigation } from "config";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="fixed left-1/2 -z-20 mx-auto flex h-full w-full max-w-screen-lg -translate-x-1/2 items-center justify-around">
        <span className="animate-line1 infinite flex h-full w-[1px] bg-border"></span>
        <div className="w-full flex-1"></div>
        {/* <span className="animate-line2 infinite flex h-full w-[1px] bg-border"></span> */}
        <span className="animate-line3 infinite flex h-full w-[1px] bg-border"></span>
      </div>
      <Header showSidebar={false} />
      <section className="flex min-h-screen items-center justify-center p-2">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-wide md:text-6xl md:leading-tight">
            Prebuilt UI Components <br />
            Design Faster, Build Smarter
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            Supercharge your development with ready-to-use, beautifully designed
            UI components. Copy, paste, and customize components built with
            Tailwind CSS for modern web applications. Perfect for developers and
            designers looking to speed up their workflow.
          </p>
          <div className="mx-auto mt-8 max-w-64">
            <Search className="py-4" />
          </div>
        </div>
      </section>

      <section className="py-10">
        <h1 className="mb-4 text-center text-3xl font-semibold md:text-5xl">
          UI Components Library
        </h1>
        <p className="text-center text-lg text-muted-foreground">
          Build better UIs faster with prebuilt components.
        </p>
        <br />
        <br />

        <div className="mx-auto grid max-w-5xl grid-cols-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-5 [&>*]:relative [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0]">
          {navigation
            .filter((item) => item.heading === "UI")
            .map((item) => {
              return (
                <Link
                  href={item.url}
                  key={item.slug}
                  className="grid aspect-video place-content-center hover:bg-muted"
                >
                  {item.name}
                </Link>
              );
            })}
        </div>
      </section>

      <div>
        <div
          className="xs:text-7xl flex max-w-screen-2xl justify-center overflow-hidden py-20 font-body text-5xl font-bold tracking-widest text-transparent md:text-9xl lg:text-[160px]"
          style={{
            WebkitTextStrokeWidth: "1.5px",
            WebkitTextStrokeColor: "hsl(var(--border))",
          }}
        >
          CodeWind
        </div>
      </div>

      <div className="container-wrapper border-t bg-background py-5">
        <div className="container flex justify-between text-muted-foreground">
          <p className="my-auto">
            © {new Date().getFullYear()}{" "}
            <a
              role="link"
              className="text-primary"
              href="https://vashish.technotaught.com/"
            >
              VAshish
            </a>
            . All rights reserved.
          </p>
          <nav>
            <Button variant="ghost" size="icon">
              <svg
                className="h-5 w-5"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                href="https://github.com/vishwaashish"
              >
                <path
                  d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Button>
          </nav>
        </div>
      </div>

      {/* <div className="section-hero grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <main className=" row-start-2 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-bold">Ashishkumar Vishwakarma</h1>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="30"
                  viewBox="0 0 42 30"
                  fill="none"
                >
                  <path
                    d="M24.9463 0L13.4363 24.8431H3.66446L1.73828 29.9181L16.349 29.9591L27.9793 4.91132H37.49L39.9799 0H24.9463Z"
                    
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.2282 8.95173L13.3946 0.0410156H12.5969L4.29718 17.9777L9.81311 17.8939C11.1255 15.087 12.4328 12.2814 13.3946 10.2131L15.6471 14.4446L18.2282 8.95173ZM8.39825 20.9157L2.89903 20.9993L0.0202526 27.2207C-0.0579602 27.8989 0.0484092 29.3528 1.09959 29.7434C2.41356 30.2317 4.1498 29.6213 4.61908 28.8483C4.81674 28.5226 6.47147 25.0244 8.39825 20.9157Z"
                    className="fill-primary"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.8183 19.4816L21.2344 24.9659L23.9122 30H28.7042L37.0336 12H31.4345C29.5031 16.1479 27.4707 20.6003 26.0733 23.7381L23.8183 19.4816ZM32.8393 9H38.4219L41.9995 1.2688C41.8272 0.845883 41.1632 0.0082294 39.8854 0.0409716C38.2881 0.0818993 37.6463 0.243089 36.9257 0.818585C36.6565 1.03349 34.9317 4.5589 32.8393 9Z"
                    className="fill-primary"
                  ></path>
                </svg>
                CodeWind
              </span>
            </div>
            <Link
              className="mt-4 flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
              href="/component/button"
              rel="noopener noreferrer"
            >
              Read our docs
            </Link>
          </div>
        </main>
      </div> */}
    </div>
  );
}
