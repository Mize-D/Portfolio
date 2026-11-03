export const profile = {
  name: 'LOS',
  fullName: 'Tran Minh Duy',
  brand: 'LOS.dev',
  role: 'Backend Developer',
  location: 'Can Tho, Vietnam',
  email: 'minhduy280202@gmail.com',
  github: 'https://github.com/Mize-D',
  linkedin: 'https://www.linkedin.com/in/mizedlos/',
  cvPath: '/cv.pdf',
}

export const skills = [
  { group: 'Backend', focus: 'Application logic & APIs', items: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST API', 'JWT'] },
  { group: 'Databases', focus: 'Data modeling & persistence', items: ['MongoDB', 'Mongoose', 'SQL Server'] },
  { group: 'Frontend', focus: 'Building connected experiences', items: ['JavaScript', 'React', 'HTML5', 'CSS3'] },
  { group: 'Tools', focus: 'Development workflow', items: ['Git', 'GitHub', 'Postman', 'Socket.IO'] },
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
    role: 'Full-stack Developer · Backend-focused',
    summary: 'A web application supporting nursing home operations, care workflows, and communication between users.',
    description: 'Worked across backend modules and frontend integration, with a focus on pharmacy workflows, notifications, real-time messaging, and data modeling.',
    highlights: [
      'Developed pharmacy management workflows for medications, suppliers, stock tracking, dispensing, and prescription verification.',
      'Implemented notification management, including categories, read status, user preferences, and push-notification integration.',
      'Built real-time conversations and messaging with Socket.IO, including message read status and file attachments.',
      'Designed MongoDB data models and integrated REST APIs with the React frontend.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'React', 'Socket.IO'],
    contribution: 'Pharmacy Management, Notification Management, Chat / Real-time Messaging, Database Design, and Frontend–Backend API Integration.',
    sourceUrl: '',
    demoUrl: '',
    image: '/projects/nursing-home-preview.svg',
    imageAlt: 'Illustrative dashboard preview for the Nursing Home Management System',
    note: 'The source repository is not linked because access or public sharing may be restricted by the school organization.',
  },
  {
    id: 'roy-sneakers',
    number: '02',
    name: 'ROY SNEAKERS',
    type: 'Academic Project',
    role: 'Backend Developer',
    summary: 'An academic e-commerce website concept focused on sports footwear.',
    description: 'A team project exploring server-side development and the integration of application features with a relational database.',
    highlights: [
      'Implemented backend functionality using Java-based technologies.',
      'Worked with server-side business logic and SQL Server data storage.',
      'Collaborated with teammates to connect backend features with the application.',
    ],
    stack: ['Java', 'Spring Boot', 'Java Servlet', 'SQL Server'],
    contribution: 'Backend development and application/database integration in an academic team project.',
    sourceUrl: '',
    demoUrl: '',
    image: '/projects/roy-sneakers-preview.svg',
    imageAlt: 'Illustrative visual for the ROY SNEAKERS e-commerce project',
    note: 'Project links can be added when a verified public demo or repository is available.',
  },
]
