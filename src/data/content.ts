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
  bio: 'Dedicated community builder, advocate, and founder of Women FE Woman. Judith has spent decades connecting marginalized women to life-transforming institutional resources, advocacy networks, and structured community care.',
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
    'Financial Stability Workshop: Navigating Living Costs & Resource Maps',
    'Career Advisory Clinic: Resume Refinements & Interview Mindset',
    'Open Advocacy Forum: Community Resources & Legal Rights',
  ],
  facilitator: FACILITATOR_INFO,
};

export const CORE_PHILOSOPHY = {
  acronym: 'T.E.A.M.',
  fullName: 'Together Each Achieve More',
  quote: 'We experience happiness when we make others happy.',
  attribution: 'Judith Kerr, Founder of Women FE Woman',
  summary:
    'Our foundation rests on the time-tested law of synergetic action: when women unite with shared purpose, what seems insurmountable to one becomes achievable to all.',
};

export const PRIMARY_PILLARS: ObjectivePillar[] = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'Information Sharing & Awareness',
    description:
      'Demystifying complex civic systems and disseminating critical resources directly to community members who need them most.',
    offerings: [
      'Multi-lingual resource toolkits & rights guides',
      'Civic services navigational briefings',
      'Regular community bulletins and workshop alerts',
    ],
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Community Support & Safe Spaces',
    description:
      'Providing non-judgmental, compassionate safe harbors where women can speak candidly, unpack challenges, and be embraced.',
    offerings: [
      'Facilitated monthly listening & empowerment circles',
      'Confidential peer guidance and trauma-informed support',
      'Lifelong intergenerational sisterhood networks',
    ],
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Accessibility & Direct Advocacy',
    description:
      'Standing shoulder-to-shoulder with women to bridge institutional gaps, cut red tape, and demand equitable treatment.',
    offerings: [
      'Direct liaison with provincial and municipal agencies',
      'Housing, healthcare, and immigration case navigation',
      'Dispelling media biases and societal stereotypes',
    ],
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'Financial Literacy & Management',
    description:
      'Equipping women with concrete financial tools, budgeting discipline, debt relief strategies, and pathways to self-reliance.',
    offerings: [
      'Practical monthly budget blueprinting',
      'Credit rebuilding & debt restructuring advisory',
      'Micro-enterprise and emergency savings education',
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'advocacy-referrals',
    slug: 'advocacy-referrals',
    title: 'Community Advocacy & Government Agency Referrals',
    navTitle: 'Advocacy & Referrals',
    shortDescription:
      'Bridging women to vital municipal, provincial, and community institutions with direct casework advocacy.',
    fullDescription:
      'Navigating government bureaucracy, social services, and legal frameworks can be overwhelming and intimidating—especially for newcomers, single mothers, and survivors. Women FE Woman acts as your trusted advocate, ensuring you are treated with dignity, your voice is heard, and you receive the full support you are entitled to.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80',
    quote: 'Advocacy is about turning institutional closed doors into open pathways of empowerment.',
    impactMetrics: [
      { value: '100%', label: 'Confidential Guidance' },
      { value: '40+', label: 'Agency Partner Connections' },
      { value: 'Direct', label: 'Liaison & Form Support' },
    ],
    offerings: [
      'Locating vital local community resources including subsidized childcare, food security, and transitional shelter.',
      'Adequate, verified referrals to authorized legal aid, settlement workers, and crisis counseling centers.',
      'Direct case accompaniment and persistent follow-through with government agencies (Ontario Works, ODSP, Service Canada, CRA).',
      'Confidential support navigation for women navigating family transitions or overcoming abusive environments.',
    ],
    outcomes: [
      'Clear roadmap of your legal rights and available entitlements without bureaucratic confusion.',
      'Reduction in administrative delays through professionally prepared agency submissions.',
      'An empathetic companion by your side during critical institutional appointments and reviews.',
    ],
  },
  {
    id: 'financial-empowerment',
    slug: 'financial-empowerment',
    title: 'Financial Management & Economic Literacy',
    navTitle: 'Financial Empowerment',
    shortDescription:
      'Equipping women with hands-on budgeting skills, debt resolution tools, and sustainable wealth-building habits.',
    fullDescription:
      'Financial independence is the bedrock of long-term freedom and self-worth. Our financial empowerment program breaks down complex money topics into practical, stress-free steps. Whether you are living paycheck-to-paycheck, rebuilding after hardship, or planning for your children’s future, we guide you toward lasting security.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    quote: 'True independence begins when you hold the tools to command your own financial future.',
    impactMetrics: [
      { value: 'Step-by-Step', label: 'Budget Methodologies' },
      { value: 'Zero-Cost', label: 'Workshops & Clinics' },
      { value: '1-on-1', label: 'Expense Tracking Plans' },
    ],
    offerings: [
      'Comprehensive budget planning and expense tracking workshops tailored for fluctuating incomes.',
      'Debt resolution consultations, credit score rebuilding, and negotiated repayment literacy.',
      'Long-term security strategies, emergency fund establishment, and family protection awareness.',
      'Introduction to small business micro-finance, grants, and community credit circles.',
    ],
    outcomes: [
      'Mastery of your household cash flow and elimination of reactive stress.',
      'A structured, actionable timeline to emerge from high-interest debt and rebuild creditworthiness.',
      'Confidence to make informed banking, investment, and savings decisions for yourself and your children.',
    ],
  },
  {
    id: 'career-development',
    slug: 'career-development',
    title: 'Employment, Coaching & Administrative Support',
    navTitle: 'Career & Employment',
    shortDescription:
      'Professional resume completion, mock interview coaching, and administrative support for official applications.',
    fullDescription:
      'Entering or re-entering the workforce requires more than just submitting applications—it requires strategic positioning, confidence, and polished administrative presentation. We partner with you to translate your life and work experiences into compelling resumes, prepare you for interviews, and assist with complex official documentation.',
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80',
    quote: 'Your past experience has undeniable value. We help the world recognize it.',
    impactMetrics: [
      { value: 'Custom', label: 'Targeted Resumes & Letters' },
      { value: 'Live', label: 'Mock Interview Simulations' },
      { value: 'Hands-On', label: 'Application Completion' },
    ],
    offerings: [
      'Resume / CV drafting and overhaul formatted to Canadian corporate, non-profit, and public standards.',
      'Official tailored cover letter writing highlighting transferable leadership and cross-cultural skills.',
      'Job search strategies, targeted application pipelines, and LinkedIn profile optimization.',
      'Simulated mock interviews with personalized feedback on posture, phrasing, and value proposition.',
      'Administrative assistance with formal government documentation, credential recognition, and licenses.',
    ],
    outcomes: [
      'A professional, applicant-tracking-system (ATS) friendly resume that attracts recruiter callbacks.',
      'Unshakable poise and articulate storytelling in high-stakes job interview settings.',
      'Accurately completed administrative documentation submitted without risk of costly rejections.',
    ],
  },
  {
    id: 'leadership-mentorship',
    slug: 'leadership-mentorship',
    title: 'Leadership Training & Women’s Mentorship',
    navTitle: 'Leadership & Mentorship',
    shortDescription:
      'Cultivating women as community catalysts through structured mentorship pairings, seminars, and peer masterminds.',
    fullDescription:
      'Every woman carries intrinsic leadership potential capable of reshaping families, workplaces, and neighborhoods. Our leadership program pairs emerging women with seasoned mentors, hosts thematic masterclasses on public speaking and civic advocacy, and creates an inspiring space to grow your personal influence.',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80',
    quote: 'Leadership is not about holding a title—it is about unlocking greatness in those around you.',
    impactMetrics: [
      { value: '1-to-1', label: 'Curated Mentorship Pairs' },
      { value: 'Monthly', label: 'Masterclasses & Seminars' },
      { value: 'GTA & Beyond', label: 'Connected Sisterhood' },
    ],
    offerings: [
      'Coaching women to discover their unique voice and make powerful contributions as neighborhood leaders.',
      'Structured 1-to-1 mentorship pairing programs matching lived experience with seasoned career mentors.',
      'Regular lectures, seminars, and interactive workshops addressing women’s health, equity, and civic voice.',
      'Cross-generational roundtable discussions exploring cultural preservation and collective advancement.',
    ],
    outcomes: [
      'Expanded professional and social network of empowered, high-achieving women.',
      'Practical leadership skills in conflict resolution, team coordination, and public advocacy.',
      'Elevated self-worth and a profound sense of purpose as an active community catalyst.',
    ],
  },
];

