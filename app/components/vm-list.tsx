"use client"

import { useState } from "react"
import { Play, Square, RotateCcw, MoreVertical, Terminal, Copy, Trash2, Pause } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

type VMStatus = "running" | "stopped" | "paused" | "error"

interface VM {
  id: string
  name: string
  os: string
  status: VMStatus
  cpu: number
  ram: number
  ip: string
}

const vms: VM[] = [
  { id: "1", name: "web-server-01", os: "Ubuntu 22.04", status: "running", cpu: 45, ram: 62, ip: "192.168.1.10" },
  { id: "2", name: "db-master", os: "Debian 12", status: "running", cpu: 78, ram: 85, ip: "192.168.1.11" },
  { id: "3", name: "dev-environment", os: "Fedora 39", status: "paused", cpu: 0, ram: 30, ip: "192.168.1.12" },
  { id: "4", name: "backup-server", os: "Rocky Linux 9", status: "stopped", cpu: 0, ram: 0, ip: "192.168.1.13" },
  { id: "5", name: "api-gateway", os: "Alpine 3.19", status: "running", cpu: 23, ram: 41, ip: "192.168.1.14" },
  { id: "6", name: "monitoring", os: "Ubuntu 22.04", status: "error", cpu: 0, ram: 0, ip: "192.168.1.15" },
]

const statusConfig: Record<VMStatus, { label: string; color: string; bgColor: string }> = {
  running: { label: "En cours", color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
  stopped: { label: "Arrêté", color: "text-muted-foreground", bgColor: "bg-muted" },
  paused: { label: "Pause", color: "text-amber-500", bgColor: "bg-amber-500/10" },
  error: { label: "Erreur", color: "text-rose-500", bgColor: "bg-rose-500/10" },
}

export function VMList() {
  const [selectedVMs, setSelectedVMs] = useState<string[]>([])

  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Machines Virtuelles</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{vms.length} VMs</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {vms.map((vm) => (
            <div key={vm.id} className="flex items-center justify-between p-4 transition-colors hover:bg-accent/50">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted font-mono text-xs font-medium">
                    {vm.os.split(" ")[0].slice(0, 2).toUpperCase()}
                  </div>
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card ${
                      vm.status === "running"
                        ? "bg-emerald-500"
                        : vm.status === "paused"
                          ? "bg-amber-500"
                          : vm.status === "error"
                            ? "bg-rose-500"
                            : "bg-muted-foreground"
                    }`}
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{vm.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {vm.os} • {vm.ip}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {vm.status === "running" && (
                  <div className="hidden items-center gap-4 md:flex">
                    <div className="w-24">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">CPU</span>
                        <span className="font-medium">{vm.cpu}%</span>
                      </div>
                      <Progress value={vm.cpu} className="mt-1 h-1.5" />
                    </div>
                    <div className="w-24">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">RAM</span>
                        <span className="font-medium">{vm.ram}%</span>
                      </div>
                      <Progress value={vm.ram} className="mt-1 h-1.5" />
                    </div>
                  </div>
                )}

                <Badge className={`${statusConfig[vm.status].bgColor} ${statusConfig[vm.status].color} border-0`}>
                  {statusConfig[vm.status].label}
                </Badge>

                <div className="flex items-center gap-1">
                  {vm.status === "running" ? (
                    <>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pause className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Square className="h-4 w-4" />
                      </Button>
                    </>
                  ) : vm.status === "paused" ? (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Play className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Play className="h-4 w-4" />
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Terminal className="mr-2 h-4 w-4" />
                        Ouvrir Console
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Créer Snapshot
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
