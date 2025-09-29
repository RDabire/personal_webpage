export const languages = {
  en: { name: 'English', flag: 'us' },
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = 'en';

const createInitialTranslations = () => {
  return {
    projectsContent: {
      agenticRagSystem: {
        title: 'Agentic RAG System',
        description:
          'Automated compliance investigations with retrieval-augmented workflows that respond in minutes, not hours.',
        imageAltText: 'Diagram of an AI agent retrieving compliance documents',
        categoryText: 'AI Automation',
        dateText: 'April 2024',
        detailedDescription:
          'Designed and implemented an agentic retrieval-augmented generation platform that assembles case dossiers, drafts responses, and surfaces the highest risk findings for reviewers. The system integrates with compliance tooling, applies policy guardrails, and auditable traces for regulated environments.',
        keyFeatures: {
          automatedInvestigations: {
            title: 'Automated investigations',
            description:
              'Multi-agent workflows retrieve policies, summarise evidence, and assemble draft responses to cut review time by 80%.',
          },
          governanceReady: {
            title: 'Governance ready',
            description:
              'Applied safety filters, escalation paths, and decision logs to meet compliance and responsible AI requirements.',
          },
        },
        galleryImages: {},
        challenges:
          'Balancing automation gains with the need for transparent, auditable outputs that risk teams could trust.',
        learnings:
          'Embedding reviewers early in the design loop ensured adoption and shaped the product roadmap.',
      },
      predictiveMaintenance: {
        title: 'Predictive Maintenance',
        description:
          'Forecasted equipment failures and optimised maintenance schedules across critical mining assets.',
        imageAltText:
          'Visual of mining equipment with predictive dashboards overlayed',
        categoryText: 'Applied AI',
        dateText: 'September 2023',
        detailedDescription:
          'Partnered with maintenance and operations teams to build machine learning models that predict failures for haul trucks, crushers, and critical plant assets. Combined time-series sensor data with work order history to anticipate breakdowns and plan interventions with minimal disruption.',
        keyFeatures: {
          failurePrediction: {
            title: 'Failure prediction',
            description:
              'Gradient boosted models and survival analysis techniques identified early signals of equipment failure.',
          },
          maintenanceOptimisation: {
            title: 'Maintenance optimisation',
            description:
              'Scenario planning dashboards balanced maintenance windows, production targets, and spare parts constraints.',
          },
        },
        galleryImages: {},
        challenges:
          'Integrating disparate telemetry sources and aligning predictions with how planners schedule field crews.',
        learnings:
          'Co-designing visuals with planners translated complex outputs into actionable recommendations.',
      },
      aiJobDesignTools: {
        title: 'AI Job Design Tools',
        description:
          'Scaled job description authoring during a global restructure with responsible generative AI assistants.',
        imageAltText: 'Illustration of generative AI assisting HR teams',
        categoryText: 'Talent Transformation',
        dateText: 'February 2023',
        detailedDescription:
          'Built a suite of generative AI aides that translate competency frameworks into tailored job descriptions. Automated boilerplate drafting, highlighted required approvals, and captured feedback to continuously improve guidance for HR partners.',
        keyFeatures: {
          rapidAuthoring: {
            title: 'Rapid authoring',
            description:
              'Generated first drafts in seconds so HR could focus on nuance, policy alignment, and stakeholder feedback.',
          },
          governedTemplates: {
            title: 'Governed templates',
            description:
              'Embedded guardrails, language guidelines, and approval checkpoints to ensure consistency at scale.',
          },
        },
        galleryImages: {},
        challenges:
          'Ensuring every suggestion reflected legal, cultural, and policy nuances across 10+ countries.',
        learnings:
          'Feedback capture loops kept the system aligned with rapidly evolving organisational requirements.',
      },
      safetyRiskDetectionNlp: {
        title: 'Safety Risk Detection with NLP',
        description:
          'Applied natural language processing to uncover leading indicators of safety incidents from shift logs and reports.',
        imageAltText:
          'Abstract representation of text analytics surfacing safety alerts',
        categoryText: 'Operational Risk',
        dateText: 'June 2022',
        detailedDescription:
          'Developed NLP pipelines that ingest daily shift notes, incident logs, and maintenance records to surface emerging risk themes. Delivered dashboards and alerts that helped leaders prioritise interventions before incidents escalated.',
        keyFeatures: {
          riskSignals: {
            title: 'Leading risk signals',
            description:
              'Topic modelling and entity extraction highlighted hazardous conditions and repeated near-miss patterns.',
          },
          proactiveInsights: {
            title: 'Proactive insights',
            description:
              'Integrated alerts into operational rhythms so supervisors could respond before safety thresholds were breached.',
          },
        },
        galleryImages: {},
        challenges:
          'Normalising unstructured narratives captured across sites, crews, and formats.',
        learnings:
          'Pairing qualitative reviewers with the models improved trust and actionability of AI-generated insights.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Machine Learning Strategy',
        description:
          'Designing measurable AI programmes aligned to business objectives and regulatory constraints.',
      },
      backendDevelopment: {
        title: 'Data Platform Architecture',
        description:
          'Building reliable data ecosystems covering ingestion, transformation, governance, and discovery.',
      },
      uiUxDesign: {
        title: 'Applied AI & Analytics',
        description:
          'Deploying predictive, prescriptive, and generative solutions that ship to production and stay there.',
      },
      devOps: {
        title: 'MLOps & Lifecycle Management',
        description:
          'Operationalising models with observability, automation, and cross-functional guardrails.',
      },
    },
    site: {
      title: 'Roy Dabire | AI, ML & Data Science',
      description:
        'Evidence-driven data science and AI consulting to help leadership teams ship measurable outcomes.',
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Writing',
      resume: 'Resume',
      contact: 'Contact',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Roy Dabire',
      pageDescription:
        'Personal site of Roy Dabire — AI and data science practitioner sharing projects, notes, and ways to collaborate.',
      heroLabel: 'Roy Dabire',
      heroHeadline: "Hi, I'm Roy.",
      heroSubheadline:
        'I help teams take ideas for AI and data science and turn them into working systems.',
      heroSupporting:
        'My best work happens when operators, engineers, and domain experts are in the same room. I connect the dots, try things out, and make sure what we build holds up in practice.',
      heroPrimaryCta: 'See my work',
      heroSecondaryCta: 'See my resume',
      heroImageAlt: 'Portrait of Roy Dabire',
      aboutTitle: 'A little about me',
      aboutSummary:
        'I’m an AI and data science practitioner with experience across the whole lifecycle of delivering solutions, from framing the right questions through to building models, deploying them into production, and managing them with MLOps. I’ve spent much of my career at the intersection of analytics, product, and applied machine learning, helping teams move from experimentation to systems they can trust.\n\nWhat I enjoy most is working closely with domain experts, engineers, and operators to test ideas quickly and turn them into tools that make a difference. I care deeply about responsible adoption of AI and often share what I’ve learned through workshops, mentoring, and writing.',
      aboutCtaLabel: 'Grab the resume',
      quickFactsTitle: 'Quick notes',
      quickFact1Label: 'Based',
      quickFact1Value: 'Australia.',
      quickFact2Label: 'Toolbox',
      quickFact2Value:
        'Python, SQL, PyTorch, scikit-learn, Hugging Face, LangChain, FastAPI,  Azure ecosystem, Databricks, Docker, MLflow, Power BI, and Streamlit.',
      quickFact3Label: 'Currently',
      quickFact3Value:
        'Working in a high-performing AI team at a global mining organisation, delivering AI solutions that support operations around the world.',
      quickFact4Label: 'Outside work',
      quickFact4Value:
        'I enjoy long runs, a good poker game, and exploring options trading strategies.',
      writingTitle: 'Latest writing',
      writingSubtitle: 'Sharing what I learn about building and using AI.',
      writingReadMoreLabel: 'Open post',
      writingCtaLabel: 'Browse the archive',
      writingEmptyState: 'Drafts are in progress. Check back soon!',
      contactTitle: "Let's chat",
      contactSubtitle:
        "Say hello if you're spinning up an AI project, want a second set of eyes on strategy, or just feel like swapping stories.",
      contactCtaLabel: 'Drop me a line',
    },
    blogPage: {
      pageTitle: 'Notes in Practice',
      pageDescription:
        'What I’ve learned (and keep learning) about AI, data science, and making analytics useful.',
      title: 'Notes in Practice',
      description:
        'What I’ve learned (and keep learning) about AI, data science, and making analytics useful.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
      editOnGithub: 'Edit on GitHub',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact',
      pageDescription:
        'Schedule a working session or request advisory support on your next data or AI initiative.',
      title: 'Partner With Me',
      description:
        "Whether you need roadmap validation, fractional leadership, or hands-on delivery, I'd love to hear about it.",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: "Share a bit about the challenge you're tackling...",
      calendarTitle: 'Schedule a Consultation',
      calendarDescription:
        'Prefer to talk live? Book a time to discuss scope, timelines, and outcomes.',
      calendarButtonLabel: 'Check availability',
      calendarLinkLabel: 'Open calendar',
      calendarPlaceHolder:
        'Calendar integration coming soon - use the form in the meantime.',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Work',
      metaTitle: 'Projects | Roy Dabire - AI, ML & Data Science',
      metaDescription:
        'Explore the transformations Roy Dabire has delivered across AI, analytics, and data platform engagements.',
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  } as const;
};

export const ui = {
  en: createInitialTranslations(),
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