export const ABOUT_CONTENT = {
  missionVision: {
    headline: 'Our Core Mission & Vision',
    quote:
      'Founded on the proven principle that the combined energy of several people focusing on the same problem is many times greater than the sum of individual energies.',
    paragraphs: [
      'Women FE Woman was conceived out of a deep understanding of the systemic challenges faced by marginalized women, immigrant families, and single mothers across our communities. When an individual struggles in isolation, problems can feel insurmountable. But when women gather with mutual respect, shared accountability, and common intention, barriers collapse.',
      'We believe in unconditional dignity, the celebration of lived wisdom, and the transformative strength of collective energy. Our vision is a society where every woman, regardless of her background or economic starting point, has immediate access to the tools, community support, and advocacy needed to flourish independently.',
    ],
  },
  purposeAndMandate: {
    purpose: {
      title: 'Our Purpose',
      content:
        'Serving the tangible goals, desires, and dreams of marginalized women while tirelessly upholding their human rights, emotional wellness, and economic sovereignty.',
      points: [
        'Recognizing the intrinsic self-worth of every woman',
        'Creating safe, non-judgmental platforms for authentic dialogue',
        'Bridging the divide between marginalized communities and civic institutions',
      ],
    },
    mandate: {
      title: 'Our Mandate',
      content:
        'Meeting pressing social and economic needs by strengthening grassroots community foundations, pooled resources, and intergenerational mentorship.',
      points: [
        'Delivering free, accessible direct-impact service programs',
        'Providing confidential advocacy in times of crisis and bureaucratic struggle',
        'Promoting financial fitness and educational advancement across membership',
      ],
    },
  },
};

