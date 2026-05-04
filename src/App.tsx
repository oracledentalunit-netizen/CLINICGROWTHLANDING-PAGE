/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, 
  Layout,
  TrendingUp, 
  Clock, 
  MapPin, 
  CloudRain, 
  Sun, 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  PlayCircle,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle
} from "lucide-react";

const RAZORPAY_LINK = "https://pages.razorpay.com/pl_SlCldEoS8GtlOB/view";
const SHARE_URL = "https://clinicgrowthlanding-page.pages.dev";
const SHARE_TEXT = "I found this amazing Patient Flow System for doctors by Dr. Prashant Kumar Vats. Check it out!";

const SocialShare = () => {
  const shareLinks = [
    { icon: MessageCircle, name: "WhatsApp", color: "text-green-500", url: `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + SHARE_URL)}` },
    { icon: Facebook, name: "Facebook", color: "text-blue-600", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}` },
    { icon: Twitter, name: "Twitter", color: "text-sky-500", url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}` },
    { icon: Linkedin, name: "LinkedIn", color: "text-blue-700", url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}` },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Patient Flow System',
          text: SHARE_TEXT,
          url: SHARE_URL,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-12 pt-12 border-t border-sky-100/50">
      <div className="flex items-center gap-2 text-xs font-black text-sky-700/50 uppercase tracking-[0.2em]">
        <Share2 className="w-3 h-3" />
        <span>Share with Colleagues</span>
      </div>
      <div className="flex gap-4">
        {shareLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className={`bg-white p-3 rounded-2xl shadow-sm border border-sky-100 ${link.color} hover:shadow-md transition-all`}
          >
            <link.icon className="w-6 h-6" />
          </motion.a>
        ))}
        <motion.button
          onClick={handleNativeShare}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="bg-sky-600 p-3 rounded-2xl shadow-sm border border-sky-500 text-white hover:shadow-md transition-all md:hidden"
        >
          <Share2 className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

const CTAButton = ({ children, className = "", secondary = false }: { children: React.ReactNode, className?: string, secondary?: boolean }) => (
  <motion.a
    href={RAZORPAY_LINK}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    id="cta-button"
    className={`inline-flex items-center justify-center ${secondary ? "bg-white text-orange-600 border-2 border-orange-600" : "bg-orange-600 text-white"} hover:shadow-[0_20px_50px_rgba(249,115,22,0.3)] active:bg-orange-800 font-bold py-4 px-8 rounded-full shadow-lg active:shadow-md transition-all text-center text-lg md:text-xl w-full sm:w-auto font-display ${className}`}
  >
    {children}
    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </motion.a>
);

const AnimatedText = ({ children, className = "", delay = 0, type = "fade-up" }: { children: React.ReactNode, className?: string, delay?: number, type?: "fade-up" | "fade-in" | "scale-up" }) => {
  const variants = {
    "fade-up": { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
    "fade-in": { initial: { opacity: 0 }, animate: { opacity: 1 } },
    "scale-up": { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }
  };

  const currentVariant = variants[type] || variants["fade-up"];

  return (
    <motion.div
      initial={currentVariant.initial}
      animate={currentVariant.animate}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle, centered = true, light = false }: { title: string | React.ReactNode, subtitle?: string, centered?: boolean, light?: boolean }) => (
  <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
    <AnimatedText>
      <h2 className={`text-4xl md:text-6xl font-black mb-6 font-display tracking-tight leading-tight ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
    </AnimatedText>
    {subtitle && (
      <AnimatedText delay={0.2}>
        <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${light ? "text-sky-100" : "text-slate-600"}`}>
          {subtitle}
        </p>
      </AnimatedText>
    )}
  </div>
);

const FloatingWhatsApp = () => (
  <motion.a
    href={`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + SHARE_URL)}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 2, duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-32 right-6 z-[9999] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white cursor-pointer hover:bg-green-600 transition-colors"
    aria-label="Share on WhatsApp"
  >
    <MessageCircle className="w-8 h-8" />
  </motion.a>
);

