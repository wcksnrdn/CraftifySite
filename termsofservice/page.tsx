"use client";

import React from 'react';
import { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';

const TermsOfService = () => {
    useEffect(() => {
        document.title = "CraftifySite - Terms Of Service";
    }, []);
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800 drop-shadow-lg">Terms of Service</h1>
        <p className="text-gray-700 mb-6 text-center">
          Effective Date: <strong>January 7, 2025</strong>
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 border-b-2 border-purple-400 pb-2">Introduction</h2>
          <p className="text-gray-600 mb-4">
            Welcome to CraftifySite.id! By accessing our website, you agree to comply with and be bound by these Terms of Service. Please read them carefully before using our services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 border-b-2 border-purple-400 pb-2">Use of Our Services</h2>
          <p className="text-gray-600 mb-4">
            Our services are intended for individuals who are at least 18 years old. By using our services, you confirm that you meet this age requirement.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            <li>You may not use our services for any illegal or unauthorized purpose.</li>
            <li>You agree to comply with all applicable laws and regulations.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 border-b-2 border-purple-400 pb-2">Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content, trademarks, and other intellectual property displayed on CraftifySite.id are owned or licensed by us. You may not use, reproduce, or distribute any of our materials without our express written permission.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 border-b-2 border-purple-400 pb-2">Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            To the fullest extent permitted by law, CraftifySite.id shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of our services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 border-b-2 border-purple-400 pb-2">Governing Law</h2>
          <p className="text-gray-600 mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising out of or in connection with these terms shall be submitted to the exclusive jurisdiction of the courts of Indonesia.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 border-b-2 border-purple-400 pb-2">Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new terms on this page, with an updated effective date at the top.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800 border-b-2 border-purple-400 pb-2">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> support@craftifysite.id
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </div>
        
        <div className="flex justify-center mt-6">
          <img src="/images/terms-image.svg" alt="Terms of Service" className="h-48" />
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
