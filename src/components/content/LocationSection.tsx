import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function LocationSection() {
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25016.239167392974!2d27.1197482!3d38.3945578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdf0e351920b%3A0x9737b71151c60997!2sLiderim%20Otomotiv!5e0!3m2!1str!2str!4v1769901437742!5m2!1str!2str";
    const googleMapsDirectLink = "https://www.google.com/maps/search/?api=1&query=Liderim+Otomotiv+Gülyaka+Saim+Çıkrıkçı+Cd+No+101+35160+Karabağlar+İzmir";

    return (
        <section className="py-24 relative overflow-hidden bg-[var(--color-bg)]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight text-[var(--color-text)]">
                            Mağazamıza <span className="text-[var(--color-accent)] font-medium">Bekleriz</span>
                        </h2>
                        <br/>
                        <div className="space-y-8 mb-10">
                            <div className="flex gap-4 items-start">
                                <div className="p-4 rounded-2xl bg-[var(--color-surface)]/50 border border-[var(--color-border)] text-[var(--color-accent)]">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-[var(--color-text)] mb-2">Adres</h4>
                                    <p className="text-[var(--color-text)]/60 leading-relaxed max-w-sm">
                                        Liderim Otomotiv, Gülyaka, Saim Çıkrıkçı Cd. No:101, 35160 Karabağlar/İzmir
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="p-4 rounded-2xl bg-[var(--color-surface)]/50 border border-[var(--color-border)] text-[var(--color-accent)]">
                                    <Navigation size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-[var(--color-text)] mb-2">Konum Kolaylığı</h4>
                                    <p className="text-[var(--color-text)]/60 leading-relaxed">
                                        Karabağlar'ın merkezinde, kolay ulaşılabilir konumda hizmetinizdeyiz.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.a
                            href={googleMapsDirectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-medium transition-all hover:bg-[var(--color-accent-hover)] shadow-lg shadow-[var(--color-accent)]/20"
                        >
                            <Navigation size={20} />
                            Yol Tarifi Al
                        </motion.a>
                    </motion.div>

                    {/* Right: Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-[var(--color-accent)]/10 blur-3xl rounded-full" />
                        <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-[var(--color-surface)] aspect-square md:aspect-video lg:aspect-square">
                            <iframe
                                src={googleMapsUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) opacity(0.8)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
