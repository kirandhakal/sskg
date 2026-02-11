'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 bg-primary/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-highlight font-bold tracking-widest uppercase text-sm">Contact Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
                            <p className="text-muted-foreground text-lg">
                                Have questions or want to make a special reservation? We're here to help you plan your perfect visit.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary text-white p-3 rounded-xl border border-white/10 shadow-lg">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Our Location</h4>
                                    <p className="text-muted-foreground">Kawasoti-02, Nawalpur<br />Lumbini, Nepal</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary text-white p-3 rounded-xl border border-white/10 shadow-lg">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Call Us</h4>
                                    <p className="text-muted-foreground">+977 9801234567<br />+977 78-500000</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary text-white p-3 rounded-xl border border-white/10 shadow-lg">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Email Us</h4>
                                    <p className="text-muted-foreground">info@syangjasundar.com<br />booking@syangjasundar.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary text-white p-3 rounded-xl border border-white/10 shadow-lg">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Opening Hours</h4>
                                    <p className="text-muted-foreground">8:00 AM - 10:00 PM<br />Open 7 Days a Week</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden h-[300px] border border-white/10 shadow-md grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.8978076062881!2d84.12877668095945!3d27.653168382325006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399451ca43778a1b%3A0x9b8cf80bcd5c5df5!2sSyangja%20Sundar%20Hotel!5e1!3m2!1sen!2snp!4v1744538096747!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <Card className="p-8 md:p-12 shadow-2xl relative z-10 border-white/10 bg-card">
                            <h3 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                                        <input type="text" className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-highlight transition-all text-white" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                                        <input type="text" className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-highlight transition-all text-white" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                                    <input type="email" className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-highlight transition-all text-white" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                                    <select className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-highlight transition-all text-white">
                                        <option>Room Reservation</option>
                                        <option>Dining Inquiry</option>
                                        <option>Event Booking</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                    <textarea rows={4} className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-highlight transition-all text-white" placeholder="How can we help you?" />
                                </div>
                                <Button className="w-full py-4 text-lg bg-accent hover:bg-accent-light shadow-lg">Send Message</Button>
                            </form>
                        </Card>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};
