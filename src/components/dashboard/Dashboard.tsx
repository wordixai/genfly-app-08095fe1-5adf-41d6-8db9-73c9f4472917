import React from 'react';
import { MetricsGrid } from './MetricsGrid';
import { AgentStatus } from './AgentStatus';
import { RecentActivity } from './RecentActivity';
import { SystemOverview } from './SystemOverview';

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Orchestra Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your AI agents, supermodels, and orchestrate intelligent workflows
        </p>
      </div>
      
      <MetricsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AgentStatus />
        <RecentActivity />
      </div>
      
      <SystemOverview />
    </div>
  );
}