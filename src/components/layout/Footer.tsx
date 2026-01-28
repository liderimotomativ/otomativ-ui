import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MapPin, ExternalLink, Instagram } from 'lucide-react';

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <footer id="iletisim" className="bg-[var(--color-bg)] border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent)]/5 blur-[120px]" />
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src="/otomativ-photo/liderim-otomativ-logo.jpg"
                                alt="Liderim Otomotiv"
                                className="h-16 w-16 rounded-full border-2 border-white/10 shadow-lg group-hover:border-[var(--color-accent)]/30 transition-colors"
                            />
                            <div>
                                <h3 className="text-2xl font-light text-[var(--color-text)] tracking-wide">Liderim Otomotiv</h3>
                                <p className="text-[var(--color-text)]/50 text-xs mt-1">Premium Otomotiv Çözümleri</p>
                            </div>
                        </div>
                        <p className="text-[var(--color-text)]/60 text-sm leading-relaxed max-w-md mb-6">
                            Jant, lastik ve akü için Türkiye'nin güvenilir adresi.
                            Kalite ve profesyonelliğin buluştuğu nokta.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <span className="px-4 py-2 text-xs uppercase tracking-wider bg-[var(--color-surface)]/40 backdrop-blur-sm border border-[var(--color-border)] text-[var(--color-text)]/70 rounded-full hover:border-[var(--color-accent)]/30 transition-colors">Jant</span>
                            <span className="px-4 py-2 text-xs uppercase tracking-wider bg-[var(--color-surface)]/40 backdrop-blur-sm border border-[var(--color-border)] text-[var(--color-text)]/70 rounded-full hover:border-[var(--color-accent)]/30 transition-colors">Lastik</span>
                            <span className="px-4 py-2 text-xs uppercase tracking-wider bg-[var(--color-surface)]/40 backdrop-blur-sm border border-[var(--color-border)] text-[var(--color-text)]/70 rounded-full hover:border-[var(--color-accent)]/30 transition-colors">Akü</span>
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text)]/50 mb-4 -mt-2 font-medium">İletişim<br /><br /></h4>
                        <div className="space-y-4">
                            <a
                                href="tel:05053247234"
                                className="group flex items-center gap-3 text-[var(--color-text)]/70 hover:text-[var(--color-accent)] transition-colors"
                            >
                                <div className="p-2 rounded-lg bg-[var(--color-surface)]/40 border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 transition-colors">
                                    <Phone size={16} strokeWidth={1.5} />
                                </div>
                                <span className="text-sm font-light">0505 324 72 34</span>
                            </a>
                            <div className="flex items-start gap-3 text-[var(--color-text)]/70">
                                <div className="p-2 rounded-lg bg-[var(--color-surface)]/40 border border-[var(--color-border)] mt-0.5">
                                    <MapPin size={16} strokeWidth={1.5} />
                                </div>
                                <span className="text-sm leading-relaxed font-light">Toptan ve perakende satış<br />Türkiye geneli kargo 📦</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mağaza */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text)]/50 mb-4 -mt-2 font-medium">Mağaza<br /><br /></h4>
                        <a
                            href="https://liderimotolastik.sahibinden.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 text-[var(--color-text)]/70 hover:text-[var(--color-accent)] transition-colors"
                        >
                            <div className="p-2 rounded-lg bg-[var(--color-surface)]/40 border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 transition-colors">
                                <ExternalLink size={16} strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-light">Sahibinden Mağazası</span>
                        </a>
                    </motion.div>

                    {/* Instagram */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-text)]/50 mb-4 -mt-2 font-medium">Instagram<br /><br /></h4>
                        <a
                            href="https://www.instagram.com/liderimotomotiv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 text-[var(--color-text)]/70 hover:text-[var(--color-accent)] transition-colors"
                        >
                            <div className="p-2 rounded-lg bg-[var(--color-surface)]/40 border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 transition-colors">
                                <Instagram size={16} strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-light">@liderimotomotiv</span>
                        </a>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-[var(--color-text)]/40 text-xs">
                        © {new Date().getFullYear()} Liderim Otomotiv. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[var(--color-text)]/40 hover:text-[var(--color-text)]/70 text-xs transition-colors">Gizlilik</a>
                        <a href="#" className="text-[var(--color-text)]/40 hover:text-[var(--color-text)]/70 text-xs transition-colors">Kullanım Şartları</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
