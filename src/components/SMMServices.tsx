import { motion } from "framer-motion";
import { Send, Instagram, Star, Award } from "lucide-react";

const tgServices = [
  { name: "1000 garantli obunachi", price: "30 000 so'm" },
  { name: "1000 ko'rish", price: "500 so'm" },
  { name: "1000 like", price: "500 so'm" },
  { name: "1000 premium obunachi (1 oylik)", price: "99 000 so'm", highlight: true },
  { name: "1000 garantiyasiz obunachi", price: "2 000 so'm" },
  { name: "1000 story ko'rish", price: "10 000 so'm" },
];

const igServices = [
  { name: "1000 garantli obunachi", price: "25 000 so'm", highlight: true },
  { name: "1000 garantiyasiz obunachi", price: "5 000 so'm" },
  { name: "1000 like", price: "2 000 so'm" },
  { name: "1000 story ko'rish", price: "5 000 so'm" },
  { name: "1000 video ko'rish", price: "1 000 so'm" },
];

export const SMMServices = () => {
  return (
    <section id="smm" className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">SMM <span className="gradient-text">Bo'limi</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Ijtimoiy tarmoqlardagi sahifalaringizni rivojlantirish xizmatlari</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glow-card glow-card-blue rounded-3xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#2AABEE]/20 to-transparent p-6 flex items-center gap-4 border-b border-white/5">
            <div className="bg-[#2AABEE] p-3 rounded-2xl text-white">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Telegram Xizmatlari</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {tgServices.map((item, idx) => (
                <li key={idx} className={`flex justify-between items-center p-3 rounded-xl transition-colors hover:bg-white/5 ${item.highlight ? 'bg-blue-500/10 border border-blue-500/30' : ''}`}>
                  <span className="flex items-center gap-2">
                    {item.highlight && <Star className="w-4 h-4 text-blue-400" />}
                    {item.name}
                  </span>
                  <span className="font-bold whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glow-card rounded-3xl overflow-hidden" style={{ '--glow-color': 'rgba(225,48,108,0.3)' } as React.CSSProperties}
        >
          <div className="bg-gradient-to-r from-[#E1306C]/20 to-transparent p-6 flex items-center gap-4 border-b border-white/5">
            <div className="bg-gradient-to-tr from-[#F56040] to-[#E1306C] p-3 rounded-2xl text-white">
              <Instagram className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">Instagram Xizmatlari</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {igServices.map((item, idx) => (
                <li key={idx} className={`flex justify-between items-center p-3 rounded-xl transition-colors hover:bg-white/5 ${item.highlight ? 'bg-pink-500/10 border border-pink-500/30' : ''}`}>
                  <span className="flex items-center gap-2">
                    {item.highlight && <Star className="w-4 h-4 text-pink-400" />}
                    {item.name}
                  </span>
                  <span className="font-bold whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-card glow-card-gold rounded-3xl lg:col-span-2 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
        >
          <div className="flex items-center gap-4">
            <Award className="w-12 h-12 text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Qo'shimcha Xizmatlar</h3>
              <p className="text-gray-400">Telegram Stars va Telegram Premium sotib olish imkoniyati mavjud</p>
            </div>
          </div>
          <a href="#aloqa" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors font-medium whitespace-nowrap border border-white/10">
            Narxlarni bilish
          </a>
        </motion.div>
      </div>
    </section>
  );
};

