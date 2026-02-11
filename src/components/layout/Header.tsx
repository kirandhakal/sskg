'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, Hotel } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { cn } from '@/lib/utils';

export const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Rooms', href: '/rooms' },
        { name: 'Dining', href: '/dining' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-2xl',
                scrolled
                    ? 'bg-background/80 backdrop-blur-xl border border-white/20 shadow-xl py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container-custom flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="bg-brand p-2 rounded-xl transition-transform group-hover:rotate-12">
                        <Hotel className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Syangja <span className="text-brand">Sundar</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-foreground/70 hover:text-brand px-4 py-2 rounded-lg hover:bg-brand/5 font-medium transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-2 ml-4">
                        <ThemeToggle />
                        <Button size="sm" className="rounded-xl">Book Room</Button>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground p-2 hover:bg-brand/5 rounded-lg"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-background border border-border shadow-2xl rounded-2xl p-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <nav className="flex flex-col space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium px-4 py-3 hover:bg-brand/5 rounded-xl transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 px-4">
                            <Button className="w-full rounded-xl">Book Room</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
