import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WheelShowcase() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Generate jant1.jpg to jant18.jpg
    const wheels = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        image: `/otomativ-photo/jant${i + 1}.jpg`,
    }));

    return (
        <section id="galeri" ref={ref} className="min-h-screen flex flex-col justify-center py-24 bg-[var(--color-bg)]">
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
                            <span className="text-[var(--color-accent)] text-sm font-medium tracking-[0.2em] uppercase">Koleksiyon</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text)] leading-tight">
                            Jant <br />
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text)] via-[var(--color-text)] to-[var(--color-text)]/50">
                                Galerisi.
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
                            Premium jant seçenekleri ile aracınızın estetiğini yükseltin.
                            En kaliteli markalar ve en trend tasarımlar sizlerle.
                        </p>
                    </motion.div>
                </div>

                {/* Premium Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wheels.map((wheel, index) => (
                        <motion.div
                            key={wheel.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
                            className="group relative aspect-square overflow-hidden rounded-xl bg-[var(--color-surface)] cursor-pointer"
                        >
                            <img
                                src={wheel.image}
                                alt={`Jant ${wheel.id}`}
                                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                            {/* Shadow on hover */}
                            <div className="absolute inset-0 shadow-none group-hover:shadow-[inset_0_-80px_60px_-60px_rgba(0,0,0,0.8)] transition-all duration-500" />

                            {/* Model Number */}
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <span className="text-white text-xs tracking-[0.2em] uppercase">Model {wheel.id}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                    className="mt-16 text-center"
                >
                    <a href="#" className="inline-flex items-center gap-4 text-gray-500 hover:text-[var(--color-accent)] text-sm tracking-wider transition-colors group">
                        Tüm Koleksiyonu Gör
                        <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
