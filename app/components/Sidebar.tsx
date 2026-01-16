"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Server,
  HardDrive,
  Network,
  Activity,
  Settings,
  Terminal,
  Database,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/home", current: true },
  { name: "Machines Virtuelles", icon: Server, href: "/vm", current: false },
  { name: "Stockage", icon: HardDrive, href: "/storage", current: false },
  { name: "Réseau", icon: Network, href: "/network", current: false },
  { name: "Monitoring", icon: Activity, href: "/monitoring", current: false },
  {
    name: "Base de données",
    icon: Database,
    href: "/database",
    current: false,
  },
  { name: "Terminal", icon: Terminal, href: "/terminal", current: false },
  { name: "Sécurité", icon: Shield, href: "/security", current: false },
  { name: "Paramètres", icon: Settings, href: "/settings", current: false },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <aside
        className={cn(
          "relative flex flex-col border-r border-border bg-card transition-all duration-300",
          collapsed ? "w-16" : "w-64",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
                <Server className="h-5 w-5 text-cyan-500" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                Aether VE
              </span>
            </div>
          )}
          {collapsed && (
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
              <Server className="h-5 w-5 text-cyan-500" />
            </div>
          )}
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {navigation.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    item.current
                      ? "bg-cyan-500/10 text-cyan-500"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </a>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right">
                  <p>{item.name}</p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-20 h-6 w-6 rounded-full border border-border bg-card"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>

        <div className="border-t border-border p-4">
          {!collapsed && (
            <div className="rounded-lg bg-cyan-500/5 p-3">
              <p className="text-xs font-medium text-cyan-500">
                Hypervisor Status
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-xs text-muted-foreground">En ligne</span>
              </div>
            </div>
          )}
        </div>
      </aside>
    </TooltipProvider>
  );
}
