import {
  SidebarContent,
  Sidebar as SidebarCustom,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { navigation } from "../../config";

export default function Sidebar() {
  return (
    <SidebarCustom className="sticky py-5 ">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold">
            Components
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {/* {item?.icon && <item.icon />} */}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarCustom>
  );
}
