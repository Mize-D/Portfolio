# LOS.dev — Developer Portfolio

A responsive, dark navy developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Personalize before publishing

1. Open `src/data.js`.
2. Replace `your.email@example.com` with your real email.
3. Add your GitHub and LinkedIn profile URLs.
4. Add a final PDF CV to `public/cv.pdf`.
5. Confirm the education period in `src/App.jsx` (`TODO: Study period`).
6. Add project demo/source links only when they are real and approved for public sharing.
7. Review every project statement to ensure it matches your actual contribution.

## Project information

The Nursing Home Management System description is focused on the contributions provided for this portfolio draft: Pharmacy Management, Notification Management, Chat / Real-time Messaging, Database Design, and Frontend–Backend API Integration.

The school organization's source repository should not be linked publicly unless you have permission. The portfolio can describe your work without exposing the repository.

## Deploy to Vercel

1. Push this project to a GitHub repository you own.
2. Sign in to Vercel and import that repository.
3. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

No backend server is required for this static portfolio.
