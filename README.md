# FRC 10989 "Mission Control" Dashboard

A high-performance, mobile-responsive Quick Links dashboard for FRC Team 10989 Blast Robotics.

## Stack
- **Framework**: Astro (Zero-bloat HTML generation)
- **Styling**: Tailwind CSS v4 + DaisyUI v5
- **Theme**: "Mission Control" Dark Mode (OKLCH color space)
- **Data Source**: `src/data/links.json`

## Setup & Run

This project uses `pnpm`.

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Structure

- `src/pages/index.astro`: Main dashboard logic and layout.
- `src/data/links.json`: Centralized link management.
- `src/styles/global.css`: Tailwind and DaisyUI configuration.

## Customization

To add or modify links, edit `src/data/links.json`. The UI will automatically update based on the categories and priority settings.

