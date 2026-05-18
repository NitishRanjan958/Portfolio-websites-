import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, University } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "MERN STACK Intern",
    University: "Edu Skill Academy",
    period: "Jan 2025 - May 2025",
    description: "Worked on web development using MongoDB, Express.js, React.js, and Node.js. Built responsive websites, REST APIs, and integrated frontend with backend using Git/GitHub for project management."
  },
  {
    type: "education",
    title: "Master of Computer Applications(MCA)",
    University: "AKTU University",
    period: "2024 - 2026",
    description: "Specialized in Software Engineering and Web Technologies."
  },
  {
    type: "education",
    title: "Bachelor of Science Mathematics(B.Sc)",
    University: "LNMU University, Darbhanga",
    period: "2020 - 2023",
    description: "Graduated with a strong foundation in mathematical concepts and analytical skills."
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience & Education
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`timeline-item ${exp.type}`}
          >
            <div className="timeline-icon">
              {exp.type === "work" ? <Briefcase /> : <GraduationCap />}
            </div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.University}</h4>
              <span className="period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;