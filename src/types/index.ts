export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  navTitle?: string;
  shortDescription: string;

  fullDescription: string;
  offerings: string[];
  outcomes: string[];
  image: string;
  quote?: string;
  impactMetrics?: { label: string; value: string }[];
}

export interface ObjectivePillar {
  id: string;
  number: string;
  title: string;
  description: string;
  offerings: string[];
}

export interface OrgGoal {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  actions: string[];
  vision: string;
}

export interface TargetDemographic {
  title: string;
  description: string;
  needs: string[];
}

export interface BenefitItem {
  id: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface FacilitatorContact {
  name: string;
  title: string;
  phone: string;
  phoneRaw: string;
  email: string;
  location: string;
  bio: string;
  image: string;
}
