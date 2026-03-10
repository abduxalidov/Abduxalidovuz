import { motion, Variants } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const starPackages = [
  { stars: 50, price: "12 000 so'm" },
  { stars: 100, price: "24 000 so'm" },
  { stars: 200, price: "48 000 so'm" },
  { stars: 500, price: "120 000 so'm", popular: true },
  { stars: 1000, price: "240 000 so'm" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

export const TelegramStars = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Telegram <span className="gradient-text">Stars</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Telegram Stars — kontent yaratuvchilarni qo'llab-quvvatlash uchun
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {starPackages.map((pkg, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glow-card glow-card-gold p-6 relative overflow-hidden group ${pkg.popular ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            {pkg.popular && (
              <div className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/30">
                Ommabop
              </div>
            )}

            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
                <Star className="w-6 h-6 text-yellow-400" fill="currentColor" />
              </div>
              <span className="text-3xl font-bold text-foreground">{pkg.stars}</span>
              <span className="text-muted-foreground text-sm">stars</span>
            </div>

            <div className="text-2xl font-bold mb-6 text-foreground">{pkg.price}</div>

            <a
              href="https://t.me/abduxalidov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-medium text-sm hover:bg-yellow-500/20 transition-colors"
            >
              Buyurtma berish <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

