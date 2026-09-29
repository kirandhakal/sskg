import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import contactData from '@/data/sections/contact.json';

const contactIcons = { MapPin, Phone, Mail, Clock };

export const Footer = () => {
    return (
        <footer className="bg-brand text-primary-foreground pt-24 pb-12 border-t border-accent/30">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent bg-primary-foreground p-0.5 shadow-lg transition-transform group-hover:scale-105">
                                <img
                                    src="/icon.png"
                                    alt="Syangja Khaja Ghar Logo"
                                    className="h-full w-full rounded-full object-cover"
                                />
                            </div>
                            <span className="text-3xl font-black tracking-tight text-primary-foreground">Syangja <span className="text-highlight">Khaja Ghar</span></span>
                        </Link>
                        <p className="text-primary-foreground/70 text-lg leading-relaxed">
                            Crafting unforgettable memories through authentic Nepali hospitality and timeless traditional flavors since 25 years.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-highlight rounded-2xl transition-all duration-300 text-primary-foreground" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-highlight rounded-2xl transition-all duration-300 text-primary-foreground" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-highlight rounded-2xl transition-all duration-300 text-primary-foreground" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-accent/30 pb-4 inline-block text-primary-foreground">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-primary-foreground/70 hover:text-highlight transition-colors font-medium">Home</Link></li>
                            {/* <li><Link href="/rooms" className="text-primary-foreground/70 hover:text-highlight transition-colors font-medium">Our Accommodations</Link></li> */}
                            <li><Link href="/dining" className="text-primary-foreground/70 hover:text-highlight transition-colors font-medium">Dining Experience</Link></li>
                            <li><Link href="/about" className="text-primary-foreground/70 hover:text-highlight transition-colors font-medium">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-accent/30 pb-4 inline-block text-primary-foreground">Services</h3>
                        <ul className="space-y-4">
                            <li className="text-primary-foreground/70 font-medium">Luxury Stay</li>
                            <li className="text-primary-foreground/70 font-medium">Traditional Dining</li>
                            <li className="text-primary-foreground/70 font-medium">Event Spaces</li>
                            <li className="text-primary-foreground/70 font-medium">Travel Desk</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-accent/30 pb-4 inline-block text-primary-foreground">Contact</h3>
                        <ul className="space-y-6">
                            {contactData.contactInfo.map((info) => {
                                const Icon = contactIcons[info.icon as keyof typeof contactIcons];
                                const lines = info.content.split('\n');
                                return (
                                    <li key={info.title} className="flex items-start space-x-4">
                                        <div className="p-2 bg-highlight/20 rounded-lg shrink-0">
                                            <Icon className="w-5 h-5 text-highlight" />
                                        </div>
                                        <div className="flex flex-col text-primary-foreground/70 font-medium">
                                            {lines.map((line) => {
                                                if (info.icon === 'Phone') {
                                                    return <a key={line} href={`tel:${line.replace(/\s/g, '')}`} className="hover:text-highlight transition-colors">{line}</a>;
                                                }
                                                if (info.icon === 'Mail') {
                                                    return <a key={line} href={`mailto:${line}`} className="hover:text-highlight transition-colors text-sm break-all">{line}</a>;
                                                }
                                                return <span key={line}>{line}</span>;
                                            })}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-accent/30 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1 text-sm font-medium">
                        <p className="text-primary-foreground/55">
                            © {new Date().getFullYear()} Syangja Khaja Ghar. All rights reserved.
                        </p>
                        <p className="text-primary-foreground/55">
                            Created & designed by{' '}
                            <a href="https://dhakalkiran.com.np" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">Kiran Dhakal</a>
                        </p>
                    </div>
                    <div className="flex space-x-8 text-sm font-medium">
                        <Link href="/privacy" className="text-primary-foreground/70 hover:text-highlight transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-primary-foreground/70 hover:text-highlight transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
