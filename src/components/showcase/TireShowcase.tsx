import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sun, Snowflake, Cloud } from 'lucide-react';

export default function TireShowcase() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const tireCategories = [
        {
            id: 1,
            category: "Yazlık",
            image: "/otomativ-photo/lastik1_yaz.jpeg",
            icon: Sun,
            color: "from-orange-500 to-red-500",
            badgeColor: "bg-orange-500",
            description: "Yüksek performans ve sıcak hava konforu"
        },
        {
            id: 2,
            category: "4 Mevsim",
            image: "/otomativ-photo/lastik2_4_mevsim.jpeg",
            icon: Cloud,
            color: "from-green-500 to-emerald-500",
            badgeColor: "bg-green-500",
            description: "Her mevsim için ideal çözüm"
        },
        {
            id: 3,
            category: "Kışlık",
            image: "/otomativ-photo/lastik3_kıslık.jpeg",
            icon: Snowflake,
            color: "from-blue-500 to-cyan-500",
            badgeColor: "bg-blue-500",
            description: "Kar ve buz güvenliği"
        }
    ];

    return (
        <section id="lastik" ref={ref} className="min-h-screen flex flex-col justify-center py-24 bg-[var(--color-bg)]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-[var(--color-accent)]"></span>
                            <span className="text-[var(--color-accent)] text-sm font-medium tracking-[0.2em] uppercase">Lastik Seçenekleri</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text)] leading-tight">
                            Her Mevsim <br />
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text)] via-[var(--color-text)] to-[var(--color-text)]/50">
                                İçin Çözüm.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:pb-2"
                    >
                        <p className="text-[var(--color-text)]/70 text-lg font-light leading-relaxed">
                            Yazlık, kışlık ve 4 mevsim lastik seçenekleri ile her koşulda maksimum güvenlik.
                            Premium markalar ve uzman montaj hizmeti.
                        </p>
                    </motion.div>
                </div>

                {/* Categorized Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tireCategories.map((tire, index) => {
                        const Icon = tire.icon;
                        return (
                            <motion.div
                                key={tire.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                className="group relative h-[380px] rounded-2xl overflow-hidden cursor-pointer border border-white/10"
                            >
                                {/* Background Image */}
                                <img
                                    src={tire.image}
                                    alt={tire.category}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${tire.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    {/* Top Badge */}
                                    <div className="flex items-center gap-3">
                                        <div className={`${tire.badgeColor} p-3 rounded-xl backdrop-blur-sm border border-white/20`}>
                                            <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Bottom Info */}
                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className={`inline-block px-4 py-1 rounded-full ${tire.badgeColor} text-white text-xs font-medium tracking-wider uppercase mb-4`}>
                                            {tire.category}
                                        </div>
                                        <h3 className="text-3xl font-light text-white mb-2 tracking-wide">
                                            {tire.category} Lastikler
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {tire.description}
                                        </p>

                                        {/* Line Indicator */}
                                        <div className={`h-[2px] ${tire.badgeColor} transition-all duration-500 mt-4 w-0 group-hover:w-16`} />
                                    </div>
                                </div>

                                {/* Glass border on hover */}
                                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-500`} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
