export interface AIAgent {
  id: string;
  name: string;
  type: 'CrewAI' | 'LangChain' | 'AutoGen' | 'Vertex' | 'Custom';
  status: 'active' | 'inactive' | 'maintenance' | 'error';
  personality?: {
    traits: string[];
    style: string;
    expertise: string[];
  };
  capabilities: string[];
  performance: {
    accuracy: number;
    responseTime: number;
    engagement: number;
  };
  integrations: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Supermodel {
  id: string;
  name: string;
  avatar: string;
  description: string;
  personality: {
    traits: string[];
    conversationStyle: string;
    expertise: string[];
    background: string;
  };
  agent: AIAgent;
  metrics: {
    totalInteractions: number;
    averageRating: number;
    subscriptions: number;
    revenue: number;
  };
  socialMedia: {
    platform: string;
    handle: string;
    followers: number;
  }[];
  isActive: boolean;
  createdAt: Date;
}

export interface Workflow {
  id: string;
  name: string;
  description: string;
  type: 'content_generation' | 'fan_interaction' | 'data_analysis' | 'scheduling';
  agents: AIAgent[];
  status: 'running' | 'paused' | 'completed' | 'failed';
  trigger: {
    type: 'schedule' | 'event' | 'manual';
    config: any;
  };
  steps: WorkflowStep[];
  metrics: {
    executions: number;
    successRate: number;
    averageRuntime: number;
  };
  createdAt: Date;
}

export interface WorkflowStep {
  id: string;
  name: string;
  type: 'ai_task' | 'data_fetch' | 'content_post' | 'analysis' | 'decision';
  config: any;
  dependencies: string[];
  outputs: string[];
}

export interface PaymentProvider {
  id: string;
  name: 'stripe' | 'alipay' | 'digistore24';
  status: 'active' | 'inactive';
  config: {
    apiKey?: string;
    webhookUrl?: string;
    currency: string;
  };
  metrics: {
    totalRevenue: number;
    transactionCount: number;
    successRate: number;
  };
}

export interface DataSource {
  id: string;
  name: string;
  type: 'api' | 'database' | 'file' | 'realtime';
  provider: 'brave_search' | 'sports_api' | 'social_media' | 'custom';
  endpoint: string;
  status: 'connected' | 'error' | 'pending';
  lastSync: Date;
  config: any;
}

export interface SystemMetrics {
  agents: {
    total: number;
    active: number;
    performance: number;
  };
  interactions: {
    total: number;
    today: number;
    averageRating: number;
  };
  revenue: {
    total: number;
    thisMonth: number;
    growth: number;
  };
  system: {
    uptime: number;
    responseTime: number;
    errorRate: number;
  };
}