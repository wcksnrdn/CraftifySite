"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Palette, 
  Code2, 
  TestTube2, 
  Rocket, 
  HeartHandshake,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Timer,
  Target,
  Users
} from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface ProcessStep {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  stats: Stat[];
  highlights: string[];
}

const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps: ProcessStep[] = [
    {
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      description: "We dive deep into your business goals, market analysis, and user needs to create a comprehensive strategy that aligns with your objectives.",
      icon: <Search className="w-8 h-8" />,
      color: "blue",
      stats: [
        { icon: <Timer className="w-4 h-4" />, value: "2-3", label: "Weeks" },
        { icon: <Target className="w-4 h-4" />, value: "100%", label: "Clarity" },
        { icon: <Users className="w-4 h-4" />, value: "5+", label: "Experts" }
      ],
      highlights: [
        "Stakeholder Interviews",
        "Market Research",
        "Competitor Analysis",
        "User Persona Development"
      ]
    },
    {
      title: "Design & UX",
      subtitle: "Crafting Beautiful Experiences",
      description: "Our award-winning design team creates stunning, intuitive interfaces that captivate users while maintaining perfect functionality.",
      icon: <Palette className="w-8 h-8" />,
      color: "blue",
      stats: [
        { icon: <Timer className="w-4 h-4" />, value: "3-4", label: "Weeks" },
        { icon: <Target className="w-4 h-4" />, value: "UI/UX", label: "Focus" },
        { icon: <Users className="w-4 h-4" />, value: "3+", label: "Designers" }
      ],
      highlights: [
        "Wireframing",
        "Visual Design",
        "Interactive Prototypes",
        "User Testing"
      ]
    },
    {
      title: "Development",
      subtitle: "Building with Excellence",
      description: "Using cutting-edge technologies, we transform designs into robust, scalable, and high-performance digital solutions.",
      icon: <Code2 className="w-8 h-8" />,
      color: "blue",
      stats: [
        { icon: <Timer className="w-4 h-4" />, value: "8-12", label: "Weeks" },
        { icon: <Target className="w-4 h-4" />, value: "Clean", label: "Code" },
        { icon: <Users className="w-4 h-4" />, value: "8+", label: "Developers" }
      ],
      highlights: [
        "Frontend Development",
        "Backend Integration",
        "API Development",
        "Performance Optimization"
      ]
    },
    {
      title: "Testing & QA",
      subtitle: "Ensuring Excellence",
      description: "Rigorous testing procedures ensure your product meets the highest standards of quality, security, and performance.",
      icon: <TestTube2 className="w-8 h-8" />,
      color: "blue",
      stats: [
        { icon: <Timer className="w-4 h-4" />, value: "2-3", label: "Weeks" },
        { icon: <Target className="w-4 h-4" />, value: "100%", label: "Coverage" },
        { icon: <Users className="w-4 h-4" />, value: "4+", label: "QA Experts" }
      ],
      highlights: [
        "Automated Testing",
        "Performance Testing",
        "Security Audits",
        "Cross-platform Testing"
      ]
    },
    {
      title: "Launch",
      subtitle: "Taking Flight",
      description: "We ensure a smooth deployment process and successful launch, with comprehensive monitoring and support.",
      icon: <Rocket className="w-8 h-8" />,
      color: "blue",
      stats: [
        { icon: <Timer className="w-4 h-4" />, value: "1", label: "Week" },
        { icon: <Target className="w-4 h-4" />, value: "24/7", label: "Support" },
        { icon: <Users className="w-4 h-4" />, value: "Full", label: "Team" }
      ],
      highlights: [
        "Deployment Strategy",
        "Performance Monitoring",
        "Launch Checklist",
        "Backup Plans"
      ]
    },
    {
      title: "Growth & Support",
      subtitle: "Continuous Excellence",
      description: "Our commitment doesn't end at launch. We provide ongoing support and optimizations to ensure continuous growth.",
      icon: <HeartHandshake className="w-8 h-8" />,
      color: "blue",
      stats: [
        { icon: <Timer className="w-4 h-4" />, value: "∞", label: "Ongoing" },
        { icon: <Target className="w-4 h-4" />, value: "99.9%", label: "Uptime" },
        { icon: <Users className="w-4 h-4" />, value: "24/7", label: "Support" }
      ],
      highlights: [
        "Regular Updates",
        "Performance Analytics",
        "Growth Strategies",
        "Technical Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6"
          >
            <Sparkles className="w-8 h-8 text-blue-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A refined approach to turning your vision into reality, combining expertise, 
            innovation, and dedication at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200" />

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-16 md:flex items-center justify-center"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6">
                <div className={`w-6 h-6 rounded-full bg-${step.color}-500 z-10 relative`}>
                  <div className={`absolute w-full h-full rounded-full bg-${step.color}-500 animate-ping opacity-20`} />
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 
                    ? 'md:mr-auto md:pr-8' 
                    : 'md:ml-auto md:pl-8'
                } bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer relative`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-${step.color}-100 text-${step.color}-600`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className={`text-${step.color}-600 font-medium mb-2`}>{step.subtitle}</p>
                      <p className="text-gray-600">{step.description}</p>

                      <AnimatePresence>
                        {activeStep === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4"
                          >
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              {step.stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                  <div className={`text-${step.color}-600 mb-1`}>
                                    {stat.icon}
                                  </div>
                                  <div className="font-bold text-gray-900">{stat.value}</div>
                                  <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                              ))}
                            </div>

                            {/* Highlights */}
                            <div className="space-y-2">
                              {step.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <CheckCircle2 className={`w-4 h-4 text-${step.color}-500`} />
                                  <span className="text-gray-700">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button 
                        className={`mt-4 flex items-center gap-2 text-${step.color}-600 font-medium`}
                        onClick={() => setActiveStep(activeStep === index ? null : index)}
                      >
                        {activeStep === index ? "Show Less" : "Learn More"}
                        <ArrowRight className={`w-4 h-4 transform transition-transform ${activeStep === index ? "rotate-90" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Connector Line (visible on mobile only) */}
                <div className="md:hidden absolute w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 left-[28px] top-0 -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessTimeline;