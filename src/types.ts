export interface Project {
  id: string;
  title: string;
  category: 'cloud' | 'enterprise' | 'mobile' | 'ai';
  categoryLabel: string;
  description: string;
  image: string;
  metric: string;
  metricLabel: string;
  technologies: string[];
  client: string;
  year: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  idealFor: string;
  deliveryTime: string;
  supportLevel: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  metric: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}
