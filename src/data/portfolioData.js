export const profile = {
  id: 1,
  name: "KRISHNA KUMAR R",
  role: "Java Full Stack Developer",
  short_bio:
    "Java Full Stack Developer with professional experience building secure backend services, RESTful APIs, and full-stack applications.",
  about:
    "a Software Developer focused on backend engineering, secure APIs, databases, microservices, and practical full-stack development",
  email: "pandiraman131@gmail.com",
  phone: "+91-9345380842",
  location: "Sivakasi, India",
  profile_image: "images/profilelogo.png",
  resume_url: "resume.pdf",
  github_url: "https://github.com/krishnak712",
  linkedin_url: "https://www.linkedin.com/in/krishna-kumar712",
};

const skillNames = [
  ["Java", "Languages"],
  ["Python", "Languages"],
  ["JavaScript", "Languages"],
  ["SQL", "Languages"],
  ["Spring", "Backend"],
  ["Spring Boot", "Backend"],
  ["FastAPI", "Backend"],
  ["REST APIs", "Backend"],
  ["Microservices", "Backend"],
  ["React.js", "Frontend"],
  ["React Native", "Frontend"],
  ["HTML5", "Frontend"],
  ["CSS", "Frontend"],
  ["PostgreSQL", "Database"],
  ["Redis", "Database"],
  ["Spring Security", "Security"],
  ["JWT", "Security"],
  ["Role-Based Access Control (RBAC)", "Security"],
  ["Hibernate", "Database"],
  ["JDBC", "Database"],
  ["SQLAlchemy", "Database"],
  ["RabbitMQ", "Tools"],
  ["Kafka", "Tools"],
  ["Docker", "DevOps"],
  ["Manual Testing", "Tools"],
  ["Automation Testing", "Tools"],
];

export const skills = skillNames.map(([name, category], index) => ({
  id: index + 1,
  name,
  category,
  display_order: index + 1,
}));

export const experience = [
  {
    id: 1,
    company: "IKRGY Infotech Pvt. Ltd",
    position: "Software Developer",
    location: "Hyderabad, Telangana",
    start_date: "2026-04-01",
    end_date: null,
    description:
      "Develop and integrate RESTful backend services using Java and Spring Boot; implement authentication and authorization using Spring Security, JWT, and RBAC; develop microservice-based backend components with PostgreSQL; and implement business logic, request validation, exception handling, and structured service-layer components.",
    display_order: 1,
  },
  {
    id: 2,
    company: "Besant Technologies",
    position: "Software Developer - Intern",
    location: "Chennai, Tamil Nadu",
    start_date: "2025-08-01",
    end_date: "2026-01-31",
    description:
      "Developed full-stack web applications using Java, Spring Boot, React.js, and PostgreSQL; designed and integrated RESTful APIs; implemented business logic, database operations, validation, exception handling, and authentication flows; and debugged application issues across implementation, testing, and API integration.",
    display_order: 2,
  },
];

const project = (id, data) => ({
  id,
  technologies: (data.technologies ?? []).map((technology, index) => ({
    id: id * 100 + index + 1,
    technology,
    display_order: index + 1,
  })),
  featured: Boolean(data.featured),
  is_visible: true,
  display_order: id,
  ...data,
});

