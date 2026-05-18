import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="contact-cards-grid"
      >
        {/* Email Card */}
        <motion.a
          href="mailto:ranjannitish958@gmail.com"
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="contact-card email-card"
        >
          <div className="contact-icon-wrapper">
            <Mail />
          </div>
          <h3>Email Me</h3>
          <p>ranjannitish958@gmail.com</p>
          <span className="contact-action">
            Send Email <ExternalLink size={14} />
          </span>
        </motion.a>

        {/* Phone Card */}
        <motion.a
          href="#"
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="contact-card phone-card"
        >
          <div className="contact-icon-wrapper">
            <Phone />
          </div>
          <h3>Call Me</h3>
          <p>+91-##########</p>
          <span className="contact-action">
            Contact Number <ExternalLink size={14} />
          </span>
        </motion.a>

        {/* Location Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="contact-card location-card"
        >
          <div className="contact-icon-wrapper">
            <MapPin />
          </div>
          <h3>Location</h3>
          <p>New Delhi, India</p>
          <span className="contact-action">
            Local Time: GMT+5:30
          </span>
        </motion.div>
      </motion.div>

      {/* Social Networks Wide Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="social-networks-card"
      >
        <div className="social-card-left">
          <div className="social-pulse-wrapper">
            <span className="social-pulse-dot"></span>
            <span className="social-pulse-ring"></span>
          </div>
          <div className="social-card-text">
            <h4>Connect with me</h4>
            <p>Let's stay connected on professional platforms</p>
          </div>
        </div>
        <div className="social-links-centered">
          <motion.a 
            href="https://www.linkedin.com/in/nitish-ranjan-696714246/" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="social-net-link linkedin-pill"
          >
            <Linkedin className="net-icon" />
            <span className="net-label">LinkedIn</span>
            <ExternalLink className="net-arrow" size={14} />
          </motion.a>
          <motion.a 
            href="mailto:ranjannitish958@gmail.com" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="social-net-link email-pill-bottom"
          >
            <Mail className="net-icon" />
            <span className="net-label">Email Me</span>
            <ExternalLink className="net-arrow" size={14} />
          </motion.a>
          <motion.a 
            href="https://github.com/NitishRanjan958" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="social-net-link github-pill"
          >
            <Github className="net-icon" />
            <span className="net-label">GitHub</span>
            <ExternalLink className="net-arrow" size={14} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;