"use client";

import React, { useEffect } from 'react';
import {
    Code,
    Lightbulb,
    Users,
    Trophy,
    Target,
    Heart,
    Star,
    CheckCircle,
    Clock,
    Rocket,
    Globe,
    Shield,
    Zap,
    Award,
    History,
    MessageCircle,
    Plus,
    Minus,
    Banknote,
    Clock4,
    Building2,
    FileCheck,
    Languages,
    Handshake
  } from "lucide-react";
import { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

interface Visibility {
    stats: boolean;
    'why-choose-us': boolean; 
    values: boolean;
    achievements: boolean;
    'our-story':boolean;
    faq: boolean;
  }  

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState<Visibility>({ 
        stats: false,
        "why-choose-us": false,
        values: false,
        achievements: false,
        'our-story': false,
        faq: false,
    });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "CraftifySite - About Us";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "150+", label: "Projects Completed", icon: <Trophy className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Support Team", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Expert Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description:
        "We push boundaries and embrace cutting-edge technologies to deliver exceptional digital solutions that set new industry standards."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Result Driven",
      description: 
        "Our focus is on delivering measurable results that contribute to our clients' success, backed by data-driven decisions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Partnership",
      description: 
        "We build lasting relationships, treating every project as a collaborative journey, ensuring your vision becomes reality."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Obsessed",
      description: 
        "Every pixel, every line of code, every interaction is crafted to perfection, following industry best practices."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: 
        "We implement robust security measures in every project, ensuring your digital assets are protected against modern threats."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: 
        "Speed is crucial in today's digital world. We optimize every project for maximum performance and minimal loading times."
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Digital Excellence Award",
      description: "Recognized for outstanding web development services"
    },
    {
      year: "2023",
      title: "Best Tech Innovation",
      description: "Awarded for revolutionary AI-driven solutions"
    },
    {
      year: "2022",
      title: "Client Choice Award",
      description: "Voted best web development company by clients"
    }
  ];

  const specialties = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Custom Web Development",
      points: ["React & Next.js Expertise", "Progressive Web Apps", "E-commerce Solutions"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Solutions",
      points: ["SSL Implementation", "Security Audits", "DDoS Protection"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      points: ["Multi-language Support", "CDN Integration", "24/7 Availability"]
    }
  ];

  const faqs = [
    {
      icon: <Building2 className="w-5 h-5" />,
      question: "What type of companies do you work with?",
      answer: "We work with businesses of all sizes - from startups to established enterprises. Our clients come from various industries including e-commerce, education, healthcare, technology, and more. Whether you're a small business looking to establish your online presence or a large corporation needing a digital transformation, we have the expertise to help you succeed."
    },
    {
      icon: <Clock4 className="w-5 h-5" />,
      question: "How long does it typically take to complete a website?",
      answer: "Project timelines vary depending on complexity and requirements. A simple website might take 2-4 weeks, while more complex projects could take 2-3 months or more. During our initial consultation, we'll provide a detailed timeline based on your specific needs. We always ensure transparent communication about project progress and milestones."
    },
    {
      icon: <Banknote className="w-5 h-5" />,
      question: "What are your payment terms?",
      answer: "We offer flexible payment plans tailored to project size. Typically, we require a 40% upfront deposit to begin work, with the remaining balance split into milestone payments. We accept various payment methods including bank transfer, credit cards, and digital payments. For ongoing maintenance projects, we offer monthly subscription plans."
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      question: "Do you provide website maintenance services?",
      answer: "Yes! We offer comprehensive website maintenance packages that include regular updates, security monitoring, performance optimization, content updates, and technical support. Our maintenance plans can be customized based on your needs, ensuring your website remains secure, up-to-date, and performing optimally."
    },
    {
      icon: <Languages className="w-5 h-5" />,
      question: "Can you create multilingual websites?",
      answer: "Absolutely! We specialize in developing multilingual websites that cater to global audiences. Our solutions include proper SEO optimization for each language, content management systems that support multiple languages, and culturally appropriate design adaptations. We ensure seamless language switching and maintenance of content across all languages."
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      question: "What makes CraftifySite different from other web development companies?",
      answer: "CraftifySite stands out through our commitment to personalized service, technical excellence, and results-driven approach. We assign dedicated project managers to each client, use cutting-edge technologies, provide 24/7 support, and focus on creating solutions that drive real business growth. Our team consists of certified experts, and we have a proven track record of successful projects across various industries."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50">
        <Navbar />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" id="hero" data-animate>
            <div className="inline-block animate-bounce">
              <Code className="w-16 h-16 text-blue-600 mb-6" />
            </div>
            <h1 className="text-4xl md:text-6xl p-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mb-6 animate-pulse">
              Transforming Digital Dreams Into Reality
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to CraftifySite.id, where innovation meets expertise. We're not just another web development company – we're your partners in digital transformation, crafting exceptional digital experiences that drive real business results.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20" id="stats" data-animate>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                  isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
                <div className="relative">
                  <div className="text-blue-600 mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Our Story Section - NEW */}
      <section className="py-20 bg-white" id="our-story" data-animate>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <History className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover how CraftifySite became your trusted partner in web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className={`space-y-6 ${isVisible['our-story'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Founded in 2019</h3>
                <p className="text-gray-600">
                  CraftifySite was born from a simple yet powerful idea: to make professional web development services accessible to everyone. Starting with a small team of passionate developers, we've grown into a full-service digital agency.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  We're here to bridge the gap between your digital aspirations and reality. Whether you're a startup needing a website or an established business requiring a digital transformation, we're your dedicated partner.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Growing Together</h3>
                <p className="text-gray-600">
                  From our humble beginnings, we've helped over 150 businesses establish their online presence. Each project has added to our expertise and strengthened our commitment to excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl aspect-square flex items-center justify-center text-white text-center transform transition-all duration-500 hover:scale-105 ${
                    isVisible['our-story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div>
                    <div className="font-bold text-2xl mb-2">
                      {index === 1 ? '5+' : index === 2 ? '150+' : index === 3 ? '24/7' : '100%'}
                    </div>
                    <div className="text-sm">
                      {index === 1 ? 'Years Experience' : index === 2 ? 'Projects Delivered' : index === 3 ? 'Support' : 'Commitment'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

          {/* Why Choose Us */}
          <div className="mb-20" id="why-choose-us" data-animate>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CraftifySite?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                In a world full of digital agencies, here's what makes us stand out
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:shadow-2xl ${
                    isVisible['why-choose-us'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{specialty.title}</h3>
                  <ul className="space-y-3">
                    {specialty.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20" id="values" data-animate>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600">The principles that drive our excellence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                    isVisible['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
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

          {/* Achievements Timeline */}
          <div className="mb-20" id="achievements" data-animate>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-gray-600">Milestones that mark our journey of excellence</p>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2" />
              
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'} ${
                    isVisible['achievements'] ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-sm text-blue-600 font-semibold mb-2">{achievement.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>

        {/* Add this new FAQ section before the final CTA section */}
        <section className="py-20 bg-transparent" id="faq" data-animate>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <MessageCircle className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about working with CraftifySite
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                    isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg text-white">
                        {faq.icon}
                      </div>
                      <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                    </div>
                    <div className="text-blue-600 flex-shrink-0">
                      {openFaq === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <a
                href="/contact-us"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-shadow"
              >
                Get in Touch
                <MessageCircle className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

          {/* CTA Section */}
          <div className="text-center" id="cta" data-animate>
            <div className="bg-white rounded-2xl p-12 shadow-xl relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Digital Presence?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have trusted us with their digital journey. Let's create something extraordinary together.
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full hover:shadow-lg transition-shadow"
                  >
                    Start Your Project
                    <Rocket className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center border-2 border-blue-600 text-blue-600 font-semibold py-4 px-8 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    View Our Work
                    <Star className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutSection;