# TypeFlux

A typography-driven personal portfolio built with **React 19, Vite, and Tailwind CSS v4**. Featuring a retro terminal aesthetic, kinetic typography, ambient audio, live analytics, and interactive 3D project cards.

## Features

- **Kinetic Typography:** Rotating retro, glitch, pixel, and gothic typefaces.
- **Ambient Audio:** Background soundtrack with persistent preferences.
- **Live Analytics:** Global visitor and click counters powered by the Abacus API.
- **Interactive Projects:** 3D tilt effects, keyboard navigation, touch gestures, and featured or expanded gallery views.
- **About & Tech Stack:** Developer profile, social links, technology badges, support link, and downloadable résumé.
- **Responsive Design:** Minimalist dark UI with a focus on performance and usability.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- **Typography:** Google Fonts

## Getting Started

**Prerequisites:** Node.js v18+ and npm.

```bash
git clone https://github.com/aimanfazal/typeflux.git

cd typeflux

npm install

npm run dev
```

## Deployment

The site is deployed automatically to GitHub Pages through [GitHub Actions](.github/workflows/deploy.yml).

- Pushes to `main` trigger a production deployment.
- Deployments can also be started manually from the workflow's **Run workflow** action.
- GitHub Pages must use **GitHub Actions** as its deployment source.

The production site is available at https://aimanfazal.github.io/typeflux/.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

---

<p align="center">
  <strong>TypeFlux</strong><br />
  <sub>Less noise. More type.</sub>
</p>