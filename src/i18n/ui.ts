import { profile } from '@/data/profile';

export const languages = {
  en: { name: 'English', flag: 'us' },
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = 'en';

const createInitialTranslations = () => {
  return {
    site: {
      title: 'Roy Dabire',
      description: profile.description,
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      resume: 'About me',
      contact: 'Contact',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | Roy Dabire',
      pageDescription: profile.description,
      heroLabel: 'Data & analytics',
      heroHeadline: 'Hi, I’m Roy.',
      heroSubheadline: profile.introduction,
      heroSupporting: profile.work,
      heroPrimaryCta: 'Read latest posts',
      heroSecondaryCta: 'About my work',
      heroImageAlt: 'Portrait of Roy Dabire',
      aboutTitle: 'What I care about',
      aboutSummary: profile.work + '\n\n' + profile.background,
      aboutCtaLabel: 'Grab the resume',
      quickFactsTitle: 'Quick snapshot',
      quickFact1Label: 'Based',
      quickFact1Value: 'Australia.',
      quickFact2Label: 'Toolbox',
      quickFact2Value:
        'Python, SQL, PyTorch, scikit-learn, Databricks, MLflow, Docker, Azure, LangChain, and fast product iteration.',
      quickFact3Label: 'Currently',
      quickFact3Value: profile.role + ' at CBA (since June 2026).',
      quickFact4Label: 'Outside work',
      quickFact4Value: 'Long runs, strategy games, and learning in public.',
      writingTitle: 'Selected writing',
      writingSubtitle:
        'Fresh notes from projects, experiments, and what I am learning along the way.',
      writingReadMoreLabel: 'Open post',
      writingCtaLabel: 'Open full archive',
      writingEmptyState: 'Drafts are in progress. Check back soon!',
      contactTitle: 'Want to collaborate?',
      contactSubtitle:
        'Happy to talk about data, analytics, or something you’re working on.',
      contactCtaLabel: 'Send me a message',
    },
    blogPage: {
      pageTitle: 'Blog | Roy Dabire',
      pageDescription:
        'Notes on data, analytics, machine learning, and things I’m learning.',
      title: 'Blog',
      description: 'Notes & writing.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read note',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search posts...',
      filterByTagButtonLabel: 'Filter tags',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'More notes',
      readMore: 'Read note',
      editOnGithub: 'Edit on GitHub',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact | Roy Dabire',
      pageDescription: 'Get in touch with Roy Dabire.',
      title: "Let's chat",
      description:
        'Happy to talk about data, analytics, or something you’ve read here. The easiest way to reach me is on LinkedIn.',
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder:
        'Share context, current blockers, and what success looks like...',
      calendarTitle: 'Book a call',
      calendarDescription: 'Grab a slot that works for you.',
      calendarButtonLabel: 'Check availability',
      calendarLinkLabel: 'Choose a time',
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
