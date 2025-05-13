# Janice Portfolio Website

A beautiful, modern portfolio website for Janice, a creative designer based in Poland.

## Features

- Responsive design
- Modern UI with stunning animations
- Elegant component transitions
- Interactive elements and hover effects
- Showcases projects and services
- Client testimonials
- Contact information

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Framer Motion for advanced animations
- React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Image Requirements

Before running the project, make sure to add the following images to the `/public/images/` directory structure:

### Hero Section Images (`/public/images/hero/`)
- `model.jpg` - The main model image for the hero section (recommended size: 800x1200px)
- `qr-code.png` - QR code image (recommended size: 240x240px)

### Projects Images (`/public/images/projects/`)
- `glowora-desktop.jpg` - Desktop version of Glowora project (recommended size: 1200x800px)
- `glowora-mobile.jpg` - Mobile version of Glowora project (recommended size: 400x800px)
- `nexuro-desktop.jpg` - Desktop version of Nexuro project (recommended size: 1200x800px)
- `nexuro-mobile.jpg` - Mobile version of Nexuro project (recommended size: 400x800px)
- Add additional project images as needed

### Services Images (`/public/images/services/`)
- `webflow-design.jpg` - Webflow design service image (recommended size: 600x400px)
- Add additional service-related images as needed

### Showcase Images (`/public/images/showcase/`)
- `featured-project.jpg` - Featured project image (recommended size: 1400x800px)
- `logo1.png`, `logo2.png`, `logo3.png`, `logo4.png` - Company logos (recommended size: 180x60px)

### Updates Section Images (`/public/images/updates/`)
- `hoodie.jpg` - Hoodie design image (recommended size: 600x400px)
- `work-moments.jpg` - Behind the scenes image (recommended size: 600x400px)
- `project-screenshots.jpg` - Project screenshots image (recommended size: 600x400px)

### Testimonials Images (`/public/images/testimonials/`)
- `client1.jpg`, `client2.jpg`, `client3.jpg` - Client avatars (recommended size: 120x120px, square format)

## Customization

### Changing Colors
Edit the `tailwind.config.js` file to update the color scheme:

```js
theme: {
  extend: {
    colors: {
      'soft-green': '#e0f2e9',
      'dark-green': '#195a3e',
      'light-gray': '#f8f8f8',
    },
  },
},
```

### Updating Content
Edit the component files in the `/components` directory to update text content, add projects, or modify service offerings.

## Animation Features

The website includes a variety of animations powered by Framer Motion:
- Smooth scrolling animations with viewport detection
- Interactive hover effects
- Staggered animations for lists and grids
- Fluid page transitions
- Animated background elements

## Build for Production

```
npm run build
```

## License

All rights reserved.

## Portfolio Sections

1. **Header/Hero** - Eye-catching introduction with your name and profession
2. **About Me** - Personal information with statistics highlighting your experience
3. **Recent Work** - Showcase of your most recent and best projects
4. **Services** - Overview of the services you offer to clients
5. **Showcase** - Featured project with supporting company logos
6. **Updates** - Gallery of your recent activities and designs
7. **Feedback** - Testimonials from satisfied clients
8. **Footer** - Contact information and social media links 