export const projects = [
  project(1, {
    title: "Integrated College / University Management System",
    slug: "integrated-college-university-management-system",
    project_type: "BACKEND / FULL STACK SYSTEM",
    project_mode: "Personal",
    short_description:
      "Scalable academic and administrative management system built around modular APIs, role-aware access control, and asynchronous processing.",
    description:
      "Developed RESTful backend APIs using Python and FastAPI to support academic and administrative management workflows, with SQLAlchemy and PostgreSQL for structured persistence.",
    role: "Backend Engineer",
    github_url: null,
    live_url: null,
    image_url: null,
    status: "COMPLETED",
    featured: false,
    detail: {
      id: 101,
      project_id: 1,
      overview:
        "A modular academic and administrative platform designed to centralize management workflows behind secure, maintainable REST APIs and a structured service layer.",
      problem_statement:
        "Academic systems often split administrative workflows across disconnected modules, creating duplicated logic, inconsistent permissions, and difficult-to-maintain integrations.",
      solution:
        "FastAPI, SQLAlchemy, PostgreSQL, Redis, Celery, Pydantic, Casbin, and JWT were combined to separate concerns, secure protected operations, and support asynchronous processing.",
      my_role:
        "Designed backend workflows, API contracts, validation, database operations, authentication, authorization, and modular service-layer responsibilities.",
    },
    sections: [
      {
        id: 1101,
        project_id: 1,
        section_type: "feature-grid",
        title: "API & Data Layer",
        description:
          "RESTful APIs coordinate academic and administrative workflows through request validation, service-layer business logic, and PostgreSQL persistence.",
        display_order: 1,
        items: [
          { id: 1111, section_id: 1101, item_number: "01", title: "RESTful API contracts", description: "Structured endpoints expose predictable operations for frontend and service integrations.", display_order: 1 },
          { id: 1112, section_id: 1101, item_number: "02", title: "Validation & persistence", description: "Pydantic validation and SQLAlchemy keep incoming data and database operations consistent.", display_order: 2 },
        ],
      },
      {
        id: 1102,
        project_id: 1,
        section_type: "role-grid",
        title: "Role-Based Access Control",
        description:
          "Casbin policies and JWT authentication protect application operations according to role and permission boundaries.",
        display_order: 2,
        items: [
          { id: 1121, section_id: 1102, item_number: "01", title: "JWT authentication", description: "Protected endpoints validate authenticated requests before business logic executes.", display_order: 1 },
          { id: 1122, section_id: 1102, item_number: "02", title: "Casbin authorization", description: "Permission rules determine which operations each role can perform.", display_order: 2 },
        ],
      },
      {
        id: 1103,
        project_id: 1,
        section_type: "feature-grid",
        title: "Caching & Background Processing",
        description:
          "Redis and Celery support faster access to reusable data and asynchronous application operations.",
        display_order: 3,
        items: [
          { id: 1131, section_id: 1103, item_number: "01", title: "Redis caching", description: "Frequently reused application data can be cached to reduce repeated database work.", display_order: 1 },
          { id: 1132, section_id: 1103, item_number: "02", title: "Celery workers", description: "Long-running or asynchronous tasks can be moved outside the request path.", display_order: 2 },
        ],
      },
      {
        id: 1104,
        project_id: 1,
        section_type: "status",
        eyebrow: "PROJECT STATUS",
        title: "Completed portfolio project.",
        description: "The project demonstrates secure API design, modular business logic, database operations, caching, and asynchronous backend processing.",
        display_order: 4,
        items: [],
      },
    ],
  }),

  project(2, {
    title: "Smart Blood Search, Donation & Tracking Management System",
    slug: "smart-blood-search-donation-tracking-management-system",
    project_type: "FULL STACK / MICROSERVICE PLATFORM",
    project_mode: "Personal",
    short_description:
      "A role-based blood donation and hospital management platform focused on secure workflows, real-time coordination, and donor operations.",
    description:
      "Developing a role-based blood donation and hospital management platform with secure authentication, Spring Boot microservices, PostgreSQL, RabbitMQ, React.js, and React Native.",
    role: "Full Stack Developer",
    github_url: null,
    live_url: null,
    image_url: null,
    status: "IN PROGRESS",
    featured: true,
    detail: {
      id: 201,
      project_id: 2,
      overview:
        "A multi-role blood donation and hospital management platform designed to connect donor operations, hospital workflows, authentication, and notifications through secure services.",
      problem_statement:
        "Blood donation workflows involve sensitive identity data, multiple hospital roles, donor verification, and time-sensitive coordination that need consistent access controls and reliable service communication.",
      solution:
        "Spring Boot microservices, Spring Security, JWT, RabbitMQ, PostgreSQL, React.js, and React Native are used to separate responsibilities, secure workflows, and support asynchronous notification processing.",
      my_role:
        "Developing backend services, security flows, database-backed workflows, API integration, and web/mobile interfaces across the platform.",
    },
    sections: [
      {
        id: 2101,
        project_id: 2,
        section_type: "feature-grid",
        title: "Authentication & Verification",
        description:
          "Identity and access workflows use Spring Security, JWT, password hashing, mobile OTP verification, and protected application routes.",
        display_order: 1,
        items: [
          { id: 2111, section_id: 2101, item_number: "01", title: "Secure authentication", description: "JWT-based authentication protects API access after credential and verification checks.", display_order: 1 },
          { id: 2112, section_id: 2101, item_number: "02", title: "Mobile OTP verification", description: "OTP workflows strengthen account verification before sensitive donor and hospital operations.", display_order: 2 },
        ],
      },
      {
        id: 2102,
        project_id: 2,
        section_type: "role-grid",
        title: "Role-Based Access Control",
        description:
          "Hierarchical roles separate permissions for Super Admin, Platform Admin, Main Hospital Admin, Branch Hospital Admin, Hospital Staff, and donor workflows.",
        display_order: 2,
        items: [
          { id: 2121, section_id: 2102, item_number: "01", title: "Hierarchical roles", description: "Role boundaries control administrative and hospital operations at different levels.", display_order: 1 },
          { id: 2122, section_id: 2102, item_number: "02", title: "Permission-aware APIs", description: "Backend operations enforce authorization before business rules are executed.", display_order: 2 },
        ],
      },
      {
        id: 2103,
        project_id: 2,
        section_type: "feature-grid",
        title: "Live Tracking & Geofence",
        description:
          "Operational workflows are designed around location-aware and time-sensitive coordination for donors and hospitals.",
        display_order: 3,
        items: [
          { id: 2131, section_id: 2103, item_number: "01", title: "Location-aware workflow", description: "Location signals can support matching and operational coordination between users and facilities.", display_order: 1 },
          { id: 2132, section_id: 2103, item_number: "02", title: "Real-time coordination", description: "Time-sensitive donation workflows are designed to surface relevant operational information quickly.", display_order: 2 },
        ],
      },
      {
        id: 2104,
        project_id: 2,
        section_type: "feature-grid",
        title: "Audit & Accountability",
        description:
          "Structured service workflows and role boundaries help keep sensitive platform activity traceable and maintainable.",
        display_order: 4,
        items: [
          { id: 2141, section_id: 2104, item_number: "01", title: "Centralized validation", description: "Request validation and structured exception handling keep service behavior consistent.", display_order: 1 },
          { id: 2142, section_id: 2104, item_number: "02", title: "Service separation", description: "Microservice-oriented boundaries separate core business responsibilities and notification processing.", display_order: 2 },
        ],
      },
      {
        id: 2105,
        project_id: 2,
        section_type: "status",
        eyebrow: "PROJECT STATUS",
        title: "Currently in development.",
        description: "The platform is being developed across backend services, web administration workflows, and a React Native application for donor and hospital staff operations.",
        display_order: 5,
        items: [],
      },
    ],
  }),
];

export const achievements = [
  {
    id: 1,
    title: "Java Full Stack Developer Certificate",
    description: "Professional Java full-stack development certification from Besant Technologies.",
    date: "2026-01-01",
    icon: "CERTIFICATION",
    link: null,
    display_order: 1,
    organization: "Besant Technologies",
  },
  {
    id: 2,
    title: "B.Sc. Chemistry",
    description: "Bachelor of Science degree from Government Arts and Science College, Sivakasi.",
    date: "2024-01-01",
    icon: "EDUCATION",
    link: null,
    display_order: 2,
    organization: "Government Arts and Science College",
  },
];

export const portfolioData = {
  profile,
  skills,
  projects,
  experience,
  achievements,
};

export function getLocalProjects() {
  return projects.filter((projectItem) => projectItem.is_visible !== false);
}

export function getLocalProjectBySlug(slug) {
  return getLocalProjects().find((projectItem) => projectItem.slug === slug) || null;
}
