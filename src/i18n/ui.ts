export const languages = {
  en: { name: 'English', flag: 'us' },
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = 'en';

const createInitialTranslations = () => {
  return {
    site: {
      title: 'Roy Dabire | AI, ML & Data Science',
      description:
        'Evidence-driven data science and AI consulting to help leadership teams ship measurable outcomes.',
    },
    nav: {
      home: 'Home',
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
      heroPrimaryCta: 'See my writing',
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
      contactCtaLabel: 'Drop me a message',
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
