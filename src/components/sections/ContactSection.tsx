'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import Toast from '../ui/Toast';

export const ContactSection = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [toastOpen, setToastOpen] = React.useState(false);
    const [sending, setSending] = React.useState(false);

    const onSend = () => {
        // trigger plane animation + toast + clear message
        setSending(true);
        setToastOpen(true);
        setMessage('');
        // stop sending after animation
        setTimeout(() => setSending(false), 900);
    };

    return (
        <section id="contact" className="py-24 bg-muted/30">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-brand font-black tracking-widest uppercase text-xs bg-brand/5 px-4 py-2 rounded-full">GET IN TOUCH</span>
                            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">We're Here for <span className="text-brand">You</span></h2>
                            <p className="text-muted-foreground text-xl leading-relaxed">
                                Whether you're planning a visit or have a question about our menu, our team is ready to assist you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { icon: MapPin, title: 'Our Location', content: 'Kawasoti-02, Nawalpur\nLumbini, Nepal' },
                                { icon: Phone, title: 'Call Us', content: '+977 9801234567\n+977 78-500000' },
                                { icon: Mail, title: 'Email Us', content: 'info@syangjasundar.com\nbooking@syangjasundar.com' },
                                { icon: Clock, title: 'Opening Hours', content: '8:00 AM - 10:00 PM\nOpen 7 Days a Week' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start space-x-5 group"
                                >
                                    <div className="bg-card p-4 rounded-2xl shadow-lg border border-border group-hover:border-brand group-hover:bg-brand transition-all duration-300">
                                        <item.icon className="w-6 h-6 text-brand group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                                        <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="rounded-3xl overflow-hidden h-[350px] border border-border shadow-2xl relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.8978076062881!2d84.12877668095945!3d27.653168382325006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399451ca43778a1b%3A0x9b8cf80bcd5c5df5!2sSyangja%20Sundar%20Hotel!5e1!3m2!1sen!2snp!4v1744538096747!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <Card className="p-10 md:p-14 shadow-2xl relative z-10 border-none rounded-[2.5rem] bg-card">
                            <h3 className="text-3xl font-black mb-8 text-primary">Send a Message</h3>
                            <form
                                className="space-y-8"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSend();
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">First Name</label>
                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-primary placeholder:text-muted-foreground/50"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Last Name</label>
                                        <input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-primary placeholder:text-muted-foreground/50"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-primary placeholder:text-muted-foreground/50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-primary placeholder:text-muted-foreground/50"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <div className="relative">
                                    <Button type="submit" className="w-full py-6 text-xl font-black bg-brand hover:bg-brand/90 hover:scale-[1.02] transition-all rounded-2xl shadow-xl shadow-brand/20">
                                        Send Message
                                    </Button>

                                    <AnimatePresence>
                                        {sending && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.6, x: -10, y: 8 }}
                                                animate={{ opacity: 1, x: 220, y: -220, rotate: 20 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.85, ease: 'easeInOut' }}
                                                className="absolute right-6 top-[-64px] pointer-events-none"
                                            >
                                                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 12L22 3L14 21L11 13L2 12Z" fill="#06b6d4" />
                                                </svg>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </form>
                            <Toast open={toastOpen} onClose={() => setToastOpen(false)} message="Sent" />
                        </Card>
                        <div className="absolute -top-10 -right-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl -z-0" />
                        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};
