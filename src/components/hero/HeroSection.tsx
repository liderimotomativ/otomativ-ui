import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax and zoom effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]); // Slightly more zoom
    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

    return (
        <section ref={ref} className="relative h-[100vh] w-full overflow-hidden bg-black">
            {/* Background Image with Parallax & Zoom */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY, scale: backgroundScale }}
            >
                <img
                    src="/otomativ-photo/aynı-poz-araba-9.jpg"
                    alt="Luxury Car"
                    className="h-full w-full object-cover object-[50%_15%] opacity-90"
                />
            </motion.div>

            {/* Cinematic Gradient Overlays */}
            {/* Top gradient for Navbar visibility */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-transparent to-transparent opacity-80" />

            {/* Bottom gradient for smooth transition */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/20 to-transparent" />

            {/* Left gradient for text readability */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <motion.div
                className="relative z-10 flex h-full flex-col justify-center items-start text-left px-8 md:px-16 lg:px-24"
                style={{ opacity: textOpacity, y: textY }}
            >
                <div className="max-w-4xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-[1px] w-12 bg-[var(--color-accent)]"></div>
                        <p className="text-gray-300 text-sm font-medium tracking-[0.3em] uppercase">
                            Liderim Otomotiv
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-thin text-white tracking-tighter mb-8 leading-[0.9]"
                    >
                        Jant <span className="text-[var(--color-accent)]">&</span> <br />
                        <span className="font-semibold">Lastik.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-gray-300 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed border-l-2 border-white/20 pl-6"
                    >
                        Yolculuğunuzun güvenliği ve şıklığı bizimle başlar. <br />
                        En prestijli markalar, uzman işçilik.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    >
                        <a
                            href="#hakkimizda"
                            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/10"
                        >
                            <div className="absolute inset-0 w-0 bg-[var(--color-accent)] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                            <span className="relative text-white font-medium tracking-widest uppercase text-sm">Keşfet</span>
                            <ArrowRight className="relative text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{ opacity: textOpacity }}
                onClick={() => {
                    document.getElementById('hakkimizda')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mb-4"></div>
                <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Kaydır</span>
            </motion.div>
        </section>
    );
}
