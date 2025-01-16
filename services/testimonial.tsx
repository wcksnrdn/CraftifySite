"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

const Testimonial = () => {
    return (
            <motion.div 
            variants={itemVariants} 
            initial="hidden" 
            animate="visible" 
            className="relative z-10 mb-20"
            >
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
                What Our Clients Say
            </h2>
            
            {/* Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12 z-10">
                {[
                {
                    name: "John Doe",
                    role: "CEO, TechCorp",
                    feedback:
                    "Working with this team was a seamless experience. They delivered the project ahead of time with top-notch quality. Highly recommend their services!",
                    image: "/path/to/john.jpg",
                    rating: 5
                },
                {
                    name: "Jane Smith",
                    role: "Project Manager, BuildIt",
                    feedback:
                    "The team provided exceptional support and maintained great communication throughout the project. Our system is running flawlessly!",
                    image: "/path/to/jane.jpg",
                    rating: 4
                },
                {
                    name: "Samuel Lee",
                    role: "CTO, InnovateX",
                    feedback:
                    "Their expertise and attention to detail helped us overcome complex challenges. Truly a game-changing experience for our company.",
                    image: "/path/to/samuel.jpg",
                    rating: 5
                }
                ].map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
                >
                    {/* Image */}
                    <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s photo`}
                    className="w-20 h-20 rounded-full mb-6 object-cover border-4 border-gray-100 shadow-md"
                    />
                    
                    {/* Name and Role */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic mb-4">{testimonial.role}</p>
                    
                    {/* Feedback */}
                    <p className="text-gray-600 text-center leading-relaxed mb-6">
                    "{testimonial.feedback}"
                    </p>
                    
                </div>
                ))}
            </div>
            </motion.div>
    );
};

export default Testimonial;