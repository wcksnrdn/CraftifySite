import React from 'react';
import { ArrowRight, Sparkles, Star, Zap, Shield, Laptop, ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const topics = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Design",
      description: "Crafted with precision and creativity",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized for peak performance",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade protection",
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Perfect on every device",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="min-h-screen bg-white overflow-hidden relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 relative z-10">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-white text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 transition-transform cursor-pointer">
            <Star className="w-4 h-4 mr-2" />
            <span className="mr-2">Transforming Digital Presence</span>
            <ArrowDownCircle className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-black">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 leading-tight block">
              Craft Your Digital
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-tight block">
              Masterpiece
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-center leading-relaxed">
          Experience the perfect blend of innovation and expertise. We transform your vision into a stunning digital reality that captivates and converts.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <a
            href="/services"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/showcase"
            className="inline-flex items-center justify-center bg-white text-gray-800 font-semibold py-4 px-8 rounded-full border-2 border-gray-200 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View Showcase
          </a>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl ${topic.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;