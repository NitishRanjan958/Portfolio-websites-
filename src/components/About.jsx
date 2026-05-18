import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="about-section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Frontend Developer with knowledge of HTML, CSS, JavaScript, React.js, and responsive web design. Passionate about
building modern and user-friendly web applications. Quick learner with strong problem-solving skills and the ability to work
in team environments. Seeking an opportunity to enhance technical skills and contribute to innovative projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="about-stats"
        >
          <div className="stat">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Technologies</p>
          </div>
          <div className="stat">
            <h3>7</h3>
            <p>CGPA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;