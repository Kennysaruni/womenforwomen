import type {
  ServiceItem,
  ObjectivePillar,
  OrgGoal,
  FacilitatorContact,
} from '../types';

export const FACILITATOR_INFO: FacilitatorContact = {
  name: 'Judith Kerr',
  title: 'Founder & Group Facilitator',
  phone: '(416) 918-3177',
  phoneRaw: '+14169183177',
  email: 'Judith.kerr@alumni.utoronto.ca',
  location: 'Scarborough / Greater Toronto Area & Global Virtual Outreach',
  bio: 'Dedicated community builder, advocate, and founder of Women FE Woman. Judith Kerr has spent decades connecting marginalized women to life-transforming institutional resources, advocacy networks, and structured community care.',
  image: '/judith-portrait.jpg',
};

export const UPCOMING_MEETING = {
  title: 'Group Meeting: Coming up in June',
  monthTag: 'Upcoming Session • June',
  dateString: 'Saturday, June 14, 2025 (Annual Summer Assembly)',
  timeString: '2:00 PM – 4:30 PM EST',
  format: 'Hybrid — In-Person (Scarborough Hub) & Secure Zoom Link',
  agenda: [
    'Opening Circle & Collective Reflection',
    'Financial Stability Workshop: Budgeting Planning & Expense Tracking',
    'Career Advisory Clinic: Resume Refinements, Cover Letters & Mock Interviews',
    'Open Advocacy Forum: Community Resources & Upholding Women’s Rights',
  ],
  facilitator: FACILITATOR_INFO,
};

export const CORE_PHILOSOPHY = {
  acronym: 'T.E.A.M.',
  fullName: 'Together Each Achieve More',
  slogan: 'Some people dream of fulfilment... We make it happen.',
  quote: 'We experience happiness when we make others happy.',
  quoteUppercase: '...WE EXPERIENCE HAPPINESS WHEN WE MAKE OTHERS HAPPY...',
  attribution: 'Judith Kerr, Founder of Women FE Woman',
  summary:
    'Rooted in the proven principle that the combined energy of several people focusing on the same problem multiplies our strength; we believe that when we assist others to realize their dreams and successes, abundance naturally flows back to us.',
};

export const PRIMARY_PILLARS: ObjectivePillar[] = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'Information Sharing and Awareness',
    description:
      'Raising the standard of life through active dissemination of essential community information, circulars, educational articles, and civic awareness.',
    offerings: [
      'Locating community resources to meet pressing individual and family needs',
      'Publishing and distributing informative circulars and educational articles',
      'Dispelling media misconceptions and stereotypes through critical awareness',
    ],
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Community Support',
    description:
      'Fostering togetherness, deep belonging, and mutual encouragement where women can be real, be heard, and grow in a relaxed setting.',
    offerings: [
      'Safe, supportive group gatherings for goal-setting and achieving dreams',
      'Mentoring and networking programs connecting women of similar life experiences',
      'Building strong community foundations and creating lifelong friendships',
    ],
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Accessibility',
    description:
      'Ensuring women have direct access to institutional services, government agency advocacy, letter writing, and legal human rights defense.',
    offerings: [
      'Adequate referrals and casework advocacy to community and governmental agencies',
      'Administrative assistance for letters, resumes, and formal documentation',
      'Courageous advocacy speaking out against human rights violations',
    ],
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'Financial Management',
    description:
      'Providing practical financial planning, budgeting discipline, debt resolution, and expense tracking to build enduring economic independence.',
    offerings: [
      'Comprehensive budgeting planning and continuous expense tracking',
      'Debt resolution, financial fitness, and long-term security advisory',
      'Practical tools and resources to alleviate poverty and achieve self-reliance',
    ],
  },
];

