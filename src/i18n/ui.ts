export const languages = {
  en: { name: 'English', flag: 'us' },
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = 'en';

const createInitialTranslations = () => {
  return {
    projectsContent: {
      sampleProject: {
        title: 'Predictive Demand Forecasting Platform',
        description:
          'Modernised supply chain planning with a demand forecasting engine deployed across markets.',
        imageAltText:
          'Abstract visualization representing the forecasting platform',
        categoryText: 'AI Platform',
        dateText: 'January 2025',
        detailedDescription:
          'Delivered an end-to-end forecasting workflow that ingests multi-market demand signals, generates probabilistic forecasts, and pushes recommendations into the commercial CRM.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Signal Ingestion & Governance',
            description:
              'Built resilient pipelines to ingest sales, marketing, and external indicators with lineage tracking.',
          },
          contentManagement: {
            title: 'Model Operations at Scale',
            description:
              'Implemented automated retraining, monitoring, and CI/CD to keep models production ready.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Navigated disparate tooling and limited historic data quality to establish a unified analytics foundation.',
        learnings:
          'Set clear governance around data contracts and aligned forecasting metrics with commercial KPIs.',
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
      title: 'YOUR_NAME | Data Scientist & AI Consultant',
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
      pageTitle: 'Home | Roy Dabire - AI & Data Science Professional',
      pageDescription:
        'Strategic generative AI and data science for mining and enterprise operations.',
      heroLabel: 'AI, ML & Data Science',
      heroHeadline: "Hi, I'm Roy Dabire.",
      heroSubheadline:
        'I turn complex data challenges into practical AI solutions.',
      heroSupporting:
        'My work spans generative AI, predictive analytics, and applied machine learning. I focus on building systems that are reliable, scalable, and easy for people to use.',
      heroPrimaryCta: 'View My Projects',
      heroSecondaryCta: 'Read My Writing',
      heroImageAlt: 'Portrait of Roy Dabire',
      impactHeading: "Where I've Made an Impact",
      impactHighlight1:
        'Reduced manual processes by 80% with AI-driven automation',
      impactHighlight2: 'Generated $3M+ in efficiency savings',
      impactHighlight3: 'Impacted 10,000+ employees globally',
      impactHighlight4: 'Educated teams on AI through workshops and training',
      initiativesTitle: 'Project Highlights',
      initiativesSubtitle:
        'Featured initiatives moving from pilot concepts to production-grade impact.',
      initiative1Title: 'Agentic RAG System',
      initiative1Description:
        'Built a retrieval-augmented system that automated manual investigation workflows and enabled faster case reviews for compliance teams.',
      initiative1Link: '/projects/agentic-rag-system',
      initiative2Title: 'Predictive Maintenance',
      initiative2Description:
        'Developed machine learning models to forecast equipment failures, helping operational teams act before breakdowns and optimise maintenance schedules.',
      initiative2Link: '/projects/predictive-maintenance',
      initiative3Title: 'AI Job Design Tools',
      initiative3Description:
        'Created generative AI tools that streamlined job description drafting, supporting HR teams in designing thousands of roles during a large-scale restructure.',
      initiative3Link: '/projects/ai-job-design-tools',
      initiative4Title: 'Safety Risk Detection with NLP',
      initiative4Description:
        'Applied natural language processing to shift logs and reports, uncovering early risk signals and giving leaders better visibility into safety issues.',
      initiative4Link: '/projects/safety-risk-detection-nlp',
      initiativeCtaLabel: 'Learn More',
      aboutTitle: 'About Me',
      aboutSummary:
        "I'm an AI and Data Science professional with practical experience across the full lifecycle of delivering solutions from framing the right problems to developing, deploying, and maintaining them in production with MLOps. Over the years, I've led projects that blend statistical analysis, machine learning, and generative AI to solve complex challenges and deliver measurable outcomes.\n\nBeyond building systems, I enjoy teaching people about AI and helping teams build confidence in applying it responsibly. While much of my background comes from the mining and resources sector, the foundations of my work apply across industries, and I'm passionate about exploring how AI can create value wherever there are data-driven opportunities.",
      aboutCtaLabel: 'View My Resume',
      writingTitle: 'Insights & Writing',
      writingSubtitle:
        'Practical guidance for leaders scaling AI and analytics.',
      writingReadMoreLabel: 'Read More',
      writingEmptyState: 'Writing updates coming soon.',
      contactTitle: 'Interested in working together?',
      contactSubtitle:
        "Let's design the next wave of AI impact for your organisation.",
      contactCtaLabel: 'Start a Conversation',
    },
    blogPage: {
      pageTitle: 'Writing on Data Science & AI Leadership',
      pageDescription:
        'Perspectives on building responsible AI, scaling data teams, and translating analytics into business outcomes.',
      title: 'Writing on Data Science & AI Leadership',
      description:
        'Perspectives on building responsible AI, scaling data teams, and translating analytics into business outcomes.',
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
      title: 'Client Engagements',
      metaTitle: 'Projects | YOUR_NAME - Data Scientist & AI Consultant',
      metaDescription:
        'Explore the transformations YOUR_NAME has delivered across AI, analytics, and data platform engagements.',
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
