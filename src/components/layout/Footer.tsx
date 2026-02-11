import { Hotel, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Hotel className="w-8 h-8 text-accent" />
                            <span className="text-2xl font-bold tracking-tight">Syangja Sundar</span>
                        </div>
                        <p className="text-white/70 max-w-xs leading-relaxed">
                            Experience authentic hospitality and the rich flavors of Nepal at Syangja Sundar Hotel & Khaja Ghar.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-accent">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="#home" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#rooms" className="text-white/70 hover:text-white transition-colors">Our Rooms</Link></li>
                            <li><Link href="#dining" className="text-white/70 hover:text-white transition-colors">Dining & Menu</Link></li>
                            <li><Link href="#about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-accent">Services</h3>
                        <ul className="space-y-3">
                            <li className="text-white/70">Luxury Accomodation</li>
                            <li className="text-white/70">Authentic Dining</li>
                            <li className="text-white/70">Event Hosting</li>
                            <li className="text-white/70">Airport Pickups</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-accent">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0" />
                                <span className="text-white/70">Kawasoti-02, Nawalpur, Nepal</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span className="text-white/70">+977 980000000X</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span className="text-white/70">info@syangjasundar.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Syangja Sundar Hotel & Khaja Ghar. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-white/50">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