export const ABOUT_CONTENT = {
  missionVision: {
    headline: 'Our Guiding Philosophy',
    quote:
      'Founded on the proven principle that the combined energy of several people focusing on the same problem is many times greater than the sum of the individual energies involved; we seek to empower all women and specifically marginalized women to recognize their own self-worth through self-knowledge both as individuals and as a collective.',
    paragraphs: [
      'Rooted in the philosophy of Together Each Achieve More (T.E.A.M.), we believe there is more than sufficient for everyone. When sisters unite with shared purpose, what seems insurmountable in isolation becomes achievable through collective strength.',
      'Some people dream of fulfilment... We make it happen. At Women FE Woman, we live by the conviction that we experience happiness when we make others happy. We exist to ensure that every woman—regardless of background, economic standing, or past adversity—is surrounded by a committed sisterhood and equipped with the knowledge, dignity, and tools to step into her fullest potential.',
    ],
  },
  purposeAndMandate: {
    purpose: {
      title: 'Purpose',
      content:
        'To provide services, supports, and direction to women to meet their goals, desires, dreams and purposes in life. We aim to empower women to recognize their own self-worth, through self-knowledge both individually and collectively. We are committed to improving and promoting opportunities for women and to ensure that the rights of women in general and marginalized women in particular are upheld.',
      points: [
        'Providing services, supports, and direction to meet personal goals, desires, and dreams',
        'Empowering self-worth through individual and collective self-knowledge',
        'Improving and promoting opportunities for women across all spheres of life',
        'Ensuring that the rights of women in general and marginalized women in particular are upheld',
      ],
    },
    mandate: {
      title: 'Mandate',
      content:
        'To serve the social and economic needs of women in our communities. Through our commitment to strengthen community foundations and enable members to develop and share resources.',
      points: [
        'Serving the immediate social and economic needs of women in our neighborhoods',
        'Strengthening lasting community foundations through collective action',
        'Enabling community members to actively develop, pool, and share vital resources',
      ],
    },
  },
};

export const AUTHENTIC_GOALS_LIST: string[] = [
  'To alleviate poverty by empowering individuals and communities.',
  'To serve our community by fostering togetherness and excellence in our collective pursuits.',
  'To develop a multi-phased and multi-faceted initiative in a collective capacity to build women and to empower the community.',
  'To promote education among the membership, and the sisters in general.',
  'To actively participate in other women\'s groups and support common objectives.',
  'To coordinate charitable relief activities.',
  'Monitor the media and help dispel misconceptions and stereotypes.',
  'Issue information circulars and / or articles.',
  'Speak out against human rights violations.',
  'To promote cross-cultural understanding through educational and multi-cultural resources.',
];

export const AUTHENTIC_OTHER_OBJECTIVES_LIST: string[] = [
  'To assist women to locate resources in the community to meet their needs.',
  'To provide adequate referrals and advocacy to community and other governmental agencies.',
  'To provide administrative assistance for letter writing, resume completion, forms/documents completions, etc.',
  'To provide financial management services, financial planning, debt resolution, budgeting, financial fitness, etc.',
  'To provide training, coaching and resources for women to make powerful contributions as leaders in their communities.',
  'To organize lectures and workshops on women issues.',
  'To provide networking and mentoring program for women.',
  'To provide a place for women where they can be real, be heard, promote themselves, and participate in a way that feels right for them.',
  'To assist women in finding meaning and purpose in their lives through networking and belonging.',
];

