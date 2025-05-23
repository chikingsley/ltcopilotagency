import { MessageSquare, Target, Users, Shield } from 'lucide-react';
import React from 'react';

export const servicesSectionInfo = {
  heading: "Our Services",
  description: "We offer a comprehensive suite of communication services designed to protect and enhance your reputation. From proactive media strategy to rapid crisis response, our expertise ensures your message resonates effectively, navigating complexities with precision and impact."
};

export interface Capability {
  title: string;
  description: string;
  features: string[];
}

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  capabilities: Capability[];
}

export type Services = {
  [key in 'strategic' | 'political' | 'training' | 'digital']: Service;
}

export const servicesData: Services = {
  strategic: {
    icon: MessageSquare,
    title: "Strategic Communications",
    description: "Comprehensive communications strategy development and execution for organizations at critical junctures.",
    capabilities: [
      {
        title: "Communications Strategy",
        description: "Develop and execute tailored communication strategies that align with organizational objectives.",
        features: [
          "Brand narrative development",
          "Audience segmentation",
          "Market differentiation strategy",
          "Stakeholder mapping",
          "Message architecture"
        ]
      },
      {
        title: "Reputation Management",
        description: "Strategic guidance for organizations looking to establish, rebuild, or enhance their market position.",
        features: [
          "Competitive positioning",
          "Reputation recovery plans",
          "Brand perception analysis",
          "Market sentiment tracking",
          "Strategic messaging framework"
        ]
      }
    ]
  },
  political: {
    icon: Target,
    title: "Political & Campaign",
    description: "Strategic communications and crisis management for political campaigns, parties, and public figures.",
    capabilities: [
      {
        title: "Campaign Strategy",
        description: "Comprehensive communication strategy development for political campaigns at all levels.",
        features: [
          "Message development & testing",
          "Voter outreach strategy",
          "Coalition building",
          "Opposition research",
          "Rapid response systems"
        ]
      },
      {
        title: "Political Crisis Management",
        description: "Rapid response and reputation protection for political figures and organizations.",
        features: [
          "24/7 crisis response",
          "Scandal management",
          "Media relations",
          "Narrative control",
          "Stakeholder communications"
        ]
      }
    ]
  },
  training: {
    icon: Users,
    title: "Executive Training",
    description: "Comprehensive training programs for leaders and communications teams.",
    capabilities: [
      {
        title: "Media Training",
        description: "Prepare executives and spokespeople for media interactions.",
        features: [
          "Interview techniques",
          "Message delivery",
          "Body language coaching",
          "Crisis response training",
          "Press conference preparation"
        ]
      },
      {
        title: "Crisis Simulation",
        description: "Real-world crisis scenarios and response training.",
        features: [
          "Custom scenario development",
          "Team response assessment",
          "Protocol testing",
          "Leadership evaluation",
          "Response optimization"
        ]
      }
    ]
  },
  digital: {
    icon: Shield,
    title: "Digital Reputation",
    description: "Online reputation management and crisis response.",
    capabilities: [
      {
        title: "Digital Crisis Management",
        description: "Rapid response for online reputation threats.",
        features: [
          "Social media monitoring",
          "Online sentiment analysis",
          "Disinformation tracking",
          "Platform policy navigation",
          "Counter-narrative deployment"
        ]
      },
      {
        title: "Online Presence Audit",
        description: "Comprehensive analysis of digital footprint and vulnerabilities.",
        features: [
          "Search engine visibility",
          "Social media profile review",
          "Content performance analysis",
          "Competitor benchmarking",
          "Security vulnerability checks"
        ]
      }
    ]
  }
};
