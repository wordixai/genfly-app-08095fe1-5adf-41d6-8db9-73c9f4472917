import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Users, Calendar, TrendingUp, Zap, DollarSign } from 'lucide-react';

const metrics = [
  {
    title: "Active Agents",
    value: "50",
    description: "AI Supermodels online",
    icon: Bot,
    color: "text-blue-600",
  },
  {
    title: "Fan Interactions",
    value: "12.4K",
    description: "Today's conversations",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Scheduled Content",
    value: "247",
    description: "Posts this week",
    icon: Calendar,
    color: "text-purple-600",
  },
  {
    title: "Engagement Rate",
    value: "94.2%",
    description: "+12% from last week",
    icon: TrendingUp,
    color: "text-orange-600",
  },
  {
    title: "Workflows Active",
    value: "18",
    description: "Multi-agent processes",
    icon: Zap,
    color: "text-yellow-600",
  },
  {
    title: "Revenue",
    value: "$47.2K",
    description: "This month",
    icon: DollarSign,
    color: "text-emerald-600",
  },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}