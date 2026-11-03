# Developer Portfolio

A responsive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements

- Node.js 18 or newer
- npm

## Getting started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

Open the local URL displayed in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production version |
| `npm run preview` | Preview the production build locally |

The production files are generated in the `dist/` directory.

## Project structure

```text
.
├── public/
│   └── projects/       # Static project images and assets
├── src/
│   ├── App.jsx         # Main application and page sections
│   ├── data.js         # Portfolio content and configuration
│   ├── main.jsx        # Application entry point
│   └── styles.css      # Global styles and responsive layout
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- Node.js 18 or newer is recommended.
- This is a frontend-only static website; no backend server is required.
- Do not commit private credentials, API keys, or sensitive configuration files.
