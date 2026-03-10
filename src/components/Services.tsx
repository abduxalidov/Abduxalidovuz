import { motion, Variants } from "framer-motion";
import { Code, PenTool, Smartphone, MonitorPlay } from "lucide-react";

const services = [
  {
    title: "Web sayt yaratish",
    price: "$20",
    description: "Biznes uchun zamonaviy responsiv web sahifalar. Tez, xavfsiz va chiroyli dizayn.",
    icon: Code,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Logo va Branding",
    price: "$20",
    description: "Logo dizayn va brend identifikatsiya yaratish. Kompaniyangiz yuzini shakllantiramiz.",
    icon: PenTool,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "SMM Landing Page",
    price: "$20",
    description: "Telegram va Instagram marketing uchun maxsus landing page. Konversiyani oshiring.",
    icon: MonitorPlay,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Mobil ilova yaratish",
    price: "$150",
    description: "Android yoki iOS uchun oddiy mobil ilovalar ishlab chiqish. Foydalanuvchi uchun qulay interfeys.",
    icon: Smartphone,
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export const Services = () => {
  return (
    <section id="xizmatlar" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Mening <span className="gradient-text">Xizmatlarim</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Biznesingizni rivojlantirish uchun eng yaxshi yechimlar</p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glow-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-bold text-white bg-white/10 px-4 py-1 rounded-full backdrop-blur-md">
                  {service.price}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 flex-grow">{service.description}</p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <a href="#aloqa" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Buyurtma berish <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

