# Nitish Ranjan | MCA Portfolio Website

A personal portfolio website built with **React.js**, **Vite**, **Framer Motion**, and **Lucide React**. It showcases skills, projects, educational background, certifications, and contact details with a state-of-the-art, premium glassmorphism interface and interactive animations.

---

## 🌟 Key Features

*   **Premium Glassmorphic Design:** harmonize visual aesthetics with sleek gradients, floating ambient orbs, and clean typography.
*   **Dual Theme Support:** Fully responsive Dark Mode (default) and Light Mode, toggled instantly from a beautifully animated navigation button.
*   **Zero-Flash Theme Loader:** Integrated inline script preventing white or dark screen flashes on browser reloads.
*   **Timeline Experience Display:** A clean timeline detailing educational history and professional achievements.
*   **Interactive Micro-Animations:** Custom category hover animations (spin, pulse, db-bounce, wiggle) powered by Framer Motion.
*   **Responsive Layout:** Tailored with CSS grid and flexbox for mobile, tablet, and desktop viewing.

---

## 📂 File & Folder Structure

Below is the structured layout of the project:

```text
mca-portfolio/
├── public/                 # Static assets
│   └── index.html          # Standard template backup
├── src/                    # Source files
│   ├── components/         # Reusable React UI Components
│   │   ├── About.jsx       # Personal introduction and statistics cards
│   │   ├── Contact.jsx     # Contact cards and social networks integration
│   │   ├── Experience.jsx  # Interactive education & internship timeline
│   │   ├── Hero.jsx        # Landing hero section with profile image & glowing overlay
│   │   ├── Navbar.jsx      # Navigation bar with responsive mobile menu & theme toggle
│   │   ├── Projects.jsx    # Projects showcase with hover-zoom cards and links
│   │   └── Skills.jsx      # Category-specific skill cards with micro-animations
│   ├── images/             # Media and asset images (profile photos & project previews)
│   │   ├── Nitish.jpg      # Main profile image
│   │   ├── myntra.png.png  # Myntra Clone image preview
│   │   └── ...
│   ├── App.jsx             # Main parent component assembling all sections
│   ├── index.css           # Premium master stylesheet with variable dark/light modes
│   ├── index.js            # Bundle script definition
│   └── index.jsx           # Main React mounting entry point
├── index.html              # Root HTML template with pre-loading theme detector
├── package.json            # Node configuration, scripts, and dependencies
├── vite.config.js          # Vite build tool setup configuration
└── README.md               # Project documentation
```

---

## 🛠️ Tech Stack & Libraries

*   **Core:** React (v18.3.0), HTML5, CSS3 Custom Variables
*   **Build Tool:** Vite (v5.2.11)
*   **Animations:** Framer Motion (v11.0.0)
*   **Icons:** Lucide React (v0.400.0)

---

## 🚀 Getting Started

To launch and run this project locally, execute the following commands in your workspace:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
