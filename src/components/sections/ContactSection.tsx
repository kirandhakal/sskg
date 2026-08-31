'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import Toast from '../ui/Toast';
import contactData from '@/data/sections/contact.json';

const iconMap = {
    MapPin,
    Phone,
    Mail,
    Clock,
};

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
                            <span className="text-brand font-black tracking-widest uppercase text-xs bg-brand/5 px-4 py-2 rounded-full">{contactData.badge}</span>
                            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                                {contactData.title.prefix} <span className="text-brand">{contactData.title.highlight}</span>
                            </h2>
                            <p className="text-muted-foreground text-xl leading-relaxed">
                                {contactData.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {contactData.contactInfo.map((item, index) => {
                                const IconComponent = iconMap[item.icon as keyof typeof iconMap] || MapPin;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start space-x-5 group"
                                    >
                                        <div className="bg-card p-4 rounded-2xl shadow-lg border border-border group-hover:border-brand group-hover:bg-brand transition-all duration-300">
                                            <IconComponent className="w-6 h-6 text-brand group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                                            <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="rounded-3xl overflow-hidden h-[350px] border border-border shadow-2xl relative">
                            <iframe
                                src={contactData.map.embedUrl}
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
                            <h3 className="text-3xl font-black mb-8 text-primary">{contactData.form.title}</h3>
                            <form
                                className="space-y-8"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    onSend();
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">{contactData.form.firstNameLabel}</label>
                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-primary placeholder:text-muted-foreground/50"
                                            placeholder={contactData.form.firstNamePlaceholder}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">{contactData.form.lastNameLabel}</label>
                                        <input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-primary placeholder:text-muted-foreground/50"
                                            placeholder={contactData.form.lastNamePlaceholder}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">{contactData.form.emailLabel}</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-primary placeholder:text-muted-foreground/50"
                                        placeholder={contactData.form.emailPlaceholder}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">{contactData.form.messageLabel}</label>
                                    <textarea
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-muted/50 border border-border/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all text-primary placeholder:text-muted-foreground/50"
                                        placeholder={contactData.form.messagePlaceholder}
                                    />
                                </div>
                                <div className="relative">
                                    <Button type="submit" className="w-full py-6 text-xl font-black bg-brand hover:bg-brand/90 hover:scale-[1.02] transition-all rounded-2xl shadow-xl shadow-brand/20">
                                        {contactData.form.submitButtonText}
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
                            <Toast open={toastOpen} onClose={() => setToastOpen(false)} message={contactData.form.toastSuccessMessage || "Sent"} />
                        </Card>
                        <div className="absolute -top-10 -right-10 w-80 h-80 bg-brand/5 rounded-full blur-3xl -z-0" />
                        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};
