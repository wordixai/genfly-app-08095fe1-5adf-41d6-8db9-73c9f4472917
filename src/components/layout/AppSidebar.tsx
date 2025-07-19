import React from 'react';
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
} from '@/components/ui/sidebar';
import { 
  Bot, 
  Users, 
  Calendar, 
  BarChart3, 
  Settings, 
  CreditCard,
  Database,
  Zap,
  Shield
} from 'lucide-react';

const navigationItems = [
  {
    title: "AI Agents",
    url: "/agents",
    icon: Bot,
  },
  {
    title: "Supermodels",
    url: "/supermodels",
    icon: Users,
  },
  {
    title: "Scheduler",
    url: "/scheduler",
    icon: Calendar,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Data Sources",
    url: "/datasources",
    icon: Database,
  },
  {
    title: "Workflows",
    url: "/workflows",
    icon: Zap,
  },
];

const settingsItems = [
  {
    title: "Payments",
    url: "/payments",
    icon: CreditCard,
  },
  {
    title: "Security",
    url: "/security",
    icon: Shield,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <Bot className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold">AI Orchestra</h1>
            <p className="text-sm text-muted-foreground">Agent Platform</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="p-4">
          <div className="text-xs text-muted-foreground">
            v1.0.0 - Enterprise Edition
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}