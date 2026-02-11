'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, Hotel } from 'lucide-react';
import { Button } from '../ui/Button';
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
        { name: 'Rooms', href: '#rooms' },
        { name: 'Dining', href: '#dining' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="container-custom flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="bg-primary p-2 rounded-lg">
                        <Hotel className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                        Syangja Sundar
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/80 hover:text-highlight font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4">
                        <Button size="sm">Book Now</Button>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium px-4 py-2 hover:bg-muted rounded-lg text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full">Book Now</Button>
                    </nav>
                </div>
            )}
        </header>
    );
};
