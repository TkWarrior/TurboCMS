
import isAdmin from "@/app/utils/isAdmin";
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
import { getAuthsession } from "@/lib/auth";
import {  Home, Inbox, Layout, PencilRulerIcon, PersonStanding, Search } from "lucide-react";

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
export async function AppSidebar() {
  const session = await getAuthsession();
  const adminCheck = await isAdmin(session)
  return (
    <Sidebar className="bg-slate-50 border-r border-slate-200 h-screen flex flex-col w-64">
      <SidebarHeader className="p-4 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900">TurboCMS</h1>
      </SidebarHeader>

      <SidebarContent className="flex-grow p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase px-3 py-2">
            Application
          </SidebarGroupLabel>
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

        {adminCheck && (
          <SidebarGroup className="mt-4">
            <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase px-3 py-2">
              Admin
            </SidebarGroupLabel>
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
        )}
      </SidebarContent>
    </Sidebar>
  );
}
