import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Akü', href: '#aku' },
        { name: 'Lastik', href: '#lastik' },
        { name: 'Jant', href: '#galeri' },
        { name: 'Hakkımızda', href: '#hakkimizda' },
        { name: 'Hizmetler', href: '#hizmetler' },
        { name: 'İletişim', href: '#iletisim' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
                ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-white/5 py-4'
                : 'bg-gradient-to-b from-black/50 to-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <div className="max-w-[1600px] mx-auto px-8">
                <div className="flex items-center justify-between h-12">

                    {/* Logo */}
                    <div
                        className="flex-shrink-0 cursor-pointer group flex items-center gap-3"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img
                            src="/otomativ-photo/liderim-otomativ-logo.jpg"
                            alt="Liderim Otomotiv"
                            className="h-12 w-12 rounded-full border-2 border-white/20 group-hover:border-[var(--color-accent)] transition-colors shadow-lg"
                        />
                        <span className={`font-medium tracking-widest uppercase text-lg ${isScrolled ? 'text-[var(--color-text)]' : 'text-white'} transition-colors`}>
                            Liderim
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-light tracking-widest uppercase transition-colors group ${isScrolled ? 'text-[var(--color-text)]/70 hover:text-[var(--color-accent)]' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[var(--color-accent)] group-hover:w-1/2 transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Right Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="tel:05053247234"
                            className={`flex items-center gap-2 transition-colors text-sm ${isScrolled ? 'text-[var(--color-text)]/70 hover:text-[var(--color-accent)]' : 'text-white/90 hover:text-white'
                                }`}
                        >
                            <Phone size={18} strokeWidth={1.5} />
                            <span className="font-light tracking-wide">0505 324 72 34</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 transition-colors ${isScrolled ? 'text-[var(--color-text)]' : 'text-white'
                                }`}
                        >
                            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[var(--color-bg)]/95 backdrop-blur-xl border-t border-[var(--color-border)]"
                >
                    <div className="px-8 py-8 space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-[var(--color-text)] hover:text-[var(--color-accent)] text-xl font-light tracking-widest uppercase transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
