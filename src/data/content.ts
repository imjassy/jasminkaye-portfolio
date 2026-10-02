export const profile = {
  name: 'Jasmin Kaye Santos',
  eyebrow: 'Associate Software Engineer · Accenture · Cloud & Observability Engineering',
  lead: "I build and support the systems that keep observability platforms and cloud applications reliable and efficient at scale.",
  email: 'jasmin.kaye.santos@accenture.com',
  location: 'Manila, Philippines',
  // Fill these in with your real profile links — left blank since none were provided.
  linkedin: '',
  github: '',
  resumeUrl: '#',
}

export const about = {
  paragraph:
    "As an Software Engineer at Accenture, I am part of Observability Engineering, supporting monitoring across enterprise cloud workloads. With a strong interest in cloud and platform engineering, I am continually expanding my expertise in modern architectures, automation, and reliability practices.",
  stats: [
    { value: 1, label: 'Year at Accenture' },
    { value: 3, label: 'Platforms supported' },
    { value: 2, label: 'Certifications' },
    { value: 7, label: 'Projects delivered' },
  ],
}

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Accenture',
    meta: 'November 2024 – Present · Manila, Philippines',
    bullets: [
      'Develop and maintain Terraform modules in Azure DevOps to standardize and automate monitoring deployments',
      'Certify new observability features — build, testing, deployment — across Infrastructure, Containers, Serverless, APM, and Database Monitoring',
      'Support monitoring coverage for Kubernetes platforms (AKS, EKS, GKE) and other services across multiple cloud providers',
      'Deliver intake requests from application teams, including dashboards, monitors, custom metrics, and alerting',
      'Troubleshoot issues in Observability platforms - Datadog and Splunk Observability',
      'Remediate vulnerabilities at the application, container, and server level within agreed timelines',
      'Monitor platform usage and attribution, and flag unusual changes to the team',
      'Perform routine maintenance and stay-current activities to keep the platform compliant and stable',
    ],
  },
]

export const skillCategories = [
  {
    num: '01',
    title: 'Cloud & infrastructure',
    tags: ['Azure', 'AWS', 'Google Cloud Platform', 'Kubernetes', 'AKS', 'EKS', 'GKE', 'Serverless', 'IAM'],
  },
  {
    num: '02',
    title: 'Observability & monitoring',
    tags: ['Logging', 'Metrics collection', 'Distributed tracing', 'Dashboards', 'Alert management', 'APM', 'RUM', 'Database monitoring'],
  },
  {
    num: '03',
    title: 'Application support',
    tags: ['Incident mgmt', 'Problem mgmt', 'RCA', 'Log analysis', 'Performance troubleshooting', 'Vulnerability remediation'],
  },
  {
    num: '04',
    title: 'DevOps & automation',
    tags: ['Terraform', 'Infrastructure as Code', 'CI/CD', 'Git', 'GitHub', 'Helm', 'Config management'],
  },
  {
    num: '05',
    title: 'Programming & scripting',
    tags: ['Python', 'C#', 'JavaScript', '.NET', 'ASP.NET Core', 'Node.js'],
  },
]

export const tools = [
  { name: 'Terraform', cat: 'Automation', mono: 'TF', color: '#5C4EE5' },
  { name: 'Ansible', cat: 'Automation', mono: 'AN', color: '#EE0000' },
  { name: 'Windows PowerShell', cat: 'Automation', mono: 'PS', color: '#2E6FBE' },
  { name: 'Datadog', cat: 'Observability', mono: 'DD', color: '#632CA6' },
  { name: 'Splunk Observability', cat: 'Observability', mono: 'SO', color: '#3A9455' },
  { name: 'VS Code', cat: 'Development', mono: 'VS', color: '#007ACC' },
  { name: 'Postman', cat: 'Development', mono: 'PM', color: '#FF6C37' },
  { name: 'Claude', cat: 'AI Assistants', mono: 'C', color: '#DA7756' },
  { name: 'Microsoft Copilot', cat: 'AI Assistants', mono: 'CP', color: '#0A64C4' },
  { name: 'Git', cat: 'Version Control', mono: 'GIT', color: '#F05033' },
  { name: 'Azure DevOps', cat: 'Collaboration', mono: 'AZ', color: '#0078D7' },
  { name: 'Remote Desktop', cat: 'Remote Access', mono: 'RD', color: '#0078D4' },
  { name: 'Windows App', cat: 'Remote Access', mono: 'WA', color: '#00A4EF' },
] as const

