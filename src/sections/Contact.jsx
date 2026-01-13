import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          from_name: formData.name,
          to_name: "Aman",
          from_email: formData.email,
          to_email: "amank225566@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#030412] py-20 overflow-hidden"
    >
      {/* CSS Override for the "Ugly White" Autofill Background */}
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: white;
          -webkit-box-shadow: 0 0 0px 1000px #030412 inset; /* Matches your bg color */
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      {/* 1. PARTICLES */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          className="absolute inset-0 w-full h-full"
          quantity={120} 
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>

      {/* ALERT - Moved down to top-24 to avoid being cut off */}
      {showAlert && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-4">
          <Alert type={alertType} text={alertMessage} />
        </div>
      )}

      {/* 2. MAIN CONTAINER */}
      <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: Headline */}
          <div className="md:pr-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight">
              Let's start a <br />
              <span className="text-gray-500">project together.</span>
            </h2>
            <div className="h-px w-24 bg-white/20 my-8" />
            <p className="text-gray-400 text-lg leading-relaxed">
               Interested in working together? Fill out the form and I'll get back to you as soon as possible.
            </p>
            
            <div className="mt-12 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-gray-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</span>
                    <span className="text-lg">amank225566@gmail.com</span>
                </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  What's your name?
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-gray-700 focus:outline-none focus:ring-0 focus:border-white transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-gray-700 focus:outline-none focus:ring-0 focus:border-white transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">
                  Tell me about it
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I need a..."
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white placeholder-gray-700 focus:outline-none focus:ring-0 focus:border-white transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-4 group flex items-center gap-4 text-white text-xl font-medium hover:text-gray-300 transition-colors cursor-pointer"
              >
                 {isLoading ? (
                     <span>Sending...</span>
                 ) : (
                     <>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <img src="assets/arrow-up.svg" className="w-5 h-5 invert rotate-45" alt="send" />
                        </div>
                        <span>Send Message</span>
                     </>
                 )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;