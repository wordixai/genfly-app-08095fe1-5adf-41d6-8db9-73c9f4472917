import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CreditCard, DollarSign, Users, TrendingUp, Globe, Shield, Settings } from "lucide-react";

export const PaymentIntegration = () => {
  const [stripeConnected, setStripeConnected] = useState(true);
  const [alipayConnected, setAlipayConnected] = useState(true);
  const [digistoreConnected, setDigistoreConnected] = useState(true);

  const paymentMethods = [
    {
      name: "Stripe",
      logo: "💳",
      status: stripeConnected,
      description: "Credit cards, digital wallets",
      revenue: "$24,847",
      percentage: 45
    },
    {
      name: "Alipay",
      logo: "🇨🇳", 
      status: alipayConnected,
      description: "Popular in Asian markets",
      revenue: "$18,329",
      percentage: 33
    },
    {
      name: "DigiStore24",
      logo: "🛒",
      status: digistoreConnected,
      description: "Digital product marketplace",
      revenue: "$12,156",
      percentage: 22
    }
  ];

  const subscriptionPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      features: ["5 AI Models", "1,000 interactions/month", "Basic Analytics"],
      subscribers: 1247
    },
    {
      name: "Professional", 
      price: "$99",
      period: "month",
      features: ["25 AI Models", "50,000 interactions/month", "Advanced Analytics", "Priority Support"],
      subscribers: 843,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299", 
      period: "month",
      features: ["50 AI Models", "Unlimited interactions", "Custom Integrations", "Dedicated Support"],
      subscribers: 156
    }
  ];

  const recentTransactions = [
    { id: "T001", user: "John Doe", amount: "$99.00", method: "Stripe", status: "completed", date: "2 mins ago" },
    { id: "T002", user: "李小明", amount: "$29.00", method: "Alipay", status: "completed", date: "5 mins ago" },
    { id: "T003", user: "Sarah Wilson", amount: "$299.00", method: "DigiStore", status: "pending", date: "8 mins ago" },
    { id: "T004", user: "Mike Johnson", amount: "$99.00", method: "Stripe", status: "completed", date: "12 mins ago" },
    { id: "T005", user: "Anna Schmidt", amount: "$29.00", method: "Stripe", status: "completed", date: "15 mins ago" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Payment Integration</h2>
          <p className="text-muted-foreground">
            DigiStore24, Stripe, and Alipay integration for global payments
          </p>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Payment Settings
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$55,332</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="inline h-3 w-3 mr-1" />
                  +18.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,246</div>
                <p className="text-xs text-muted-foreground">
                  +156 new this month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Global Reach</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">
                  Countries with active users
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.7%</div>
                <p className="text-xs text-muted-foreground">
                  Payment processing success
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods Performance</CardTitle>
                <CardDescription>Revenue breakdown by payment provider</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{method.logo}</span>
                        <div>
                          <h4 className="font-medium">{method.name}</h4>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{method.revenue}</div>
                        <div className="text-sm text-muted-foreground">{method.percentage}%</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${method.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest payment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div>
                        <div className="font-medium">{transaction.user}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.method} • {transaction.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{transaction.amount}</div>
                        <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="methods" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{method.logo}</span>
                      <CardTitle>{method.name}</CardTitle>
                    </div>
                    <Badge variant={method.status ? "default" : "secondary"}>
                      {method.status ? "Connected" : "Disconnected"}
                    </Badge>
                  </div>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>API Configuration</Label>
                    <Input type="password" placeholder="API Key" />
                    <Input type="password" placeholder="Secret Key" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={method.status} 
                      onCheckedChange={() => {
                        if (method.name === "Stripe") setStripeConnected(!stripeConnected);
                        if (method.name === "Alipay") setAlipayConnected(!alipayConnected);
                        if (method.name === "DigiStore24") setDigistoreConnected(!digistoreConnected);
                      }}
                    />
                    <Label>Enable {method.name}</Label>
                  </div>

                  <Button className="w-full" variant={method.status ? "outline" : "default"}>
                    {method.status ? "Reconfigure" : "Connect"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan, index) => (
              <Card key={index} className={plan.popular ? "ring-2 ring-blue-500" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.popular && <Badge>Most Popular</Badge>}
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-center">
                      <div className="text-lg font-semibold">{plan.subscribers}</div>
                      <div className="text-sm text-muted-foreground">Active subscribers</div>
                    </div>
                  </div>

                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Edit Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};