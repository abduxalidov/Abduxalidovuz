import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send as SendIcon, Bot } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: "Assalomu alaykum! Men Abdulloh Abduxalidovning AI yordamchisiman. Sizga qanday yordam bera olaman?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const processResponse = (userText: string) => {
    const text = userText.toLowerCase();
    let response = "Kechirasiz, men faqat Abdulloh Abduxalidov va uning xizmatlari haqida ma'lumot bera olaman.";

    if (text.includes("salom") || text.includes("assalom")) {
      response = "Assalomu alaykum! Abdulloh Abduxalidov xizmatlari bo'yicha qanday savolingiz bor?";
    } else if (text.includes("kim") || text.includes("abdulloh") || text.includes("abduxalidov")) {
      response = "Men Abdulloh Abduxalidovman. Web Developer, SMM Specialist va Grafik Dizaynerman. Bizneslar uchun zamonaviy web saytlar, mobil ilovalar va SMM xizmatlari yarataman.";
    } else if (text.includes("xizmat") || text.includes("nima qila")) {
      response = "Mening xizmatlarim:\n- Web sayt yaratish ($20)\n- Logo va Branding ($20)\n- SMM Landing Page ($20)\n- Mobil ilova yaratish ($150)\n- SMM xizmatlari (Telegram va Instagram)";
    } else if (text.includes("narx") || text.includes("qancha") || text.includes("pul")) {
      response = "Narxlar qisqacha:\nWeb sayt, Branding, Landing page: $20 dan.\nMobil ilova: $150 dan.\nSMM (obunachi, prosmotr, like) narxlari SMM bo'limida ko'rsatilgan.";
    } else if (text.includes("aloqa") || text.includes("nomer") || text.includes("bog'lanish") || text.includes("telefon") || text.includes("kontakt")) {
      response = "Men bilan bog'lanish:\nTelegram: @abduxalidov\nTelefon: +998701292010\nInstagram: @abduxalidov";
    } else if (text.includes("buyurtma") || text.includes("zakaz") || text.includes("qanday")) {
      response = "Buyurtma berish jarayoni:\n1. Telegram (@abduxalidov) orqali bog'lanasiz\n2. Loyiha haqida gaplashamiz\n3. Narxni kelishamiz\n4. Ishni boshlaymiz";
    } else if (text.includes("smm") || text.includes("telegram") || text.includes("instagram")) {
      response = "SMM xizmatlariga Telegram va Instagram uchun obunachi (garantli/garantiyasiz), ko'rishlar, layklar va Telegram Premium hamda Stars qo'shish kiradi.";
    } else if (text.includes("tajriba") || text.includes("yil") || text.includes("experience")) {
      response = "Men 4 yillik tajribaga ega web developer va SMM mutaxassisman.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    }, 600);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput("");
    
    processResponse(userText);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 z-50 hover:scale-110 transition-transform"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[380px] h-[500px] bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="bg-white/5 border-b border-white/10 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-tr from-blue-500 to-emerald-400 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">AI Yordamchi</h3>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-sm' 
                      : 'bg-white/10 text-gray-200 rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/20 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Savolingizni yozing..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500 text-white placeholder:text-gray-500"
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center w-12"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

