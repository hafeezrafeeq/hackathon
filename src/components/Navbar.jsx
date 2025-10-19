import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // 🔹 Scroll Hide/Show Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // 👇 Scrolling down — hide navbar
                setShow(false);
            } else {
                // 👆 Scrolling up — show navbar
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const boxVariants = {
        hidden: { top: 0, opacity: 0 },
        visible: { top: 200, opacity: 1 },
    };

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: show ? 0 : -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 z-[999] w-full backdrop-blur-md py-5 px-6 md:px-12 lg:px-14 flex font-[r-neue] items-center justify-between text-white transition-transform duration-500"
        >
            {/* Logo */}
            <div className="logo">
                <div className="logo">
                    <h1 className="font-[founders] text-4xl">StartUP.AI</h1>
                </div>
            </div>

            {/* Desktop Links */}
            <motion.div
                variants={boxVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
                className="hidden md:flex gap-8 text-lg font-[neue]"
            >
                {["Home ", "About Us", "Services", "Insights",].map(
                    (item, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            className={`relative pb-[4px] `}
                            initial="rest"
                            whileHover="hovered"
                            animate="rest"
                        >
                            {item}
                            <motion.span
                                variants={{
                                    rest: { width: 0 },
                                    hovered: { width: "100%" },
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="absolute left-0 bottom-0 h-[2px] bg-[#f1f1f1]"
                            />
                        </motion.a>
                    )
                )}

                
            </motion.div>


  
        <Link 
          to="/login" 
          className="bg-zinc-900  hover:bg-zinc-800 px-8 py-2 border-2 border-stone-400 rounded-4xl font-[neue] text-lg transition-all duration-200 inline-block"
        >
         Create Account
        </Link>
      




            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl transition-transform duration-300"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full font-[neue] bg-black flex flex-col items-center gap-4 py-6 md:hidden animate-slideDown">
                    {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
                        (item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="hover:text-gray-300 transition"
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>
            )}
        </motion.div>
    );
}

export default Navbar;
