import { motion } from "motion/react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto sm:mt-5"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full rounded-full object-cover border-4 border-dracula-orange shadow-[0_0_20px_rgba(255,184,108,0.3)] relative z-10"
      />
      <div className="absolute inset-0 rounded-full border-2 border-dracula-orange/30 scale-110 group-hover:scale-125 transition-transform duration-700 ease-in-out z-0 animate-pulse" />
    
      <div className="absolute inset-0 rounded-full bg-dracula-orange/5 blur-xl scale-105 group-hover:scale-115 transition-transform duration-500 z-0" />
    </motion.div>
  );
}
