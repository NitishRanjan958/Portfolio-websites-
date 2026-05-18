import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import ecommerceImg from "../images/ecommerce.png.png";
import myntraImg from "../images/myntra.png.png";
import portfolioImg from "../images/portfolio.png.png";

const projects = [
  {
    title: " Full-Stack E-Commerce Platform",
    description: "Full-stack e-commerce app with React, Node.js, and MongoDB featuring user authentication, product management, and payment integration.",
    image: ecommerceImg,
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" }
    ],
    github: "https://github.com/NitishRanjan958",
    live: "https://cosmoshoponline.netlify.app/"
  },
  {
    title: "Myntra Clone",
    description: "Built a responsive Myntra Clone using MERN Stack with features like product listing, cart, authentication, and modern shopping UI.",
    image: myntraImg,
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" }
    ],
    github: "https://github.com/NitishRanjan958/Myntra_clone",
    live: "https://myntra-clone-nu-vert.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills built with React and Tailwind CSS.",
    image: portfolioImg,
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
    ],
    github: "https://github.com/NitishRanjan958/Portfolio-Website",
    live: "https://deft-raindrop-a0ec9f.netlify.app/"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -15 }}
            className="project-card"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400/1e1e2f/ffffff?text=Image+Not+Found'; }} />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="project-content"
            >
              <motion.h3
                whileHover={{ color: "#6366f1" }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <motion.span
                    key={t.name}
                    className="tech-tag"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#06b6d4", color: "#0a0a0f" }}
                  >
                    {t.logo && (
                      <img 
                        src={t.logo} 
                        alt={t.name} 
                        className={`skill-logo ${t.name === "Express" ? "invert" : ""}`} 
                        style={{ width: '14px', height: '14px', marginRight: '6px' }}
                      />
                    )}
                    {t.name}
                  </motion.span>
                ))}
              </div>
              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} /> Code
                </motion.a>
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} /> Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;