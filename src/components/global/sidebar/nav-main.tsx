"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link" // 💡 Adicionamos Link do Next.js para navegação real

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

type SubItem = {
  title: string
  url: string
  isDisabled?: boolean
}

type MainItem = {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: SubItem[]
}

export function NavMain({
  items,
}: {
  items: MainItem[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Ferramentas</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => {
                    // 2. Lógica de Desabilitação
                    const isDisabled = subItem.isDisabled;
                    const disabledClasses = isDisabled
                      ? "opacity-50 hover:bg-transparent hover:text-current" // Estilos de desabilitado
                      : "";

                    return (
                      <SidebarMenuSubItem key={subItem.title}>
                        {/* 3. Adiciona a classe de desabilitado ao botão/contêiner */}
                        <SidebarMenuSubButton className={disabledClasses} asChild>
                          {/* 4. Renderização Condicional: Usa Link do Next.js se não estiver desabilitado */}
                          {isDisabled ? (
                            <span title="Em breve">{subItem.title}</span>
                          ) : (
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          )}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}