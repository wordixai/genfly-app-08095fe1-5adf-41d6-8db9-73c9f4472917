import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Play, Pause, Settings, Users, Brain, Zap, Activity } from "lucide-react";

export const AgentOrchestrator = () => {
  const [orchestrating, setOrchestrating] = useState(false);
  const [selectedCrew, setSelectedCrew] = useState("sports-crew");

  const crews = [
    {
      id: "sports-crew",
      name: "Sports Analytics Crew",
      description: "Real-time sports data analysis and fan engagement",
      agents: 8,
      status: "active",
      framework: "LangChain + BraveSearch"
    },
    {
      id: "personality-crew", 
      name: "Personality Consistency Crew",
      description: "Maintains character consistency across all 50 AI models",
      agents: 12,
      status: "active",
      framework: "CrewAI"
    },
    {
      id: "content-crew",
      name: "Scheduled Content Crew", 
      description: "Automated content generation and scheduling",
      agents: 6,
      status: "running",
      framework: "CrewAI"
    },
    {
      id: "interaction-crew",
      name: "Fan Interaction Crew",
      description: "Memorable fan interactions and engagement",
      agents: 10,
      status: "active",
      framework: "LangChain"
    },
    {
      id: "analytics-crew",
      name: "Performance Analytics Crew",
      description: "Cross-platform performance monitoring",
      agents: 5,
      status: "monitoring",
      framework: "Hybrid"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "running": return "bg-blue-500"; 
      case "monitoring": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Agent Orchestra</h2>
          <p className="text-muted-foreground">
            Orchestrate CrewAI and LangChain agents for optimal performance
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            onClick={() => setOrchestrating(!orchestrating)}
            variant={orchestrating ? "destructive" : "default"}
          >
            {orchestrating ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Stop Orchestra
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Start Orchestra
              </>
            )}
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configuration
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Crews</CardTitle>
              <CardDescription>
                Manage your AI agent crews across different frameworks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {crews.map((crew) => (
                <div 
                  key={crew.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedCrew === crew.id ? "border-blue-500 bg-blue-50" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedCrew(crew.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(crew.status)}`} />
                      <h3 className="font-semibold">{crew.name}</h3>
                      <Badge variant="outline">{crew.framework}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{crew.agents} agents</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{crew.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Orchestra Performance</CardTitle>
              <CardDescription>
                Real-time metrics across all agent crews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <Label className="text-sm font-medium">CPU Usage</Label>
                  <Progress value={67} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-1">67% across all crews</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Memory Usage</Label>
                  <Progress value={42} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-1">42% of allocated memory</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">API Calls/min</Label>
                  <Progress value={78} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-1">1,847 calls in last minute</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Success Rate</Label>
                  <Progress value={96} className="mt-2" />
                  <p className="text-xs text-muted-foreground mt-1">96.3% success rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="outline">
                <Brain className="h-4 w-4 mr-2" />
                Deploy New Crew
              </Button>
              <Button className="w-full" variant="outline">
                <Zap className="h-4 w-4 mr-2" />
                Scale Resources
              </Button>
              <Button className="w-full" variant="outline">
                <Activity className="h-4 w-4 mr-2" />
                View Logs
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Crew Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Framework</Label>
                <Select defaultValue="hybrid">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crewai">CrewAI</SelectItem>
                    <SelectItem value="langchain">LangChain</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Agent Count</Label>
                <Input type="number" placeholder="8" />
              </div>

              <div className="space-y-2">
                <Label>Priority</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="auto-scale" />
                <Label htmlFor="auto-scale">Auto-scaling</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="monitoring" defaultChecked />
                <Label htmlFor="monitoring">Real-time monitoring</Label>
              </div>

              <Button className="w-full">Save Configuration</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};