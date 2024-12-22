import Header from "./Header";
import Sidebar from "./Sidebar";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";

interface CustomCSSProperties extends React.CSSProperties {
  "--sidebar-width"?: string;
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      className="relative flex min-h-svh flex-col"
      style={
        {
          "--sidebar-width": "11rem",
          "--sidebar-width-mobile": "10rem",
        } as CustomCSSProperties
      }
    >
      <div className="border-grid flex flex-1 flex-col">
        <Header />
        <main className="flex flex-1 flex-col">
          <div className="container-wrapper">
            <div className="container flex-1 items-start md:grid md:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] md:gap-6 lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:gap-10">
              <Sidebar />
              <SidebarInset>
                <main className="relative py-6 lg:gap-10 lg:py-8 ">
                  {children}
                </main>
              </SidebarInset>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
