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
import { Files, Home, Inbox, Layout, Pen, PencilRulerIcon, PersonStanding, Search } from "lucide-react";
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
    icon: PencilRulerIcon,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  }
];

const adminItems = [
  {
    title: "All Users",
    url: "/user",
    icon: PersonStanding,
  },
  {
    title: "Dash Board",
    url: "/dashboard",
    icon: Layout,
  },
  {
    title: "All Blogs",
    url: "/posts",
    icon: Inbox,
  },
];
export function AppSidebar() {
  return (
    <Sidebar>
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
        <SidebarGroup>
          <SidebarGroupLabel>Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
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
