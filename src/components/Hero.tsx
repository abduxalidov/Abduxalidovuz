import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl"
      >
        <div className="mb-6 relative inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 mx-auto">
            <img 
              src={profileImg} 
              alt="Abduxalidov Abdulloh" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-blue-500 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Men <span className="gradient-text">Abdulloh Abduxalidov</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
          Web Developer | SMM Specialist | Grafik Dizayner
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed glass-card p-6 rounded-2xl">
          Biznesingiz uchun zamonaviy web saytlar, mobil ilovalar va SMM xizmatlari bilan shug'ullanaman. 
          Raqamli olamda o'z o'rningizni topishda sizga yordam beraman.
        </p>

        <motion.div 
          className="mt-10 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#aloqa" className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Bog'lanish
          </a>
          <a href="#xizmatlar" className="glass-card px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
            Xizmatlar
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

