"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Briefcase,
  Code,
  Mail,
  FileText,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronDown,
  Award,
  Zap,
  Monitor,
  X,
  GraduationCap,
  Briefcase as Certificate,
} from "lucide-react"

import "./App.css"

const App = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    skills: false,
    projects: false,
    degrees: false,
    contact: false,
  })

  // Modal states
  const [imageModal, setImageModal] = useState({
    isOpen: false,
    imageSrc: "",
  })

  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    type: "", // "skill", "project", "degree", or "certification"
    data: null,
  })

  const degrees = [
    {
      title: "Bachelor of Science in Information Systems",
      institution: "Mapua Malayan Colleges Mindanao",
      year: "2025-2029",
      gpa: "3.8/4.0",
      description:
        "Currently studying Information Systems in college at Mapua Malayan Colleges Mindanao, where I am exploring different aspects of technology and how to use it such as website creation, application development, database management, and cybersecurity. I am building a strong foundation in understanding how digital systems work together, while continuously learning modern tools and practices that prepare me for real-world IT solutions like mastering Microsofe Office and Website Development",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Web Development",
        "Computer Networks",
        "Operating Systems",
      ],
      achievements: [],
      skills: "Modern Web Application Architecture: A Comparative Study of React Frameworks",
      imageSrc: "/images/degrees/mapuamalayancollegesmindanao.png",
    }
  ]

  const certifications = [
    {
      title: "Active listening: Enhancing Communication Skills Professional Certificate",
      issuer: "Course",
      issueDate: "August 30, 2025",
      expiryDate: "xxxx-xx-xxxx",
      credentialId: "",
      description:
        "I successfully completed the Active Listening: Enhancing Communication Skills course authorized by Coursera Instructor Network. This training enhanced my ability to engage effectively in conversations by focusing on listening techniques, empathy, and communication strategies. The course emphasized understanding verbal and non-verbal cues, asking meaningful questions, and improving interpersonal connections in both personal and professional settings.",
      skills: ["Active listening", "Effective Communication", "Emphaty", "Critical Thinking", "Questioning Techniques", "Feedback delivery", "Non-verbal Communication", "Conflict Resolution"],
      projects: ["Role playing excercises", "Feedback Sessions", "Case Study Analysis", "Group Discussions", "Self-Reflection Journals"],
      imageSrc: "/images/certifications/activelisteningcertification.png",
      verificationUrl: "https://coursera.org/verify/4MX2V26GEJ6D",
    },
    {
      title: "Microsoft Office Specialist (MOS): Excel Associate (Microsoft 365 Apps)",
      issuer: "Microsoft (officially signed by Satya Nadella, Chief Executive Officer)",
      issueDate: "Semtember 25, 2025",
      expiryDate: "xxxx-xx-xxxx",
      credentialId: "LNT4-S4BS",
      description:
        "I successfully earned the Microsoft Office Specialist (MOS): Excel Associate (Microsoft 365 Apps) certification, demonstrating strong proficiency in Excel essentials and advanced functionalities. This certification validates my ability to create, manage, and analyze data using professional-grade spreadsheets, ensuring accuracy and efficiency in business and academic tasks.",
      skills: ["Excel fundamentals", "Data management", "Formulas & Functions", "Charts & Visualization", "Tables & Ranges", "PivotTables & PivotCharts", "Data Analysis Tools", "Productivity Skills"],
      projects: ["Sales Dashboard", "Expense Tracker", "HR Database", "Data Analysis Report", "Project Timeline"],
      imageSrc: "/images/certifications/excelassociatecertificate.png",
      verificationUrl: "verify.certiport.com",
    }
  ]

  // Skills data
  const skills = [
    {
      name: "React",
      proficiency: 90,
      icon: <Monitor size={32} />,
      description:
        "Extensive experience building modern web applications with React. Proficient in hooks, context API, and state management solutions like Redux and Zustand.",
      projects: ["Portfolio Website", "E-Commerce Platform", "Task Management App"],
      certifications: ["Meta React Developer Certification"],
      yearOfExperience: 3,
    },
    {
      name: "JavaScript",
      proficiency: 85,
      icon: <Code size={32} />,
      description:
        "Strong JavaScript fundamentals with expertise in ES6+ features, asynchronous programming, and DOM manipulation.",
      projects: ["Weather Dashboard", "E-Commerce Platform"],
      certifications: ["JavaScript Advanced Programming"],
      yearOfExperience: 4,
    },
    {
      name: "HTML/CSS",
      proficiency: 95,
      icon: <FileText size={32} />,
      description: "Expert knowledge of semantic HTML and modern CSS including Flexbox, Grid, and CSS animations.",
      projects: ["Portfolio Website", "Weather Dashboard"],
      certifications: ["Frontend Web Development"],
      yearOfExperience: 5,
    },
    {
      name: "Node.js",
      proficiency: 80,
      icon: <Zap size={32} />,
      description:
        "Experienced in building RESTful APIs, authentication systems, and database integrations with Node.js and Express.",
      projects: ["E-Commerce Platform", "Task Management App"],
      certifications: ["Node.js Developer Certification"],
      yearOfExperience: 2,
    },
    {
      name: "UI/UX Design",
      proficiency: 75,
      icon: <Monitor size={32} />,
      description: "Creating user-centered designs with focus on accessibility and intuitive user flows.",
      projects: ["Portfolio Website", "Weather Dashboard"],
      certifications: ["UI/UX Fundamentals"],
      yearOfExperience: 2,
    },
    {
      name: "Responsive Design",
      proficiency: 90,
      icon: <Award size={32} />,
      description: "Implementing mobile-first, responsive layouts that work seamlessly across all device sizes.",
      projects: ["Portfolio Website", "E-Commerce Platform", "Weather Dashboard"],
      certifications: ["Responsive Web Design"],
      yearOfExperience: 4,
    },
  ]

  // Projects data
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A clean, responsive portfolio template for creative professionals",
      tags: ["React", "CSS Animations", "Responsive Design"],
      longDescription:
        "A professionally designed portfolio website built with React and modern CSS techniques. Features smooth animations, responsive layouts, and optimized performance.",
      challenges:
        "Implementing animation sequences that work well across different screen sizes while maintaining performance.",
      solutions:
        "Used Framer Motion for efficient animations and implemented progressive enhancement for older browsers.",
      imageSrc: "/images/projects/portfolio.png",
      demoLink: "https://portfolio-demo.com",
      codeLink: "https://github.com/username/portfolio",
      testimonial: "Mark delivered an exceptional portfolio that perfectly showcases my work and professional brand.",
    },
    {
      title: "Custom Responsive Pop-up Cards for Web",
      desc: "Elevate your website with elegant, responsive pop-up cards. I'll create customized pop-up elements that match your website design perfectly, enhancing user experience while maintaining seamless functionality across all devices.",
      tags: ["React", "CSS Animations", "Responsive Design"],
      longDescription:
        "Transform your website's user engagement with professionally crafted pop-up cards built using React and modern CSS techniques. These interactive elements feature smooth animations, responsive behavior across all devices, and clean design that integrates seamlessly with your existing website aesthetic. Each pop-up component is optimized for performance and accessibility, ensuring a positive experience for all users.",
      challenges:
        "Creating lightweight pop-up components that maintain smooth animations across various device sizes while avoiding performance issues. Ensuring accessibility compliance and developing a flexible system that clients can easily customize to match their brand identity.",
      solutions:
        "Implemented React's Context API for efficient state management, utilized Framer Motion for performant animations, and created a modular architecture allowing for easy customization. Each component was thoroughly tested across different browsers and devices to ensure consistent behavior and optimal performance.",
      imageSrc: "/images/projects/singlepopupcards.png",
      demoLink: "https://singlepopupcards.onrender.com",
      codeLink: "https://github.com/markie311/Andyventures",
      testimonial: "Mark delivered an exceptional portfolio that perfectly showcases my work and professional brand.",
    },
    {
      title: "E-commerce Website",
      desc: "Build a professional, fully-functional e-commerce website tailored to your business needs. I create custom online stores with intuitive shopping experiences, secure payment processing, and responsive design that converts visitors into customers.",
      tags: ["React", "E-commerce", "Responsive Design", "Payment Integration", "Product Management"],
      longDescription:
        "Launch your business online with a comprehensive e-commerce solution built using React and modern web technologies. Your custom store will feature product showcases, shopping cart functionality, secure checkout flows, and inventory management systems. The responsive design ensures seamless shopping experiences across desktop, tablet, and mobile devices, while performance optimizations guarantee fast loading times even with large product catalogs.",
      challenges:
        "Developing a scalable product management system while maintaining fast site performance. Implementing secure payment processing that complies with industry standards. Creating an intuitive user interface that minimizes cart abandonment and maximizes conversion rates.",
      solutions:
        "Utilized React with Redux for efficient state management across the entire shopping journey. Implemented a headless CMS for flexible product management. Integrated secure payment gateways with robust error handling. Created a responsive design system with mobile-first approach, and employed lazy loading techniques to optimize performance with large product catalogs.",
      imageSrc: "/images/projects/ecommerce.png",
      demoLink: "https://vanguard-hjpg.onrender.com",
      codeLink: "https://github.com/markie311/Vanguard",
      testimonial:
        "Our online sales increased by 45% after launching the new e-commerce platform. The intuitive interface, fast checkout process, and mobile responsiveness have dramatically improved our conversion rates. Exceptional work!",
    },
    {
      title: "Book and Travels Website",
      desc: "Create a stunning travel booking website that inspires wanderlust and converts visitors into travelers. I develop customized travel platforms with intuitive booking experiences, secure payment processing, and responsive designs that showcase destinations beautifully across all devices.",
      tags: ["React", "Travel Booking", "Responsive Design", "Payment Integration", "Destination Management"],
      longDescription:
        "Launch your travel business online with a comprehensive booking platform built using React and modern web technologies. Your custom travel site will showcase stunning destinations, feature user-friendly reservation systems, secure payment processing, and itinerary management. The immersive, responsive design creates seamless booking experiences across desktop, tablet, and mobile devices, while performance optimizations ensure fast loading times even when displaying high-resolution destination imagery and complex booking options.",
      challenges:
        "Developing an intuitive booking system that handles complex travel arrangements while maintaining a simple user experience. Implementing secure payment processing for international transactions. Creating visually engaging destination showcases that load quickly and inspire bookings across all device types.",
      solutions:
        "Implemented React with custom hooks for managing the multi-step booking process. Created a flexible destination management system with advanced filtering capabilities. Integrated secure payment gateways supporting multiple currencies. Developed a responsive design system emphasizing destination photography, and implemented progressive image loading for optimal performance with high-resolution travel imagery.",
      imageSrc: "/images/projects/andybon.png",
      demoLink: "https://andyventures.onrender.com",
      codeLink: "https://github.com/markie311/Andyventures",
      testimonial:
        "Our booking conversion rate increased by 60% after launching the new travel website. The stunning destination showcases, streamlined reservation process, and mobile responsiveness have transformed our online business. Our customers frequently comment on how easy and enjoyable the booking experience has become!",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "degrees", "contact"]

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const position = element.getBoundingClientRect()

          if (position.top < window.innerHeight * 0.75 && position.bottom >= 0) {
            setIsVisible((prev) => ({ ...prev, [section]: true }))
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle modal opening for images
  const openImageModal = (imageSrc) => {
    setImageModal({
      isOpen: true,
      imageSrc,
    })
    document.body.style.overflow = "hidden"
  }

  // Handle modal closing for images
  const closeImageModal = () => {
    setImageModal({
      isOpen: false,
      imageSrc: "",
    })
    document.body.style.overflow = "auto"
  }

  // Handle modal opening for skills, projects, degrees, and certifications
  const openInfoModal = (type, data) => {
    setInfoModal({
      isOpen: true,
      type,
      data,
    })
    document.body.style.overflow = "hidden"
  }

  // Handle modal closing for skills, projects, degrees, and certifications
  const closeInfoModal = () => {
    setInfoModal({
      isOpen: false,
      type: "",
      data: null,
    })
    document.body.style.overflow = "auto"
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
  }

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  }

  // Contact form submission function
  function handleContactFormSubmit(event) {
    event.preventDefault()

    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")
    const submitButton = document.querySelector(".contact-form button")

    // Get form data
    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    }

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert("Please provide a valid email address")
      return
    }

    // Disable form elements during submission
    nameInput.disabled = true
    emailInput.disabled = true
    messageInput.disabled = true
    submitButton.disabled = true
    submitButton.textContent = "Sending..."

    // Send the form data to the server
    fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Show success or error message
        if (data.success) {
          alert(data.message)
          // Reset form fields on success
          nameInput.value = ""
          emailInput.value = ""
          messageInput.value = ""
        } else {
          alert(
            "I disabled sending messages through my email due to response reduction efficiency. Contact me on Facebook or on Linkedin instead." ||
              "Something went wrong. Please try again.",
          )
        }
      })
      .catch((error) => {
        console.error("Error:", error)
        alert(
          "I disabled sending messages through my email due to response reduction efficiency. Contact me on Facebook or on Linkedin instead.",
        )
      })
      .finally(() => {
        // Re-enable form elements after submission
        nameInput.disabled = false
        emailInput.disabled = false
        messageInput.disabled = false
        submitButton.disabled = false
        submitButton.textContent = "Send Message"
      })
  }

  // Add event listener to the form
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", handleContactFormSubmit)
    }
  })

  return (
    <div className="portfolio">
      {/* Header/Hero Section */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">YourName</div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#degrees">Degrees & Certifications</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hello, I'm <span className="highlight">I'm Mark Beloy</span>
          </h1>
          <h2>Web Developer & Designer</h2>
          <p>I create beautiful, functional websites that deliver exceptional user experiences.</p>
          <div className="cta-buttons">
            <motion.a href="#projects" className="btn primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View My Work
            </motion.a>
            <motion.a href="#contact" className="btn secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="scroll-indicator" animate={pulseAnimation}>
          <ChevronDown size={32} />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <motion.div
            className="about-content"
            initial="hidden"
            animate={isVisible.about ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div className="about-image" variants={fadeInLeft}>
              <div
                className="image-placeholder"
                onClick={() => openImageModal("/images/profilepictures/profilepicture.jpg")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src="/images/profilepictures/profilepicture.jpg"
                  className="image-placeholder-profilepicture"
                  alt="Profile picture"
                />
              </div>
            </motion.div>
            <motion.div className="about-text" variants={fadeInRight}>
              <h3>Who Am I?</h3>
              <p>
                I'm a passionate web developer with a focus on creating clean, elegant code and intuitive user
                interfaces. With expertise in React, Node.js, and modern front-end technologies, I build responsive
                websites that deliver exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community events.
              </p>
              <div className="social-links">
                <motion.a href="#" className="social-link" whileHover={{ y: -5, backgroundColor: "#2c974b" }}>
                  <Github />
                </motion.a>
                <motion.a href="#" className="social-link" whileHover={{ y: -5, backgroundColor: "#2c974b" }}>
                  <Linkedin />
                </motion.a>
                <motion.a href="#" className="social-link" whileHover={{ y: -5, backgroundColor: "#2c974b" }}>
                  <Twitter />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section alternate">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <motion.div
            className="skills-grid"
            initial="hidden"
            animate={isVisible.skills ? "visible" : "hidden"}
            variants={stagger}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
                onClick={() => openInfoModal("skill", skill)}
                style={{ cursor: "pointer" }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
                <span className="skill-percentage">{skill.proficiency}%</span>
                <div className="view-details">Click for details</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <motion.div
            className="projects-grid"
            initial="hidden"
            animate={isVisible.projects ? "visible" : "hidden"}
            variants={stagger}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                }}
                onClick={() => openInfoModal("project", project)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="project-image"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (project.imageSrc) {
                      openImageModal(project.imageSrc)
                    }
                  }}
                >
                  {project.imageSrc ? (
                    <img
                      src={project.imageSrc || "/placeholder.svg"}
                      alt={project.title}
                      className="project-thumbnail"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <Briefcase size={48} strokeWidth={1} />
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <motion.a
                      href={project.codeLink}
                      className="project-link"
                      whileHover={{ x: 5 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} /> Code
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      className="project-link"
                      whileHover={{ x: 5 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} /> Demo
                    </motion.a>
                  </div>
                  <div className="view-details">Click for project details</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="degrees" className="section alternate">
        <div className="container">
          <h2 className="section-title">Degrees & Certifications</h2>
          <motion.div
            className="degrees-content"
            initial="hidden"
            animate={isVisible.degrees ? "visible" : "hidden"}
            variants={stagger}
          >
            {/* Degrees Subsection */}
            <motion.div className="degrees-subsection" variants={fadeInUp}>
              <h3 className="subsection-title">
                <GraduationCap size={32} style={{ marginRight: "10px", color: "var(--primary-color)" }} />
                Academic Degrees
              </h3>
              <div className="degrees-grid">
                {degrees.map((degree, index) => (
                  <motion.div
                    key={index}
                    className="degree-card"
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    }}
                    onClick={() => openInfoModal("degree", degree)}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="degree-image"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (degree.imageSrc) {
                          openImageModal(degree.imageSrc)
                        }
                      }}
                    >
                      {degree.imageSrc ? (
                        <img
                          src={degree.imageSrc || "/placeholder.svg"}
                          alt={degree.title}
                          className="degree-thumbnail"
                        />
                      ) : (
                        <div className="image-placeholder">
                          <GraduationCap size={48} strokeWidth={1} />
                        </div>
                      )}
                    </div>
                    <div className="degree-content">
                      <h4>{degree.title}</h4>
                      <p className="institution">{degree.institution}</p>
                      <p className="year">{degree.year}</p>
                      <p className="gpa">GPA: {degree.gpa}</p>
                      <div className="view-details">Click for degree details</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Subsection */}
            <motion.div className="certifications-subsection" variants={fadeInUp}>
              <h3 className="subsection-title">
                <Certificate size={32} style={{ marginRight: "10px", color: "var(--primary-color)" }} />
                Professional Certifications
              </h3>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="certification-card"
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    }}
                    onClick={() => openInfoModal("certification", cert)}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="certification-image"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (cert.imageSrc) {
                          openImageModal(cert.imageSrc)
                        }
                      }}
                    >
                      {cert.imageSrc ? (
                        <img
                          src={cert.imageSrc || "/placeholder.svg"}
                          alt={cert.title}
                          className="certification-thumbnail"
                        />
                      ) : (
                        <div className="image-placeholder">
                          <Certificate size={48} strokeWidth={1} />
                        </div>
                      )}
                    </div>
                    <div className="certification-content">
                      <h4>{cert.title}</h4>
                      <p className="issuer">{cert.issuer}</p>
                      <p className="issue-date">Issued: {cert.issueDate}</p>
                      <p className="expiry-date">Expires: {cert.expiryDate}</p>
                      <div className="view-details">Click for certification details</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <motion.div
            className="contact-content"
            initial="hidden"
            animate={isVisible.contact ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.div className="contact-info" variants={fadeInLeft}>
              <h3>Let's Work Together</h3>
              <p>
                I'm currently available for freelance projects or full-time opportunities. If you're interested in
                working together, have a question, or just want to say hello, don't hesitate to reach out!
              </p>
              <div className="contact-details">
                <motion.div className="contact-item" whileHover={{ x: 5 }}>
                  <Mail className="contact-icon" />
                  <span>markiebeloy@example.com</span>
                </motion.div>
                <motion.div className="contact-item" whileHover={{ x: 5 }}>
                  <Linkedin className="contact-icon" />
                  <span>linkedin.com/in/yourname</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="contact-form" variants={fadeInRight}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your Message"></textarea>
              </div>
              <motion.button
                className="btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(event) => handleContactFormSubmit(event)}
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">YourName</div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#degrees">Degrees & Certifications</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="social-links">
              <motion.a href="#" className="social-link" whileHover={{ y: -5, backgroundColor: "#2c974b" }}>
                <Github />
              </motion.a>
              <motion.a href="#" className="social-link" whileHover={{ y: -5, backgroundColor: "#2c974b" }}>
                <Linkedin />
              </motion.a>
              <motion.a href="#" className="social-link" whileHover={{ y: -5, backgroundColor: "#2c974b" }}>
                <Twitter />
              </motion.a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} YourName. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModal.isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="image-modal"
              variants={modalAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeImageModal}>
                <X size={24} />
              </button>
              <img src={imageModal.imageSrc || "/placeholder.svg"} alt="Full size" className="modal-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Modal for Skills, Projects, Degrees, and Certifications */}
      <AnimatePresence>
        {infoModal.isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeInfoModal}
          >
            <motion.div
              className="info-modal"
              variants={modalAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeInfoModal}>
                <X size={24} />
              </button>

              {infoModal.type === "skill" && infoModal.data && (
                <div className="skill-modal-content">
                  <div className="modal-header">
                    <div className="modal-icon">{infoModal.data.icon}</div>
                    <h2>{infoModal.data.name}</h2>
                  </div>

                  <div className="skill-proficiency">
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${infoModal.data.proficiency}%` }}></div>
                    </div>
                    <span className="skill-percentage">{infoModal.data.proficiency}%</span>
                  </div>

                  <div className="modal-section">
                    <h3>Experience</h3>
                    <p>{infoModal.data.yearOfExperience} years</p>
                  </div>

                  <div className="modal-section">
                    <h3>Description</h3>
                    <p>{infoModal.data.description}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Related Projects</h3>
                    <ul className="modal-list">
                      {infoModal.data.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Certifications</h3>
                    <ul className="modal-list">
                      {infoModal.data.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {infoModal.type === "project" && infoModal.data && (
                <div className="project-modal-content">
                  <div className="modal-header">
                    <h2>{infoModal.data.title}</h2>
                  </div>

                  {infoModal.data.imageSrc && (
                    <div className="modal-project-image">
                      <img
                        src={infoModal.data.imageSrc || "/placeholder.svg"}
                        alt={infoModal.data.title}
                        onClick={() => openImageModal(infoModal.data.imageSrc)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  )}

                  <div className="project-tags modal-tags">
                    {infoModal.data.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="modal-section">
                    <h3>Description</h3>
                    <p>{infoModal.data.longDescription}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Challenges & Solutions</h3>
                    <p>
                      <strong>Challenges:</strong> {infoModal.data.challenges}
                    </p>
                    <p>
                      <strong>Solutions:</strong> {infoModal.data.solutions}
                    </p>
                  </div>

                  <div className="modal-section">
                    <h3>Testimonial</h3>
                    <blockquote>"{infoModal.data.testimonial}"</blockquote>
                  </div>

                  <div className="modal-actions">
                    <motion.a
                      href={infoModal.data.codeLink}
                      className="btn secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} style={{ marginRight: "8px" }} /> View Code
                    </motion.a>
                    <motion.a
                      href={infoModal.data.demoLink}
                      className="btn primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} style={{ marginRight: "8px" }} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              )}

              {infoModal.type === "degree" && infoModal.data && (
                <div className="degree-modal-content">
                  <div className="modal-header">
                    <div className="modal-icon">
                      <GraduationCap size={32} />
                    </div>
                    <h2>{infoModal.data.title}</h2>
                  </div>

                  {infoModal.data.imageSrc && (
                    <div className="modal-project-image">
                      <img
                        src={infoModal.data.imageSrc || "/placeholder.svg"}
                        alt={infoModal.data.title}
                        onClick={() => openImageModal(infoModal.data.imageSrc)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  )}

                  <div className="modal-section">
                    <h3>Institution</h3>
                    <p>{infoModal.data.institution}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Duration</h3>
                    <p>{infoModal.data.year}</p>
                  </div>

                  <div className="modal-section">
                    <h3>GPA</h3>
                    <p>{infoModal.data.gpa}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Description</h3>
                    <p>{infoModal.data.description}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Key Coursework</h3>
                    <ul className="modal-list">
                      {infoModal.data.coursework.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Achievements</h3>
                    <ul className="modal-list">
                      {infoModal.data.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Skills</h3>
                    <p>{infoModal.data.skills}</p>
                  </div>
                </div>
              )}

              {infoModal.type === "certification" && infoModal.data && (
                <div className="certification-modal-content">
                  <div className="modal-header">
                    <div className="modal-icon">
                      <Certificate size={32} />
                    </div>
                    <h2>{infoModal.data.title}</h2>
                  </div>

                  {infoModal.data.imageSrc && (
                    <div className="modal-project-image">
                      <img
                        src={infoModal.data.imageSrc || "/placeholder.svg"}
                        alt={infoModal.data.title}
                        onClick={() => openImageModal(infoModal.data.imageSrc)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  )}

                  <div className="modal-section">
                    <h3>Issuing Organization</h3>
                    <p>{infoModal.data.issuer}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Issue Date</h3>
                    <p>{infoModal.data.issueDate}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Expiry Date</h3>
                    <p>{infoModal.data.expiryDate}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Credential ID</h3>
                    <p>{infoModal.data.credentialId}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Description</h3>
                    <p>{infoModal.data.description}</p>
                  </div>

                  <div className="modal-section">
                    <h3>Skills Covered</h3>
                    <ul className="modal-list">
                      {infoModal.data.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3>Related Projects</h3>
                    <ul className="modal-list">
                      {infoModal.data.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-actions">
                    <motion.a
                      href={infoModal.data.verificationUrl}
                      className="btn primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} style={{ marginRight: "8px" }} /> Verify Certificate
                    </motion.a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
