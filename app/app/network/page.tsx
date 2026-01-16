"use client";

import { StatsCards } from "@/components/stats-cards";
import { ResourceCharts } from "@/components/resource-charts";
import { ActivityFeed } from "@/components/activity-feed";

export default function Network() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="mx-auto max-w-7xl space-y-6 p-6 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Gestion Réseau</h1>
          <p className="text-gray-400">
            Surveillez et configurez votre infrastructure réseau
          </p>
        </div>

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <ResourceCharts />
          </div>
          <div className="space-y-6">
            <ActivityFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
