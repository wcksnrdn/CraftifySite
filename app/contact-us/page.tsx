"use client";

import React, { useState, useEffect } from 'react';
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
  Linkedin,
  Globe,
  Calendar,
  Rocket,
  Users,
  Award,
  Target,
  Languages,
  Crown,
  Video,
  Gift,
  PieChart,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState('WIB');
  const [currentTime, setCurrentTime] = useState('');
  const [activeTab, setActiveTab] = useState('message');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      // Mengubah title saat halaman diakses
      document.title = "CraftifySite - Contact Us";
    }, []);
  // Update current time based on selected timezone
  useEffect(() => {
    const timer = setInterval(() => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: selectedTimeZone === 'WIB' ? 'Asia/Jakarta' : 'UTC',
        hour12: false,
      });
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedTimeZone]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@craftifysite.id",
      description: "We'll respond within 24 hours",
      gradient: "from-blue-500 to-cyan-500",
      action: "Send Email",
      available: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+62 812-3456-7890",
      description: "Mon-Fri from 9am to 6pm",
      gradient: "from-purple-500 to-pink-500",
      action: "Call Now",
      available: true
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Jakarta, Indonesia",
      description: "Come say hello at our office",
      gradient: "from-yellow-500 to-orange-500",
      action: "Get Directions",
      available: true
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      details: "Start a conversation",
      description: "Available 24/7 for urgent needs",
      gradient: "from-green-500 to-emerald-500",
      action: "Chat Now",
      available: true
    }
  ];

  const achievements = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team Members" },
    { number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Solutions Inc.",
      content: "Working with CraftifySite was a game-changer for our business. Their team delivered beyond our expectations!",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Sarah Johnson",
      company: "Creative Studios",
      content: "Exceptional service and attention to detail. They truly understand what clients need.",
      avatar: "/api/placeholder/100/100"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormStatus('success');
    setIsLoading(false);
    
    // Reset form after 3 seconds
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="relative min-h-screen bg-white">
        <Navbar />
      {/* Header Section with Animated Background */}
      <motion.div
      className=''
      ></motion.div>
      <motion.div 
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              className="inline-block p-2 bg-blue-100 rounded-full mb-4"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-8 h-8 text-blue-600" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mb-6 p-4">
              Let's Create Something Extraordinary
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your digital presence? Our team of experts is here to bring your vision to life with cutting-edge solutions and unparalleled support.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold text-blue-600">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Contact Methods Tabs */}
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8 mt-12">
            {['message', 'schedule', 'quote'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                } font-medium transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'message' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">First Name</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Last Name</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Project Type</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                          <option>Custom Website Development</option>
                          <option>E-commerce Solution</option>
                          <option>Web Application</option>
                          <option>Mobile App Development</option>
                          <option>UI/UX Design</option>
                          <option>Digital Marketing</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Budget Range</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                          <option>$1,000 - $5,000</option>
                          <option>$5,000 - $10,000</option>
                          <option>$10,000 - $25,000</option>
                          <option>$25,000+</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Tell us about your project goals and requirements..."
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

                  {/* Additional Information */}
                  <div className="space-y-6">
                    {/* Office Hours & Time Zones */}
                    <motion.div
                      className="bg-white rounded-2xl p-8 shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Office Hours</h2>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span className="text-lg font-semibold">{currentTime}</span>
                          <select
                            value={selectedTimeZone}
                            onChange={(e) => setSelectedTimeZone(e.target.value)}
                            className="text-sm border-none bg-transparent"
                          >
                            <option value="WIB">WIB</option>
                            <option value="UTC">UTC</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <span className="font-medium">Monday - Friday</span>
                          <span className="text-gray-600">9:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <span className="font-medium">Saturday</span>
                          <span className="text-gray-600">10:00 - 15:00</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <span className="font-medium">Sunday</span>
                          <span className="text-red-500">Closed</span>
                        </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                        * Emergency support is available 24/7 for priority clients
                      </p>
                    </motion.div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {contactInfo.map((contact, index:number) => (
                        <motion.div
                          key={index}
                          className={`bg-gradient-to-br ${contact.gradient} p-6 rounded-2xl text-white cursor-pointer relative overflow-hidden`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setActiveContact(index)}
                        >
                          <div className="absolute top-0 right-0 mt-2 mr-2">
                            {contact.available && (
                              <span className="flex items-center bg-white/20 rounded-full px-2 py-1 text-xs">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                                Available
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-start space-x-4">
                            {contact.icon}
                            <div>
                              <h3 className="font-semibold mb-1">{contact.title}</h3>
                              <p className="text-white/90 text-sm mb-2">{contact.details}</p>
                              <p className="text-white/75 text-xs mb-4">{contact.description}</p>
                              <button className="flex items-center space-x-1 text-sm bg-white/20 hover:bg-white/30 rounded-lg px-3 py-1.5 transition-colors">
                                <span>{contact.action}</span>
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                      className="bg-white rounded-2xl p-8 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                          { icon: <Facebook className="w-6 h-6" />, label: "Facebook", color: "blue" },
                          { icon: <Instagram className="w-6 h-6" />, label: "Instagram", color: "pink" },
                          { icon: <Twitter className="w-6 h-6" />, label: "Twitter", color: "sky" },
                          { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", color: "blue" }
                        ].map((social, index) => (
                          <motion.a
                            key={index}
                            href="#"
                            className={`flex flex-col items-center justify-center p-4 rounded-xl bg-${social.color}-50 hover:bg-${social.color}-100 transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className={`text-${social.color}-500 mb-2`}>{social.icon}</div>
                            <span className={`text-${social.color}-700 text-sm font-medium`}>{social.label}</span>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              {activeTab === 'schedule' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Consultation</h2>
                  <p className="text-gray-600 mb-8">
                    Book a free 30-minute consultation with our experts to discuss your project needs and goals.
                  </p>
                  {/* Add calendar scheduling component here */}
                  <div className="flex items-center justify-center p-12 border-2 border-dashed border-gray-200 rounded-xl">
                    <div className="text-center">
                      <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      <p className="text-gray-500">Calendar integration coming soon</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'quote' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Quick Quote</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { icon: <Rocket />, title: "Fast Turnaround", text: "Get your quote within 24 hours" },
                      { icon: <Target />, title: "Tailored Solutions", text: "Customized to your needs" },
                      { icon: <Award />, title: "Best Value", text: "Competitive and transparent pricing" }
                    ].map((feature, index) => (
                      <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                        <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                  {/* Add quote calculator or form here */}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;