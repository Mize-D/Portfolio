// Update the contact links and project links with your real information.
// Keep repository links empty if the school organization does not allow public sharing.
export const profile = {
  name: 'LOS',
  brand: 'LOS.dev',
  role: 'Backend Developer',
  location: 'Can Tho, Vietnam',
  email: 'minhduy280202@gmail.com',
  github: '', // TODO: paste your GitHub profile URL
  linkedin: '', // TODO: paste your LinkedIn profile URL
  cvPath: '/cv.pdf', // Put your final CV in the public folder and name it cv.pdf
}

export const skills = [
  {
    group: 'Backend Development',
    items: ['Node.js', 'Express.js', 'Java', 'C# / .NET', 'RESTful APIs'],
  },
  {
    group: 'Database',
    items: ['MongoDB', 'Mongoose', 'SQL Server'],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    group: 'Tools & Practices',
    items: ['Git', 'GitHub', 'Postman', 'API Integration'],
  },
]

export const projects = [
  {
    id: 'nursing-home',
    number: '01',
    name: 'Nursing Home Management System',
    type: 'Graduation Project',
    role: 'Full-stack Developer · Backend-focused',
    summary:
      'A web-based system designed to support nursing home operations, care workflows, and communication.',
    description:
      'Contributed to the design and end-to-end development of several modules, from data modeling and backend business logic to API integration and frontend implementation.',
    highlights: [
      'Designed and developed pharmacy management workflows for medications, suppliers, stock tracking, dispensing, and prescription verification.',
      'Implemented notification management, including notification categories, read status, user preferences, and push-notification integration.',
      'Built real-time conversations and messaging with Socket.IO, including message read status and file attachments.',
      'Designed MongoDB data models for the modules and integrated RESTful APIs with the React frontend.',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'React.js', 'Socket.IO'],
    contribution:
      'Module ownership: Pharmacy Management, Notification Management, Chat / Real-time Messaging, Database Design, and Frontend–Backend API Integration.',
    sourceUrl: '', // Add only if you have permission to share the repository
    demoUrl: '',
    image: '/projects/nursing-home-preview.svg',
    imageAlt: 'Abstract preview graphic for the Nursing Home Management System',
    note: 'Repository access and public sharing may be restricted by the school organization.',
  },
  {
    id: 'roy-sneakers',
    number: '02',
    name: 'Roy Sneakers',
    type: 'Academic Project',
    role: 'Backend Developer',
    summary: 'An e-commerce website concept specializing in sports shoes.',
    description:
      'Academic team project focused on implementing backend functionality and supporting data exchange between application components.',
    highlights: [
      'Developed backend functionalities based on project requirements.',
      'Worked on server-side business logic and data processing.',
      'Collaborated with teammates to integrate backend features with the application.',
    ],
    stack: ['Java', 'Spring Boot', 'SQL Server'],
    contribution: 'Backend development in an academic team project.',
    sourceUrl: '',
    demoUrl: '',
    image: '/projects/roy-sneakers-preview.svg',
    imageAlt: 'Abstract preview graphic for the Roy Sneakers e-commerce project',
    note: 'Add verified project details and links if you still have access to the source.',
  },
]
