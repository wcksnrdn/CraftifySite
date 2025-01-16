"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Check, AlertCircle, ArrowRight } from "lucide-react";

const Verify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailFromQuery = params.get("email");
    const tokenFromQuery = params.get("token");
  
    // Set email jika ada
    if (emailFromQuery) setEmail(emailFromQuery);
  
    // Log atau gunakan token jika diperlukan
    if (tokenFromQuery) {
      console.log("Token:", tokenFromQuery); // Gunakan token sesuai kebutuhan
    }
  
    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
  
    // Cleanup function untuk membersihkan timer saat komponen unmount
    return () => clearInterval(timer);
  }, []);
  

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value && element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      (e.currentTarget.parentNode?.children[index - 1] as HTMLInputElement)?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: otp.join("") }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Invalid verification code.");
        return;
      }

      setIsSuccess(true);
      setTimeout(() => router.push("/login"), 1500);
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-white to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden transform transition-all hover:shadow-3xl">
        <div className="md:w-1/2 bg-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <img src="images/imagesverify.jpg" alt="Verification" className="w-32 h-32 md:w-48 md:h-48 object-cover mb-6 transform transition-all hover:scale-105" />
            <h2 className="text-blue-600 text-2xl md:text-3xl font-bold mb-2 text-center">CraftifySite.id</h2>
            <p className="text-blue-200 text-center text-sm md:text-base">
              Secure Your Account with Email Verification
            </p>
          </div>
          
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="md:w-1/2 p-4 sm:p-6 md:p-8 bg-white">
          <form onSubmit={handleVerify} className="space-y-6 md:space-y-8">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Verification Code
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm">
                We have sent a code to:
                <br />
                <span className="font-semibold text-gray-800">{email}</span>
              </p>
              <div className="mt-2 text-xs sm:text-sm text-gray-500">
                Time remaining: <span className="font-medium">{formatTime(timeLeft)}</span>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 justify-center">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 rounded-lg text-center text-lg text-gray-700 sm:text-xl font-semibold 
                    transition-all duration-300 
                    focus:border-blue-500 focus:ring-4 focus:ring-blue-100
                    hover:border-blue-400
                    bg-gray-50"
                />
              ))}
            </div>

            {errorMessage && (
              <div className="flex items-center gap-2 text-red-500 justify-center p-2 sm:p-3 bg-red-50 rounded-lg animate-shake">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-xs sm:text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            {isSuccess && (
              <div className="flex items-center gap-2 text-green-500 justify-center p-2 sm:p-3 bg-green-50 rounded-lg animate-bounce">
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-xs sm:text-sm font-medium">Verification successful!</p>
              </div>
            )}

            <div className="space-y-3 sm:space-y-4">
              <button
                type="submit"
                disabled={isLoading || otp.join("").length !== 6}
                className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-white text-sm sm:text-base transition-all duration-300
                  ${isLoading ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'}
                  ${otp.join("").length !== 6 ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-1 hover:shadow-lg'}
                  flex items-center justify-center gap-2 sm:gap-3
                `}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Verify Code</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </button>

              <button
                type="button"
                disabled={timeLeft > 0}
                className="w-full py-2 sm:py-3 text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm transition-colors
                  disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Resend Code {timeLeft > 0 && `(${formatTime(timeLeft)})`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;