export const toolCategories = [
  'All',
  'Observability',
  'Automation',
  'Development',
  'AI Assistants',
  'Version Control',
  'Collaboration',
  'Remote Access',
] as const

export const projects = [
  {
    num: '01',
    title: 'Datadog Agent Certification',
    cat: 'Observability',
    summary: 'Build validation and testing for Datadog Agent v7.77.1.',
    detail:
      'Successfully completed build validation and testing activities for Datadog Agent v7.77.1, ensuring deployment readiness and platform stability before production rollout.',
    tags: ['Datadog Agent', 'Build validation'],
  },
  {
    num: '02',
    title: 'Datadog RUM SPA Onboarding',
    cat: 'Observability',
    summary: 'Real User Monitoring for Single Page Applications.',
    detail:
      'Implemented and tested Datadog RUM for SPAs, including advanced configurations that improved application performance visibility and monitoring accuracy.',
    tags: ['Datadog RUM', 'SPA'],
  },
  {
    num: '03',
    title: 'Helm Chart Modernization',
    cat: 'Automation',
    summary: 'Updated Helm configurations with Karpenter integration.',
    detail:
      'Updated Helm chart configurations to align with current deployment standards and enabled Karpenter integration, improving deployment consistency and infrastructure readiness.',
    tags: ['Helm', 'Karpenter'],
  },
  {
    num: '04',
    title: 'Monitoring & Alerting Intake Requests',
    cat: 'Observability',
    summary: 'Observability onboarding across multiple projects.',
    detail:
      'Delivered multiple observability onboarding projects involving dashboards, monitors, custom metrics, and alerting configurations in Datadog to support operational visibility and proactive incident detection.',
    tags: ['Dashboards', 'Monitors', 'Alerting'],
  },
  {
    num: '05',
    title: 'Security & Vulnerability Remediation',
    cat: 'Security',
    summary: 'Identification, analysis, and remediation of vulnerabilities.',
    detail:
      'Supported the identification, analysis, and remediation of application vulnerabilities, helping maintain security compliance and reduce operational risk.',
    tags: ['Vulnerability remediation', 'Security compliance'],
  },
  {
    num: '06',
    title: 'Splunk Observability Automation Playbook',
    cat: 'Automation',
    summary: 'PowerShell automation for restricted-access servers.',
    detail:
      'Developed an automation playbook using PowerShell to validate Splunk Observability configurations on restricted-access servers, reducing manual effort and improving operational efficiency across support teams.',
    tags: ['PowerShell', 'Splunk Observability'],
  },
  {
    num: '07',
    title: 'Datadog .NET Tracer Upgrade',
    cat: 'Observability',
    summary: 'Tested and deployed Tracer v3.31.0 for NuGet apps.',
    detail:
      'Successfully tested and deployed Datadog .NET Tracer v3.31.0 for NuGet-based applications, ensuring compatibility with updated observability standards and uninterrupted monitoring coverage.',
    tags: ['.NET Tracer', 'NuGet'],
  },
] as const

export const projectCategories = ['All', 'Observability', 'Automation', 'Security'] as const

export const certifications = [
  { name: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft' },
  { name: 'Google Analytics Certification', issuer: 'Google' },
]

export const awards = [
  {
    name: 'FY25 Q2 ATCP Cloud First Gantimpala Award',
    note: 'Recognized for driving innovation and creating value through continuous improvement initiatives that positively impact people, clients, and communities.',
  },
  {
    name: 'Security Elite Prestige',
    note: 'Achieved FY26 Secure Behavior Score (SBS) Elite Prestige status by maintaining a Top Notch security score throughout the fiscal year.',
  },
]

export const achievements = [
  {
    title: 'Successful cloud migrations',
    detail: 'Migrated Splunk Observability infrastructure to Datadog, consolidating monitoring tooling across the platform.',
  },
  {
    title: 'Monitoring platform implementations',
    detail: 'Delivered dashboards, custom metrics, and alerting across multiple Datadog onboarding projects.',
  },
  {
    title: 'Knowledge transfer sessions',
    detail: 'Part of certifying new observability products and features, including build, testing, and knowledge transfer before production rollout.',
  },
  {
    title: 'Process automation initiatives',
    detail: 'Built a PowerShell automation playbook for Splunk Observability validation, and standardized monitoring deployments with Terraform modules.',
  },
]

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#tools', label: 'Tools' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]