const FloatingCTA = () => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
    className="fixed bottom-6 left-4 right-4 md:left-auto md:right-32 md:w-80 z-[9998]"
  >
    <motion.a
      href={RAZORPAY_LINK}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-between bg-orange-600 text-white py-4 px-6 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-md"
    >
      <div className="flex flex-col">
        <span className="text-[10px] font-black opacity-80 uppercase tracking-widest leading-none mb-1">Limited Offer</span>
        <span className="text-base font-black leading-tight">Patient Flow System @ ₹249</span>
      </div>
      <div className="bg-white/20 p-2 rounded-xl">
        <ArrowRight className="w-5 h-5" />
      </div>
    </motion.a>
  </motion.div>
);

export default function App() {
  const [hasError, setHasError] = React.useState(false);
  const [errorInfo, setErrorInfo] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setErrorInfo(event.message + "\n" + event.error?.stack);
    };
    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-screen bg-red-50 text-red-900 font-sans">
        <h1 className="text-3xl font-black mb-4">Something went wrong</h1>
        <p className="mb-6 opacity-80 text-center max-w-lg">The application encountered a runtime error. Please refresh and try again or contact support.</p>
        <pre className="p-6 bg-red-100 rounded-2xl w-full max-w-4xl overflow-auto text-xs border border-red-200">
          {errorInfo}
        </pre>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sky-50/50 font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50 -z-10" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none -z-10 bg-pattern" />
        
        {/* Floating Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/40 blur-[100px] rounded-full -z-10" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] bg-orange-100/30 blur-[120px] rounded-full -z-10" 
        />

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <AnimatedText delay={0.1} type="fade-up">
                <div className="inline-flex items-center gap-2 px-5 py-2 mb-10 text-xs font-black tracking-[0.2em] text-sky-800 uppercase bg-white/90 backdrop-blur-md rounded-full border border-sky-200 shadow-xl shadow-sky-500/10">
                  <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  Trusted by 5,000+ Doctors Worldwide
                </div>
              </AnimatedText>
              
              <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 text-slate-900 font-display tracking-tight">
                <AnimatedText delay={0.2} type="fade-up">Patients</AnimatedText>
                <AnimatedText delay={0.4} type="fade-up">
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10 text-orange-600">nahi aa rahe?</span>
                    <motion.span 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="absolute bottom-2 left-0 h-4 bg-orange-100 -z-10 rounded-full" 
                    />
                  </span>
                </AnimatedText>
              </h1>

              <AnimatedText delay={0.6} type="fade-up">
                <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                  Ab har season me <span className="text-slate-900 font-bold underline decoration-sky-300 decoration-4">consistent patient flow</span> possible hai. System unlock kariye jo har din nayi bookings dilayega.
                </p>
              </AnimatedText>

              <div className="flex flex-col gap-5 mb-12">
                {[
                  { icon: CloudRain, text: "Rain ho ya summer — patients aate rahenge", color: "text-sky-500" },
                  { icon: MapPin, text: "Small town ya metro city — system same kaam karega", color: "text-green-500" },
                  { icon: CheckCircle2, text: "Chair khali nahi rahegi", color: "text-orange-500" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + (i * 0.1), duration: 0.6 }}
                    className="flex items-center gap-4 justify-center lg:justify-start group"
                  >
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-sky-50 transition-all group-hover:scale-110 group-hover:rotate-3">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="font-bold text-lg text-slate-700 tracking-tight group-hover:text-slate-900 transition-colors">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <AnimatedText delay={1.2} type="fade-up">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <CTAButton className="py-5 px-10 text-2xl shadow-orange-500/20">Mujhe Patients Chahiye</CTAButton>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-slate-400 line-through">Value ₹25,000+</span>
                    <span className="text-2xl font-black text-slate-900">Sirf ₹249 Today</span>
                  </div>
                </div>
              </AnimatedText>
            </div>

            <div className="flex-1 w-full max-w-md md:max-w-none">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                  alt="Empty Clinic - Sad Dentist"
                  className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover will-change-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Before the System
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading 
            title={<>Kya Aap Bhi Ye <span className="text-sky-600 underline decoration-sky-200">Face Kar Rahe Hain?</span></>}
            centered={false}
          />
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="flex-1">
              <div className="space-y-6">
                {[
                  "Clinic me khaali time zyada hai",
                  "Patients irregular aate hain",
                  "Ads kaam nahi kar rahe (Paisa barbaad ho raha hai)",
                  "High-ticket treatments nahi aa rahe"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
                    className="flex items-start gap-6 p-8 bg-sky-50/50 rounded-[2rem] shadow-sm border border-sky-100/50 hover:bg-sky-100 transition-all group cursor-default"
                  >
                    <div className="bg-white p-3 rounded-2xl text-red-500 shadow-md group-hover:rotate-12 group-hover:text-red-600 transition-all">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="text-xl text-slate-700 font-bold tracking-tight group-hover:text-slate-900 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
              <AnimatedText delay={0.8} className="mt-12">
                <div className="p-10 bg-orange-600 text-white rounded-[2.5rem] shadow-2xl transform -rotate-1 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <p className="text-3xl font-black italic relative z-10">“Problem marketing ki nahi — system ki hai”</p>
                </div>
              </AnimatedText>
              <AnimatedText delay={1} className="mt-10">
                <CTAButton className="px-10 py-5 text-xl">Solve This Problem Now</CTAButton>
              </AnimatedText>
            </div>
            <div className="flex-1 w-full relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-4 border-2 border-slate-900 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4" />
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                  alt="Modern but Empty Waiting Area"
                  className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover will-change-transform"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Reality Section */}
      <section className="py-32 bg-sky-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <SectionHeading 
            title={<>Market <span className="text-sky-600">Reality vs. Our System</span></>}
            subtitle="Agencies will charge you thousands but leave you confused. We give you the keys to the kingdom."
          />

            <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100"
            >
              <h3 className="text-2xl font-bold mb-8 text-slate-400 uppercase tracking-widest text-center">Typical Agencies</h3>
              <ul className="space-y-6">
                {[
                  "Templates deti hain, par use kaise kare ye nahi batati",
                  "Training ke liye ₹20,000–₹50,000 extra charge karti hain",
                  "Aapko unke upar hamesha dependent rakhti hain",
                  "High monthly retainers with zero guarantee"
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-4 items-start text-slate-500 line-through"
                  >
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-sky-600 p-12 rounded-[3.5rem] shadow-2xl shadow-sky-200 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck className="w-32 h-32 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-8 font-display">Yahan Aapko Kya Milega?</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "High-Converting Ready-to-use Templates",
                  "Step-by-step Training (Inhe use kaise karna hai)",
                  "Total Self-Dependency (No more agency fees)",
                  "Sirf tools nahi — pura system milega"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (0.1 * i) }}
                    className="flex gap-4 items-start"
                  >
                    <div className="bg-white/20 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sky-100 font-bold italic text-lg text-center">“Your road to complete freedom”</p>
              </div>
              <div className="mt-8">
                <CTAButton className="bg-orange-600 text-white hover:bg-orange-700 shadow-xl py-3 px-8 text-lg border-none">Get The Full System</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-sky-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading 
            title={<>Our <span className="text-sky-600">Core Mission</span></>}
            subtitle="Dr. Prashant Kumar Vats ka mission simple hai: Helping doctors earn what they truly deserve."
          />
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="space-y-8 text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <AnimatedText delay={0.2}>
                  <p>Doctors highly skilled hote hain, lekin apna focus marketing pe nahi de paate, isliye woh apni skill ke hisaab se earn nahi kar paate.</p>
                </AnimatedText>
                <AnimatedText delay={0.4}>
                  <div className="font-black text-slate-900 bg-white p-8 rounded-[2.5rem] border-l-8 border-sky-600 shadow-2xl shadow-sky-500/10 relative group text-left transition-all hover:scale-[1.02] hover:shadow-sky-500/20">
                    <div className="absolute -top-4 -right-4 bg-sky-600 text-white p-2 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    "Is system ka goal hai Doctors ko empower karna — taaki wo apni skill ke hisaab se earn sakein."
                  </div>
                </AnimatedText>
                <AnimatedText delay={0.6}>
                  <p>Yeh sirf ek product nahi — ek <span className="text-sky-600 font-black uppercase underline decoration-2">initiative</span> hai jo doctors ko self-dependent banane ke liye banaya gaya hai.</p>
                </AnimatedText>
                <AnimatedText delay={0.8} className="pt-6">
                  <CTAButton className="px-12 py-5 text-xl">Join the Initiative</CTAButton>
                </AnimatedText>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-sky-200 rounded-[3rem] transform -rotate-3 -z-10 shadow-xl" />
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Confident Professional Doctor"
                  className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover border-8 border-white will-change-transform"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Justification Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading 
            title={<>Value <span className="text-sky-600">Anchor</span></>}
            subtitle="Agar aap ye sab market se loge, toh ye aapki mehnat ki kamai ka bada hissa le jayenge."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Ready Templates", price: "₹10,000+", icon: Layout },
              { title: "Elite Training", price: "₹20,000+", icon: PlayCircle },
              { title: "Agency Retainers", price: "₹30,000+", icon: Users }
            ].map((item, i) => (
              <motion.div 
                key={i}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center group hover:bg-slate-900 hover:text-white transition-all duration-500 cursor-default"
              >
                <div className="bg-white group-hover:bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md transition-colors group-hover:rotate-6">
                  <item.icon className="w-10 h-10 text-sky-600 group-hover:text-white" />
                </div>
                <div className="text-slate-500 group-hover:text-slate-400 font-black mb-2 uppercase tracking-widest text-xs">{item.title}</div>
                <div className="text-3xl font-black text-red-500 line-through opacity-50 group-hover:opacity-100 group-hover:text-red-400">{item.price}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-sky-600 rounded-[3.5rem] p-12 md:p-20 text-white text-center shadow-3xl shadow-sky-200 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-5xl font-black mb-10 font-display italic tracking-tight relative z-10">Sirf ₹249 kyun?</h3>
            <div className="space-y-8 text-2xl opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed relative z-10">
              <p>Kyunki goal profit nahi — <span className="text-white font-black underline underline-offset-8 decoration-4 decoration-sky-300">IMPACT</span> hai.</p>
              <div className="font-black text-sky-900 bg-white p-8 rounded-[2rem] shadow-2xl">
                “Free advice log apply nahi karte — isliye nominal investment rakha gaya hai taaki aap serious ho aur implement karein.”
              </div>
            </div>
            <CTAButton className="bg-orange-600 text-white hover:bg-orange-700 shadow-2xl px-16 py-7 text-3xl group-hover:scale-105 transition-transform">
              Grab The Offer Now
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <SectionHeading 
            title={<>Introducing The <span className="text-sky-600">Growth Engine</span></>}
            subtitle="Patient Flow System by Dr. Prashant Kumar Vats — Sirf tools nahi, pura predictable ecosystem."
          />

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              { icon: MessageSquare, title: "Copy-Paste Ads for Dentists", desc: "No brainstorming needed. High-converting designs that work instantly." },
              { icon: Calendar, title: "Ready Templates", desc: "WhatsApp and SMS scripts that turn inquiries into walk-ins." },
              { icon: TrendingUp, title: "Predictable Flow", desc: "Fill your chair even in off-seasons. No more dry months." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                className="p-12 rounded-[3.5rem] bg-white border border-sky-100 shadow-2xl shadow-sky-200/20 hover:shadow-sky-500/20 transition-all group flex flex-col items-center text-center"
              >
                <div className="bg-sky-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 mx-auto shadow-inner group-hover:bg-sky-600 transition-all group-hover:scale-110 group-hover:rotate-6">
                  <feature.icon className="w-12 h-12 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-black mb-6 font-display tracking-tight group-hover:text-sky-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-[3.5rem] overflow-hidden mb-20 max-w-5xl mx-auto shadow-3xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000"
              alt="Full Dental Clinic"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-16">
              <p className="text-white text-4xl font-black text-left italic font-display leading-tight">Imagine your clinic like this...<br /><span className="text-sky-400">Har season me consistent rush.</span></p>
            </div>
          </motion.div>

          <CTAButton className="text-2xl px-16 py-8">₹249 me System Unlock Karein</CTAButton>
        </div>
      </section>

      {/* Power Punch Section */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-5">
          <Stethoscope className="w-96 h-96" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <SectionHeading 
            title={<>Nahi Rukega <span className="text-sky-400">Patients ka Flow</span></>}
            subtitle="Chaahe kuch bhi ho jaaye — weather, location, ya competition."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            {[
              { icon: CloudRain, title: "Rain ho ya garmi", text: "Patients aate rahenge, seasonal dip hamesha ke liye khatam." },
              { icon: MapPin, title: "Location koi bhi ho", text: "System Tier-1 city ho ya Small Town, har jagah kaam karta hai." },
              { icon: TrendingUp, title: "Scale with Margin", text: "Sirf patient hi nahi — high-quality cases pe focus karein." },
              { icon: CheckCircle2, title: "Total Control", text: "Agency ke nakhre khatam. Control ab aapke hath me hai." }
            ].map((punch, i) => (
              <motion.div
                key={i}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start group p-8 rounded-[2.5rem] hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <div className="bg-sky-500/10 p-6 rounded-2xl flex-shrink-0 group-hover:bg-sky-400 group-hover:text-slate-950 transition-all border border-sky-500/20 group-hover:scale-110">
                  <punch.icon className="w-10 h-10 text-sky-400 group-hover:text-inherit" />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3 font-display tracking-tight text-sky-400">{punch.title}</h3>
                  <p className="text-slate-400 text-xl leading-relaxed">{punch.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-20"
          >
            <CTAButton className="px-16 py-6 text-2xl">Ensuring Consistent Flow</CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Offer Stack */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <SectionHeading 
            title={<>What's <span className="text-sky-600">Inside the System?</span></>}
            subtitle="Everything you need to turn your clinic into a patient magnet."
          />
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-sky-50 rounded-[3.5rem] shadow-3xl overflow-hidden border border-sky-100 flex flex-col md:flex-row shadow-sky-200/50"
          >
            <div className="flex-1 p-10 md:p-16 text-left bg-white">
              <h4 className="text-2xl font-bold text-slate-800 mb-8 border-b border-sky-100 pb-4">The Complete Growth Stack</h4>
              <div className="space-y-6">
                {[
                  { title: "Ad Templates", desc: "Ready to use designs and hooks for Meta & Google." },
                  { title: "WhatsApp Scripts", desc: "Scripts that turn 'price' inquiries into 'appointments'." },
                  { title: "Landing Page Templates", desc: "Heavily optimized designs for quick setup." },
                  { title: "Step-by-step System", desc: "Detailed guide on how to launch in 48 hours." },
                  { title: "Exclusive Webinar", desc: "Single powerful session to tie it all together." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="bg-green-100 p-1 rounded-full shrink-0 group-hover:bg-green-500 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[360px] bg-sky-600 p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800')] bg-cover" />
              <div className="relative z-10 space-y-4 mb-10">
                <div className="text-sm opacity-70 mb-1 line-through">Value ₹50,000+</div>
                <div className="text-6xl font-black font-display tracking-tight leading-none">₹249</div>
                <div className="text-xs text-sky-200 font-bold uppercase tracking-widest bg-white/10 py-1 px-3 rounded-full">One-Time Offer</div>
              </div>
              <CTAButton className="bg-orange-600 text-white hover:bg-orange-700 w-full shadow-2xl relative z-10">
                Access Now
              </CTAButton>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 text-center"
          >
            <CTAButton className="px-16 py-7 text-2xl animate-pulse">Claim All Bonuses Now</CTAButton>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-sky-50/50 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading 
            title={<>The <span className="text-sky-600">Masterclass</span></>}
            subtitle="Single powerful session to tie all the tools together into a predictable system."
          />
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
              <div className="space-y-6 mb-10">
                  {[
                    "Ads kaise banaye (Without high agency fees)",
                    "Templates kaise use kare",
                    "Low budget me patients kaise laaye",
                    "WhatsApp conversion kaise badhaye",
                    "High-ticket cases kaise attract kare"
                  ].map((teach, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <div className="bg-white p-1 rounded-full shadow-sm group-hover:scale-110 group-hover:bg-sky-600 transition-all">
                        <PlayCircle className="w-6 h-6 text-sky-600 flex-shrink-0 group-hover:text-white" />
                      </div>
                      <span className="text-lg text-slate-700 font-medium group-hover:text-slate-950 transition-colors uppercase tracking-tight">{teach}</span>
                    </motion.div>
                  ))}
                </div>
                <CTAButton>Register Now for ₹249</CTAButton>
              </motion.div>
            </div>
            <div className="flex-1 w-full relative">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-sky-600 rounded-[2.5rem] transform rotate-3 -z-10 shadow-sky shadow-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200"
                  alt="Doctor teaching on laptop"
                  className="rounded-[2.5rem] shadow-2xl w-full aspect-video object-cover border-8 border-white"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/50 cursor-pointer hover:scale-110 transition-transform shadow-xl">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Growth Engine */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeading 
            title={<>Spread the <span className="text-sky-600">Mission</span></>}
            subtitle="Helping one doctor help another. Share this with your network."
          />
          <SocialShare />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading 
            title={<>Results From <span className="text-sky-600">Fellow Doctors</span></>}
            subtitle="Don't just take our word for it. See how this system is transforming clinics across the country."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { name: "Dr. Ankit Sahay", role: "Dentist (Delhi)", quote: "Mera clinic almost empty tha monsoons me. Is system se mere pass ab 2 hafte ki advance bookings hain." },
              { name: "Dr. Smriti Singh", role: "Dermatologist (Mumbai)", quote: "Ads templates are pure gold. Mere per patient acquisition cost ₹500 se ₹120 ho gayi hai." },
              { name: "Dr. Neil Parikh", role: "Dentist (Ahmedabad)", quote: "WhatsApp scripts use karke conversion rate double ho gaya. Price inquiries ab seedha appointment bante hain." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
                className="bg-sky-50/50 p-10 rounded-[3rem] shadow-sm border border-sky-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-500 group"
              >
                <div>
                  <div className="flex gap-1 mb-8 text-orange-400 group-hover:scale-110 transition-transform origin-left">
                    {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-xl italic text-slate-700 leading-relaxed mb-10 group-hover:text-slate-900 transition-colors">“{testimonial.quote}”</p>
                </div>
                <div className="flex items-center gap-5 border-t border-sky-100 pt-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sky-600 font-black text-2xl shrink-0 shadow-md border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                    {testimonial.name.split(' ')[testimonial.name.split(' ').length - 1][0]}
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 text-xl leading-tight">{testimonial.name}</h5>
                    <p className="text-sm text-sky-600 font-black uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <CTAButton className="px-12 py-5 text-xl">Dekhiye Aur Doctors Kya Keh Rahe Hain</CTAButton>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-40 bg-sky-600 text-white text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-10 bg-pattern" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            viewport={{ once: true }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-9xl font-black mb-12 leading-tight italic font-display tracking-tighter drop-shadow-2xl">
              <AnimatedText delay={0.1} type="fade-up">Aaj lo warna</AnimatedText>
              <AnimatedText delay={0.3} type="fade-up">
                <span className="text-orange-400">kal mehenga padega</span>
              </AnimatedText>
            </h2>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-3xl rounded-[3rem] p-12 md:p-16 border border-white/20 inline-block mb-16 shadow-2xl relative"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl"
              >
                Ends Soon!
              </motion.div>
              <div className="flex gap-10 md:gap-16 justify-center">
                {[
                  { val: "02", label: "Hours" },
                  { val: "45", label: "Minutes", pulse: true },
                  { val: "12", label: "Seconds" }
                ].map((time, i) => (
                  <React.Fragment key={i}>
                    <div className="text-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + (i * 0.1) }}
                        className={`text-6xl md:text-8xl font-black font-display tracking-tighter ${time.pulse ? 'animate-pulse text-sky-200' : ''}`}
                      >
                        {time.val}
                      </motion.div>
                      <div className="text-xs md:text-sm uppercase font-black text-sky-100 tracking-[0.3em] mt-4">{time.label}</div>
                    </div>
                    {i < 2 && <div className="text-6xl md:text-7xl font-light opacity-30 flex items-center">:</div>}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
            
            <AnimatedText delay={0.8}>
              <p className="text-2xl md:text-3xl font-medium mb-16 max-w-2xl mx-auto opacity-90 leading-relaxed italic">
                "Ye offer kabhi bhi khatam ho sakta hai. Don't miss out on the most affordable clinic growth system."
              </p>
            </AnimatedText>
            
            <CTAButton className="bg-orange-600 text-white hover:bg-orange-700 shadow-2xl py-8 px-16 text-3xl font-black rounded-full transition-all hover:scale-110 active:scale-95 group">
              Start Getting Patients Today
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-[120px] -ml-48 -mb-48" />
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title={<>Ab guessing band — <span className="text-sky-600">predictable flow</span> shuru karo</>}
              subtitle="Join thousands of doctors who have transformed their clinics with Dr. Prashant Kumar Vats's proven system."
            />
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-3xl mx-auto mb-24 uppercase">
              <CTAButton className="text-2xl py-8 px-12 rounded-full shadow-orange-500/30">Mujhe Patients Chahiye</CTAButton>
              <CTAButton className="text-2xl py-8 px-12 rounded-full shadow-orange-500/30">Explore System First</CTAButton>
            </div>

            <div className="flex flex-wrap justify-center gap-12 items-center opacity-80">
              {[
                { icon: ShieldCheck, text: "100% Secure Payment" },
                { icon: Users, text: "5,000+ Doctors Enrolled" },
                { icon: Clock, text: "Lifetime Access" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-sky-50 p-3 rounded-2xl group-hover:bg-sky-100 transition-colors">
                    <item.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <span className="font-black text-slate-800 text-lg uppercase tracking-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-sky-100 bg-sky-50/50 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 mb-10">
             <div className="w-12 h-1 bg-sky-600 rounded-full" />
             <p className="text-slate-500 font-medium max-w-md">Helping dedicated doctors and dentists scale their practice through modern systems and psychology.</p>
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">© {new Date().getFullYear()} Dr. Prashant Kumar Vats • Patient Flow System</p>
          <div className="flex justify-center flex-wrap gap-8 mt-8 text-xs font-black text-sky-700/40 uppercase tracking-widest">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((link, i) => (
              <motion.span 
                key={i}
                whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(14, 165, 233, 0.4)" }}
                className="hover:text-sky-600 cursor-pointer transition-all"
              >
                {link}
              </motion.span>
            ))}
          </div>
          <SocialShare />
        </div>
      </footer>
      <FloatingCTA />
      <FloatingWhatsApp />
    </div>
  );
}
