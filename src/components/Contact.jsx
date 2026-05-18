import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  const itemRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="contact-info"
        >
          <motion.div variants={itemLeftVariants} className="contact-item">
            <Mail /> <span>ranjannitish958@gmail.com</span>
          </motion.div>
          <motion.div variants={itemLeftVariants} className="contact-item">
            <Phone /> <span>##########</span>
          </motion.div>
          <motion.div variants={itemLeftVariants} className="contact-item">
            <MapPin /> <span>New Delhi, India</span>
          </motion.div>
          <motion.div variants={itemLeftVariants} className="social-links">
            <motion.a 
              href="https://www.linkedin.com/in/nitish-ranjan-696714246/" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin />
            </motion.a>
            <motion.a 
              href="https://github.com/NitishRanjan958" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="contact-form"
        >
          <motion.input variants={itemRightVariants} type="text" placeholder="Your Name" />
          <motion.input variants={itemRightVariants} type="email" placeholder="Your Email" />
          <motion.textarea variants={itemRightVariants} placeholder="Your Message" rows="5"></motion.textarea>
          <motion.button 
            variants={itemRightVariants}
            type="submit" 
            className="btn primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;