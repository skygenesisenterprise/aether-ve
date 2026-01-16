"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResourceCharts() {
  const cpuData = [65, 59, 80, 81, 56, 55, 67, 72, 78, 63, 67, 70]
  const maxValue = Math.max(...cpuData)

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Utilisation CPU (12h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-end gap-1">
          {cpuData.map((value, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-cyan-500/80 transition-all hover:bg-cyan-500"
              style={{ height: `${(value / maxValue) * 100}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>12h ago</span>
          <span>Now</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4">
          <div>
            <p className="text-xs text-muted-foreground">Moyenne</p>
            <p className="text-lg font-semibold text-foreground">67%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Max</p>
            <p className="text-lg font-semibold text-foreground">81%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Min</p>
            <p className="text-lg font-semibold text-foreground">55%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
