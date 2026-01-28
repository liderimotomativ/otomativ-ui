import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Award, Wrench, ArrowRight, Users, Clock, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const cards = [
        {
            icon: <Award strokeWidth={1} className="w-8 h-8" />,
            title: "Uzmanlık",
            description: "On yılı aşkın sektör tecrübesiyle, aracınızın dilinden anlayan profesyonel ekip.",
            color: "from-blue-500/20 to-cyan-500/20",
            border: "group-hover:border-blue-500/50"
        },
        {
            icon: <ShieldCheck strokeWidth={1} className="w-8 h-8" />,
            title: "Güven",
            description: "Şeffaf hizmet anlayışı ve garantili işlemlerle, size ve aracınıza tam güvence.",
            color: "from-purple-500/20 to-pink-500/20",
            border: "group-hover:border-purple-500/50"
        },
        {
            icon: <Wrench strokeWidth={1} className="w-8 h-8" />,
            title: "Kalite",
            description: "Sadece orijinal ve sertifikalı yedek parçalarla en üst düzey performans.",
            color: "from-amber-500/20 to-orange-500/20",
            border: "group-hover:border-amber-500/50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="hakkimizda" ref={ref} className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden bg-[var(--color-bg)]">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-[var(--color-accent)]"></span>
                            <span className="text-[var(--color-accent)] text-sm font-medium tracking-[0.2em] uppercase">Hakkımızda</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-light text-[var(--color-text)] leading-[1.1]">
                            Mükemmellik <br />
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text)] to-[var(--color-text)]/50">
                                Standartımız.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="pt-12 lg:pt-0"
                    >
                        <p className="text-lg text-[var(--color-text)]/70 leading-relaxed font-light mb-6">
                            Liderim Otomotiv olarak, sadece araç bakımı yapmıyoruz; sürüş deneyiminizi iyileştiriyoruz.
                            En son teknoloji ve uzman kadromuzla, aracınızın her zaman ilk günkü performansında kalmasını sağlıyoruz.
                        </p>
                        <p className="text-base text-[var(--color-text)]/60 leading-relaxed font-light mb-8">
                            Yılların deneyimi ve müşteri memnuniyeti odaklı yaklaşımımızla, Türkiye'nin dört bir yanına hizmet veriyoruz.
                            Premium markalar, uzman montaj ve 7/24 destek ile yanınızdayız.
                        </p>
                        <motion.a
                            href="#iletisim"
                            className="inline-flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-300 group"
                            whileHover={{ x: 5 }}
                        >
                            <span className="border-b border-[var(--color-border)] group-hover:border-[var(--color-accent)] pb-0.5 transition-colors">Daha Fazla Bilgi</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className={`group relative p-8 rounded-3xl bg-[var(--color-surface)]/40 backdrop-blur-md border border-[var(--color-border)] hover:bg-[var(--color-surface)]/60 transition-all duration-500`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Border Glow */}
                            <div className={`absolute inset-0 rounded-3xl border border-transparent ${card.border} transition-colors duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 p-3 w-fit rounded-2xl bg-[var(--color-bg)]/50 border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 group-hover:bg-[var(--color-accent)]/10 text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-all duration-500">
                                    {card.icon}
                                </div>

                                <h3 className="text-2xl font-medium text-[var(--color-text)] mb-3">{card.title}</h3>
                                <p className="text-[var(--color-text)]/60 text-sm leading-relaxed flex-grow">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Statistics Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { icon: Clock, value: "10+", label: "Yıllık Deneyim", color: "from-blue-500/20 to-cyan-500/20" },
                        { icon: Users, value: "5000+", label: "Mutlu Müşteri", color: "from-purple-500/20 to-pink-500/20" },
                        { icon: TrendingUp, value: "100%", label: "Müşteri Memnuniyeti", color: "from-green-500/20 to-emerald-500/20" },
                        { icon: CheckCircle, value: "7/24", label: "Destek Hizmeti", color: "from-amber-500/20 to-orange-500/20" }
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                className="group relative p-6 rounded-2xl bg-[var(--color-surface)]/30 backdrop-blur-sm border border-[var(--color-border)] hover:bg-[var(--color-surface)]/50 transition-all duration-500"
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative z-10 text-center">
                                    <div className="mb-4 flex justify-center">
                                        <div className="p-3 rounded-xl bg-[var(--color-bg)]/50 border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-all duration-500">
                                            <Icon className="w-6 h-6" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-2">{stat.value}</div>
                                    <div className="text-sm text-[var(--color-text)]/60 font-light">{stat.label}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <div className="p-8 rounded-2xl bg-[var(--color-surface)]/20 backdrop-blur-sm border border-[var(--color-border)]">
                        <h3 className="text-2xl font-medium text-[var(--color-text)] mb-6 -mt-6">Neden Bizi Seçmelisiniz?<br /><br /></h3>
                        <ul className="space-y-4">
                            {[
                                "Premium marka jant ve lastik seçenekleri",
                                "Uzman montaj ve balans hizmeti",
                                "Türkiye geneli hızlı kargo",
                                "7/24 akü değişim hizmeti",
                                "Garantili işlemler ve şeffaf fiyatlandırma"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                    className="flex items-start gap-3 text-[var(--color-text)]/70"
                                >
                                    <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                    <span className="text-sm leading-relaxed">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl bg-[var(--color-surface)]/20 backdrop-blur-sm border border-[var(--color-border)]">
                        <h3 className="text-2xl font-medium text-[var(--color-text)] mb-6 -mt-6">Hizmet Alanlarımız<br /><br /></h3>
                        <ul className="space-y-4">
                            {[
                                "Mercedes-Benz, BMW, Audi jant montajı",
                                "Yazlık, kışlık ve 4 mevsim lastik",
                                "Akü değişimi ve elektrik sistemleri",
                                "Jant modifiye ve özel tasarım",
                                "Rot-balans ve lastik bakım hizmetleri"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                                    className="flex items-start gap-3 text-[var(--color-text)]/70"
                                >
                                    <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                    <span className="text-sm leading-relaxed">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
