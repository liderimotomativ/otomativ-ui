import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Disc, Zap, Truck, ShieldCheck } from 'lucide-react';

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeService, setActiveService] = useState<string | null>(null);

    const services = [
        {
            id: "jant",
            title: "Jant",
            image: "/otomativ-photo/hakkımızda2.png",
            desc: "Premium jant seçenekleri ve uzman montaj hizmeti.",
            icon: <Disc className="w-6 h-6" />
        },
        {
            id: "lastik",
            title: "Lastik",
            image: "/otomativ-photo/hakkımızda3.png",
            desc: "Mevsime uygun, performans garantili lastikler.",
            icon: <ShieldCheck className="w-6 h-6" />
        },
        {
            id: "aku",
            title: "Akü",
            image: "/otomativ-photo/hakkımızda1.png",
            desc: "Güvenilir akü değişimi ve 7/24 hizmet.",
            icon: <Zap className="w-6 h-6" />
        },
        {
            id: "kargo",
            title: "Hızlı Kargo",
            image: "/otomativ-photo/hakkımızda4.png",
            desc: "Türkiye'nin her yerine güvenli ve hızlı teslimat.",
            icon: <Truck className="w-6 h-6" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section id="hizmetler" ref={ref} className="min-h-screen flex flex-col justify-center py-24 bg-[var(--color-bg)] relative">
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-[var(--color-accent)]"></span>
                            <span className="text-[var(--color-accent)] text-sm font-medium tracking-[0.2em] uppercase">Hizmetlerimiz</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text)] leading-tight">
                            Profesyonel Çözümler <br />
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text)] via-[var(--color-text)] to-[var(--color-text)]/50">
                                Tek Noktada.
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
                            Aracınızın tüm ihtiyaçları için uzman ekibimiz ve modern ekipmanlarımızla yanınızdayız.
                            En iyi performansı garanti ediyoruz.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            onMouseEnter={() => setActiveService(service.id)}
                            onMouseLeave={() => setActiveService(null)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer bg-black/5"
                        >
                            {/* Background Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                            />

                            {/* Cinematic Overlay - Default dark gradient, deepens on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:via-black/40 group-hover:opacity-90 transition-all duration-500" />

                            {/* Glass border effect */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[var(--color-accent)]/30 transition-colors duration-500 z-10" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/10 group-hover:border-[var(--color-accent)]/50 group-hover:text-[var(--color-accent)] transition-all duration-500">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-light text-white mb-3 tracking-wide">{service.title}</h3>

                                    <div className={`overflow-hidden transition-all duration-500 ${activeService === service.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Line Indicator */}
                                    <div className={`h-[1px] bg-[var(--color-accent)] transition-all duration-500 ${activeService === service.id ? 'w-12' : 'w-0'}`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
