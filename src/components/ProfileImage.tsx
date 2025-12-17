import { motion } from "motion/react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    /* O container agora comanda o Slide e o Fade para que tudo suba junto */
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group w-64 h-64"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full rounded-full object-cover border-4 border-dracula-orange shadow-lg relative z-10"
      />

      {/* 
        O Anel Laranja (Sua 'Prop' de herança) 
        Agora ele acompanha o movimento porque o pai está animado
      */}
      <div className="absolute inset-0 rounded-full border-2 border-dracula-orange/20 scale-110 group-hover:scale-105 transition-transform duration-500 z-0" />
    </motion.div>
  );
}