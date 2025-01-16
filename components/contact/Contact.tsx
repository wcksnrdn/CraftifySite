import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Coffee,
  CheckCircle,
  Loader2,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [activeContact, setActiveContact] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@craftifysite.id",
      description: "We'll respond within 24 hours",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+62 812-3456-7890",
      description: "Mon-Fri from 9am to 6pm",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Jakarta, Indonesia",
      description: "Come say hello at our office",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      details: "Start a conversation",
      description: "Available 24/7 for urgent needs",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormStatus('success');
    // Reset form after 3 seconds
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="relative min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-clip-text p-4 text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900">
            Let's Build Something Amazing Together
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to help bring your vision to life. Reach out to us through any of these channels.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setActiveContact(info.title)}
              onHoverEnd={() => setActiveContact(null)}
              className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10"
                style={{ background: `linear-gradient(to right, ${info.gradient})` }}
              />
              <div className={`bg-gradient-to-r ${info.gradient} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-blue-600 font-medium mb-1">{info.details}</p>
              <p className="text-sm text-gray-500">{info.description}</p>
              
              <motion.div
                className="absolute bottom-4 right-4"
                animate={{
                  x: activeContact === info.title ? 0 : 20,
                  opacity: activeContact === info.title ? 1 : 0
                }}
              >
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Project Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>E-Commerce</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
                {formStatus === 'submitting' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {formStatus === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
              <div className="space-y-4">
                {[
                  { title: "Expert Team", desc: "Skilled professionals with years of experience" },
                  { title: "Quick Response", desc: "24/7 support for urgent matters" },
                  { title: "Quality First", desc: "Delivering excellence in every project" },
                  { title: "Affordable", desc: "Competitive pricing with flexible options" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
                  { icon: <Instagram className="w-5 h-5" />, name: "Instagram" },
                  { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
                  { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    {social.icon}
                    <span className="font-medium text-gray-700">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Let's Chat Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold py-6 px-8 rounded-2xl flex items-center justify-center space-x-3"
            >
              <Coffee className="w-6 h-6" />
              <span>Let's discuss over a coffee</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;