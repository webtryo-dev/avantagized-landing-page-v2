import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Layout, Phone, Zap, ArrowRight, CheckCircle2, Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Avantagized Logo" className="h-10 w-auto" />
          <span className="font-bold text-xl tracking-tight text-slate-900">Avantagized</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#what-we-do" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">What we do</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://dashboard.avantagized.com" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">
            Login
          </a>
          <a href="#contact" className="glass-button-wrap">
            <button className="glass-button px-6 py-2">
              <span className="glass-button-text">Get Started</span>
            </button>
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="text-slate-900" /> : <Menu className="text-slate-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl">
          <a href="#what-we-do" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-purple-600">What we do</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-purple-600">Testimonials</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-purple-600">Contact</a>
          <a href="https://dashboard.avantagized.com" onClick={() => setIsOpen(false)} className="text-sm font-medium text-purple-600">Login to Dashboard</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* 3D Web3 Inspired Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl mix-blend-multiply"
        />
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl mix-blend-multiply"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
              Clean SaaS Design for Small Businesses
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Elevate your business with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">premium</span> website.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Avantagized builds stunning, fast, and conversion-focused websites for small businesses. Stand out, win trust, and grow faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/20">
                Request a website <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#what-we-do" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2">
                See our work
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] perspective-1000"
          >
            {/* 3D Floating Cards representing Web3/SaaS feel */}
            <motion.div 
              animate={{ rotateY: [0, 5, -5, 0], rotateX: [0, 5, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center transform-style-3d"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl border border-white/40 bg-white/30 backdrop-blur-2xl shadow-2xl p-8 flex flex-col gap-6 transform translate-z-50">
                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-400 bg-white/50 px-3 py-1 rounded-full">avantagized.com</div>
                </div>
                
                <div className="flex-1 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-white shadow-inner p-6 flex flex-col gap-4">
                  <div className="w-1/3 h-4 bg-purple-200 rounded-full"></div>
                  <div className="w-full h-24 bg-white rounded-lg shadow-sm border border-slate-100 p-4 flex gap-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg"></div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="w-full h-3 bg-slate-100 rounded-full"></div>
                      <div className="w-2/3 h-3 bg-slate-100 rounded-full"></div>
                      <div className="w-1/2 h-3 bg-slate-100 rounded-full mt-auto"></div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <div className="w-1/2 h-10 bg-purple-600 rounded-lg"></div>
                    <div className="w-1/2 h-10 bg-white border border-slate-200 rounded-lg"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Conversion</div>
                      <div className="text-xs text-slate-500">+124%</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-full"><Zap className="w-5 h-5 text-purple-600" /></div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Performance</div>
                      <div className="text-xs text-slate-500">A+ Grade</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  const features = [
    {
      icon: <Layout className="w-6 h-6 text-purple-600" />,
      title: "Clean SaaS Design",
      description: "We craft beautiful, modern interfaces with web3-inspired aesthetics that make your business look like a premium tech company."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: "Lightning Fast",
      description: "Built on modern stacks to ensure your website loads instantly, keeping visitors engaged and improving SEO rankings."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and hosting infrastructure, so you never have to worry about downtime or breaches."
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What we do</h2>
          <p className="text-lg text-slate-600">Everything you need to launch a high-performing website that turns visitors into loyal customers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:shadow-purple-500/5 transition-all group"
            >
              <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our new site finally looks like a real brand. We started getting calls the first week.",
      author: "Local Service Owner"
    },
    {
      quote: "Fast, clean, and easy. The process was organized and the design is exactly what we wanted.",
      author: "Small Business Founder"
    },
    {
      quote: "We went from outdated to premium overnight. Mobile experience is excellent.",
      author: "Retail & E-commerce"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100/40 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Client Success</h2>
          <p className="text-lg text-slate-600">What small business owners say after launching with Avantagized.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">"{item.quote}"</blockquote>
              <div className="font-semibold text-slate-900">— {item.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Contact Info */}
          <div className="md:w-5/12 p-12 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Let's build together.</h2>
              <p className="text-slate-300 mb-12">Tell us a little about your business. We'll reply with next steps and a simple quote.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Phone className="w-5 h-5 text-purple-300" /></div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Phone</div>
                    <a href="tel:+13072014305" className="text-lg font-medium hover:text-purple-300 transition-colors">+1 (307) 201-4305</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <a href="mailto:help@avantagized.com" className="text-lg font-medium hover:text-purple-300 transition-colors">help@avantagized.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Address</div>
                    <div className="text-lg font-medium">30 N Gould St<br/>Sheridan, WY, 82801</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-7/12 p-12 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-2">Business Name</label>
                <input 
                  type="text" 
                  id="business" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors"
                  placeholder="Acme Corp"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-colors"
                  placeholder="+1 (___) ___-____"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-purple-600/20 mt-4">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Avantagized Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl tracking-tight text-slate-900">Avantagized</span>
            </a>
            <p className="text-slate-500 max-w-sm">
              We help small businesses build premium websites that look great and convert visitors into loyal customers.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#what-we-do" className="text-slate-500 hover:text-purple-600 transition-colors">What we do</a></li>
              <li><a href="#testimonials" className="text-slate-500 hover:text-purple-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-purple-600 transition-colors">Contact</a></li>
              <li><a href="https://dashboard.avantagized.com" className="text-slate-500 hover:text-purple-600 transition-colors">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:help@avantagized.com" className="text-slate-500 hover:text-purple-600 transition-colors">help@avantagized.com</a></li>
              <li><a href="tel:+13072014305" className="text-slate-500 hover:text-purple-600 transition-colors">+1 (307) 201-4305</a></li>
              <li className="text-slate-500">30 N Gould St, Sheridan, WY, 82801</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Avantagized. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-purple-200 selection:text-purple-900">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}