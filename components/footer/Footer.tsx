"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Globe,
  Clock,
  Shield,
  Award,
  MessageCircle,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-blue-900 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CraftifySite.id
              </span>
            </div>
            <p className="text-gray-300">
              Transforming digital visions into stunning realities. Expert web development services tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-4">
              {[
                { icon: <Globe className="w-4 h-4" />, text: "Web Development" },
                { icon: <Shield className="w-4 h-4" />, text: "Website Security" },
                { icon: <Award className="w-4 h-4" />, text: "SEO Optimization" },
                { icon: <Clock className="w-4 h-4" />, text: "24/7 Support" },
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center group">
                    <span className="mr-2 text-blue-400">{item.icon}</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Tech Street, Digital Valley
                  Silicon City, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">contact@webjoki.com</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">Live Chat Available</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                />
              </div>
              <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg transition-shadow flex items-center justify-center group">
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© 2025 CraftifySite. Made with</span>
              <Heart className="w-4 h-4 text-red-400 inline" />
              <span>in Digital Valley</span>
            </div>
            <div className="flex space-x-6 text-gray-300">
              <a href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/termsofservice" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: <Award className="w-6 h-6" />, text: "Top Rated Agency 2025" },
            { icon: <Shield className="w-6 h-6" />, text: "Certified Developer" },
            { icon: <Globe className="w-6 h-6" />, text: "Global Recognition" },
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2"
            >
              <span className="text-blue-400">{badge.icon}</span>
              <span className="text-sm text-gray-300">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
