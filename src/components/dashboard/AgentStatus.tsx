import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const agents = [
  {
    name: "Sophia AI",
    type: "CrewAI Personality",
    status: "active",
    performance: 95,
    interactions: 142,
    specialty: "Lifestyle & Fitness",
  },
  {
    name: "Luna Digital",
    type: "LangChain Sports",
    status: "active",
    performance: 87,
    interactions: 89,
    specialty: "Sports Analytics",
  },
  {
    name: "Aria Virtual",
    type: "CrewAI Personality",
    status: "maintenance",
    performance: 0,
    interactions: 0,
    specialty: "Fashion & Beauty",
  },
  {
    name: "Nova Intelligence",
    type: "Multi-Agent",
    status: "active",
    performance: 92,
    interactions: 203,
    specialty: "Entertainment",
  },
  {
    name: "Echo Assistant",
    type: "LangChain Live",
    status: "active",
    performance: 78,
    interactions: 67,
    specialty: "Real-time Events",
  },
];

export function AgentStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Agent Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {agents.map((agent, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">{agent.name}</p>
                <p className="text-xs text-muted-foreground">{agent.specialty}</p>
              </div>
              <div className="text-right space-y-1">
                <Badge 
                  variant={agent.status === 'active' ? 'default' : 'secondary'}
                  className={agent.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                >
                  {agent.status}
                </Badge>
                <p className="text-xs text-muted-foreground">{agent.type}</p>
              </div>
            </div>
            
            {agent.status === 'active' && (
              <>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Performance</span>
                    <span>{agent.performance}%</span>
                  </div>
                  <Progress value={agent.performance} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    {agent.interactions} interactions today
                  </div>
                </div>
              </>
            )}
            
            {index < agents.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}