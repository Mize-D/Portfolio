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

## Customization

### Update content

- Edit `src/data.js` to change profile details, social links, skills, experience, and project information.
- Edit `src/App.jsx` to modify page sections, component structure, and layout.
- Edit `src/styles.css` to customize colors, typography, spacing, animations, and responsive styles.

### Add a profile image or project assets

1. Place image files inside the `public/` directory.
2. Reference each asset using an absolute path from the public root, for example `/projects/example.png`.
3. Update the corresponding content in `src/data.js`.

### Add a downloadable CV

1. Export the CV as a PDF.
2. Place the file at `public/cv.pdf`.
3. Keep the download path configured as `/cv.pdf`, or update it in `src/data.js` if using a different filename.

### Add project links

Set `sourceUrl` and `demoUrl` for a project in `src/data.js`. Leave either value empty if no public link is available.

## Deployment

This project can be deployed to Vercel or another static hosting provider that supports Vite.

### Deploy with Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use the following build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy the project.

For automatic deployments, connect the hosting project to the Git repository. New commits pushed to the configured production branch will trigger a new deployment.

## Notes

- Node.js 18 or newer is recommended.
- This is a frontend-only static website; no backend server is required.
- Do not commit private credentials, API keys, or sensitive configuration files.
