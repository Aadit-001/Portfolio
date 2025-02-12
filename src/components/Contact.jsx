import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';


const Contact = () => {
  const messageSent = () => {
    toast.success('Message sent successfully!');
  };
  const messageFailed = () => {
    toast.error('Failed to send message.');
  };
  const [formData, setFormData] = useState({
    to_name: 'Aadit Jha',
    from_name: '',
    reply_to: '', 
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_1uly2is',
      'template_ci6v34a', 
      formData,
      'omX8PqAyi3IoIuR8v'
    ).then((result) => {
      console.log(result.text);
      messageSent();
      setFormData({
        to_name: 'Aadit Jha',
        from_name: '',
        reply_to: '', 
        message: ''
      });
    }, (error) => {
      console.error(error.text);
      messageFailed();
    });
  };

  return (
    <>
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-black via-purple-900/20 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-1/4 -right-10 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text bg-white tracking-tight">Let's Connect</h2>
        <motion.form 
          className="space-y-6 bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="reply_to" 
              value={formData.reply_to}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              required
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div> 
    </section>
    <ToastContainer />
    </>
  );
};

export default Contact;