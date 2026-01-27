// SEO Configuration and Structured Data

export const siteConfig = {
  name: 'Sree Jagatab',
  title: 'Sree Jagatab | AI Automation Engineer | Cambridgeshire, UK',
  description: 'AI Automation Engineer helping businesses save 5+ hours daily through intelligent automation. £2.1M+ client savings. Expert in Python, GPT Bots, OpenAI, LangChain, Web Scrapers, and Data Engineering. Based in Cambridgeshire, UK. Serving clients worldwide.',
  url: 'https://jagatab.uk',
  ogImage: 'https://jagatab.uk/og-image.jpg',
  email: 'sreejagatab@yahoo.com',
  phone: '+447864880790',
  location: {
    city: 'Wisbech',
    region: 'Cambridgeshire',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  social: {
    github: 'https://github.com/sreejagatab',
    linkedin: 'https://linkedin.com/in/sreejagatab',
    twitter: 'https://x.com/SavingBargain',
    productHunt: 'https://www.producthunt.com/@sreeganesh_jagatab',
  },
  keywords: [
    // Primary keywords
    'AI Automation Engineer',
    'AI Automation Expert UK',
    'Python Developer UK',
    'GPT Bot Developer',
    'OpenAI Developer',
    'LangChain Developer',
    'Chatbot Developer UK',

    // Service keywords
    'AI Chatbot Development',
    'Custom GPT Bots',
    'Web Scraping Services',
    'Data Engineering Services',
    'Business Process Automation',
    'Workflow Automation',
    'AI Integration Services',

    // Location keywords
    'AI Developer Cambridgeshire',
    'Automation Engineer UK',
    'Tech Consultant Cambridge',
    'Freelance AI Developer UK',
    'Remote AI Engineer',

    // Technology keywords
    'Python Automation',
    'Next.js Developer',
    'FastAPI Developer',
    'React Developer UK',
    'TypeScript Expert',
    'PostgreSQL Developer',
    'Redis Expert',
    'Docker Kubernetes',

    // Problem-solving keywords
    'Save Time with AI',
    'Automate Business Processes',
    'Reduce Manual Work',
    'AI Cost Savings',
    'Intelligent Automation Solutions',

    // Niche keywords
    'Distributed Venture Engine',
    'DVE Platform',
    'Revenue Distribution System',
    'Contribution Tracking',
  ],
}

// JSON-LD Structured Data for Person
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.name,
    givenName: 'Sree',
    familyName: 'Jagatab',
    url: siteConfig.url,
    image: 'https://avatars.githubusercontent.com/u/62333948?v=4',
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    jobTitle: 'AI Automation Engineer',
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.productHunt,
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Python Programming',
      'GPT-4',
      'OpenAI',
      'LangChain',
      'Web Development',
      'Data Engineering',
      'Process Automation',
      'Chatbot Development',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Self-taught Developer',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Jagatab Consulting',
      url: siteConfig.url,
    },
  }
}

// JSON-LD Structured Data for WebSite
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#person`,
    },
    inLanguage: 'en-GB',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// JSON-LD Structured Data for Professional Service
export function getProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#business`,
    name: 'Sree Jagatab - AI Automation Services',
    image: 'https://avatars.githubusercontent.com/u/62333948?v=4',
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: 'Professional AI automation services including chatbot development, GPT bots, web scraping, and data engineering. Helping businesses save time and money through intelligent automation.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.6667,
      longitude: 0.1596,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      {
        '@type': 'Place',
        name: 'Worldwide (Remote)',
      },
    ],
    serviceType: [
      'AI Automation',
      'Chatbot Development',
      'GPT Bot Development',
      'Web Scraping',
      'Data Engineering',
      'Process Automation',
      'AI Integration',
    ],
    priceRange: '££-£££',
    openingHours: 'Mo-Fr 08:00-20:00, Sa 09:00-18:00',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    founder: {
      '@id': `${siteConfig.url}/#person`,
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.productHunt,
    ],
  }
}

// JSON-LD Structured Data for FAQPage
export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What AI automation services do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I offer comprehensive AI automation services including custom GPT bot development, AI chatbots, web scraping solutions, data engineering pipelines, workflow automation, and AI integration with existing systems. All solutions are tailored to save businesses time and reduce manual work.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much can I save with AI automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On average, my clients save 5+ hours daily through intelligent automation. I have documented £2.1M+ in total client savings. The exact amount depends on your current processes and automation opportunities.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with clients outside the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, I work with clients worldwide. While I am based in Cambridgeshire, UK, I offer remote services globally. I can also meet face-to-face with clients in the Cambridgeshire area.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies do you specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I specialize in Python, OpenAI/GPT, LangChain, Next.js, FastAPI, PostgreSQL, Redis, Docker, and cloud platforms like AWS and Vercel. I focus on modern, scalable solutions that integrate AI capabilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can you deliver a project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Project timelines vary based on complexity. Simple automations can be delivered within days, while complex systems may take weeks. I guarantee a 24-hour response time for all inquiries and provide clear timelines during consultation.',
        },
      },
    ],
  }
}

// JSON-LD for Software Application (DVE)
export function getDVESchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Distributed Venture Engine (DVE)',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'A trustless platform for tracking contributions with cryptographic evidence and distributing revenue fairly through auditable payout systems.',
    url: 'https://dve-woad.vercel.app/',
    author: {
      '@id': `${siteConfig.url}/#person`,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Cryptographic contribution tracking',
      'Automated revenue distribution',
      'Role-based access control',
      'Real-time analytics',
      'Audit trail system',
    ],
    softwareVersion: '1.0',
    programmingLanguage: ['TypeScript', 'Python'],
    runtimePlatform: ['Next.js', 'FastAPI'],
  }
}

// JSON-LD for BreadcrumbList
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Combine all schemas for the main page
export function getMainPageSchemas() {
  return [
    getPersonSchema(),
    getWebSiteSchema(),
    getProfessionalServiceSchema(),
    getFAQSchema(),
  ]
}
