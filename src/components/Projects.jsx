import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Rdental from '../assets/RDental.png';
import EquityElite from '../assets/equityelite.png';
import ScannerOMR from '../assets/ScannerOMR.png';
import Portfolio from '../assets/Portfolio.png';
import drop_game from '../assets/drop_game.png';
import FusionMedia from '../assets/FusionMedia.png';
import {FaGithub} from 'react-icons/fa';
// import TaskManager from '../assets/TaskManager.png';
// import {fireDB} from '../firebase/firebaseConfig';
// import { getDocs, collection } from 'firebase/firestore';
// import { useEffect, useState } from 'react';

const Projects = () => {

  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const getProjects = async () => {
  //     const projectsCollection = collection(fireDB, 'projects');
  //     const projectsSnapshot = await getDocs(projectsCollection);
  //     const projects = projectsSnapshot.docs.map((doc) => doc.data());
  //     setProjects(projects);
  //   }
  //   getProjects();
  // }, [])

  const projects = [
    {
      title: "R-Dental",
      description: "A comprehensive web application built with React and Node.js for a dental product supplier",
      tech: ["React", "Node.js", "Express", "Firebase", "Tailwind CSS","Git", "GitHub","Firestore"],
      image: Rdental, 
      live: "yes",
      link: "https://rdental.in",
      // gitLink: "https://github.com/Aadit-001/Rdental"
    },
    {
      title: "Fusion Media",
      description: "A freelancing project for Fusion Media which is a digital marketing agency",
      tech: ["React","Tailwind CSS","Git","GitHub","Figma"],
      image: FusionMedia, 
      link: "https://fusionmedias.in",
      live: "yes",
      gitLink: "https://github.com/Aadit-001/FusionMediaa"
    },
    {
      title: "Equity Elite",
      description: "A Social Media Web Application for traders and Stock Market Analysts",
      tech: ["React", "Node.js","MongoDB","ExpressJs", "Tailwind CSS","Git", "GitHub"],
      image: EquityElite, 
      link: "https://equityelite0.web.app",
      live: "yes",
      gitLink: "https://github.com/Aadit-001/EquityElite"
    },

    {
      title: "ScannerOMR",
      description: "A web application integrated with flask and OpenCV for OMR sheet scanning.",
      tech: ["React", "Flask", "OpenCV","ML", "Tailwind CSS","Git", "GitHub"],
      image: ScannerOMR, 
      // live: "yes",
      // link: "https://scanneromr.vercel.app/",
      gitLink: "https://github.com/Aadit-001/ScannerOMR"
    },
    {
      title: "Portfolio", 
      description: "A portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS", "Git", "GitHub"],
      image: Portfolio,
      link: "https://portfolioaadit.web.app/",
      gitLink: "https://github.com/Aadit-001/Portfolio"
    },
    {
      title: "Ball Drop Game",
      description: "A HTML, CSS and JavaScript project",
      tech: ["HTML", "CSS", "JavaScript", "Git","GitHub"],
      image: drop_game,
      link: "",
      gitLink: "https://github.com/Aadit-001/drop_game"
    },
    
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-black via-blue-900/20 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-1/4 -right-10 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto z-10 relative"
      >
        <div className="text-center">
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-white tracking-tight">All Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <div className="relative group">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={project.link? project.link : project.gitLink} className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors">
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-bold">{project.title}</h3>
                  {project.live && (
                    <div className="bg-red-500 px-2 py-1 w-[20%] text-center rounded-full text-xs font-medium">
                      Live
                    </div>
                  )}
                  {project.gitLink && <a href={project.gitLink} className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"><FaGithub />Github</a>}
                </div>
                <p className="text-gray-300 mb-4 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 10).map(tech => (
                    <span key={tech} className="bg-white/50 px-2 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 10 && (
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                      +{project.tech.length - 10}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
          >
          <Link
            to="/allprojects"
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center gap-2"
            >
            Explore All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;