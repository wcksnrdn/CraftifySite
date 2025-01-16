'use client'

import React, { JSX, useState } from 'react';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  ShoppingCart,
  Globe,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  Calendar,
  DollarSign,
  Rocket,
  Loader2,
  CheckCircle
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';

type ServiceType = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
};

const QuoteRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [formData, setFormData] = useState({});

   useEffect(() => {
      // Mengubah title saat halaman diakses
      document.title = "Custom Quote - CraftifySite";
    }, []);

  const resetForm = () => {
    // Reset semua state terkait form
    setCurrentStep(1);
    setFormData({}); // Atur ulang form data menjadi kosong atau default
  };

  const services: ServiceType[] = [
    {
      id: 1,
      icon: <Code className="w-6 h-6" />,
      title: "Custom Web Development",
      description: "Professional websites tailored to your needs",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-Commerce Solutions",
      description: "Powerful online stores that drive sales",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Boost your online presence effectively",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  type SpinnerProps = {
    className?: string;
  };
  
  const Spinner: React.FC<SpinnerProps> = ({ className }) => (
    <svg
      className={`animate-spin h-5 w-5 text-white ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  );
  
  const budgetRanges = [
    { id: 'budget1', label: '$1,000 - $5,000', description: 'Basic package' },
    { id: 'budget2', label: '$5,000 - $10,000', description: 'Standard package' },
    { id: 'budget3', label: '$10,000 - $25,000', description: 'Premium package' },
    { id: 'budget4', label: '$25,000+', description: 'Enterprise solution' },
  ];

  const timelineOptions = [
    { id: 'timeline1', label: '1-2 months', description: 'Quick turnaround' },
    { id: 'timeline2', label: '2-4 months', description: 'Standard timeline' },
    { id: 'timeline3', label: '4-6 months', description: 'Complex project' },
    { id: 'timeline4', label: '6+ months', description: 'Long-term development' },
  ];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setCurrentStep(4);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Choose Your Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all ${
                    selectedService === service.id 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-500'
                      : 'bg-white border-2 border-transparent'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className={`bg-gradient-to-r ${service.gradient} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  
                  {selectedService === service.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 bg-blue-500 text-white p-1 rounded-full"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Select Your Budget</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {budgetRanges.map((budget) => (
                <motion.div
                  key={budget.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all ${
                    selectedBudget === budget.id
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-500'
                      : 'bg-white border-2 border-transparent'
                  }`}
                  onClick={() => setSelectedBudget(budget.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center text-white">
                      <DollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{budget.label}</h3>
                      <p className="text-sm text-gray-600">{budget.description}</p>
                    </div>
                  </div>
                  
                  {selectedBudget === budget.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 bg-blue-500 text-white p-1 rounded-full"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Project Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timelineOptions.map((timeline) => (
                <motion.div
                  key={timeline.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-6 rounded-xl cursor-pointer transition-all ${
                    selectedTimeline === timeline.id
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-500'
                      : 'bg-white border-2 border-transparent'
                  }`}
                  onClick={() => setSelectedTimeline(timeline.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-lg flex items-center justify-center text-white">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{timeline.label}</h3>
                      <p className="text-sm text-gray-600">{timeline.description}</p>
                    </div>
                  </div>
                  
                  {selectedTimeline === timeline.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 bg-blue-500 text-white p-1 rounded-full"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for your interest! Our team will review your request and get back to you within 24 hours with a detailed proposal.
            </p>
            <motion.a
              href="/dashboardclient"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Track Your Request
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </motion.div>
        );
    }

    function newFunction() {
      <Navbar />;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== null;
      case 2:
        return selectedBudget !== null;
      case 3:
        return selectedTimeline !== null;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-blue-50 mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            y: [0, 50, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-purple-50 mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            y: [0, -50, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        {currentStep < 4 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                      step === currentStep
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : step < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step < currentStep ? <Check className="w-4 h-4" /> : step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`w-24 h-1 mx-2 rounded ${
                        step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Select Service</span>
              <span>Budget Range</span>
              <span>Timeline</span>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 relative">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          {currentStep < 4 && (
            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center text-gray-600 font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Step
                </motion.button>
              )}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!canProceed() || isSubmitting}
                onClick={() => currentStep === 3
                    ? handleSubmit()
                    : setCurrentStep(currentStep + 1)}
                    className={`flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors ${
                      canProceed() && !isSubmitting
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {currentStep === 3 ? "Submit" : "Next Step"}
                    {currentStep !== 3 && (
                      <ArrowRight className="w-4 h-4 ml-2" />
                    )}
                    {isSubmitting && (
                      <Spinner className="w-4 h-4 ml-2 animate-spin" />
                    )}
                  </motion.button>
                </div>
              )}
    
              {currentStep === 4 && (
                <div className="mt-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
                  <p className="text-gray-600 mt-2">
                    Your submission has been received. We'll get back to you shortly.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={resetForm}
                    className="mt-6 px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Start Over
                  </motion.button>
                </div>
              )}
            </div>
            </div>
            </div>
)
};

export default QuoteRequest;