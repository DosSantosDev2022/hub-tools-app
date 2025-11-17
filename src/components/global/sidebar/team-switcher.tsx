"use client"

import { ToolCase } from "lucide-react" // Importamos um ícone para o logo
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function SideBarLogo() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {/* O asChild e o <a> permitem que ao clicar no logo, o utilizador volte à Home */}
        <SidebarMenuButton
          size="lg"
          asChild
          className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <a href="/">
            {/* Ícone / Logo */}
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <ToolCase className="size-4" />
            </div>

            {/* Texto / Nome do App */}
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-bold">Hub Tools</span>
              <span className="truncate text-xs text-muted-foreground">v1.0</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}