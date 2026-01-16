"use client"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { StatsCards } from "@/components/stats-cards"
import { VMList } from "@/components/vm-list"
import { ResourceCharts } from "@/components/resource-charts"
import { ActivityFeed } from "@/components/activity-feed"

export function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <StatsCards />
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <VMList />
              </div>
              <div className="space-y-6">
                <ResourceCharts />
                <ActivityFeed />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