export const ORGANIZATIONAL_GOALS: OrgGoal[] = [
  {
    id: 'goal-poverty',
    tabLabel: 'Poverty Alleviation',
    title: 'Alleviating Poverty by Empowering Individuals & Communities',
    description:
      'We work proactively to alleviate poverty through financial management, skill development, and community resource pooling. By establishing debt resolution strategies, budgeting disciplines, and career advancement pipelines, we build sustainable foundations for generational self-reliance.',
    actions: [
      'Financial management services: financial planning, debt resolution, budgeting, and financial fitness',
      'Assisting women to locate resources in the community to meet their immediate and long-term needs',
      'Coordinating charitable relief activities and emergency resource distributions for vulnerable families',
    ],
    vision: 'A thriving community where poverty is overcome through collective knowledge, resource-sharing, and economic self-determination.',
  },
  {
    id: 'goal-collective',
    tabLabel: 'Community & Excellence',
    title: 'Fostering Togetherness, Excellence & Multi-Phased Initiatives',
    description:
      'Serving our community by fostering togetherness and excellence in our collective pursuits. We develop a multi-phased and multi-faceted initiative in a collective capacity to build women and empower the community at large.',
    actions: [
      'Regular assembly gatherings and support circles where women share experiences and collaborate',
      'Actively participating in other women’s groups and supporting shared community objectives',
      'Developing sustainable multi-phased programs that build women’s capacity as leaders and changemakers',
    ],
    vision: 'Together Each Achieve More (T.E.A.M.) — where our combined energy transforms entire neighborhoods.',
  },
  {
    id: 'goal-education',
    tabLabel: 'Education & Culture',
    title: 'Promoting Education & Cross-Cultural Understanding',
    description:
      'Promoting education among our membership and sisters in general, while cultivating cross-cultural understanding through educational and multicultural resources, lectures, and interactive workshops.',
    actions: [
      'Promoting educational advancement, academic pathways, and continuous adult learning',
      'Organizing dynamic lectures, discussions, and workshops focused on women’s issues',
      'Providing multicultural educational resources that celebrate diversity and bridge cultural gaps',
    ],
    vision: 'Lifelong learning and mutual cultural respect that empower women of every background to flourish.',
  },
  {
    id: 'goal-advocacy',
    tabLabel: 'Rights & Media Advocacy',
    title: 'Speaking Out Against Rights Violations & Dispelling Stereotypes',
    description:
      'Upholding the rights of women in general and marginalized women in particular. We monitor the media to dispel misconceptions and stereotypes, issue informative circulars, and courageously defend human dignity.',
    actions: [
      'Monitoring media representations and actively dispelling damaging misconceptions and stereotypes',
      'Speaking out boldly against human rights violations and standing with women in crisis',
      'Issuing regular information circulars, educational bulletins, and advocacy articles',
    ],
    vision: 'An equitable society where every woman’s rights, voice, and human dignity are unconditionally upheld.',
  },
  {
    id: 'goal-mentorship',
    tabLabel: 'Leadership & Belonging',
    title: 'Leadership Coaching, Mentorship & Safe Harbor',
    description:
      'Providing training, coaching, and resources for women to make powerful contributions as leaders in their communities. We maintain a nurturing harbor where women can be real, be heard, promote themselves, and discover meaning through belonging.',
    actions: [
      'Structured networking and mentoring programs pairing emerging leaders with experienced mentors',
      'Administrative assistance for letter writing, professional resume completion, and official forms',
      'A safe, validating place to find voice, discover strengths, and experience genuine belonging',
    ],
    vision: 'Every woman discovering her intrinsic self-worth and leading with confidence in her family and community.',
  },
];

