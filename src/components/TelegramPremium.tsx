import { motion, Variants } from "framer-motion";
import { Crown, ExternalLink, Check } from "lucide-react";

const premiumPlans = [
  { duration: "1 oy", price: "45 000 so'm" },
  { duration: "3 oy", price: "165 000 so'm" },
  { duration: "6 oy", price: "220 000 so'm", best: true },
  { duration: "12 oy", price: "380 000 so'm" },
];

const features = [
  "4 GB fayl yuklash",
  "Premium stikerlar",
  "Reklamasiz",
  "Tezroq yuklanish",
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export const TelegramPremium = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Telegram <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">Premium</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Telegram Premium obunasi — eksklyuziv imkoniyatlarga ega bo'ling
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {features.map((f, i) => (
          <span key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-full">
            <Check className="w-3.5 h-3.5 text-blue-400" /> {f}
          </span>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {premiumPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -6, scale: 1.03 }}
            className={`glow-card glow-card-blue p-6 relative overflow-hidden group ${plan.best ? "ring-1 ring-blue-500/30" : ""}`}
          >
            {plan.best && (
              <div className="absolute top-3 right-3 bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
                Eng foydali
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Crown className="w-6 h-6 text-blue-400" />
              </div>
            </div>

            <div className="text-lg font-semibold text-muted-foreground mb-1">{plan.duration}</div>
            <div className="text-2xl font-bold mb-6 text-foreground">{plan.price}</div>

            <a
              href="https://t.me/abduxalidov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm hover:bg-blue-500/20 transition-colors"
            >
              Sotib olish <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

