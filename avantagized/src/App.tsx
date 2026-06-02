import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Layout, Sparkles, Shield, MapPin, Phone, Mail, Menu, X } from 'lucide-react';

const easeSpring = [0.32, 0.72, 0, 1];
const duration = 0.7;

// Animation variants for stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration, ease: easeSpring }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: easeSpring }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 hardware-accelerated"
      >
        <div className={`island-nav flex items-center justify-between px-6 py-4 rounded-full w-full max-w-5xl transition-all duration-500 motion-spring ${scrolled ? 'py-3' : ''}`}>
          <a href="#" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Avantagized" className="h-8 w-auto group-active:scale-95 transition-transform duration-300" />
            <span className="font-bold text-lg tracking-tight">Avantagized</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['What we do', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className="text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-[0.05em]"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://dashboard.avantagized.com" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-4 py-2">
              Login
            </a>
            <a href="#contact" className="btn-island btn-primary text-sm py-2 px-5">
              <span>Get a quote</span>
              <div className="btn-icon-wrapper !w-6 !h-6">
                <ArrowUpRight strokeWidth={1.5} className="w-3 h-3" />
              </div>
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 active:scale-95 transition-transform"
          >
            <Menu strokeWidth={1.5} className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easeSpring }}
            className="fixed inset-0 z-40 bg-white/80 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 active:scale-95 transition-transform"
            >
              <X strokeWidth={1.5} className="w-5 h-5" />
            </button>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center gap-8"
            >
              {['What we do', 'Testimonials', 'Contact'].map((item) => (
                <motion.a 
                  key={item}
                  variants={itemVariants}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold tracking-tight text-slate-900"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                variants={itemVariants}
                href="https://dashboard.avantagized.com"
                className="mt-8 text-lg font-medium text-purple-600"
              >
                Login to Dashboard
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-24 overflow-hidden selection:bg-purple-200">
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10 w-full"
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeSpring }}
            className="mb-8 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-700 bg-purple-50 ring-1 ring-purple-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]"
          >
            Clean SaaS Design
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: easeSpring, delay: 0.1 }}
            className="text-[3.5rem] leading-[1.05] md:text-[5.5rem] font-bold tracking-tighter text-slate-900 mb-8"
          >
            Build your <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-purple-400">premium</span><br />
            digital presence.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeSpring, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12"
          >
            Avantagized engineers $150k+ agency-level experiences for small businesses. Stand out with obsessive micro-interactions, haptic depth, and flawless fluid motion.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeSpring, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#contact" className="btn-island btn-primary">
              <span>Start your project</span>
              <div className="btn-icon-wrapper">
                <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
              </div>
            </a>
            <a href="#what-we-do" className="btn-island btn-ghost">
              <span>Explore services</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Web3 3D Floating Orbs Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center hardware-accelerated">
        <div className="absolute w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-[100px] animate-float opacity-50" style={{ top: '10%', right: '-10%' }} />
        <div className="absolute w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[80px] animate-float-reverse opacity-40" style={{ bottom: '10%', left: '-10%' }} />
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-32 md:py-40 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-20 md:w-1/2"
        >
          <motion.div variants={itemVariants} className="inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 ring-1 ring-slate-200 mb-6 bg-white">
            Our Services
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
            The Asymmetrical Bento.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-500 font-medium">
            Everything you need to launch a high-performing website that turns visitors into loyal customers. We don't just build websites; we engineer experiences.
          </motion.p>
        </motion.div>

        {/* The Asymmetrical Bento Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main large card */}
          <motion.div variants={itemVariants} className="md:col-span-8 md:row-span-2 double-bezel-outer group">
            <div className="double-bezel-inner h-full min-h-[400px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/80 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700 motion-spring" />
              <div className="relative z-10 max-w-lg">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-slate-100 flex items-center justify-center mb-8">
                  <Layout strokeWidth={1.5} className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Clean SaaS Design</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  We craft beautiful, modern interfaces with web3-inspired aesthetics that make your business look like a premium tech company. No generic templates, just bespoke visual tension.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stacked smaller cards */}
          <motion.div variants={itemVariants} className="md:col-span-4 double-bezel-outer group">
            <div className="double-bezel-inner h-full p-8 relative overflow-hidden bg-slate-900 text-white">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Sparkles strokeWidth={1.5} className="w-4 h-4 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Lightning Fast</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Built on modern stacks to ensure your website loads instantly, keeping visitors engaged and improving SEO rankings.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 double-bezel-outer group">
            <div className="double-bezel-inner h-full p-8 relative overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-purple-50 ring-1 ring-purple-100 flex items-center justify-center mb-6">
                <Shield strokeWidth={1.5} className="w-4 h-4 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">Secure & Reliable</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Enterprise-grade security and hosting infrastructure, so you never have to worry about downtime or breaches.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { quote: "Our new site finally looks like a real brand. We started getting calls the first week.", author: "Local Service Owner" },
    { quote: "Fast, clean, and easy. The process was organized and the design is exactly what we wanted.", author: "Small Business Founder" },
    { quote: "We went from outdated to premium overnight. Mobile experience is excellent.", author: "Retail & E-commerce" }
  ];

  return (
    <section id="testimonials" className="py-32 md:py-40 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <motion.div variants={itemVariants} className="inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 ring-1 ring-slate-200 mb-6">
            Client Success
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
            Don't just take our word.
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review, idx) => (
            <motion.div key={idx} variants={itemVariants} className="double-bezel-outer">
              <div className="double-bezel-inner p-8 md:p-10 h-full flex flex-col justify-between">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-purple-600 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 mb-8 font-medium leading-relaxed">
                  "{review.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <Check strokeWidth={2} className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="font-semibold text-sm text-slate-900 tracking-tight">{review.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-700 bg-purple-50 ring-1 ring-purple-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] mb-8">
              Get in Touch
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
              Ready to elevate your business?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-500 font-medium mb-12 max-w-md">
              Tell us a little about your business. We'll reply with next steps and a simple, transparent quote.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 motion-spring">
                  <Mail strokeWidth={1.5} className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400 mb-0.5">Email</div>
                  <a href="mailto:help@avantagized.com" className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors">help@avantagized.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 motion-spring">
                  <Phone strokeWidth={1.5} className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400 mb-0.5">Phone</div>
                  <a href="tel:+13072014305" className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors">+1 (307) 201-4305</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] ring-1 ring-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 motion-spring">
                  <MapPin strokeWidth={1.5} className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-400 mb-0.5">Address</div>
                  <div className="text-lg font-semibold text-slate-900">30 N Gould St, Sheridan, WY, 82801</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: easeSpring }}
            className="double-bezel-outer"
          >
            <div className="double-bezel-inner p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Full Name</label>
                  <input type="text" id="name" className="input-bezel" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Business Name</label>
                  <input type="text" id="business" className="input-bezel" placeholder="Acme Corp" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Phone Number</label>
                  <input type="tel" id="phone" className="input-bezel" placeholder="+1 (___) ___-____" required />
                </div>
                <button type="submit" className="btn-island btn-primary w-full justify-center mt-4">
                  <span>Submit Request</span>
                  <div className="btn-icon-wrapper">
                    <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 ring-1 ring-slate-100 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Avantagized Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl tracking-tight text-slate-900">Avantagized</span>
            </a>
            <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
              We engineer premium digital experiences that help small businesses stand out, win trust, and grow faster.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-semibold text-slate-900 mb-6 text-sm uppercase tracking-[0.1em]">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#what-we-do" className="text-slate-500 hover:text-slate-900 font-medium transition-colors">What we do</a></li>
              <li><a href="#testimonials" className="text-slate-500 hover:text-slate-900 font-medium transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-slate-900 font-medium transition-colors">Contact</a></li>
              <li><a href="https://dashboard.avantagized.com" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">Login to Dashboard</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-semibold text-slate-900 mb-6 text-sm uppercase tracking-[0.1em]">Contact</h4>
            <ul className="space-y-4">
              <li><a href="mailto:help@avantagized.com" className="text-slate-500 hover:text-slate-900 font-medium transition-colors">help@avantagized.com</a></li>
              <li><a href="tel:+13072014305" className="text-slate-500 hover:text-slate-900 font-medium transition-colors">+1 (307) 201-4305</a></li>
              <li className="text-slate-500 font-medium">30 N Gould St<br/>Sheridan, WY, 82801</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm font-medium">© {new Date().getFullYear()} Avantagized. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}