export const TARGET_GROUP_DATA = {
  whatsInItForMe: {
    title: "What's In It For Me?",
    subtitle: 'Tangible personal and collective returns of being part of Women FE Woman',
    points: [
      'A place to find support',
      'A place to ask questions and get answers',
      'An opportunity to brainstorm, to give and to receive information',
      'The freedom to experience yourself as the kind of woman you really want to be',
      'To build strong community and create new friendships in a relaxed setting',
    ],
  },
  benefitsAndOpportunities: {
    title: 'Benefits: This Will Be an Opportunity To:',
    subtitle: 'Concrete pathways to personal, professional, and communal empowerment',
    points: [
      'Join a support group for women that will help you with goal-setting and achieving your goals',
      'Connect with other women who have similar interests, challenges and experience',
      'Contribute to the personal and professional empowerment of other women',
      'Learn more about women in leadership, how you can bring leadership into every part of your life and how you can create a legacy you can be proud of',
      'Create more life balance',
      'Find a safe place to discover your strengths and to find your voice',
    ],
  },
  supportsAndAssistance: [
    {
      title: 'Information and Referral for Community Services',
      description:
        'Guiding women directly to vital municipal, provincial, and grassroots resources tailored to their individual and family needs.',
      details: [
        'Assisting women to locate resources in the community to meet their needs',
        'Adequate referrals and direct advocacy to community and governmental agencies',
      ],
    },
    {
      title: 'Information & Compassionate Support for Overcoming Abuse',
      description:
        'Trauma-informed, confidential guidance, crisis referrals, and accompaniment for women transitioning away from abusive environments.',
      details: [
        'Confidential crisis resources, transitional planning, and safety navigation',
        'Non-judgmental emotional harbor and accompaniment to specialized agencies',
      ],
    },
    {
      title: 'Financial Management, Planning & Fitness',
      description:
        'Comprehensive financial services designed to alleviate poverty and cultivate lasting economic self-reliance.',
      details: [
        'Budgeting Planning: Hands-on cash flow strategies tailored to real living costs',
        'Expense Tracking: Practical tools to command monthly expenses and eliminate stress',
        'Debt resolution, credit rebuilding, and long-term financial planning',
      ],
    },
    {
      title: 'Employment Coaching & Administrative Support',
      description:
        'Equipping women with the tools, materials, and confidence to succeed in the modern job market.',
      details: [
        'Job Search Assistance and interview techniques',
        'Cover letters & Résumes: Professional drafting and ATS optimization',
        'Mock Interviews: Simulated interview sessions with feedback and confidence-building',
        'Administrative assistance for letter writing, forms, and document completions',
      ],
    },
  ],
  demographics: [
    {
      title: 'Women of All Ages & Backgrounds',
      description:
        'From young women setting initial life goals to experienced sisters and seniors, our doors are unconditionally open.',
      needs: ['Life stage transitions', 'Intergenerational wisdom sharing', 'Isolation reduction'],
    },
    {
      title: 'Marginalized & Immigrant Women',
      description:
        'Newcomers, racialized women, and sisters facing systemic barriers who need trusted referrals, credential recognition, and rights advocacy.',
      needs: ['Community resource navigation', 'Advocacy with agencies', 'Cross-cultural understanding'],
    },
    {
      title: 'Single Mothers & Caregivers',
      description:
        'Resilient heads of households balancing family care, tight budgets, and career goals who benefit from practical financial fitness.',
      needs: ['Budgeting planning & expense tracking', 'Community referrals', 'Flexible goal-setting'],
    },
    {
      title: 'Aspiring Leaders & Catalysts',
      description:
        'Women eager to learn more about leadership, make powerful contributions to their communities, and create a proud legacy.',
      needs: ['Mentorship programs', 'Leadership coaching & workshops', 'Community capacity building'],
    },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'community-advocacy-referrals',
    slug: 'advocacy-referrals',
    title: 'Information & Referral for Community Services',
    navTitle: 'Information & Referrals',
    shortDescription:
      'Locating community resources, providing adequate referrals and advocacy to governmental agencies, and supporting women overcoming abuse.',
    fullDescription:
      'Navigating public agencies and community resources can be daunting. Women FE Woman assists women in locating verified community resources, provides adequate referrals and advocacy before community and governmental agencies, and offers confidential information and support for women escaping abusive situations.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80',
    quote: 'To provide services, supports, and direction to women to meet their goals, desires, dreams and purposes in life.',
    impactMetrics: [
      { value: '100%', label: 'Confidentiality' },
      { value: 'Direct', label: 'Agency Referrals' },
      { value: 'Compassionate', label: 'Casework Advocacy' },
    ],
    offerings: [
      'Assisting women to locate resources in the community to meet their pressing needs',
      'Adequate referrals and advocacy to community and governmental agencies',
      'Confidential support and information for women overcoming abusive environments',
      'Coordination of charitable relief activities and emergency community supplies',
    ],
    outcomes: [
      'Direct access to vital community resources without bureaucratic delays',
      'Clear understanding of rights and agency processes with a dedicated advocate by your side',
      'Immediate, confidential support pathways for personal safety and transition',
    ],
  },
  {
    id: 'financial-management',
    slug: 'financial-empowerment',
    title: 'Financial Management: Budgeting Planning & Expense Tracking',
    navTitle: 'Financial Management',
    shortDescription:
      'Practical budgeting planning, expense tracking, debt resolution, and financial fitness services to alleviate poverty and build security.',
    fullDescription:
      'Financial independence is foundational to personal dignity. Our financial management program provides women with step-by-step budgeting planning, structured expense tracking, debt resolution counseling, and overall financial fitness so they can achieve their goals and create lasting family stability.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    quote: 'Alleviating poverty by empowering individuals and communities through financial self-knowledge.',
    impactMetrics: [
      { value: 'Practical', label: 'Budgeting Planning' },
      { value: 'Daily', label: 'Expense Tracking' },
      { value: 'Holistic', label: 'Debt Resolution' },
    ],
    offerings: [
      'Budgeting Planning: Hands-on household and personal budget blueprinting',
      'Expense Tracking: Clear systems to monitor expenditures and reduce unnecessary strain',
      'Financial management services, financial planning, debt resolution, and financial fitness',
      'Strategies to alleviate poverty through informed financial decision-making',
    ],
    outcomes: [
      'Full command over monthly cash flow through structured budgeting planning',
      'Actionable pathways to resolve debt and establish emergency savings funds',
      'Restored confidence, peace of mind, and financial self-sufficiency',
    ],
  },
  {
    id: 'employment-administrative-coaching',
    slug: 'career-development',
    title: 'Employment Coaching, Resumes & Administrative Assistance',
    navTitle: 'Employment & Resumes',
    shortDescription:
      'Job search assistance, interview techniques, cover letters & resumes, mock interviews, and administrative letter-writing support.',
    fullDescription:
      'Securing fulfilling employment requires effective presentation and proven technique. We provide personalized job search assistance, tailored cover letters, ATS-formatted resumes, and realistic mock interviews with constructive coaching. In addition, we assist with administrative letter writing, form completion, and official documentation.',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80',
    quote: 'Some people dream of fulfilment... We make it happen.',
    impactMetrics: [
      { value: 'Tailored', label: 'Resumes & Letters' },
      { value: 'Realistic', label: 'Mock Interviews' },
      { value: 'Step-by-Step', label: 'Job Search Strategy' },
    ],
    offerings: [
      'Job Search Assistance and modern interview techniques',
      'Professional cover letters & ATS-compliant resumes completion',
      'Interactive mock interviews with constructive feedback to build unshakable confidence',
      'Administrative assistance for letter writing, resume completion, and official forms/documents',
    ],
    outcomes: [
      'A polished, competitive resume and cover letter ready for prospective employers',
      'Confident, articulate interview performance backed by mock interview practice',
      'Accurately completed administrative documentation submitted without delay',
    ],
  },
  {
    id: 'women-in-leadership-mentorship',
    slug: 'leadership-mentorship',
    title: 'Women in Leadership, Networking & Mentoring Program',
    navTitle: 'Leadership & Mentoring',
    shortDescription:
      'Training, coaching and resources for women as community leaders, networking and mentoring, and lectures on women’s issues.',
    fullDescription:
      'Every woman has the capacity to lead and make powerful contributions to her community. Our leadership and mentoring program offers training, coaching, and resources for women to bring leadership into every part of their lives, create a lasting legacy, build sisterhood through networking, and participate in enriching lectures and workshops.',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80',
    quote: 'Together Each Achieve More — creating a legacy you can be proud of.',
    impactMetrics: [
      { value: '1-on-1', label: 'Mentorship Program' },
      { value: 'Community', label: 'Lectures & Workshops' },
      { value: 'Safe', label: 'Place to Be Real' },
    ],
    offerings: [
      'Training, coaching and resources for women to make powerful contributions as leaders in their communities',
      'Structured networking and mentoring program for women',
      'Lectures and workshops addressing critical women’s issues and cross-cultural understanding',
      'A safe place for women where they can be real, be heard, promote themselves, and participate',
      'Assisting women in finding meaning and purpose in their lives through networking and belonging',
    ],
    outcomes: [
      'Strong leadership competencies applicable to personal, family, and community realms',
      'A lifelong network of supportive mentors, peers, and sisters',
      'A profound sense of purpose, self-worth, and empowerment',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How do I join Women FE Woman gatherings and programs?',
    answer:
      'You can register online using our contact form, or reach out directly to Judith Kerr by phone at (416) 918-3177 or via email at Judith.kerr@alumni.utoronto.ca. We will share schedule details for our in-person sessions in Scarborough and secure virtual Zoom sessions.',
  },
  {
    question: 'Are Women FE Woman programs free of charge?',
    answer:
      'Yes. Our community support circles, advocacy assistance, educational workshops, budgeting clinics, and mentorship programs are provided free of cost to ensure accessibility for all women.',
  },
  {
    question: 'What if I need confidential assistance regarding abuse or family hardship?',
    answer:
      'Your privacy, safety, and dignity are our utmost priority. All inquiries are held in strict confidence. We provide direct accompaniment, safe listening, and immediate referrals to verified community crisis resources.',
  },
  {
    question: 'Where are meetings and workshops held?',
    answer:
      'We operate out of our community hub in Scarborough (Greater Toronto Area) and host hybrid sessions via Zoom, allowing sisters across the region and beyond to participate comfortably.',
  },
];