export const ORGANIZATIONAL_GOALS: OrgGoal[] = [
  {
    id: 'goal-poverty',
    tabLabel: 'Poverty Alleviation',
    title: 'Poverty Alleviation Through Individual & Community Empowerment',
    description:
      'Moving beyond temporary band-aids to build sustainable foundations for long-term economic independence. We equip women with marketable competencies, budgeting tools, and access to living-wage employment.',
    actions: [
      'Structured financial literacy clinics focusing on budgeting, debt relief, and credit restoration',
      'Direct referrals to community resources, emergency food infrastructure, and housing supports',
      'Micro-savings circles and guidance on accessing small business grants and childcare subsidies',
    ],
    vision: 'A resilient community where generational poverty is broken by empowered mothers and sisters.',
  },
  {
    id: 'goal-collective',
    tabLabel: 'Collective Excellence',
    title: 'Fostering Collective Excellence & Multi-Phased Community Initiatives',
    description:
      'Harnessing the power of synergy. By pooling our diverse talents, professions, and networks, we create community initiatives that have lasting, compounding ripple effects across Toronto and beyond.',
    actions: [
      'Monthly assembly circles connecting women across professions, trades, and artistic disciplines',
      'Collaborative neighborhood outreach programs supporting seniors, young mothers, and youth',
      'Skill-exchange hubs where women teach and learn languages, digital skills, and craftmanship',
    ],
    vision: 'Unleashing the collective genius of women to solve our neighborhood’s greatest challenges.',
  },
  {
    id: 'goal-education',
    tabLabel: 'Educational Promotion',
    title: 'Promoting Education Among Membership & Sisters in General',
    description:
      'Knowledge is the greatest equalizer. We champion continuous adult education, credential evaluation for newcomers, university/college access, and specialized vocational certifications.',
    actions: [
      'Assistance with post-secondary applications, OSAP navigation, and scholarship matching',
      'Referrals to language training (ESL/LINC) and adult high-school diploma completion centers',
      'Thematic educational seminars on digital literacy, health sciences, and civic law',
    ],
    vision: 'Lifelong learning that enables every woman to adapt, thrive, and lead in a changing economy.',
  },
  {
    id: 'goal-advocacy',
    tabLabel: 'Charitable Relief & Human Rights',
    title: 'Charitable Relief Coordination & Human Rights Advocacy',
    description:
      'Standing courageously against discrimination, media mischaracterizations, and institutional neglect. We actively dispel stereotypes while providing tangible relief supplies to families in transition.',
    actions: [
      'Direct distribution of essential supplies, clothing drives, and seasonal relief packages',
      'Media literacy campaigns dispelling harmful stereotypes about marginalized and immigrant women',
      'Representation and advocacy before housing tribunals, school boards, and welfare agencies',
    ],
    vision: 'A just society where the human rights and dignity of every sister are unconditionally defended.',
  },
  {
    id: 'goal-multicultural',
    tabLabel: 'Cross-Cultural Understanding',
    title: 'Promoting Cross-Cultural Understanding & Multi-Cultural Resources',
    description:
      'Celebrating the rich cultural tapestry of our community. We build bridges across ethnic, religious, and generational boundaries, ensuring every cultural voice enriches our collective wisdom.',
    actions: [
      'Intercultural celebrations, storytelling nights, and shared culinary traditions',
      'Multi-lingual peer navigation guides for civic, healthcare, and educational institutions',
      'Workshops breaking down cultural barriers and fostering inclusive sisterhood alliances',
    ],
    vision: 'A harmonious, interconnected mosaic where diverse traditions strengthen our unified front.',
  },
];

