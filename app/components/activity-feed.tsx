"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type Server, AlertTriangle, CheckCircle, Info } from "lucide-react"

type ActivityType = "success" | "warning" | "error" | "info"

interface Activity {
  id: string
  type: ActivityType
  message: string
  time: string
}

const activities: Activity[] = [
  { id: "1", type: "success", message: "VM web-server-01 démarrée", time: "Il y a 2 min" },
  { id: "2", type: "warning", message: "Utilisation RAM élevée sur db-master", time: "Il y a 15 min" },
  { id: "3", type: "error", message: "Échec de démarrage monitoring", time: "Il y a 1h" },
  { id: "4", type: "info", message: "Snapshot créé pour dev-environment", time: "Il y a 2h" },
  { id: "5", type: "success", message: "Migration vm-legacy terminée", time: "Il y a 3h" },
]

const typeConfig: Record<ActivityType, { icon: typeof Server; color: string; bgColor: string }> = {
  success: { icon: CheckCircle, color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
  warning: { icon: AlertTriangle, color: "text-amber-500", bgColor: "bg-amber-500/10" },
  error: { icon: AlertTriangle, color: "text-rose-500", bgColor: "bg-rose-500/10" },
  info: { icon: Info, color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
}

export function ActivityFeed() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Activité Récente</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {activities.map((activity) => {
            const config = typeConfig[activity.type]
            return (
              <div key={activity.id} className="flex items-start gap-3 p-4">
                <div className={`rounded-full p-1.5 ${config.bgColor}`}>
                  <config.icon className={`h-3.5 w-3.5 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
