import React, { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Paintbrush,
  Globe,
  ShoppingCart,
  Rocket,
  BarChart,
  Shield,
  Smartphone,
  ChevronRight,
  Check,
  X
} from 'lucide-react';

type Service = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
  features: string[];
  pricing: {
    price: string;
    period: string;
    description: string;
  };
};

const ServiceModal = ({ service, isOpen, onClose }: { 
  service: Service; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-xl z-50 overflow-hidden"
          >
            <div className="relative bg-white">
              <div className={`w-full h-32 bg-gradient-to-r ${service.gradient}`} />
              <div className="absolute top-4 right-4">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="absolute -bottom-8 left-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                  {service.icon}
                </div>
              </div>
            </div>

            <div className="px-6 pt-12 pb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">What's Included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="mt-1">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-gray-900">
                      ${service.pricing.price}
                      <span className="text-sm font-normal text-gray-500">/{service.pricing.period}</span>
                    </p>
                    <p className="text-sm text-gray-500">{service.pricing.description}</p>
                  </div>
                  <motion.a
                    href={`/quote/${service.id}`}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full w-full md:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ServiceCard = ({ service, onClick }: { service: Service; onClick: () => void }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer group"
      whileHover={{ y: -5 }}
      transition={{ type: "tween", duration: 0.2 }}
      onClick={onClick}
    >
      <div className={`bg-gradient-to-r ${service.gradient} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6`}>
        {service.icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

      <div className="space-y-3">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start space-x-2">
            <Check className="w-5 h-5 text-green-500 mt-0.5" />
            <span className="text-gray-600 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center text-blue-600 font-medium">
        Learn More
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <Code className="w-6 h-6" />,
      title: "Custom Web Development",
      description: "Transform your vision into a powerful digital platform with our expert web development services.",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Responsive design implementation",
        "Custom functionality development",
        "Performance optimization",
        "SEO-friendly architecture",
        "Regular maintenance & updates"
      ],
      pricing: {
        price: "1,499",
        period: "project",
        description: "Custom quote based on requirements"
      }
    },
    {
      id: 2,
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-Commerce Solutions",
      description: "Build a powerful online store that drives sales and delivers exceptional shopping experiences.",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Secure payment integration",
        "Inventory management system",
        "Mobile shopping experience",
        "Order tracking system",
        "Customer analytics dashboard"
      ],
      pricing: {
        price: "2,499",
        period: "project",
        description: "Includes setup and training"
      }
    },
    {
      id: 3,
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Boost your online presence and reach your target audience effectively.",
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "SEO optimization",
        "Social media management",
        "Content strategy",
        "Email marketing",
        "Analytics and reporting"
      ],
      pricing: {
        price: "899",
        period: "month",
        description: "3-month minimum commitment"
      }
    },
    {
      id: 4,
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Create stunning mobile applications that engage users and drive results.",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store optimization",
        "Ongoing maintenance"
      ],
      pricing: {
        price: "3,999",
        period: "project",
        description: "Full development lifecycle"
      }
    }
  ];

  return (
    <section className="relative py-20 bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-blue-50 mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-purple-50 mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900">
            Transform Your Digital Presence
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of digital services designed to take your business to the next level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        <ServiceModal
          service={selectedService!}
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? We've got you covered.
          </p>
          <motion.a
            href="/customquote"
            className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold py-3 px-6 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Custom Quote
            <ChevronRight className="w-4 h-4 ml-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;