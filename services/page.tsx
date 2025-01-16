"use client";

import React, { JSX, useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
import FAQSection from './faqsection';
import OurProcess from './ourprocess';
import Testimonial from './testimonial';
import { 
  CheckCircle, 
  Package, 
  Rocket,
  ArrowRight,
  Clock,
  Code,
  PenTool,
  Sparkles,
  Zap,
  Globe,
  ShieldCheck,
  Database,
  Layout,
  Search,
  Smartphone,
  Settings,
  Users,
  Pencil,
  Bug
} from 'lucide-react';
import { FaPeopleCarry, FaQq } from 'react-icons/fa';
import Footer from '@/components/footer/Footer';

type ServiceCategory = 'web-development' | 'optimization' | 'maintenance';

const serviceDetails: Record<ServiceCategory, { 
  title: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  techStack: string[]; 
  icon: JSX.Element; 
  additionalOptions: { title: string; price: string; }[]; 
}[]> = {
  'web-development': [],
  'optimization': [],
  'maintenance': [],
};

const categories: { id: ServiceCategory; name: string }[] = [
  { id: 'web-development', name: 'Web Development' },
  { id: 'optimization', name: 'Optimization' },
  { id: 'maintenance', name: 'Maintenance' },
];

const GetStarted = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('web-development');

   useEffect(() => {
      // Mengubah title saat halaman diakses
      document.title = "Services - CraftifySite";
    }, []);

  const categories = [
    {
      id: 'web-development',
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 'optimization',
      title: 'Web Optimization',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'maintenance',
      title: 'Maintenance',
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const serviceDetails = {
    'web-development': [
      {
        title: "Landing Page Pro",
        price: "$299",
        duration: "1-2 weeks",
        features: [
          "Custom Single-Page Design",
          "Mobile-First Approach",
          "Up to 5 Content Sections",
          "Contact Form Integration",
          "Basic SEO Setup",
          "Social Media Links",
          "Google Analytics Integration",
          "2 Rounds of Revisions",
          "Basic Performance Optimization",
          "SSL Certificate"
        ],
        techStack: ["React/Next.js", "Tailwind CSS", "Responsive Design"],
        icon: <Layout className="w-6 h-6" />,
        additionalOptions: [
          { title: "Additional Page", price: "$99" },
          { title: "Custom Animation", price: "$149" },
          { title: "Blog Setup", price: "$199" }
        ]
      },
      {
        title: "Business Website",
        price: "$799",
        duration: "2-3 weeks",
        features: [
          "Up to 8 Custom Pages",
          "Advanced Design System",
          "Content Management System",
          "Blog Integration",
          "Newsletter Setup",
          "Advanced Contact Forms",
          "Custom Google Maps",
          "Multi-language Support",
          "Advanced SEO Package",
          "Social Media Integration",
          "Performance Optimization",
          "Browser Compatibility",
          "3 Rounds of Revisions",
          "1 Month Support"
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        icon: <Database className="w-6 h-6" />,
        additionalOptions: [
          { title: "E-commerce Integration", price: "$399" },
          { title: "Custom Admin Dashboard", price: "$299" },
          { title: "Advanced Analytics", price: "$199" }
        ]
      },
      {
        title: "E-commerce Platform",
        price: "$1,499",
        duration: "4-6 weeks",
        features: [
          "Unlimited Products",
          "Custom Product Pages",
          "Shopping Cart",
          "Payment Gateway Integration",
          "Order Management System",
          "Customer Accounts",
          "Inventory Management",
          "Advanced Search",
          "Product Categories",
          "Wishlist Feature",
          "Review System",
          "Related Products",
          "Multiple Payment Options",
          "Order Tracking",
          "Email Notifications",
          "Admin Dashboard",
          "Sales Analytics",
          "Security Features",
          "4 Rounds of Revisions",
          "3 Months Support"
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe", "Redis"],
        icon: <Package className="w-6 h-6" />,
        additionalOptions: [
          { title: "Multi-vendor Setup", price: "$499" },
          { title: "Advanced Analytics", price: "$299" },
          { title: "Mobile App", price: "$999" }
        ]
      }
    ],
    'optimization': [
      {
        title: "Performance Boost",
        price: "$399",
        duration: "1 week",
        features: [
          "Core Web Vitals Optimization",
          "Image Optimization",
          "Code Minification",
          "Caching Implementation",
          "CDN Setup",
          "Lazy Loading",
          "Database Optimization",
          "Server-side Rendering",
          "Performance Monitoring",
          "Detailed Report"
        ],
        techStack: ["Lighthouse", "WebPageTest", "Next.js", "Redis"],
        icon: <Zap className="w-6 h-6" />,
        additionalOptions: [
          { title: "Advanced Caching", price: "$199" },
          { title: "Custom CDN Setup", price: "$299" }
        ]
      },
      {
        title: "SEO Master",
        price: "$599",
        duration: "2 weeks",
        features: [
          "Technical SEO Audit",
          "Meta Tags Optimization",
          "Schema Markup",
          "XML Sitemap",
          "Robots.txt Configuration",
          "301 Redirects",
          "Broken Link Fixing",
          "Content Optimization",
          "Mobile Optimization",
          "Local SEO Setup",
          "Speed Optimization",
          "Analytics Setup",
          "Monthly Report"
        ],
        techStack: ["Next.js", "Schema.org", "Google Search Console", "Analytics"],
        icon: <Search className="w-6 h-6" />,
        additionalOptions: [
          { title: "Content Strategy", price: "$299" },
          { title: "Link Building", price: "$399" }
        ]
      }
    ],
    'maintenance': [
      {
        title: "Essential Care",
        price: "$199/month",
        duration: "Monthly",
        features: [
          "Weekly Backups",
          "Security Monitoring",
          "Uptime Monitoring",
          "Performance Monitoring",
          "Bug Fixes",
          "Content Updates",
          "Technical Support",
          "Monthly Reports",
          "SSL Management",
          "Basic SEO Monitoring"
        ],
        techStack: ["Vercel", "GitHub", "CloudFlare"],
        icon: <ShieldCheck className="w-6 h-6" />,
        additionalOptions: [
          { title: "Daily Backups", price: "$99/month" },
          { title: "24/7 Support", price: "$299/month" }
        ]
      },
      {
        title: "Premium Support",
        price: "$499/month",
        duration: "Monthly",
        features: [
          "Daily Backups",
          "24/7 Monitoring",
          "Priority Support",
          "Security Hardening",
          "Performance Optimization",
          "Regular Updates",
          "Feature Additions",
          "Analytics Reporting",
          "SEO Maintenance",
          "Content Management",
          "User Training",
          "Monthly Strategy Call",
          "Emergency Support",
          "Custom Development Hours"
        ],
        techStack: ["Vercel", "GitHub", "CloudFlare", "New Relic"],
        icon: <Users className="w-6 h-6" />,
        additionalOptions: [
          { title: "Custom Development", price: "$999/month" },
          { title: "Marketing Integration", price: "$399/month" }
        ]
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <>
      <Navbar />
      <motion.div 
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Expert Web Development Services
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900">
                Choose Your Perfect Solution
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple landing pages to complex e-commerce platforms, we deliver tailored solutions that exceed expectations
            </p>
          </motion.div>

         {/* Category Selection */}
            <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 justify-center mb-12 md:flex md:space-x-4 text-[9px] md:text-[20px]"
            >
            {categories.map((category, index) => (
                <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as ServiceCategory)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300
                    ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-blue-600 border border-gray-200'}`}
                >
                <span className="ml-[-10px] mr-[5px] md:mr-2 md:ml-[0]">{category.icon}</span>
                {category.title}
                </button>
            ))}
            </motion.div>

          {/* Plans Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {serviceDetails[selectedCategory].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer
                  ${selectedPlan === index 
                    ? 'border-2 border-blue-500 shadow-2xl scale-105' 
                    : 'border border-gray-100 shadow-xl hover:shadow-2xl'}`}
                onClick={() => setSelectedPlan(index)}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`p-3 rounded-xl bg-gradient-to-br 
                    ${index === 0 ? 'from-blue-500 to-cyan-500' :
                      index === 1 ? 'from-purple-500 to-pink-500' :
                      'from-yellow-500 to-orange-500'} 
                    text-white`}>
                    {service.icon}
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="ml-2 text-gray-500">
                      {service.duration.includes('month') ? '/ month' : '/ project'}
                    </span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Options */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Add-ons Available</h4>
                    <ul className="space-y-2">
                      {service.additionalOptions.map((option, i) => (
                        <li key={i} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{option.title}</span>
                          <span className="text-gray-900 font-medium">{option.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                <button 
                  onClick={() => window.location.href = `/payments?service=${encodeURIComponent(service.title)}&category=${selectedCategory}`}
                  className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transition-shadow flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div 
            variants={itemVariants} 
            initial="hidden" 
            animate="visible" 
            className="relative z-10 mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Why Choose Our Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 px-4 md:px-0">
              {[
                {
                  title: "Expert Development",
                  description: "Our team consists of experienced developers who stay up-to-date with the latest technologies.",
                  icon: <Code className="w-14 h-14 text-blue-500" />
                },
                {
                  title: "Timely Delivery",
                  description: "We commit to delivering your project on schedule without compromising quality.",
                  icon: <Clock className="w-14 h-14 text-purple-500" />
                },
                {
                  title: "Ongoing Support",
                  description: "We provide continuous support and maintenance after project completion.",
                  icon: <CheckCircle className="w-14 h-14 text-green-500" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                  }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  {/* Icon Section */}
                  <div className="mb-6 flex items-center justify-center">
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-center leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
         <OurProcess />
         <Testimonial />
         <FAQSection />

         {/* Bottom CTA */}
         <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 mb-20 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our team of experts can build a tailored solution that perfectly matches your unique requirements and goals
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/contact" className="inline-flex items-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-full hover:shadow-xl transition-shadow">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/portfolio" className="inline-flex items-center border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
                View Our Portfolio
                <Sparkles className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default GetStarted;