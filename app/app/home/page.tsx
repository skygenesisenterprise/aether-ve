"use client";

import { StatsCards } from "@/components/stats-cards";
import { VMList } from "@/components/vm-list";
import { ResourceCharts } from "@/components/resource-charts";
import { ActivityFeed } from "@/components/activity-feed";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="mx-auto max-w-7xl space-y-6 p-6 pb-12">
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
    </div>
  );
}
