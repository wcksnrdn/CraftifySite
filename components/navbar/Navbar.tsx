"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaClipboardList,
  FaInfoCircle,
  FaEnvelope,
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { User, LogOut, Settings } from "lucide-react";

interface GoogleUser {
  name?: string;
  picture?: string;  // Google biasanya menggunakan 'picture' untuk profile image
  email?: string;
}

interface NavbarItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface ProfileDropdownProps {
  profilePic: string | null;
  userName: string | null;
  onLogout: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, label, icon }) => (
      <motion.a
      href={href}
      className="relative flex items-center px-4 py-2 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative flex items-center z-10">
        {icon && (
          <motion.span
            className="mr-2 text-indigo-600 group-hover:text-violet-500"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.span>
        )}
        <span className="font-medium tracking-wide text-gray-700 group-hover:text-indigo-600 transition-colors duration-200">
          {label}
        </span>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
    );
  
  const ProfileDropdownProps: React.FC<ProfileDropdownProps> = ({ profilePic, userName, onLogout }) => {
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    const dropdownVariants = {
      hidden: { opacity: 0, y: -20, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -20, scale: 0.95 }
    };
  
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-3 rounded-full hover:bg-gray-100 p-2 transition-colors duration-200"
        >
          <div className="relative">
            <img
              src={profilePic || "/images/profilepicturedefault.png"}
              alt={userName || "Profile"}
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
              onError={(e) => {
                e.currentTarget.src = "/images/profilepicturedefault.png";
              }}
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-700">{userName}</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
  
        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 border border-gray-100 transition-all duration-200 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="text-sm text-gray-500">Signed in as</p>
              <p className="font-medium text-gray-900">{userName}</p>
            </div>
            
            <a 
              href="/profile" 
              className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <User size={18} />
              <span>View Profile</span>
            </a>
            
            <a 
              href="/settings" 
              className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <Settings size={18} />
              <span>Settings</span>
            </a>
            
            <div className="border-t border-gray-100 mt-2">
              <button
                onClick={onLogout}
                className="flex items-center space-x-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors duration-200 w-full"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };


const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // Cek data pengguna dari login manual
        const manualUserData = localStorage.getItem("user");
        if (manualUserData) {
          const user = JSON.parse(manualUserData);
          setIsLoggedIn(true);
          setProfilePic(user.profilePic);
          setUserName(user.fullname || "User");
          return;
        }

        // Cek data pengguna dari login Google
        const googleUserData = localStorage.getItem("google_user");
        if (googleUserData) {
          const user: GoogleUser = JSON.parse(googleUserData);
          console.log('Google user data:', user);
          setIsLoggedIn(true);
          setProfilePic(user.picture || null);  // Gunakan properti 'picture'
          setUserName(user.name || "User");
        }
      } catch (error) {
        console.error("Error reading user data:", error);
      }
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const googleUserData = urlParams.get('google_user');

    if (token && googleUserData) {
      try {
        const user: GoogleUser = JSON.parse(decodeURIComponent(googleUserData));
        localStorage.setItem('token', token);
        localStorage.setItem('google_user', JSON.stringify({
          name: user.name,
          picture: user.picture,  // Pastikan menyimpan picture URL
          email: user.email
        }));
        
        setIsLoggedIn(true);
        setProfilePic(user.picture || null);
        setUserName(user.name || "User");
        
        // Bersihkan URL
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch (error) {
        console.error('Error parsing Google user data:', error);
      }
    }
  }, []);

  // Debug useEffect untuk memantau perubahan profilePic
  useEffect(() => {
    console.log('Profile picture updated:', profilePic);
  }, [profilePic]);

  const handleLogout = async () => {
    try {
      if (session) {
        await signOut({ redirect: false });
      }
      
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("google_user");
      
      setIsLoggedIn(false);
      setProfilePic(null);
      setUserName(null);
      
      router.push('/login');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <motion.a
              href="/"
              className="text-3xl font-bold font-playfair relative group"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                CraftifySite
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 rounded-lg blur-lg transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.a>
          </motion.div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-16">
            <NavbarItem href="/" label="Home" icon={<FaHome />} />
            <NavbarItem href="/services" label="Services" icon={<FaClipboardList />} />
            <NavbarItem href="/about-us" label="About" icon={<FaInfoCircle />} />
            <NavbarItem href="/contact-us" label="Contact" icon={<FaEnvelope />} />
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <ProfileDropdownProps
                profilePic={profilePic}
                userName={userName}
                onLogout={handleLogout}
              />
            ) : (
              <motion.a
                href="/login"
                className="relative inline-flex items-center px-8 py-3 font-semibold text-white rounded-full overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <FaSignInAlt className="mr-2 relative z-10" />
                <span className="relative z-10">Login</span>
              </motion.a>
            )}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-blue-500 focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
            </motion.div>
          </motion.button>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-gray-100"
              >
                <div className="px-4 py-3 space-y-2">
                  <NavbarItem href="/" label="Home" icon={<FaHome />} />
                  <NavbarItem href="/services" label="Services" icon={<FaClipboardList />} />
                  <NavbarItem href="/about-us" label="About" icon={<FaInfoCircle />} />
                  <NavbarItem href="/contact" label="Contact" icon={<FaEnvelope />} />
                  
                  {isLoggedIn ? (
                    <>
                      <div className="border-t border-gray-100 pt-3">
                        <NavbarItem href="/profile" label="Profile" icon={<FaUser />} />
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors font-poppins"
                        >
                          <FaSignOutAlt />
                          <span>Logout</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <motion.a
                      href="/login"
                      className="block w-full text-center bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors font-poppins mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Login
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;