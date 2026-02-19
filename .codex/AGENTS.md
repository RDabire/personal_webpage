# Project: Personal Portfolio & Blog

This project is a personal portfolio and blog website built with Astro, TypeScript, and Tailwind CSS. It's designed to be a feature-rich, customizable, and high-performance template.

## Key Technologies

- **Framework**: [Astro](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Blog Content**: [MDX](https://mdxjs.com/) (with React components for interactivity)
- **Deployment**: Cloudflare Pages
- **Package Manager**: [Bun](https://bun.sh/)

## Project Structure

- `src/pages`: Contains the pages of the site.
- `src/layouts`: Contains the base layout for all pages.
- `src/components`: Contains reusable components.
- `src/features`: Contains different features of the application like `blog`, `contact` and `home`.
- `src/content`: Contains the content for the blog.
- `public`: Contains static assets like images and favicons.

## Building and Running the Project

### Prerequisites

- [Bun](https://bun.sh/docs/installation)

### Development

To start the development server, run the following command:

```bash
bun dev
```

The site will be available at `http://localhost:4321`.

### Build

To build the site for production, run the following command:

```bash
bun build
```

This will create a `dist` directory with the production-ready files.

### Preview

To preview the production build locally, run the following command:

```bash
bun preview
```

## Development Conventions

### Content

- Blog posts are written in MDX and are located in `src/features/blog/content/en`.
- Each post has frontmatter with metadata like `title`, `description`, `pubDate`, and `tags`.

### Styling

- The project uses Tailwind CSS for styling. The configuration is located in `astro.config.mjs` within the `vite` property.
- Global styles are defined in `src/styles/global.css`.
- The project uses `shadcn/ui` for UI components.

### Internationalization (i18n)

- The project has a basic i18n setup for UI translations.
- The UI strings are located in `src/i18n/ui.ts`.
- The default language is English.

### Deployment

- The project is configured to be deployed to Cloudflare Pages. The configuration is in `astro.config.mjs`.
