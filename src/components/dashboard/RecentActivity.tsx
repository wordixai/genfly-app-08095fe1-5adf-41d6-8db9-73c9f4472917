import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Bot, Calendar, DollarSign, Users, Zap } from 'lucide-react';

const activities = [
  {
    icon: Bot,
    title: "New agent deployment",
    description: "Sophia AI v2.1 deployed successfully",
    time: "2 minutes ago",
    type: "deployment",
  },
  {
    icon: Users,
    title: "High engagement detected",
    description: "Luna Digital: 89% increase in interactions",
    time: "15 minutes ago",
    type: "alert",
  },
  {
    icon: Calendar,
    title: "Content scheduled",
    description: "52 posts scheduled for next week",
    time: "1 hour ago",
    type: "schedule",
  },
  {
    icon: DollarSign,
    title: "Payment processed",
    description: "$2,340 from premium subscriptions",
    time: "2 hours ago",
    type: "payment",
  },
  {
    icon: Zap,
    title: "Workflow completed",
    description: "Sports data aggregation pipeline finished",
    time: "3 hours ago",
    type: "workflow",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index}>
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <activity.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {activity.type}
              </Badge>
            </div>
            {index < activities.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}