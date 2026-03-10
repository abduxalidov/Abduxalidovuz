import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SMMServices } from "@/components/SMMServices";
import { TelegramStars } from "@/components/TelegramStars";
import { TelegramPremium } from "@/components/TelegramPremium";
import { Contact } from "@/components/Contact";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-500/30">
      <div className="fixed top-0 left-0 right-0 h-20 bg-background/50 backdrop-blur-md z-40 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">Abdulloh<span className="text-blue-500">.</span></span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Asosiy</a>
            <a href="#xizmatlar" className="hover:text-white transition-colors">Xizmatlar</a>
            <a href="#smm" className="hover:text-white transition-colors">SMM</a>
            <a href="#aloqa" className="hover:text-white transition-colors">Aloqa</a>
          </nav>
        </div>
      </div>

      <main className="pt-20">
        <Hero />
        <Services />
        <SMMServices />
        <TelegramStars />
        <TelegramPremium />
        <Contact />
      </main>

      <Chatbot />

      <footer className="py-8 text-center border-t border-white/5 text-gray-500 mt-20">
        <p>© {new Date().getFullYear()} Abduxalidov Abdulloh. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
};

export default Index;

