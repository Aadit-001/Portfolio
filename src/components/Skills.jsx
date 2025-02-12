import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const skills = [
    { 
      name: "JavaScript", 
      level: 90, 
      size: "col-span-2 row-span-2",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    { 
      name: "React", 
      level: 85, 
      size: "col-span-1 row-span-2 md:row-span-1", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    { 
      name: "Node.js", 
      level: 80, 
      size: "col-span-2 row-span-1",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "C", 
      level: 75, 
      size: "col-span-1 row-span-2",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },
    { 
      name: "HTML/CSS", 
      level: 95, 
      size: "col-span-2 row-span-1",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    { 
      name: "MongoDB", 
      level: 70, 
      size: "col-span-1 row-span-1",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    { 
      name: "SQL", 
      level: 75, 
      size: "col-span-2 row-span-2",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    { 
      name: "Java", 
      level: 65, 
      size: "col-span-1 row-span-1",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
        name: "Tailwind CSS",
        level: 80,
        size: "col-span-1 row-span-2 md:row-span-3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        name: "Git",
        level: 70,  
        size: "col-span-2 row-span-1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
        name: "GitHub",
        level: 70,
        size: "col-span-2 md:col-span-1 row-span-1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        name: "Docker",
        level: 60,
        size: "col-span-2 row-span-2",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
        name: "Linux",
        level: 60,
        size: "col-span-1 lg:col-span-2 row-span-1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    },
    {
        name: "Figma",
        level: 60,
        size: "col-span-1 md:col-span-2 row-span-1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
        name: "Firebase",
        level: 60,
        size: "col-span-1 md:col-span-2 row-span-1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
        name: "TypeScript",
        level: 60,
        size: "col-span-2 row-span-1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        name:"React Native",
        level: 60,
        size: "col-span-2 row-span-1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        name: "Bootstrap",
        level: 60,
        size: "col-span-1 md:col-span-2 row-span-1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
    }
  ];

  useEffect(() => {
    const handleNavClick = () => {
      const element = document.getElementById('skills');
      element?.scrollIntoView({ behavior: 'smooth' });
    };

    const skillsLink = document.querySelector('a[href="#skills"]');
    skillsLink?.addEventListener('click', handleNavClick);

    return () => {
      skillsLink?.removeEventListener('click', handleNavClick);
    };
  }, []);

  const y = useTransform(scrollYProgress, 
    [0, 1],
    [100, 0]
  );

  const opacity = useTransform(scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.5, 0.8, 1]  
  );

  const scale = useTransform(scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 1.05]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills" 
      ref={containerRef} 
      className="py-24 px-6 bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ 
            y, 
            opacity, 
            scale,
            transformOrigin: 'center center'
          }}
          className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl top-1/4 -left-10 animate-pulse"
        />
      </div>

      <motion.div
        style={{ 
          y, 
          opacity, 
          scale,
          transformOrigin: 'center center'
        }}
        className="max-w-7xl mx-auto z-10 relative"
      >
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-clip-text bg-white tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.1
          }}
          viewport={{ once: true }}
        >
          Professional Skills & Expertise
        </motion.h2>
        <motion.div 
          className="grid grid-cols-3 md:grid-cols-8 auto-rows-[70px] md:auto-rows-[80px] gap-3 p-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ 
                scale: 0.8, 
                opacity: 0, 
                y: 50 
              }}
              whileInView={{ 
                scale: 1, 
                opacity: 1, 
                y: 0 
              }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                scale: 1.00, 
                translateY: 0,
                transition: { duration: 0.2 }
              }}
              className={`${skill.size} bg-gray-800/70 rounded-xl  p-4 flex flex-col justify-center items-center group hover:bg-gray-700/50 transition-all duration-100 hover:shadow-lg hover:shadow-purple-500/20`}
            >
              <div className="md:flex md:items-center md:gap-2 flex flex-col items-center">
                <motion.img 
                  src={skill.logo} 
                  alt={skill.name} 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-100" 
                />
                <h3 className="text-sm font-bold text-center">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;