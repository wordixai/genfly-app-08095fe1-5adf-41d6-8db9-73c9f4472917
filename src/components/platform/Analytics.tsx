import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Brain, Activity, Target, Star } from "lucide-react";

export const Analytics = () => {
  // Mock analytics data
  const performanceData = [
    { name: "Mon", interactions: 2400, satisfaction: 4.2, revenue: 1200 },
    { name: "Tue", interactions: 1398, satisfaction: 4.1, revenue: 980 },
    { name: "Wed", interactions: 9800, satisfaction: 4.5, revenue: 2100 },
    { name: "Thu", interactions: 3908, satisfaction: 4.3, revenue: 1800 },
    { name: "Fri", interactions: 4800, satisfaction: 4.6, revenue: 2400 },
    { name: "Sat", interactions: 3800, satisfaction: 4.4, revenue: 2200 },
    { name: "Sun", interactions: 4300, satisfaction: 4.3, revenue: 1900 }
  ];

  const modelDistribution = [
    { name: "Sports Models", value: 15, color: "#3b82f6" },
    { name: "Entertainment", value: 12, color: "#ef4444" },
    { name: "News Models", value: 8, color: "#22c55e" },
    { name: "Fashion Models", value: 10, color: "#f59e0b" },
    { name: "Gaming Models", value: 5, color: "#8b5cf6" }
  ];

  const frameworkComparison = [
    { framework: "CrewAI", consistency: 94, engagement: 87, performance: 91 },
    { framework: "LangChain", consistency: 89, engagement: 92, performance: 88 },
    { framework: "Hybrid", consistency: 97, engagement: 94, performance: 95 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
          <p className="text-muted-foreground">
            Performance metrics across CrewAI and LangChain implementations
          </p>
        </div>
        <Badge variant="secondary">Real-time Data</Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="models">Model Performance</TabsTrigger>
          <TabsTrigger value="frameworks">Framework Analysis</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Interactions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">847,329</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline h-3 w-3 mr-1" />
                  +12.3% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Satisfaction</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.4/5</div>
                <p className="text-xs text-muted-foreground">
                  +0.2 improvement this week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Models</CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47/50</div>
                <p className="text-xs text-muted-foreground">
                  94% uptime across all models
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Health</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.7%</div>
                <p className="text-xs text-muted-foreground">
                  All systems operational
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Interactions</CardTitle>
                <CardDescription>Fan interactions across all models</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="interactions" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Distribution</CardTitle>
                <CardDescription>Distribution of AI models by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={modelDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {modelDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {modelDistribution.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}: {item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="frameworks" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Framework Performance Comparison</CardTitle>
                <CardDescription>CrewAI vs LangChain vs Hybrid implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {frameworkComparison.map((framework, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{framework.framework}</h4>
                        <Badge variant={framework.framework === "Hybrid" ? "default" : "outline"}>
                          {framework.performance}% avg
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Consistency:</span>
                          <span className="ml-1 font-medium">{framework.consistency}%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Engagement:</span>
                          <span className="ml-1 font-medium">{framework.engagement}%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Performance:</span>
                          <span className="ml-1 font-medium">{framework.performance}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sports Data Integration</CardTitle>
                <CardDescription>BraveSearch API performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">API Response Time</span>
                    <Badge variant="outline">142ms avg</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Data Freshness</span>
                    <Badge variant="default">Real-time</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Success Rate</span>
                    <Badge variant="outline">99.2%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Daily API Calls</span>
                    <Badge variant="outline">847,329</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};