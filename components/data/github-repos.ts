export interface GitHubRepo {
  name: string
  description: string
  githubUrl: string
  liveUrl?: string
  category: string
}

export const githubRepos: GitHubRepo[] = [
  // AI & Multi-Agent Systems
  {
    name: "Distributed Venture Engine (DVE)",
    description: "A platform for managing distributed ventures with trustless contribution tracking and auditable payout trails.",
    githubUrl: "https://github.com/sreejagatab/Distributed-Venture-Engine-DVE-",
    liveUrl: "https://dve-woad.vercel.app",
    category: "AI & Automation",
  },
  {
    name: "AI Civilization",
    description: "A Self-Governing Multi-Agent System with 10 Irreducible Agents.",
    githubUrl: "https://github.com/sreejagatab/AI-Civilization-demo",
    category: "AI & Automation",
  },
  {
    name: "AI Civ TestUniverse",
    description: "Universal AI-Civilization Testing Framework.",
    githubUrl: "https://github.com/sreejagatab/AI-Civ-TestUniverse",
    category: "AI & Automation",
  },
  {
    name: "AI Civ LLM Core",
    description: "LLM Control Plane with Governance.",
    githubUrl: "https://github.com/sreejagatab/AI-Civ-LLM-Core",
    category: "AI & Automation",
  },
  {
    name: "AI Civ CodeForge",
    description: "AI-Powered GitHub PR Factory.",
    githubUrl: "https://github.com/sreejagatab/AI-Civ-CodeForge",
    category: "AI & Automation",
  },
  {
    name: "Sankalpa",
    description: "Production-ready, enterprise-grade multi-agent AI platform for autonomous software development.",
    githubUrl: "https://github.com/sreejagatab/Sankalpa",
    category: "AI & Automation",
  },
  {
    name: "Agent Village",
    description: "Production-grade Multi-Agent Orchestration System.",
    githubUrl: "https://github.com/sreejagatab/Agent-Village",
    category: "AI & Automation",
  },
  {
    name: "Personal AI Office",
    description: "Your AI-Powered Consultancy Assistant.",
    githubUrl: "https://github.com/sreejagatab/Personal-AI-Office-demo",
    liveUrl: "https://personal-ai-office.vercel.app",
    category: "AI & Automation",
  },
  {
    name: "AI Operations Hub",
    description: "Central SaaS Platform for Orchestrating AI Microservices.",
    githubUrl: "https://github.com/sreejagatab/AI-Operations-Hub",
    category: "AI & Automation",
  },
  {
    name: "AI Powered Blog Automation",
    description: "Enterprise-grade AI-powered blog automation system that generates SEO-optimized content with images and publishes to Webflow CMS.",
    githubUrl: "https://github.com/sreejagatab/AI-Powered-Blog-Automation-System-demo",
    category: "AI & Automation",
  },
  {
    name: "Secure Graph RAG Governance",
    description: "A production-ready platform for safely using LLMs over internal knowledge with provable governance, audit trails, and safety guardrails.",
    githubUrl: "https://github.com/sreejagatab/secure-graph-rag-governance-platform",
    category: "AI & Automation",
  },

  // Voice & Communication
  {
    name: "VoiceFlow Pro",
    description: "Intelligent voice agent that automates complex business workflows with natural conversation, using AssemblyAI Universal-Streaming.",
    githubUrl: "https://github.com/sreejagatab/VoiceFlow-Pro",
    liveUrl: "https://voice-flow-pro.vercel.app",
    category: "Voice & Communication",
  },
  {
    name: "Medical Voice Agent",
    description: "Enterprise-grade AI-powered medical assistant with advanced voice capabilities using AssemblyAI and LiveKit.",
    githubUrl: "https://github.com/sreejagatab/Medical-Voice-Agent-demo",
    liveUrl: "https://medical-voice-agent-demo.vercel.app",
    category: "Voice & Communication",
  },
  {
    name: "Voice Command Gaming Interface",
    description: "Voice command gaming interface with AI-powered optimization, multi-game mode support, and sub-300ms latency.",
    githubUrl: "https://github.com/sreejagatab/voice-command-gaming-interface-demo",
    liveUrl: "https://voice-command-gaming-interface-demo.vercel.app",
    category: "Voice & Communication",
  },

  // SaaS Platforms
  {
    name: "Webinar Pro",
    description: "Comprehensive enterprise platform combining webinar management, workflow automation, and business intelligence.",
    githubUrl: "https://github.com/sreejagatab/Webinar-Pro-demo",
    liveUrl: "https://webinar-pro.vercel.app",
    category: "SaaS Platforms",
  },
  {
    name: "RedisFlow",
    description: "World's fastest production-ready feature store built on Redis Stack.",
    githubUrl: "https://github.com/sreejagatab/RedisFlow",
    liveUrl: "https://redis-flow.vercel.app",
    category: "SaaS Platforms",
  },
  {
    name: "Redis Analytics Platform",
    description: "Enterprise Social Media Analytics Platform Powered by Redis Stack.",
    githubUrl: "https://github.com/sreejagatab/Redis-Analytics-Platform",
    liveUrl: "https://redis-analytics-platform.vercel.app",
    category: "SaaS Platforms",
  },
  {
    name: "Universal Blog Platform",
    description: "Universal Blog Platform for Content Creators.",
    githubUrl: "https://github.com/sreejagatab/blogplatform-demo",
    liveUrl: "https://universal-blog-platform.vercel.app",
    category: "SaaS Platforms",
  },
  {
    name: "GNewsroom",
    description: "AI-Powered Global News Platform with multi-language support, real-time analytics, and Storyblok CMS.",
    githubUrl: "https://github.com/sreejagatab/GNewsroom-demo",
    category: "SaaS Platforms",
  },
  {
    name: "CodeBridge",
    description: "Bridging the Gap Between Code and Community.",
    githubUrl: "https://github.com/sreejagatab/codebridge-demo",
    category: "SaaS Platforms",
  },
  {
    name: "Customer Service Platform",
    description: "Enterprise-Scale AI Customer Service Platform with Multi-Tenant SaaS Architecture.",
    githubUrl: "https://github.com/sreejagatab/customerservice-demo",
    category: "SaaS Platforms",
  },

  // Healthcare & Medical
  {
    name: "HealPro AI",
    description: "Advanced Healthcare AI Platform - Revolutionizing patient care through intelligent diagnostics and personalized recommendations.",
    githubUrl: "https://github.com/sreejagatab/HealPro-AI-demo",
    liveUrl: "https://heal-pro-ai.vercel.app",
    category: "Healthcare",
  },
  {
    name: "Typeform to PDF",
    description: "Automation system for generating individualized PDF reports for neurodevelopmental diagnostic clinic assessments.",
    githubUrl: "https://github.com/sreejagatab/typeform2pdf-demo",
    category: "Healthcare",
  },

  // Finance & Business
  {
    name: "Financial Modeling Platform",
    description: "Comprehensive SaaS platform for financial modeling, valuation analysis, and stakeholder communication.",
    githubUrl: "https://github.com/sreejagatab/Financial-Modeling-Platform",
    category: "Finance & Business",
  },
  {
    name: "Search Fund Automation",
    description: "Comprehensive automation infrastructure for industrializing search fund operations, including prospect sourcing and outreach management.",
    githubUrl: "https://github.com/sreejagatab/Search-Fund-Automation-System-demo",
    category: "Finance & Business",
  },
  {
    name: "Affiliate Marketing Platform",
    description: "Production-ready affiliate marketing platform with trackable links, performance monitoring, and conversion analytics.",
    githubUrl: "https://github.com/sreejagatab/Affiliate-Marketing-Web-Application-demo",
    category: "Finance & Business",
  },
  {
    name: "PMCIE",
    description: "Prediction Markets Collective Intelligence Engine - Analyze when to trust markets vs polls.",
    githubUrl: "https://github.com/sreejagatab/pmcie",
    category: "Finance & Business",
  },
  {
    name: "CryptoFolio",
    description: "Cryptocurrency portfolio management and tracking.",
    githubUrl: "https://github.com/sreejagatab/CryptoFolio",
    category: "Finance & Business",
  },

  // Tools & Utilities
  {
    name: "AI FlashForge Suite",
    description: "Ultimate 3D printing software for FlashForge Creator Pro 2 with AI-powered model analysis and smart settings optimization.",
    githubUrl: "https://github.com/sreejagatab/AI-FlashForge-Suite",
    category: "Tools & Utilities",
  },
  {
    name: "Vehicle Lookup System",
    description: "Search for vehicles by VIN, make, model, or use advanced filters.",
    githubUrl: "https://github.com/sreejagatab/Vehicle-Lookup-System-demo",
    liveUrl: "https://vehicle-lookup-system.vercel.app",
    category: "Tools & Utilities",
  },
  {
    name: "Video Processing Platform",
    description: "Universal Video Scraper & AI Analysis Platform.",
    githubUrl: "https://github.com/sreejagatab/videoprocessing-demo",
    liveUrl: "https://videoprocessing.vercel.app",
    category: "Tools & Utilities",
  },
  {
    name: "PDF Extract AI",
    description: "Comprehensive AI-powered PDF data extraction solution built with FastAPI, React, and modern ML technologies.",
    githubUrl: "https://github.com/sreejagatab/PDF-Extract-AI-demo",
    category: "Tools & Utilities",
  },
  {
    name: "Plan Tool",
    description: "Comprehensive, professional audiovisual planning and quoting solution for event planners and AV companies.",
    githubUrl: "https://github.com/sreejagatab/plantool-demo",
    liveUrl: "https://plantool-sreeganeshs-projects.vercel.app",
    category: "Tools & Utilities",
  },
  {
    name: "Equipment Inspections",
    description: "Real-time dashboard for tracking equipment inspection status, integrated with D4H Team Manager API.",
    githubUrl: "https://github.com/sreejagatab/Equipment-Inspections",
    category: "Tools & Utilities",
  },
  {
    name: "BuildPro Construction Manager",
    description: "Construction project management platform.",
    githubUrl: "https://github.com/sreejagatab/BuildPro-ConstructionManager-demo",
    liveUrl: "https://build-pro-construction-manager.vercel.app",
    category: "Tools & Utilities",
  },
  {
    name: "AI Auto Assist",
    description: "AI-Powered Automotive Assistant.",
    githubUrl: "https://github.com/sreejagatab/AIAuto-Assist-demo",
    liveUrl: "https://ai-auto-assist.vercel.app",
    category: "Tools & Utilities",
  },
  {
    name: "AI Tools Directory",
    description: "Sophisticated, full-stack web application for discovering, exploring, and managing AI tools.",
    githubUrl: "https://github.com/sreejagatab/Ai-Tools-demo",
    liveUrl: "https://ai-tools-sreeganeshs-projects.vercel.app",
    category: "Tools & Utilities",
  },
  {
    name: "Amazon Q Auto",
    description: "Amazon Q Developer CLI Automation Plan.",
    githubUrl: "https://github.com/sreejagatab/amazonQauto-demo",
    category: "Tools & Utilities",
  },

  // E-Commerce & Retail
  {
    name: "E-Commerce Platform",
    description: "Full-featured e-commerce platform.",
    githubUrl: "https://github.com/sreejagatab/E-Commerce-Platform",
    category: "E-Commerce",
  },
  {
    name: "Christmas NFT Marketplace",
    description: "Full-stack MERN application with Web3/blockchain integration for NFT marketplace.",
    githubUrl: "https://github.com/sreejagatab/Christmas-Website-with-NFT-Marketplace",
    category: "E-Commerce",
  },

  // Education & Sports
  {
    name: "School Management System",
    description: "Comprehensive school management system.",
    githubUrl: "https://github.com/sreejagatab/School-Management-System",
    category: "Education & Sports",
  },
  {
    name: "Polish School Wisbech",
    description: "Website for Polish School in Wisbech.",
    githubUrl: "https://github.com/sreejagatab/polishschool",
    liveUrl: "https://polishschool-sreeganeshs-projects.vercel.app",
    category: "Education & Sports",
  },
  {
    name: "Basketball Recruiting",
    description: "The Basketball Recruiting Platform.",
    githubUrl: "https://github.com/sreejagatab/basketball-recruiting-demo",
    liveUrl: "https://basketball-recruiting.vercel.app",
    category: "Education & Sports",
  },
  {
    name: "Badminton Club",
    description: "Badminton club website and management.",
    githubUrl: "https://github.com/sreejagatab/badminton-demo",
    liveUrl: "https://badminton-rust.vercel.app",
    category: "Education & Sports",
  },

  // Real Estate & Property
  {
    name: "Real Estate Platform",
    description: "Comprehensive, production-ready real estate platform with advanced property management and agent profiles.",
    githubUrl: "https://github.com/sreejagatab/Real-Estate-Website-Platform-demo",
    category: "Real Estate",
  },

  // DevOps & Infrastructure
  {
    name: "RHEL9",
    description: "Red Hat Enterprise Linux 9 configurations and scripts.",
    githubUrl: "https://github.com/sreejagatab/RHEL9",
    category: "DevOps",
  },
  {
    name: "Grok Claude",
    description: "Autonomous AI agent that generates wealth through creative strategies while documenting its journey, powered by Grok API.",
    githubUrl: "https://github.com/sreejagatab/grokclaude",
    category: "AI & Automation",
  },
]

export const categories = [
  "All",
  "AI & Automation",
  "Voice & Communication",
  "SaaS Platforms",
  "Healthcare",
  "Finance & Business",
  "Tools & Utilities",
  "E-Commerce",
  "Education & Sports",
  "Real Estate",
  "DevOps",
]
