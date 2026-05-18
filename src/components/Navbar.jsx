import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Side - Logo */}
      <motion.div
        className="navbar-logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="logo-icon">
          {/* <span className="logo-bracket">&lt;</span> */}
          <span className="logo-text">✌𝓝𝓡✌</span>
          {/* <span className="logo-bracket">/&gt;</span> */}
        </div>
      </motion.div>

      {/* Center - Navigation */}
      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <motion.a
              href={link.href}
              whileHover={{ color: "#6366f1" }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          </motion.li>
        ))}
      </ul>

      {/* Right Side - CTA */}
      <motion.a
        href="https://drive.google.com/file/d/1nPCBtrliQ8vrXNd0MsX30cRJ7Prywgx0/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Resume</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
      </motion.a>

      {/* Mobile Menu Button */}
      <motion.button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </motion.button>

      {/* Mobile Navigation */}
      <motion.div
        className={`mobile-nav ${isOpen ? "open" : ""}`}
        initial={{ opacity: 0, x: "100%" }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, x: 50 }}
            animate={isOpen ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.08 }}
            whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.15)" }}
          >
            {link.name}
          </motion.a>
        ))}
        <motion.a
          href="https://drive.google.com/file/d/1nPCBtrliQ8vrXNd0MsX30cRJ7Prywgx0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.02 }}
        >
          Resume
        </motion.a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;