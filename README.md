# 🚀 Manas Ranjan Bariha - Portfolio

A modern, professional portfolio website built with **Angular 20**, showcasing my work as a Full Stack Developer specializing in healthcare applications.

![Angular](https://img.shields.io/badge/Angular-20.3.3-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=flat-square&logo=typescript)
![Material Design](https://img.shields.io/badge/Material-20.2.10-pink?style=flat-square&logo=material-design)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Built with Angular Material and custom SCSS
- **Professional Sections**:
  - Hero section with social links
  - About page with work experience and interactive skills
  - Project showcase with GitHub & live demo links
  - Contact form with validation
  - Social media integration (LinkedIn, GitHub, LeetCode)
- **Interactive Elements**:
  - Skill badges with modal popups
  - Smooth animations and transitions
  - Download resume functionality
- **Best Practices**:
  - Standalone components architecture
  - Constants-based data management
  - Server-side rendering (SSR) support
  - Accessibility optimized (WCAG compliant)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Angular 20 (Latest)
- **Language**: TypeScript
- **Styling**: SCSS with Material Design
- **UI Library**: Angular Material 20.2.10
- **Build Tool**: Angular CLI 20.3.3

### Backend (Optional)
- Node.js/Express
- Spring Boot
- RESTful APIs

### Tools & Platforms
- Git & GitHub for version control
- Jira for project management
- Jenkins & GitLab for CI/CD
- Docker for containerization

## 📋 Project Structure

```
src/
├── app/
│   ├── about/              # About section with experience & skills
│   ├── home/               # Hero section
│   ├── projects/           # Project showcase
│   ├── contacts/           # Contact form
│   ├── footer/             # Footer with social links
│   ├── navbar/             # Navigation bar
│   ├── constants/          # Data constants
│   │   ├── about.constants.ts
│   │   ├── home.constants.ts
│   │   ├── projects.constants.ts
│   │   ├── contacts.constants.ts
│   │   ├── footer.constants.ts
│   │   └── navbar.constants.ts
│   ├── app.ts              # Root component
│   ├── app.routes.ts       # Route configuration
│   └── app.scss            # Global styles
├── assets/                 # Static assets
├── public/                 # Public files
│   └── ManasRanjanBariha-resume.pdf
└── index.html              # Main HTML file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI 20.3.3

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ManasRanjanBariha/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`

## 📦 Available Scripts

### Development
```bash
ng serve                    # Start dev server
ng serve --open             # Start and open in browser
```

### Production Build
```bash
ng build --configuration production
```

### Server-Side Rendering
```bash
ng build --configuration production --prerender
npm run serve:ssr           # Run SSR server
```

### Testing
```bash
ng test                     # Run unit tests
ng e2e                      # Run e2e tests
```

## 🎨 Customization

### Update Personal Information
Edit constants in `src/app/constants/`:
- `home.constants.ts` - Hero section & social links
- `about.constants.ts` - Work experience & skills
- `projects.constants.ts` - Project details
- `contacts.constants.ts` - Contact form fields
- `footer.constants.ts` - Footer information

### Add New Projects
Update `projects.constants.ts`:
```typescript
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "image-url",
    technologies: ["Angular", "TypeScript"],
    liveUrl: "https://live-demo.com",
    githubUrl: "https://github.com/yourrepo"
  }
];
```

### Update Resume
Replace `public/ManasRanjanBariha-resume.pdf` with your resume PDF

## 🔗 Social Links

- **LinkedIn**: https://www.linkedin.com/in/manas-ranjan-bariha-a1901b387
- **GitHub**: https://github.com/ManasRanjanBariha
- **LeetCode**: https://leetcode.com/manasranjanbariha11/

## 📧 Contact

For inquiries or opportunities, use the contact form on the website or reach out at:
- Email: manasranjanbariha11@gmail.com

## 🌐 Deployment

### Deploy to Netlify
```bash
# Build the project
ng build --configuration production --prerender

# Drag and drop 'dist/my-portfolio' folder to Netlify
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
ng build --configuration production --base-href=/portfolio/
```

## 📊 Performance

- ⚡ **Fast Load Time** - Optimized bundle size
- 🎯 **SEO Friendly** - Server-side rendering
- ♿ **Accessible** - WCAG 2.1 compliant
- 📱 **Mobile Optimized** - Responsive design
- 🔒 **Secure** - No sensitive data exposure

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 📚 Resources

- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Created with ❤️ by Manas Ranjan Bariha**
