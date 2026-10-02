import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

import fallbackData from '@/data/sections/footer.json';
const icons = { Facebook, Instagram, Twitter, MapPin, Phone, Mail };

export const Footer = ({ data = fallbackData }: { data?: typeof fallbackData }) => {
    return (
        <footer className="bg-brand text-primary-foreground pt-24 pb-12 border-t border-accent/30">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="space-y-8">
                        <Link href={data.brand.href} className="flex items-center space-x-3 group">
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent bg-primary-foreground p-0.5 shadow-lg transition-transform group-hover:scale-105">
                                <img
                                    src={data.brand.logo.src}
                                    alt={data.brand.logo.alt}
                                    className="h-full w-full rounded-full object-cover"
                                />
                            </div>
                            <span className="text-3xl font-black tracking-tight text-primary-foreground">{data.brand.prefix} <span className="text-highlight">{data.brand.highlight}</span></span>
                        </Link>
                        <p className="text-primary-foreground/70 text-lg leading-relaxed">
                            {data.description}
                        </p>
                        <div className="flex space-x-5">
                            {data.socialLinks.map((link, index) => {
                                const Icon = icons[link.icon as keyof typeof icons] || Facebook;
                                return <a key={index} href={link.href} className="p-3 bg-primary-foreground/10 hover:bg-highlight rounded-2xl transition-all duration-300 text-primary-foreground" aria-label={link.label}><Icon className="w-5 h-5" /></a>;
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-accent/30 pb-4 inline-block text-primary-foreground">{data.navigationTitle}</h3>
                        <ul className="space-y-4">
                            {data.links.map((link, index) => <li key={index}><Link href={link.href} className="text-primary-foreground/70 hover:text-highlight transition-colors font-medium">{link.name}</Link></li>)}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-accent/30 pb-4 inline-block text-primary-foreground">{data.servicesTitle}</h3>
                        <ul className="space-y-4">
                            {data.services.map((service, index) => <li key={index} className="text-primary-foreground/70 font-medium">{service}</li>)}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold border-b border-accent/30 pb-4 inline-block text-primary-foreground">{data.contactTitle}</h3>
                        <ul className="space-y-6">
                            {data.contactInfo.map((item, index) => {
                                const Icon = icons[item.icon as keyof typeof icons] || MapPin;
                                return <li key={index} className="flex items-start space-x-4"><div className="p-2 bg-highlight/20 rounded-lg shrink-0"><Icon className="w-5 h-5 text-highlight" /></div><span className="text-primary-foreground/70 font-medium whitespace-pre-line">{item.text}</span></li>;
                            })}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-accent/30 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-primary-foreground/55 text-sm font-medium">
                        © {new Date().getFullYear()} {data.copyright}
                    </p>
                    <div className="flex space-x-8 text-sm font-medium">
                        {data.legalLinks.map((link, index) => <Link key={index} href={link.href} className="text-primary-foreground/70 hover:text-highlight transition-colors">{link.name}</Link>)}
                    </div>
                </div>
            </div>
        </footer>
    );
};
