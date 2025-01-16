import React from "react";
import {
  Code,
  Lightbulb,
  Users,
  Trophy,
  Target,
  Heart,
  Star,
  Coffee,
  CheckCircle,
  Clock,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Trophy className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Support Team", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Expert Team Members", icon: <Users className="w-6 h-6" /> },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver exceptional digital solutions.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Result Driven",
      description: "Our focus is on delivering measurable results that contribute to our clients' success.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Partnership",
      description: "We build lasting relationships, treating every project as a collaborative journey.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Obsessed",
      description: "Every pixel, every line of code, every interaction is crafted to perfection.",
    },
  ];

  const process = [
    "Discovery & Planning",
    "Design & Prototyping",
    "Development & Testing",
    "Launch & Support",
  ];

  return (
    <div className="relative min-h-screen bg-white">
      <section className="relative pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <Code className="w-16 h-16 text-blue-600 mb-6" />
            </div>
            <h1 className="text-4xl md:text-6xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 mb-6">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Welcome to CraftifySite.id, where innovation meets expertise. We transform your digital dreams into stunning realities through creative design and cutting-edge development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
              >
                <div className="text-blue-600 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600">The principles that guide our every decision and action</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl text-white">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-gray-600">How we bring your vision to life</p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2" />
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
                {process.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg text-center relative"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4 mx-auto">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-gray-900">{step}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-600 mb-6">Let's create something amazing together</p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full"
                >
                  Get Started
                  <Coffee className="w-5 h-5 ml-2" />
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;