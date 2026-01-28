import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CarShowcase() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const carCollection = [
        {
            id: 1,
            image: "/otomativ-photo/mercedes1.jpg",
            color: "from-silver-500/20 to-gray-500/20",
            size: "large"
        },
        {
            id: 2,
            image: "/otomativ-photo/mercedes2.jpg",
            color: "from-blue-500/20 to-cyan-500/20",
            size: "medium"
        },
        {
            id: 3,
            image: "/otomativ-photo/mercedes3.jpg",
            color: "from-red-500/20 to-orange-500/20",
            size: "medium"
        },
        {
            id: 4,
            image: "/otomativ-photo/aynı-poz-araba-7.jpg",
            color: "from-amber-500/20 to-yellow-500/20",
            size: "large"
        }
    ];

    return (
        <section className="bg-[var(--color-bg)]">
            <div ref={ref} className="py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                    {/* Unified Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-[var(--color-accent)]"></span>
                                <span className="text-[var(--color-accent)] text-sm font-medium tracking-[0.2em] uppercase">Premium Koleksiyon</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text)] leading-tight">
                                Alman Mühendisliği <br />
                                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text)] via-[var(--color-text)] to-[var(--color-text)]/50">
                                    & Klasik Ruh.
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
                                Mercedes-Benz, BMW, Audi ve Volkswagen için premium jant çözümleri.
                                Modern mükemmellik ve klasik estetiğin buluştuğu nokta.
                            </p>
                        </motion.div>
                    </div>

                    {/* Grid Layout: 2 Large Top, 2 Small Bottom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Row: Large Images - Left and Right */}
                        <motion.div
                            key={carCollection[0].id}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-white/10"
                        >
                            {/* Background Image */}
                            <img
                                src={carCollection[0].image}
                                alt={`Car ${carCollection[0].id}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${carCollection[0].color} opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Glass border on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-colors duration-500" />
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/0 group-hover:via-white/10 group-hover:to-white/0 transition-all duration-700 pointer-events-none rounded-2xl" />
                        </motion.div>

                        <motion.div
                            key={carCollection[3].id}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.12,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-white/10"
                        >
                            {/* Background Image */}
                            <img
                                src={carCollection[3].image}
                                alt="Classic Car"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${carCollection[3].color} opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Glass border on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-colors duration-500" />
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/0 group-hover:via-white/10 group-hover:to-white/0 transition-all duration-700 pointer-events-none rounded-2xl" />
                        </motion.div>

                        {/* Second Row: Small Images - Left and Right */}
                        {carCollection.slice(1, 3).map((car, index) => {
                            return (
                                <motion.div
                                    key={car.id}
                                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: (index + 2) * 0.12,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer border border-white/10"
                                >
                                    {/* Background Image */}
                                    <img
                                        src={car.image}
                                        alt={`Car ${car.id}`}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${car.color} opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Glass border on hover */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-colors duration-500" />
                                    
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/0 group-hover:via-white/10 group-hover:to-white/0 transition-all duration-700 pointer-events-none rounded-2xl" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
