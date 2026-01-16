"use client";

import { VMList } from "@/components/vm-list";
import { ResourceCharts } from "@/components/resource-charts";
import { ActivityFeed } from "@/components/activity-feed";

export default function VM() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="mx-auto max-w-7xl space-y-6 p-6 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Gestion des Machines Virtuelles
          </h1>
          <p className="text-gray-400">
            Surveillez et gérez vos VMs depuis cette interface centralisée
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <VMList />
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
