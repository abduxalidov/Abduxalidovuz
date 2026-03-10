import { motion } from "framer-motion";
import { Send, Phone, Instagram, Megaphone } from "lucide-react";

export const Contact = () => {
  const contacts = [
    {
      title: "Telegram (Personal)",
      value: "@abduxalidov",
      link: "https://t.me/abduxalidov",
      icon: Send,
      color: "hover:bg-blue-500/20 hover:border-blue-500/50"
    },
    {
      title: "Telegram Kanal",
      value: "@web_xizmatlarim",
      link: "https://t.me/web_xizmatlarim",
      icon: Megaphone,
      color: "hover:bg-cyan-500/20 hover:border-cyan-500/50"
    },
    {
      title: "Instagram",
      value: "@abduxalidov",
      link: "https://instagram.com/abduxalidov",
      icon: Instagram,
      color: "hover:bg-pink-500/20 hover:border-pink-500/50"
    },
    {
      title: "Telefon",
      value: "+998 70 129 20 10",
      link: "tel:+998701292010",
      icon: Phone,
      color: "hover:bg-emerald-500/20 hover:border-emerald-500/50"
    }
  ];

  return (
    <section id="aloqa" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="gradient-text">Aloqa</span></h2>
        <p className="text-muted-foreground">Loyihangizni birgalikda muhokama qilamiz</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, idx) => (
          <motion.a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 1, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-6 rounded-2xl flex items-center gap-6 group transition-all duration-300 ${contact.color}`}
          >
            <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
              <contact.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-1">{contact.title}</h4>
              <p className="text-lg font-bold text-white">{contact.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
      
      <div className="mt-20 text-center glass-card p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4">Ishni qanday boshlaymiz?</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-300">
          <div className="flex items-center gap-2"><span className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white">1</span> Bog'lanish</div>
          <div className="hidden md:block w-8 h-px bg-white/20"></div>
          <div className="flex items-center gap-2"><span className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white">2</span> Muhokama</div>
          <div className="hidden md:block w-8 h-px bg-white/20"></div>
          <div className="flex items-center gap-2"><span className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white">3</span> Kelishuv</div>
          <div className="hidden md:block w-8 h-px bg-white/20"></div>
          <div className="flex items-center gap-2"><span className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white">4</span> Natija</div>
        </div>
      </div>
    </section>
  );
};

