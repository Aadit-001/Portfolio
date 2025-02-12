import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AditTestimonial from '../assets/AditTestimonial.jpeg'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center px-4 bg-gradient-to-b from-black via-blue-900/20 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight flex md:items-center md:space-x-2 flex-col md:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span>Hi,</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">I'm Aadit Jha</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A passionate Software Developer crafting elegant solutions through code. Specializing in full-stack development and creative UI/UX design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 mb-8"
          >
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>aaditjha8657@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Mumbai, India</span>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 items-center"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Hire Me
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-lg font-semibold border border-blue-500 hover:bg-blue-500/10 transition-all"
            >
              View Projects
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8"
          >
            <a href="https://github.com/Aadit-001/" className="text-2xl text-gray-400 hover:text-blue-500 transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aadit-jha-8b8288255" className="text-2xl text-gray-400 hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="w-96 h-96 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 backdrop-blur-sm">
              <img 
                src={AditTestimonial}
                alt="Profile" 
                className="w-full h-full object-contain bg-gray-300/60"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;