"use client";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { formatString, groupBy } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { navigation } from "../../config";
import { SIDEBAR_WIDTH_MOBILE } from "./Layout";
import Search from "./SearchModal";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Sheet, SheetContent } from "./ui/sheet";

export default function Sidebar() {
  const groupByNavigation = groupBy(navigation, "heading");
  const pathname = usePathname();

  const groupByFilter = Object.fromEntries(
    Object.entries(groupByNavigation).filter((val) => val[0] !== "undefined")
  );

  return (
    <>
      <SidebarContainer>
        <SidebarContent className="py-4 lg:py-6">
          <SidebarGroup className="flex flex-col gap-2">
            <Link
              className="mr-4 flex items-center gap-2 md:hidden mb-4"
              href="/"
            >
              <span className="font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="30"
                  viewBox="0 0 42 30"
                  fill="none"
                >
                  <path
                    d="M24.9463 0L13.4363 24.8431H3.66446L1.73828 29.9181L16.349 29.9591L27.9793 4.91132H37.49L39.9799 0H24.9463Z"
                    className="fill-foreground"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.2282 8.95173L13.3946 0.0410156H12.5969L4.29718 17.9777L9.81311 17.8939C11.1255 15.087 12.4328 12.2814 13.3946 10.2131L15.6471 14.4446L18.2282 8.95173ZM8.39825 20.9157L2.89903 20.9993L0.0202526 27.2207C-0.0579602 27.8989 0.0484092 29.3528 1.09959 29.7434C2.41356 30.2317 4.1498 29.6213 4.61908 28.8483C4.81674 28.5226 6.47147 25.0244 8.39825 20.9157Z"
                    fill="#570DF8"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.8183 19.4816L21.2344 24.9659L23.9122 30H28.7042L37.0336 12H31.4345C29.5031 16.1479 27.4707 20.6003 26.0733 23.7381L23.8183 19.4816ZM32.8393 9H38.4219L41.9995 1.2688C41.8272 0.845883 41.1632 0.0082294 39.8854 0.0409716C38.2881 0.0818993 37.6463 0.243089 36.9257 0.818585C36.6565 1.03349 34.9317 4.5589 32.8393 9Z"
                    fill="#570DF8"
                  ></path>
                </svg>
                CodeWind
              </span>
            </Link>

            <Search />

            {Object.entries(groupByFilter).map(([key, value], index) => (
              <SidebarMenu key={key + "-" + index} className="mt-2">
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="hover:!bg-transparent">
                        {formatString(key)}{" "}
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarGroupContent>
                        <SidebarMenuSub>
                          {value.map((item, index) => (
                            <SidebarMenuSubItem key={item.name + "-" + index}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={item.url === pathname}
                              >
                                <Link href={item.url}>
                                  {/* {item?.icon && <item.icon />} */}
                                  <span>{item.name}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </SidebarGroupContent>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            ))}
          </SidebarGroup>
        </SidebarContent>
      </SidebarContainer>
      <div></div>
    </>
  );
}

const SidebarContainer = ({ children }: { children: ReactNode }) => {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();
  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={"left"}
        >
          <div className="flex h-full w-full flex-col bg-background">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="fixed  overflow-y-auto  w-[var(--sidebar-width)] h-[calc(100vh_-_56px_-_78px)]">
      {children}
    </div>
  );
};
