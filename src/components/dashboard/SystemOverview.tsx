import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Database, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Shield,
  CreditCard,
  Globe
} from 'lucide-react';

const systemComponents = [
  {
    name: "CrewAI Engine",
    status: "operational",
    usage: 78,
    description: "Personality consistency framework",
    icon: Brain,
  },
  {
    name: "LangChain Hub",
    status: "operational", 
    usage: 65,
    description: "Live sports data & BraveSearch",
    icon: Database,
  },
  {
    name: "AI Orchestrator",
    status: "operational",
    usage: 84,
    description: "Multi-agent coordination",
    icon: Cpu,
  },
  {
    name: "Storage Cluster",
    status: "operational",
    usage: 45,
    description: "Vector databases & memory",
    icon: HardDrive,
  },
  {
    name: "API Gateway",
    status: "operational",
    usage: 58,
    description: "External integrations",
    icon: Wifi,
  },
  {
    name: "Security Layer",
    status: "operational",
    usage: 32,
    description: "Authentication & encryption",
    icon: Shield,
  },
  {
    name: "Payment Engine",
    status: "operational",
    usage: 23,
    description: "Stripe, Alipay, DigiStore24",
    icon: CreditCard,
  },
  {
    name: "Global CDN",
    status: "operational",
    usage: 67,
    description: "Content delivery network",
    icon: Globe,
  },
];

export function SystemOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemComponents.map((component, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <component.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{component.name}</span>
                </div>
                <Badge 
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  {component.status}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Usage</span>
                  <span>{component.usage}%</span>
                </div>
                <Progress value={component.usage} className="h-1" />
              </div>
              
              <p className="text-xs text-muted-foreground">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}