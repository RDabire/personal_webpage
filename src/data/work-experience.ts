export interface WorkExperience {
  id: string;
  period: string;
  role: string;
  company: string;
  shortName: string;
  context?: string;
  summary: string;
  highlights: Array<{ title: string; detail: string }>;
  skills: string[];
  techStack: string[];
  stackLabel?: string;
}

export const workHistory: WorkExperience[] = [
  {
    id: 'cba',
    period: 'Jun 2026–present',
    role: 'Senior Analyst — Advanced Analytics (Fraud)',
    company: 'Commonwealth Bank of Australia',
    shortName: 'CBA',
    summary:
      'Working on fraud and scam detection, balancing customer protection with customer experience and the operational impact of controls.',
    highlights: [
      {
        title: 'Tactical detection & BAU',
        detail:
          'Managing day-to-day analytical work to develop, refine, and maintain fraud and scam detection rules in live systems. Responding to emerging threats while balancing customer protection, customer friction, and operational workload.',
      },
      {
        title: 'Fraud trends & detection strategy',
        detail:
          'Investigating fraud and scam trends across a broad range of data sources to identify gaps in existing controls and develop more effective detection strategies. Connecting analytical findings with the wider risk and business context to guide priorities.',
      },
      {
        title: 'Machine learning for detection',
        detail:
          'Building classical machine learning models to strengthen rule-based detection. Translating model outputs into signals that improve how rules identify suspicious activity, supported by reproducible training, evaluation, and experiment tracking.',
      },
    ],
    skills: [
      'Fraud & scam detection',
      'Detection strategy',
      'Fraud trend analysis',
      'Classical machine learning',
      'Analytics engineering',
      'Stakeholder engagement',
    ],
    techStack: ['Python', 'SQL', 'Amazon SageMaker', 'MLflow', 'Power BI'],
  },
  {
    id: 'fortescue-ml',
    // End month omitted because the updated career record flags overlapping dates.
    period: 'Dec 2025–2026',
    role: 'Machine Learning Engineer — Contractor, AI Delivery',
    company: 'Fortescue',
    shortName: 'Fortescue / ML',
    summary:
      'Lead development and sustainment of a production ML product spanning 15 models across three mine sites, with responsibility for performance, engineering quality, and operational reliability.',
    highlights: [
      {
        title: 'Production ownership',
        detail:
          'Sustained a fleet of five models per site, investigated production issues, and worked with subject-matter experts to keep model behaviour aligned with the physical processes being modelled.',
      },
      {
        title: 'Model performance & improvement',
        detail:
          'Reviewed and improved model performance across the fleet, aligning modelling approaches with operational knowledge and strengthening confidence in production outputs.',
      },
      {
        title: 'MLOps & continuity',
        detail:
          'Strengthened the engineering practices supporting model training, deployment, and monitoring. Established a roadmap for ongoing sustainment and MLOps improvements to support reliable delivery and technical continuity.',
      },
    ],
    skills: [
      'Production ML ownership',
      'Model validation',
      'MLOps',
      'CI/CD',
      'Operational troubleshooting',
      'SME collaboration',
      'Technical planning',
    ],
    techStack: [
      'Python',
      'SQL',
      'Amazon SageMaker',
      'Snowflake',
      'AWS S3',
      'AWS Lambda',
      'GitHub Actions',
      'Kedro',
    ],
  },
  {
    id: 'newmont',
    period: 'Oct 2023–Dec 2025',
    role: 'Data Scientist — Generative AI / AI & ML',
    company: 'Newcrest → Newmont',
    shortName: 'Newmont',
    context: 'Global AI & ML / Digital',
    summary:
      'Built enterprise AI applications and automation across legal case management, HR, organisation design, and compliance. The work extended from retrieval and application architecture through authentication, deployment, and business adoption.',
    highlights: [
      {
        title: 'Enterprise AI assistant',
        detail:
          'Developed a legal case-management assistant with hybrid vector and keyword retrieval, specialised employee-name search, and routing, query rewriting, retrieval, and response-generation components. Implemented an API layer, authentication, and structured logging.',
      },
      {
        title: 'HR & organisation design',
        detail:
          'Built job-design tooling supporting more than 3,000 roles. A role-profile generation workflow reduced processing time from roughly an hour to approximately 30 seconds per role, with structured Excel, Word, and PDF outputs.',
      },
      {
        title: 'Workflow integration',
        detail:
          'Connected AI-generated outputs into existing Microsoft workflows using Power Apps, Power Automate, SharePoint, and Power BI, supporting repeatable processing and enterprise use.',
      },
      {
        title: 'Review & compliance',
        detail:
          'Developed NLP risk-detection and agentic retrieval workflows. AI-assisted review work reduced review effort by more than 80%, while compliance automation reduced turnaround time by approximately 95%.',
      },
      {
        title: 'Technical influence',
        detail:
          'Contributed to responsible AI governance, workshops, mentoring, and onboarding. Worked with stakeholders to question proposed solutions and define approaches that addressed the underlying business need.',
      },
    ],
    skills: [
      'AI solution architecture',
      'Hybrid retrieval & RAG',
      'Agentic workflows',
      'API development',
      'Responsible AI',
      'Technical mentoring',
      'Stakeholder alignment',
    ],
    techStack: [
      'Python',
      'SQL',
      'FastAPI',
      'Databricks',
      'Azure OpenAI',
      'Azure AI Search',
      'Azure App Service',
      'Azure Functions',
      'Azure Blob / Table Storage',
      'Docker',
      'Microsoft Power Platform',
      'SharePoint',
      'Power BI',
    ],
  },
  {
    id: 'newcrest',
    period: 'Jan 2022–Oct 2023',
    role: 'Data Scientist — Global IT Digital',
    company: 'Newcrest Mining',
    shortName: 'Newcrest',
    summary:
      'Applied modelling and statistical analysis to equipment reliability, mineral processing, and safety, working closely with engineers and operational teams.',
    highlights: [
      {
        title: 'Predictive maintenance',
        detail:
          'Developed analytics and models to identify equipment problems and improvement opportunities. This work identified more than $3 million in potential savings.',
      },
      {
        title: 'Process soft sensors',
        detail:
          'Worked on mineral processing empirical models, including collaboration with JKMRC at the University of Queensland, and on crusher-gap estimation. Used process data to infer physical variables that were difficult to measure continuously.',
      },
      {
        title: 'Production constraints',
        detail:
          'Developed ore-tonnes prediction and crusher bottleneck analytics, using Theory of Constraints to help operations understand where production was being limited.',
      },
      {
        title: 'Safety analysis',
        detail:
          'Analysed safety data for patterns and risk factors to inform management decisions on mitigation and training.',
      },
    ],
    skills: [
      'Industrial machine learning',
      'Time-series analysis',
      'Predictive maintenance',
      'Soft sensors',
      'Statistical modelling',
      'Process optimisation',
      'Operational dashboards',
    ],
    // Standard Python libraries inferred from the modelling work; confirm exact usage.
    techStack: ['Python', 'SQL', 'pandas', 'NumPy', 'scikit-learn', 'Power BI'],
  },
  {
    id: 'early-careers',
    period: '2021–early 2022',
    role: 'Early Careers Data Science',
    company: 'Fortescue · CAPS Australia',
    shortName: 'Early careers',
    summary:
      'Built a foundation in applied data science across business and industrial environments, combining analytical work with practical tools, automation, and stakeholder engagement.',
    highlights: [
      {
        title: 'Applied analytics',
        detail:
          'Used data analysis, predictive modelling, and forecasting to support business decisions. Developed an understanding of data quality, interpretation, and the operational context behind analytical results.',
      },
      {
        title: 'Tools & automation',
        detail:
          'Built business applications and automated reporting workflows, translating requirements into practical tools that reduced manual effort and supported everyday operations.',
      },
      {
        title: 'Business & operational understanding',
        detail:
          'Worked with business stakeholders and technical teams to understand their needs, communicate findings, and connect analytical work with how decisions are made in practice.',
      },
    ],
    skills: [
      'Predictive modelling',
      'KPI forecasting',
      'Workflow automation',
      'Requirements gathering',
      'Application delivery',
      'Technical data organisation',
      'Stakeholder engagement',
    ],
    // Python/pandas and Power Automate are inferred from forecasting and workflow automation.
    techStack: [
      'Python',
      'SQL',
      'pandas',
      'Microsoft Power Apps',
      'Microsoft Power Automate',
      'Power BI',
    ],
  },
  {
    id: 'boq',
    period: '2019–2020',
    role: 'Customer Connect Representative',
    company: 'Bank of Queensland',
    shortName: 'BOQ',
    summary:
      'Supported banking customers in a high-volume contact environment, resolving account and product issues within regulatory and compliance requirements.',
    highlights: [
      {
        title: 'Customer outcomes',
        detail:
          'Achieved multiple months of 100% customer satisfaction while handling complex and sensitive customer issues.',
      },
      {
        title: 'Regulated advice',
        detail:
          'Accredited to provide general financial-product advice. Built a working understanding of banking products, customer needs, risk, and compliance boundaries.',
      },
    ],
    skills: [
      'Customer issue resolution',
      'Financial-product knowledge',
      'Risk & compliance awareness',
      'Sensitive communication',
      'High-volume service delivery',
    ],
    stackLabel: 'Tools & environment',
    techStack: [
      'Banking account & customer-service systems',
      'Customer-service platforms',
    ],
  },
];
