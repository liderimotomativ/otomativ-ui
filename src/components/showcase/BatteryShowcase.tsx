import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BatteryShowcase() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Battery service images
    const batteries = [
        { id: 1, image: "/otomativ-photo/aku1.jpeg" },
        { id: 2, image: "/otomativ-photo/aku2.jpeg" },
        { id: 3, image: "/otomativ-photo/aku3.jpeg" },
        { id: 4, image: "/otomativ-photo/aku4.jpeg" },
        { id: 5, image: "/otomativ-photo/aku5.jpeg" },
        { id: 6, image: "/otomativ-photo/aku6.jpeg" },
    ];

    return (
        <section id="aku" ref={ref} className="min-h-screen flex flex-col justify-center py-24 bg-[var(--color-bg)]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                {/* Header Layout - Aligned with other sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-[var(--color-accent)]"></span>
                            <span className="text-[var(--color-accent)] text-sm font-medium tracking-[0.2em] uppercase">Akü Servisi</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text)] leading-tight">
                            7/24 Yerinde <br />
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text)] via-[var(--color-text)] to-[var(--color-text)]/50">
                                Akü Değişimi.
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
                            Nerede olursanız olun, akünüz bittiğinde yanınızdayız.
                            Hızlı, güvenilir ve profesyonel akü değişim hizmeti.
                        </p>
                    </motion.div>
                </div>

                {/* Premium Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {batteries.map((battery, index) => (
                        <motion.div
                            key={battery.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
                            className="group relative aspect-square overflow-hidden rounded-xl bg-[var(--color-surface)] cursor-pointer"
                        >
                            <img
                                src={battery.image}
                                alt={`Akü ${battery.id}`}
                                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                            {/* Shadow on hover */}
                            <div className="absolute inset-0 shadow-none group-hover:shadow-[inset_0_-80px_60px_-60px_rgba(0,0,0,0.8)] transition-all duration-500" />

                            {/* Model Number */}
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <span className="text-white text-xs tracking-[0.2em] uppercase">7/24 Hizmet</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
