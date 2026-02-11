import { Hotel, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground pt-24 pb-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="bg-brand p-2.5 rounded-2xl group-hover:rotate-12 transition-transform shadow-lg shadow-brand/20">
                                <Hotel className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-3xl font-black tracking-tight">Syangja <span className="text-brand">Sundar</span></span>
                        </Link>
                        <p className="text-primary-foreground/60 text-lg leading-relaxed">
                            Crafting unforgettable memories through authentic Nepali hospitality and timeless traditional flavors since 25 years.
                        </p>
                        <div className="flex space-x-5">
                            <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-brand rounded-2xl transition-all duration-300 text-primary-foreground hover:text-white"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-brand rounded-2xl transition-all duration-300 text-primary-foreground hover:text-white"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="p-3 bg-primary-foreground/10 hover:bg-brand rounded-2xl transition-all duration-300 text-primary-foreground hover:text-white"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-primary-foreground/10 pb-4 inline-block">Explore</h3>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-primary-foreground/60 hover:text-brand transition-colors font-medium">Home</Link></li>
                            <li><Link href="/rooms" className="text-primary-foreground/60 hover:text-brand transition-colors font-medium">Our Accommodations</Link></li>
                            <li><Link href="/dining" className="text-primary-foreground/60 hover:text-brand transition-colors font-medium">Dining Experience</Link></li>
                            <li><Link href="/about" className="text-primary-foreground/60 hover:text-brand transition-colors font-medium">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-primary-foreground/10 pb-4 inline-block">Services</h3>
                        <ul className="space-y-4">
                            <li className="text-primary-foreground/60 font-medium">Luxury Stay</li>
                            <li className="text-primary-foreground/60 font-medium">Traditional Dining</li>
                            <li className="text-primary-foreground/60 font-medium">Event Spaces</li>
                            <li className="text-primary-foreground/60 font-medium">Travel Desk</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-primary-foreground/10 pb-4 inline-block">Contact</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <div className="p-2 bg-brand/10 rounded-lg shrink-0">
                                    <MapPin className="w-5 h-5 text-brand" />
                                </div>
                                <span className="text-primary-foreground/60 font-medium">Kawasoti-02, Nawalpur<br />Lumbini, Nepal</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="p-2 bg-brand/10 rounded-lg shrink-0">
                                    <Phone className="w-5 h-5 text-brand" />
                                </div>
                                <span className="text-primary-foreground/60 font-medium">+977 9801234567</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <div className="p-2 bg-brand/10 rounded-lg shrink-0">
                                    <Mail className="w-5 h-5 text-brand" />
                                </div>
                                <span className="text-primary-foreground/60 font-medium text-sm">info@syangjasundar.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-primary-foreground/40 text-sm font-medium">
                        © {new Date().getFullYear()} Syangja Sundar Hotel & Khaja Ghar. Designed with heart.
                    </p>
                    <div className="flex space-x-8 text-sm font-medium">
                        <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
