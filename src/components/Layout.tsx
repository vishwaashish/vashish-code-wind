import Header from "./Header";
import Sidebar from "./Sidebar";
import { Button } from "./ui/button";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";

export const SIDEBAR_WIDTH = "15rem";
export const SIDEBAR_WIDTH_MOBILE = "15rem";
interface CustomCSSProperties extends React.CSSProperties {
  "--sidebar-width"?: string;
  "--toc-width"?: string;
  "--sidebar-width-mobile"?: string;
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      className="relative flex min-h-svh flex-col"
      style={
        {
          "--sidebar-width": SIDEBAR_WIDTH,
          "--toc-width": SIDEBAR_WIDTH,
          "--sidebar-width-mobile": "10rem",
        } as CustomCSSProperties
      }
    >
      <div className="border-grid flex flex-1 flex-col">
        <Header />
        <main className="container-wrapper flex flex-1 flex-col">
          <div className="lg:gap-16si container relative flex-1 items-start md:grid md:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] md:gap-6 lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)]">
            <Sidebar />
            <SidebarInset className="min-h-max">
              <main className="relative rounded-lg py-4 md:m-2 lg:py-6">
                {children}
              </main>
            </SidebarInset>
            {/* <TableOfContents /> */}
          </div>
        </main>
        <div className="container-wrapper border-t py-5">
          <div className="container flex justify-between">
            <p className="my-auto">
              © 2024{" "}
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
      </div>
    </SidebarProvider>
  );
}
