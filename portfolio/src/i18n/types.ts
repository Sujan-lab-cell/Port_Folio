import { portfolioData } from "@/src/data/portfolio";

export type Language = "en" | "ja";

export type PortfolioData = typeof portfolioData;

export interface UIStrings {
  // Navigation & General
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    achievements: string;
    blog: string;
    profiles: string;
    contact: string;
    ctrlK: string;
    quickNavigation: string;
  };
  // Actions
  buttons: {
    downloadResume: string;
    viewResume: string;
    japaneseResume: string;
    viewJapaneseResume: string;
    viewProjects: string;
    contact: string;
    exploreAllProjects: string;
    readCaseStudy: string;
    replay3dIntro: string;
    viewResearchPaper: string;
    githubRepo: string;
    aiInfoRepo: string;
    sendMessage: string;
    sending: string;
    copyEmail: string;
    copied: string;
    viewCertificate: string;
    viewCredly: string;
    viewProject: string;
    readArticle: string;
    viewAll: string;
    clearFilters: string;
    backToBlog: string;
  };
  // Home Page
  home: {
    availableForWork: string;
    featuredWorkEyebrow: string;
    featuredWorkTitle: string;
    aiAssistantTitle: string;
    terminalMode: string;
    terminalPrompt: string;
    assistantPrompts: {
      about: string;
      projects: string;
      skills: string;
      aiProjects: string;
      cvProjects: string;
      resume: string;
    };
    assistantAnswers: Record<string, string>;
  };
  // About Page
  aboutPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    headline: string;
    institutionText: string;
    aboutMeHeading: string;
    aboutMeRole: string;
    aboutMeBio1: string;
    aboutMeBio2: string;
    educationHeading: string;
    degreeTitle: string;
    institution: string;
    gpaLabel: string;
    experienceHeading: string;
    techFocusHeading: string;
    explorationHeading: string;
    careerJourneyHeading: string;
    beyondCodeHeading: string;
    activities: {
      scoutsTitle: string;
      scoutsDesc: string;
      workshopsTitle: string;
      workshopsDesc: string;
      dsaTitle: string;
      dsaDesc: string;
      japaneseTitle: string;
      japaneseDesc: string;
    };
  };
  // Skills Page
  skillsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    totalSkillsLabel: string;
    domainsLabel: string;
    allDomains: string;
    searchPlaceholder: string;
    noSkillsFound: string;
  };
  // Projects Page
  projectsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    allCategories: string;
    searchPlaceholder: string;
    noProjectsFound: string;
    architectureHeading: string;
    resultsHeading: string;
    challengesHeading: string;
    futureHeading: string;
    featuredProjectBadge: string;
  };
  // Experience Page
  experiencePage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    techMethodologies: string;
  };
  // Achievements Page
  achievementsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterAwards: string;
    filterCompetitions: string;
    filterCourses: string;
    filterWorkshops: string;
    filterProfessional: string;
    filterProjects: string;
    filterActivities: string;
    noCredentialsFound: string;
    certificateDetails: string;
    issuedBy: string;
    date: string;
    type: string;
    close: string;
  };
  // Blog Page
  blogPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    featuredArticle: string;
    readTime: string;
    searchPlaceholder: string;
    allCategories: string;
    noArticlesFound: string;
    keyTakeaways: string;
    relatedProject: string;
  };
  // Profiles Page
  profilesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  // Contact Page
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    availableBadge: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formNamePlaceholder: string;
    formEmailPlaceholder: string;
    formMessagePlaceholder: string;
    successMessage: string;
  };
  // Footer
  footer: {
    builtWith: string;
    rights: string;
  };
  // Intro Screen
  introScreen: {
    liveLab: string;
    latency: string;
    badge: string;
    roles: string[];
    highlightBadges: {
      ros2: string;
      automation: string;
      rl: string;
      yolo: string;
      t5: string;
      wgan: string;
      pytorch: string;
    };
    enterPortfolio: string;
    pressEnter: string;
    portfolioSub: string;
    skipIntro: string;
  };
}
