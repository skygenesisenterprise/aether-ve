"use client"

import { Server, Cpu, MemoryStick, HardDrive, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    name: "VMs Actives",
    value: "12",
    total: "16",
    icon: Server,
    trend: "up",
    change: "+2",
    color: "cyan",
  },
  {
    name: "CPU Utilisé",
    value: "67%",
    total: "32 cores",
    icon: Cpu,
    trend: "up",
    change: "+5%",
    color: "emerald",
  },
  {
    name: "Mémoire",
    value: "48 GB",
    total: "128 GB",
    icon: MemoryStick,
    trend: "down",
    change: "-3%",
    color: "amber",
  },
  {
    name: "Stockage",
    value: "1.2 TB",
    total: "4 TB",
    icon: HardDrive,
    trend: "up",
    change: "+120 GB",
    color: "rose",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${stat.color}-500/10`}>
                <stat.icon className={`h-5 w-5 text-${stat.color}-500`} />
              </div>
              <div
                className={`flex items-center gap-1 text-xs ${
                  stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
                }`}
              >
                {stat.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">
                {stat.name} <span className="text-xs">/ {stat.total}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
