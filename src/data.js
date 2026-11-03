export const profile = {
  name: 'LOS',
  fullName: 'Minh Duy',
  brand: 'LOS’s Portfolio',
  role: 'Junior Backend Developer',
  location: 'Ninh Kieu, Can Tho, Vietnam',
  email: 'minhduy280202@gmail.com',
  github: 'https://github.com/Mize-D',
  linkedin: 'https://www.linkedin.com/in/mizedlos/',
  cvPath: '/cv.pdf',
}

export const skills = [
  { group: 'Languages', focus: 'Programming languages', items: ['Java', 'JavaScript', 'C#'] },
  { group: 'Backend', focus: 'Services & APIs', items: ['Node.js', 'Express.js', 'Spring Boot', 'Java Servlet', 'RESTful API', 'WebSocket'] },
  { group: 'Databases', focus: 'Database systems', items: ['MongoDB', 'SQL Server'] },
  { group: 'Authentication', focus: 'Authentication methods', items: ['JWT', 'OAuth 2.0'] },
  { group: 'Version Control', focus: 'Source control', items: ['Git', 'GitHub'] },
]

export const experience = [
  {
    role: 'Software Engineering Intern',
    company: 'FPT Software',
    location: 'Ho Chi Minh City, Vietnam',
    period: 'Jan 2023 — Apr 2023',
    description: 'Internship experience working with Java backend technologies, including Spring Boot and JWT-based authentication.',
    tags: ['Java', 'Spring Boot', 'JWT'],
  },
]

export const projects = [
  {
    id: 'nursing-home',
    number: '01',
    name: 'Nursing Home Management System',
    type: 'Graduation Project',
    role: 'Backend Developer',
    summary: 'Backend functionality for a nursing home management system.',
    description: 'Developed RESTful APIs, implemented backend logic for residents, personal payments, and room allocation, and integrated services with frontend components.',
    highlights: [
      'Developed RESTful APIs for core nursing home management functionality.',
      'Implemented backend logic for elderly residents, personal payments, and room allocation.',
      'Integrated RESTful APIs with frontend components.',
      'Collaborated with teammates to develop and integrate system modules.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'RESTful API'],
    contribution: 'RESTful API development, backend business logic, and frontend integration.',
    sourceUrl: '',
    demoUrl: '',
    image: '/projects/nursing-home-preview.svg',
    imageAlt: 'Illustrative dashboard preview for the Nursing Home Management System',
  },
  {
    id: 'roy-sneakers',
    number: '02',
    name: 'ROY SNEAKERS',
    type: 'Academic Project',
    role: 'Backend Developer',
    summary: 'Backend development for a sports-footwear e-commerce project.',
    description: 'Built backend functionality and business logic, processed application data, and integrated backend features with frontend components as part of an academic team project.',
    highlights: [
      'Developed backend functionality for an e-commerce platform specializing in sports footwear.',
      'Implemented business logic to support application requirements.',
      'Managed data processing and backend integration with frontend components.',
      'Collaborated with teammates to develop and complete the application.',
    ],
    stack: ['Java', 'Spring Boot', 'Java Servlet', 'SQL Server'],
    contribution: 'Backend functionality, business logic, and frontend integration.',
    sourceUrl: '',
    demoUrl: '',
    image: '/projects/roy-sneakers-preview.svg',
    imageAlt: 'Illustrative visual for the ROY SNEAKERS e-commerce project',
  },
]
