'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { cn } from '@/lib/utils';

import fallbackData from '@/data/sections/header.json';

export const Header = ({ data = fallbackData }: { data?: typeof fallbackData }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = data.navLinks;

    return (
        <header
            className={cn(
                'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-2xl',
                scrolled
                    ? 'bg-background/80 backdrop-blur-xl border border-border shadow-xl py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container-custom flex items-center justify-between">
                <Link href={data.brand.href} className="flex items-center space-x-3 group">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-accent bg-card p-0.5 shadow-md shadow-brand/20 transition-transform group-hover:scale-105">
                        <img
                            src={data.brand.logo.src}
                            alt={data.brand.logo.alt}
                            className="h-full w-full rounded-full object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        {data.brand.prefix} <span className="text-brand">{data.brand.highlight}</span>
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
                        <Link href={data.booking.href}><Button size="sm" className="rounded-xl">{data.booking.text}</Button></Link>
                    </div>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-2">
                    <ThemeToggle />
                    <button
                        aria-label={data.menuLabel}
                        aria-expanded={isOpen}
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
                            <Link href={data.booking.href} onClick={() => setIsOpen(false)}><Button className="w-full rounded-xl">{data.booking.text}</Button></Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};
