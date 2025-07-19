import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Search, Filter, Star, Users, Brain, Zap } from "lucide-react";

export const ModelGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Mock data for 50 AI supermodels
  const models = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `AI Model ${i + 1}`,
    category: ["Sports", "Entertainment", "News", "Fashion", "Gaming"][Math.floor(Math.random() * 5)],
    personality: ["Enthusiastic", "Professional", "Friendly", "Witty", "Analytical"][Math.floor(Math.random() * 5)],
    rating: 4.2 + Math.random() * 0.8,
    interactions: Math.floor(Math.random() * 10000) + 1000,
    status: Math.random() > 0.2 ? "active" : "inactive",
    framework: Math.random() > 0.5 ? "CrewAI" : "LangChain",
    avatar: `https://images.unsplash.com/photo-${1500000000000 + i}?w=100&h=100&fit=crop&crop=face`,
    consistency: 85 + Math.floor(Math.random() * 15),
    engagement: 70 + Math.floor(Math.random() * 30)
  }));

  const filteredModels = models.filter(model => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || model.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-green-500" : "bg-gray-500";
  };

  const getFrameworkIcon = (framework: string) => {
    return framework === "CrewAI" ? <Users className="h-4 w-4" /> : <Brain className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">AI Model Gallery</h2>
          <p className="text-muted-foreground">
            Manage your 50 AI supermodels with personality consistency
          </p>
        </div>
        <Button>
          <Zap className="h-4 w-4 mr-2" />
          Deploy New Model
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-40">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="sports">Sports</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
            <SelectItem value="news">News</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="gaming">Gaming</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredModels.map((model) => (
          <Card key={model.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(model.status)}`} />
                  <Badge variant="outline">{model.framework}</Badge>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs">{model.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={model.avatar} />
                  <AvatarFallback>{model.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                  <CardDescription>{model.category}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Personality:</span>
                <span className="font-medium">{model.personality}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Consistency</span>
                  <span>{model.consistency}%</span>
                </div>
                <Progress value={model.consistency} className="h-1" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Engagement</span>
                  <span>{model.engagement}%</span>
                </div>
                <Progress value={model.engagement} className="h-1" />
              </div>

              <div className="flex items-center justify-between text-sm pt-2">
                <div className="flex items-center space-x-1">
                  {getFrameworkIcon(model.framework)}
                  <span className="text-xs text-muted-foreground">{model.framework}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {model.interactions.toLocaleString()} interactions
                </span>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button size="sm" className="flex-1">Configure</Button>
                <Button size="sm" variant="outline" className="flex-1">Analytics</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredModels.length === 0 && (
        <div className="text-center py-12">
          <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No models found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};