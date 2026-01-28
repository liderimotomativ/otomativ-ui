import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TireInfo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const articles = [
        {
            id: 1,
            image: "/otomativ-photo/bilgi1.jpeg",
            title: "Runflat Lastik",
            summary: "Patlasa bile güvenle ilerleyebilir ama normal lastikten daha pahalı ve sürüşü daha serttir."
        },
        {
            id: 2,
            image: "/otomativ-photo/bilgi2.jpeg",
            title: "Kış Lastiği",
            summary: "Özel kanallar, esnek hamur ve lameller sayesinde kar ve buzda ekstra yol tutuşu sağlar."
        },
        {
            id: 3,
            image: "/otomativ-photo/bilgi3.jpeg",
            title: "DOT Tarihi",
            summary: "Lastiğin yaşı tek başına belirleyici değildir, asıl önemli olan doğru depolama ve kullanım koşullarıdır."
        }
    ];

    return (
        <section id="bilgi" ref={ref} className="py-24 bg-[var(--color-bg)]">
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
                            <span className="text-[var(--color-accent)] text-sm font-medium tracking-[0.2em] uppercase">Bilgi Rehberi</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text)] leading-tight">
                            Lastik <br />
                            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text)] via-[var(--color-text)] to-[var(--color-text)]/50">
                                Bilgileri.
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
                            Lastik seçimi ve bakımı hakkında bilmeniz gereken her şey.
                            Güvenli sürüş için doğru bilgi, doğru lastik seçimi ile başlar.
                        </p>
                    </motion.div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group"
                        >
                            {/* Image */}
                            <div className="relative h-[500px] overflow-hidden rounded-2xl mb-6 bg-[var(--color-surface)]/20 flex items-center justify-center p-4">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-[var(--color-text)]/60 text-sm leading-relaxed">
                                    {article.summary}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
