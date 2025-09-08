# My Portfolio

A modern, responsive portfolio website built with **React**, **Vite**, **Chakra UI**, and **Framer Motion**, showcasing projects, technologies, and a contact form with animated interactions.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Custom Hooks](#custom-hooks)
- [UI Components](#ui-components)
- [Animations](#animations)
- [Contact Form](#contact-form)
- [License](#license)

## Features

- Responsive hero section with animated text and buttons
- Projects showcase with `ProjectCard` component
- Technology section with reusable `TechSection` components
- Animated Chakra UI components using Framer Motion (`MotionButton`, `MotionFlex`, `MotionStack`)
- Contact form with validation and toast notifications
- Smooth modal animations for the contact dialog
- Serverless function to send contact message

## Technologies

- **React** + **TypeScript**
- **Vite** for fast build tooling
- **Chakra UI** for component styling and responsive design
- **Framer Motion** for animations
- **React Hot Toast** for notifications
- **React Icons** for icons
- **Node/Express API** (optional backend for contact form)

## Folder Structure

```
src/
├─ api/
│  └─ sendMessage.ts
├─ chakra/
│  ├─ theme.ts
│  └─ components/
│     ├─ MotionButton.tsx
│     ├─ MotionFlex.tsx
│     └─ MotionStack.tsx
├─ components/
│  ├─ layout/
│  │  └─ Layout.tsx
│  ├─ sections/
│  │  ├─ Header.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Projects.tsx
│  │  └─ Technologies.tsx
│  └─ ui/
│     ├─ ContactDialog.tsx
│     ├─ ProjectCard.tsx
│     └─ TechSection.tsx
├─ hooks/
│  └─ useContactForm.ts
├─ types/
├─ css/
│  └─ animations.css
└─ App.tsx
```

## Available Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start Vite development server               |
| `npm run build`   | TypeScript build and Vite production bundle |
| `npm run lint`    | Run ESLint checks                           |
| `npm run vercel`  | Start Vercel development server             |
| `npm run preview` | Preview production build                    |
| `npm run prepare` | Setup Husky git hooks                       |

## Custom Hooks

- `useContactForm` → Handles form state, validation, and reset logic
- Hooks are located in `src/hooks/`

## UI Components

- `MotionButton`, `MotionFlex`, `MotionStack` → Animated Chakra primitives
- `ContactDialog` → Animated contact modal with validation
- `ProjectCard` → Displays project information
- `TechSection` → Displays technologies used

## Animations

- Framer Motion powers all component animations
- CSS keyframes are used for dialog/backdrop animations
- Hero and buttons "pop in" with scale and spring animations

## Contact Form

- Validates name, email, and message fields
- Shows real-time errors when fields are touched
- Submits to `/api/sendMessage` and shows success/error toast notifications
- Loading state handled via loading state in Hero

## License

MIT License © Stephen McElligott

---
