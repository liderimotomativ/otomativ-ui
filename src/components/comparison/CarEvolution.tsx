import { motion } from 'framer-motion';
import { useRef } from 'react';

const images = [
    "/otomativ-photo/aynı-poz-araba-10.jpg",
    "/otomativ-photo/aynı-poz-araba-2.jpg",
    "/otomativ-photo/aynı-poz-araba-3.jpg",
    "/otomativ-photo/aynı-poz-araba-4.jpg",
    "/otomativ-photo/aynı-poz-araba-5.jpeg",
    "/otomativ-photo/aynı-poz-araba-6.jpeg",
    "/otomativ-photo/aynı-poz-araba-7.jpg",
    "/otomativ-photo/aynı-poz-araba-8.jpg",
    "/otomativ-photo/aynı-poz-araba-9.jpg",
];

// Duplicate images to create seamless loop
const marqueeImages = [...images, ...images, ...images];

export default function CarEvolution() {
    const ref = useRef(null);

    return (
        <section ref={ref} className="min-h-[50vh] py-12 bg-[var(--color-bg)] overflow-hidden relative flex flex-col justify-center">

            {/* Gradient Masks for smooth fade out */}
            <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

            {/* Row 1: Moves Left */}
            <div className="flex mb-8 -rotate-1 hover:rotate-0 transition-transform duration-1000 ease-out">
                <motion.div
                    className="flex gap-6 min-w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 80,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {marqueeImages.map((src, idx) => (
                        <MarqueeItem key={`row1-${idx}`} src={src} />
                    ))}
                </motion.div>
                <motion.div
                    className="flex gap-6 min-w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 80,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ marginLeft: 24 }}
                >
                    {marqueeImages.map((src, idx) => (
                        <MarqueeItem key={`row1-dup-${idx}`} src={src} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Moves Right */}
            <div className="flex rotate-1 hover:rotate-0 transition-transform duration-1000 ease-out">
                <motion.div
                    className="flex gap-6 min-w-max"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 80,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ marginRight: 24 }}
                >
                    {marqueeImages.map((src, idx) => (
                        <MarqueeItem key={`row2-${idx}`} src={src} />
                    ))}
                </motion.div>
                <motion.div
                    className="flex gap-6 min-w-max"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        duration: 80,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {marqueeImages.map((src, idx) => (
                        <MarqueeItem key={`row2-dup-${idx}`} src={src} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function MarqueeItem({ src }: { src: string }) {
    return (
        <div className="relative group w-[400px] h-[260px] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-white/5">
            <img
                src={src}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

            {/* Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Explore Badge */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-white text-xs tracking-widest uppercase font-medium">
                    <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
                    İncele
                </div>
            </div>
        </div>
    );
}
