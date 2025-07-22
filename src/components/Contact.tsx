import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MessageCircle, Send, Sparkles } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tv0rl5o', 'template_z9nuyi7', e.target, 'SYWbIl8SuKzJ7OS0N')
      .then((result) => {
        alert('Message sent!');
      }, (error) => {
        alert('Failed to send message.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/Pavan-Aditya-Kumar-Gorrela', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/pavan-aditya-kumar-gorrela-857770271/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <MessageCircle className="w-6 h-6" />, href: 'https://wa.me/+916304228639', label: 'WhatsApp', color: 'hover:text-sky-400' },
    { icon: <Mail className="w-6 h-6" />, href: 'mailto:pavanadityakumarg2004@gmail.com', label: 'Email', color: 'hover:text-green-400' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on exciting full-stack projects or discuss machine learning innovations? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 peer"
                  placeholder=" "
                />
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.name ? 'top-2 text-xs text-blue-400' : 'top-3 text-gray-400'
                  } peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400`}
                >
                  Your Name
                </motion.label>
              </div>

              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 peer"
                  placeholder=" "
                />
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.email ? 'top-2 text-xs text-blue-400' : 'top-3 text-gray-400'
                  } peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400`}
                >
                  Email Address
                </motion.label>
              </div>

              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 peer resize-none"
                  placeholder=" "
                />
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.message ? 'top-2 text-xs text-blue-400' : 'top-3 text-gray-400'
                  } peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-400`}
                >
                  Your Message
                </motion.label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                className="hoverable w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : submitted ? (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in new opportunities, whether it's building innovative web applications, 
                developing ML solutions, or contributing to cutting-edge research projects.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hoverable p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 ${social.color}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-green-900/20 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Available for</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Full-stack web development projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Machine learning consulting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Research collaborations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Speaking engagements
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Response time: Usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;