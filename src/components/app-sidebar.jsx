import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Files, Home, Inbox, Layout, Pen, Search } from "lucide-react";
import Link from "next/link";

const menue = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dash Board",
    url: "/dashboard",
    icon: Layout,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: Inbox,
  },

  {
    title: "Draft",
    url: "/draft",
    icon: Pen,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  }
];
export function AppSidebar() {
  return (

    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menue.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

  );
}