export const TARGET_GROUP_DATA = {
  demographics: [
    {
      title: 'Women of All Ages & Backgrounds',
      description:
        'From young women entering the workforce to seniors seeking social connection and purpose, our doors are unconditionally open.',
      needs: ['Life stage transitions', 'Intergenerational wisdom sharing', 'Isolation reduction'],
    },
    {
      title: 'New Immigrants & Refugees',
      description:
        'Women building new lives in Canada who need trustworthy guidance, language support, and pathways to professional credential recognition.',
      needs: ['Systemic settlement navigation', 'Community networking', 'Credential validation support'],
    },
    {
      title: 'Single Mothers & Caregivers',
      description:
        'Resilient heads of households balancing childcare, finances, and personal ambitions who require flexible, practical community support.',
      needs: ['Childcare resource referrals', 'Emergency contingency planning', 'Flexible career coaching'],
    },
    {
      title: 'Aspiring Leaders & Changemakers',
      description:
        'Women passionate about giving back, mobilizing neighborhood initiatives, and shaping positive civic policies in Scarborough and the GTA.',
      needs: ['Mentorship pairing', 'Public advocacy skills', 'Leadership development platforms'],
    },
  ],
  benefitsShowcase: [
    {
      id: 'benefit-safe-space',
      category: 'Safe Harbors',
      title: 'A Safe, Authentic Place to Be Heard',
      description:
        'Find genuine emotional support, ask vulnerable questions, and share your deepest aspirations in a strictly confidential, non-judgmental community.',
      highlights: [
        'Zero judgment, 100% confidentiality',
        'Facilitated listening circles led by experienced moderators',
        'Empathetic peers who understand your lived experiences',
      ],
    },
    {
      id: 'benefit-self-actualization',
      category: 'Empowerment',
      title: 'Freedom to Experience Your True Potential',
      description:
        'Step out from societal constraints and rediscover yourself as the confident, capable, and visionary woman you were meant to be.',
      highlights: [
        'Goal setting and personal accountability frameworks',
        'Confidence-building and public speaking practice',
        'Celebration of small and monumental life milestones',
      ],
    },
    {
      id: 'benefit-sisterhood',
      category: 'Connection',
      title: 'Lifelong Friendships & Deep Community',
      description:
        'Build durable friendships in a relaxed, warm atmosphere where sisterhood extends far beyond meetings into everyday life.',
      highlights: [
        'Relaxed community gatherings and tea socials',
        'Intergenerational mentorship networks',
        'A reliable circle of sisters who check in and care',
      ],
    },
    {
      id: 'benefit-tangible-tools',
      category: 'Growth',
      title: 'Tangible Tools for Daily Life & Security',
      description:
        'Walk away from every session with actionable skills—from practical budget tracking to polished interview techniques and civic resource maps.',
      highlights: [
        'Personalized financial worksheets and templates',
        'Hands-on resume reviews and mock interviews',
        'Direct contact links to essential government programs',
      ],
    },
  ],
  matrix: [
    {
      area: 'Community Service Referrals',
      whatWeProvide: 'Direct connections to housing, subsidized childcare, healthcare clinics, and legal aid.',
      whoBenefits: 'Families in transition, newcomers, and individuals facing bureaucratic roadblocks.',
    },
    {
      area: 'Support Overcoming Abuse',
      whatWeProvide: 'Confidential, trauma-informed crisis referrals, safety planning resources, and emotional accompaniment.',
      whoBenefits: 'Survivors rebuilding their independence in a discreet, compassionate harbor.',
    },
    {
      area: 'Financial Literacy & Budgeting',
      whatWeProvide: 'Step-by-step debt management, credit rebuilding, and household cash flow blueprints.',
      whoBenefits: 'Mothers seeking economic stability, small business starters, and debt-burdened individuals.',
    },
    {
      area: 'Career Transition Pathways',
      whatWeProvide: 'ATS-tailored resumes, cover letter completion, interview coaching, and administrative assistance.',
      whoBenefits: 'Job seekers, career changers, and internationally educated professionals.',
    },
  ],
  checklist: [
    'Clear, actionable personal and professional goal setting',
    'Developing confident, articulate public speaking and advocacy voice',
    'Cultivating harmonious life balance between family, work, and self-care',
    'Access to vetted municipal, provincial, and community programs',
    'Establishing emergency personal savings and debt resolution plans',
    'Ongoing 1-on-1 mentorship and accountability with trusted leaders',
  ],
};

export const FAQ_ITEMS = [
  {
    question: 'How do I join community gatherings and programs?',
    answer:
      'You can register online using our contact form, or reach out directly to Judith Kerr by phone at (416) 918-3177 or via email at Judith.kerr@alumni.utoronto.ca. We will send you complete schedule, venue, and secure Zoom link details.',
  },
  {
    question: 'Are Women FE Woman programs free of charge?',
    answer:
      'Yes. Our meetings, advocacy support, educational workshops, and mentorship programs are provided free of cost to ensure accessibility for all women regardless of their financial circumstances.',
  },
  {
    question: 'What if I need confidential assistance regarding family hardship or abuse?',
    answer:
      'Your privacy and safety are sacred. All communications are held in strict confidence. We provide discreet 1-on-1 accompaniment and refer you to specialized, certified crisis resources when appropriate.',
  },
  {
    question: 'Where are meetings held?',
    answer:
      'We operate out of our community hub in Scarborough (Greater Toronto Area) and simultaneously provide secure virtual access (Zoom) so women across Ontario and beyond can participate seamlessly.',
  },
];
