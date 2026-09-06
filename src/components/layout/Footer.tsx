import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-brand text-primary-foreground pt-24 pb-12 border-t border-accent/30">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-accent/40 shadow-lg group-hover:scale-105 transition-transform shrink-0">
                                <img
                                    src="/logo.png"
                                    alt="Syangja Khaja Ghar Logo"
                                    className="w-full h-full object-cover"
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
                            <li><Link href="/rooms" className="text-primary-foreground/70 hover:text-highlight transition-colors font-medium">Our Accommodations</Link></li>
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
                            <li className="flex items-start space-x-4">
                                <div className="p-2 bg-highlight/20 rounded-lg shrink-0">
                                    <MapPin className="w-5 h-5 text-highlight" />
                                </div>
                                <span className="text-primary-foreground/70 font-medium">Kawasoti-02, Nawalpur<br />Lumbini, Nepal</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="p-2 bg-highlight/20 rounded-lg shrink-0">
                                    <Phone className="w-5 h-5 text-highlight" />
                                </div>
                                <span className="text-primary-foreground/70 font-medium">+977 9801234567</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="p-2 bg-highlight/20 rounded-lg shrink-0">
                                    <Mail className="w-5 h-5 text-highlight" />
                                </div>
                                <span className="text-primary-foreground/70 font-medium text-sm">info@syangjasundar.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-accent/30 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-primary-foreground/55 text-sm font-medium">
                        © {new Date().getFullYear()} Syangja Khaja Ghar. Designed with heart.
                    </p>
                    <div className="flex space-x-8 text-sm font-medium">
                        <Link href="/privacy" className="text-primary-foreground/70 hover:text-highlight transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-primary-foreground/70 hover:text-highlight transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
