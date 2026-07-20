# Harsh Vibhuti Portfolio

A personal portfolio website for Harsh Vibhuti, a Mechanical Engineering and Mathematics student at Washington University in St. Louis. The site highlights engineering projects, research experience, technical skills, and contact information.

## Tech stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) icons

## Run locally

1. Install [Node.js](https://nodejs.org/) (version 20 or later recommended).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customize the portfolio

### Update the resume download

Open `lib/site-config.ts` and replace `RESUME_FILE_ID` with the ID from your Google Drive resume link.



Copy the part in place of `FILE_ID`. In Google Drive, set the file's general access to **Anyone with the link** and role to **Viewer** so visitors can download it without signing in.

### Edit content

- `components/hero-section.tsx` — introduction, profile photo, and background visuals
- `components/about-section.tsx` — biography and education summary
- `components/projects-section.tsx` — project cards
- `components/ui/work-experience.tsx` — work experience cards
- `components/ui/ResearchExperience.tsx` — research experience cards
- `components/skills-section.tsx` — technical skills
- `components/contact-section.tsx` — contact details

### Replace images

Put new image files in `public/images/`, then update the matching `image` path in the component data. For example:

```ts
image: "/images/my-new-project.jpg"
```

## Build for production

```bash
npm run build
npm run start
```
## License

This project is for personal portfolio use.
