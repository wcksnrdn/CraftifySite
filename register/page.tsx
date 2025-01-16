"use client";

import { useEffect, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, UserPlus, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSymbol: false,
  });
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const router = useRouter();

  // Cek apakah pengguna sudah login ketika halaman dimuat
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Jika token ada, redirect ke halaman utama
      router.push("/");
    }
  }, [router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    if (name === "password") {
      setPasswordStrength({
        length: value.length >= 8,
        hasUppercase: /[A-Z]/.test(value),
        hasLowercase: /[a-z]/.test(value),
        hasNumber: /\d/.test(value),
        hasSymbol: /[!@#$%^&*]/.test(value),
      });
    }
  };  

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      confirmPassword: value,
    }));
  };

  const handlePasswordFocus = () => setIsPasswordFocused(true);
  const handlePasswordBlur = () => setIsPasswordFocused(false);

  // Di dalam handleSubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification({ message: '', type: '' });
  
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        if (response.status === 409) {
          throw new Error('Email already registered');
        }
        throw new Error(data.message || 'Registration failed');
      }
  
      // Kirim permintaan kode verifikasi
      const verifyResponse = await fetch('http://localhost:5000/send-verification-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email, // Pastikan email terkirim
        }),
      });
  
      if (!verifyResponse.ok) {
        throw new Error('Failed to send verification code');
      }
  
      // Notifikasi sukses registrasi dan pengiriman kode
      setNotification({
        message: 'Registration successful! Verification code sent to your email.',
        type: 'success',
      });
  
      window.location.href = `/verify?email=${encodeURIComponent(formData.email)}&token=${encodeURIComponent(data.token)}`;
  
      // Reset form
      setFormData({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      if (error instanceof Error) {
        setNotification({
          message: error.message || 'Error during registration',
          type: 'error',
        });
      } else {
        setNotification({
          message: 'An unexpected error occurred',
          type: 'error',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };  

  const isPasswordValid =
    passwordStrength.length &&
    passwordStrength.hasUppercase &&
    passwordStrength.hasLowercase &&
    passwordStrength.hasNumber &&
    passwordStrength.hasSymbol;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center p-8"
        >
          <motion.img
            src="/images/imagesformregist.jpg"
            alt="Register Illustration"
            className="w-full h-64 object-cover rounded-lg mb-6"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1 
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-serif text-[20px] text-gray-800">Join</span>{" "}
            <span className="font-serif text-[50px] text-blue-500">CratifySite.id</span>
          </motion.h1>
          <p className="text-lg text-gray-400 italic">
            "Start your journey with us today."
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-white backdrop-blur-lg bg-opacity-95 rounded-2xl p-8 relative"
        >
         <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8"
        >
          <span className="text-gray-500 lowercase font-serif">create</span>{" "}
          <span className="text-gray-700 text-[15px] normal-case">your</span>{" "}
          <span className="text-blue-600 font-extrabold font-serif">Account</span>
        </motion.h2>

          {/* Animated Notification */}
          <AnimatePresence>
            {notification.message && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mb-4 p-4 rounded-lg flex items-center ${
                  notification.type === "success" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}
              >
                {notification.type === "success" ? (
                  <CheckCircle2 className="mr-2" size={20} />
                ) : (
                  <AlertCircle className="mr-2" size={20} />
                )}
                {notification.message}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 rounded-lg border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:bg-white"
                placeholder="Enter your full name"
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 rounded-lg border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:bg-white"
                placeholder="Enter your email"
                required
              />
            </motion.div>
            {/* Password Section with Floating Strength Indicator */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  className="w-full px-4 py-3 text-gray-700 rounded-lg border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:bg-white"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Floating Password Strength Indicator */}
              <AnimatePresence>
                {isPasswordFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-full"
                  >
                    {Object.entries(passwordStrength).map(([key, value]) => (
                      <motion.div
                        key={key}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className={`flex items-center ${
                          value ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {value ? "✔️" : "❌"}{" "}
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .toLowerCase()
                          .replace(/^./, (str) => str.toUpperCase())}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
                {/* Confirm Password Input */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
              >
              <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleConfirmPasswordChange}
                onFocus={() => setIsConfirmPasswordFocused(true)}
                onBlur={() => setIsConfirmPasswordFocused(false)}
                className="w-full px-4 py-3 text-gray-700 rounded-lg border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:bg-white"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password Match Indicator */}
            <AnimatePresence>
              {isConfirmPasswordFocused && formData.confirmPassword && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute z-10 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 w-[20rem]"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`flex items-center ${
                      formData.password === formData.confirmPassword
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {formData.password === formData.confirmPassword ? "✔️" : "❌"} {" "}
                    {formData.password === formData.confirmPassword
                      ? "Passwords match"
                      : "Passwords do not match"}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
              </motion.div>
                {/* Enhanced Register Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || !isPasswordValid}
                  className={`w-full py-3 px-4 rounded-lg text-white flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isLoading || !isPasswordValid
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <UserPlus size={20} />
                      <span>Register</span>
                    </>
                  )}
                </motion.button>

                {/* Rest of the form content remains the same */}
              </form>

              <div className="flex items-center justify-center my-4">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <motion.p 
                className="text-center text-sm text-gray-500"
                whileHover={{ scale: 1.02 }}
              >
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                  Log in
                </a>
              </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;

function setErrorMessage(arg0: string) {
  throw new Error('Function not implemented.');
}
