# Kwanele Ngwenya — IT Portfolio

A responsive portfolio for Kwanele Ngwenya, an early-career IT Support Services and Networks professional completing a Diploma in Information Technology at Nelson Mandela University. The site introduces her background, skills, Cisco networking coursework, and career interests.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server uses port **3000** and will stop with an error if that port is already occupied.

## Deploying to GitHub Pages

The Vite base path is configured for a root-level user site. For the site to publish at [https://kwanelealeisha.github.io/](https://kwanelealeisha.github.io/), GitHub requires the repository to be named `kwanelealeisha.github.io`. Then enable GitHub Pages and publish the generated `dist/` directory after running `npm run build`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 3000 |
| `npm run lint` | Check the project with ESLint |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build on port 3000 |

Run `npm run build` before `npm run preview`.

## Project structure

```text
src/
  components/
    layout/       Navbar, footer, mobile navigation, and GSAP motion
    sections/     Hero, about, skills, tool box, training, and contact
  data/site.js    Portfolio text, education, skills, tools, and training
  index.css       Tailwind CSS and shared styles
public/
  images/         Portrait and other public images
  documents/      Downloadable CV
  network-topology.svg
```

## Updating portfolio content 

Edit `src/data/site.js` to update Kwanele’s profile, contact details, skills, Tool Box entries, and Cisco coursework. Add or replace public files under `public/` and update their paths in `site.js` when needed. LinkedIn and GitHub links remain hidden until their URLs are added.

The site uses React 19, Vite, Tailwind CSS 4, GSAP with ScrollTrigger, and React Icons. Motion effects respect the browser’s reduced-motion preference.
