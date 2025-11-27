import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Download, ArrowRight, CheckCircle, XCircle, Euro, Star, Zap, MapPin, Smartphone, ChevronRight, TrendingUp, ChevronLeft, Share, Info, AlertTriangle, Search, Shield, Lock, Scale, Building2, Car, User, Mail, Briefcase, PlayCircle, X, PenTool, CheckSquare, MousePointerClick, HelpCircle, ChevronDown, Menu, Instagram, Facebook, Linkedin, Users, Video, MessageCircle, Phone, Play } from 'lucide-react';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';

// --- Google Vibe Container ---
const GoogleVibeContainer = ({ children, className = "" }) => (
  <div className={`font-sans antialiased text-gray-800 bg-white ${className}`}>
    {children}
  </div>
);

const Section = ({ children, className = "", gray = false, id = "" }) => (
  <section id={id} className={`py-24 px-4 md:px-6 ${gray ? 'bg-[#f8f9fa]' : 'bg-white'} ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

// --- Video Modal ---
const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all">
          <X size={24} />
        </button>
        <div className="aspect-video w-full bg-black relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/m8dIv_RYRro?autoplay=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// --- Registration Form (UPDATED - MULTI STEP) ---
// --- Registration Form ---
const PartnerForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    currentJob: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const formRef = useRef(null);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.city) newErrors.city = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.experience) newErrors.experience = true;
    if (!formData.currentJob) newErrors.currentJob = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleFinish = () => {
    if (validateStep2()) {
      setIsSubmitting(true);
      // Trigger native form submission
      if (formRef.current) {
        formRef.current.submit();
      }

      // Simulate success immediately for better UX (since iframe load is hard to detect cross-origin)
      setTimeout(() => {
        setIsSubmitting(false);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4285F4', '#34A853', '#FBBC05', '#EA4335']
        });
        setStep(3);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 animate-gradient-spin rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto lg:mx-0">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Partner werden</h3>
          <p className="text-sm text-gray-500 font-medium">Dauer: 30 Sekunden. Start: Sofort.</p>
        </div>

        {/* Hidden Iframe for Form Submission */}
        <iframe name="hiddenFrame" className="hidden" style={{ display: 'none' }}></iframe>

        {/* Real Form Wrapper */}
        <form
          ref={formRef}
          action="https://formsubmit.co/lanoaziz.la@gmail.com"
          method="POST"
          target="hiddenFrame"
        >
          {/* Hidden Configuration Fields */}
          <input type="hidden" name="_subject" value="Neue Partner-Bewerbung (Sternblitz)" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Vorname</label>
                <div className="relative">
                  <User size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Max"
                    className={`w-full bg-gray-50 border ${errors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} rounded-xl py-3 pl-10 focus:ring-2 focus:ring-[#4285F4] focus:bg-white outline-none transition-all font-medium`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">E-Mail Adresse</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="max@beispiel.de"
                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} rounded-xl py-3 pl-10 focus:ring-2 focus:ring-[#4285F4] focus:bg-white outline-none transition-all font-medium`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Telefonnummer</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456789"
                    className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} rounded-xl py-3 pl-10 focus:ring-2 focus:ring-[#4285F4] focus:bg-white outline-none transition-all font-medium`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Stadt / Region</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Berlin"
                    className={`w-full bg-gray-50 border ${errors.city ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} rounded-xl py-3 pl-10 focus:ring-2 focus:ring-[#4285F4] focus:bg-white outline-none transition-all font-medium`}
                  />
                </div>
              </div>

              <button type="button" onClick={handleNext} className="w-full bg-[#1a73e8] text-white font-bold py-4 rounded-xl hover:bg-[#1557b0] hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow-md transform active:scale-95 mt-2">Weiter <ArrowRight size={20} /></button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <button type="button" onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-gray-600 font-bold uppercase tracking-wide flex items-center gap-1 mb-2"><ArrowRight size={12} className="rotate-180" /> Zurück</button>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Vertriebserfahrung?</label>
                <div className="grid grid-cols-1 gap-2">
                  {['Keine Erfahrung', 'Weniger als 1 Jahr', '1-3 Jahre', 'Mehr als 3 Jahre'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleChange({ target: { name: 'experience', value: opt } })}
                      className={`p-3 rounded-xl border text-left text-sm font-medium transition-all ${formData.experience === opt ? 'border-[#4285F4] bg-blue-50 text-[#4285F4] ring-1 ring-[#4285F4]' : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}
                    >
                      {opt}
                    </button>
                  ))}
                  {/* Hidden input to actually send the value */}
                  <input type="hidden" name="experience" value={formData.experience} />
                </div>
                {errors.experience && <p className="text-red-500 text-xs mt-1">Bitte auswählen.</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5 ml-1">Aktueller Beruf / Tätigkeit</label>
                <div className="relative">
                  <Briefcase size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="text"
                    name="currentJob"
                    value={formData.currentJob || ''}
                    onChange={handleChange}
                    placeholder="z.B. Student, Selbstständig..."
                    className={`w-full bg-gray-50 border ${errors.currentJob ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'} rounded-xl py-3 pl-10 focus:ring-2 focus:ring-[#4285F4] focus:bg-white outline-none transition-all font-medium`}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleFinish}
                disabled={isSubmitting}
                className="w-full bg-[#1a73e8] text-white font-bold py-4 rounded-xl hover:bg-[#1557b0] hover:shadow-lg transition-all flex items-center justify-center gap-2 shadow-md transform active:scale-95 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Bewerbung absenden'} {!isSubmitting && <CheckCircle size={20} />}
              </button>
            </div>
          )}
        </form>

        {step === 3 && (
          <div className="text-center py-8 animate-fade-in-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#34A853] animate-bounce-short"><CheckCircle size={40} /></div>
            <h4 className="font-black text-2xl mb-3 text-gray-900">Glückwunsch!</h4>
            <p className="text-gray-600 mb-8 leading-relaxed">Unser Team meldet sich so schnell wie möglich bei dir.<br />(innerhalb von ca. 6 Std.)</p>
          </div>
        )}
        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-6 text-[11px] text-gray-400 font-medium uppercase tracking-wide">
          <span className="flex items-center gap-1.5"><Lock size={12} /> Daten verschlüsselt</span>
          <span className="flex items-center gap-1.5"><Shield size={12} /> Kein Spam</span>
        </div>
      </div>
    </div>
  );
};

// --- Hero Visual ---
const MagicAppDemo = () => {
  // Fix: Added missing state variables to prevent ReferenceError
  const [appState, setAppState] = useState('input');
  const [rating, setRating] = useState(3.6);
  const [reviewCount, setReviewCount] = useState(148);
  const [negativeCount, setNegativeCount] = useState(42);

  const startSimulation = () => {
    setAppState('simulating');
    setTimeout(() => { setAppState('result'); }, 1500);
  };

  useEffect(() => {
    if (appState === 'result') {
      const interval = setInterval(() => {
        setRating(prev => {
          if (prev >= 4.9) { clearInterval(interval); return 4.9; }
          return prev + 0.1;
        });
        setNegativeCount(prev => Math.max(0, prev - 2));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [appState]);

  const resetDemo = () => {
    setAppState('input');
    setRating(3.6);
    setNegativeCount(42);
  };

  return (
    <div className="relative mx-auto w-[300px] h-[600px] bg-white rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-200/50 flex flex-col font-sans select-none pointer-events-none lg:pointer-events-auto transform transition-transform hover:scale-[1.01]">
      <div className="h-8 bg-white flex items-center justify-between px-6 pt-3"><span className="text-[11px] font-bold text-gray-900">9:41</span><div className="flex gap-1"><div className="w-4 h-2.5 bg-gray-900 rounded-[1px]"></div></div></div>
      <div className="px-5 pb-3 pt-2"><h2 className="text-3xl font-black text-gray-900 tracking-tight">Hallo 👋</h2></div>
      <div className="flex-1 px-4 pt-2 relative bg-gray-50">

        <div className={`transition-all duration-500 absolute inset-x-4 top-2 ${appState === 'input' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl flex items-center gap-3 mb-3"><div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-[#4285F4] font-bold text-sm">1</div><span className="text-sm font-bold text-gray-700">Unternehmen wählen</span></div>
          <div className="bg-gradient-to-br from-blue-100 via-white to-orange-50 rounded-[2rem] p-6 text-center min-h-[240px] flex flex-col justify-center shadow-inner relative overflow-hidden">
            <h3 className="text-xl font-black text-gray-900 leading-tight mb-2 relative z-10">Live-Simulator</h3>
            <p className="text-gray-600 text-xs font-medium mb-4 relative z-10">So viele Sterne hättest du ohne Hater.</p>
            <div className="w-full bg-white rounded-xl p-3 shadow-lg border border-gray-100 flex items-center gap-3 mb-2 relative z-10"><Search size={16} className="text-gray-400" /><span className="text-gray-400 text-sm font-medium">Pizzeria Roma...</span></div>
          </div>
          <div className="mt-6"><button onClick={startSimulation} className="w-full bg-[#1a73e8] text-white font-bold text-lg py-3 rounded-xl shadow-lg flex items-center justify-center gap-2">Jetzt loslegen 🚀</button></div>
        </div>

        <div className={`transition-all duration-500 absolute inset-x-4 top-2 h-full flex flex-col ${appState !== 'input' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <div className="bg-white p-5 rounded-[2rem] shadow-xl border border-gray-100 text-center mb-6 mt-8 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#EA4335] to-[#34A853]"></div>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3 mt-2">Dein Potenzial</p>
            <div className={`text-7xl font-black mb-2 transition-colors duration-300 ${rating > 4.5 ? 'text-[#34A853]' : 'text-[#EA4335]'}`}>
              {rating.toFixed(1)}
            </div>
            <div className="flex gap-1.5 justify-center mb-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className={`transition-all duration-300 ${star <= Math.round(rating) ? 'fill-[#FBBC05] text-[#FBBC05]' : 'text-gray-200'}`} />
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center text-xs font-bold text-gray-500">
              <span>{reviewCount} Bewertungen</span>
              <span className={`${negativeCount === 0 ? 'text-[#34A853]' : 'text-[#EA4335]'} font-black transition-colors duration-500`}>{negativeCount} Negative</span>
            </div>
          </div>
          {appState === 'result' && (
            <div className="animate-fade-in-up space-y-4">
              <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-lg flex justify-between items-center transform hover:scale-102 transition-transform">
                <span className="text-gray-500 text-xs font-bold uppercase">Preis (Fix):</span>
                <span className="text-2xl font-black text-[#4285F4]">299 €</span>
              </div>
              <button className="w-full bg-[#1e293b] text-white font-bold py-4 rounded-xl text-lg hover:bg-black transition-colors shadow-xl" onClick={resetDemo}>
                Vertrag erstellen ✨
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

// --- REUSABLE PHONE COMPONENTS ---
const PhoneFrame = ({ children, className = "" }) => (
  <div className={`relative bg-white rounded-[2rem] md:rounded-[3rem] border-[8px] md:border-[12px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-900/10 ${className}`}>
    <div className="w-full h-full bg-[#F8F9FA] relative overflow-hidden flex flex-col font-sans">
      {/* STATUS BAR + STATIC HEADER */}
      <div className="bg-white pt-3 pb-2 px-6 border-b border-gray-100 z-20 shrink-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-bold text-gray-900">9:41</span>
          <div className="flex gap-1"><div className="w-4 h-2.5 bg-gray-900 rounded-[1px]"></div></div>
        </div>
        <div className="flex items-center gap-1.5">
          <img src="LOGO.png" alt="Sternblitz" className="h-5 w-auto object-contain" />
        </div>
      </div>
      {/* SCREEN */}
      <div className="relative flex-1 overflow-hidden bg-[#F8F9FA]">
        {children}
      </div>
    </div>
  </div>
);

const PhoneScreen = ({ type }) => {
  if (type === 'map') return (
    <div className="h-full relative bg-[#F1F3F4] flex flex-col overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-8 h-full bg-white border-l border-r border-gray-200 transform -skew-x-12"></div>
        <div className="absolute top-1/3 left-0 w-full h-8 bg-white border-t border-b border-gray-200 transform skew-y-6"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-6 bg-white border-t border-b border-gray-200 transform -skew-y-3"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#CEEAD6] rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#CEEAD6] rounded-full opacity-60"></div>
      </div>
      {/* Pins */}
      {[
        { top: '25%', left: '25%', type: 'bad' }, { top: '35%', left: '55%', type: 'good' }, { top: '18%', left: '75%', type: 'bad' },
        { top: '45%', left: '35%', type: 'good' }, { top: '55%', left: '65%', type: 'bad' }, { top: '48%', left: '85%', type: 'good' },
        { top: '65%', left: '45%', type: 'bad' }, { top: '75%', left: '25%', type: 'good' }, { top: '68%', left: '75%', type: 'bad' },
      ].map((pos, i) => (
        <div key={i} className={`absolute w-3 h-3 rounded-full border border-white shadow-sm z-10 animate-bounce-short ${pos.type === 'bad' ? 'bg-[#EA4335]' : 'bg-[#4285F4]'}`} style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.1}s` }}></div>
      ))}
      {/* Bottom Sheet */}
      <div className="mt-auto bg-white rounded-t-2xl shadow-lg p-4 pb-6 relative z-20">
        <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto mb-3"></div>
        <h3 className="font-black text-lg text-gray-900 mb-2">Leads (215)</h3>
        <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide">
          <span className="bg-[#1e293b] text-white px-3 py-1 rounded-full text-[10px] font-bold">Alle</span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[10px] font-bold">🎯 Todo</span>
        </div>
      </div>
    </div>
  );

  if (type === 'simulator') return (
    <div className="h-full bg-[#F0F4F8] p-4 flex flex-col overflow-y-auto">
      {/* Restaurant Card */}
      <div className="bg-white rounded-2xl p-3 shadow-sm flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">🍔</div>
        <div>
          <div className="font-bold text-gray-900 text-sm">Andy's Diner & Bar</div>
          <div className="text-xs text-gray-400">Karl-Liebknecht-Str. 5</div>
        </div>
      </div>

      {/* Warning Section */}
      <div className="text-center mb-4">
        <span className="bg-red-100 text-[#EA4335] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Achtung</span>
        <div className="text-[#EA4335] font-black text-xl mt-2 flex items-center justify-center gap-2">
          1-3 Sterne: 330 <X size={24} strokeWidth={3} />
        </div>
      </div>

      {/* Before Card (Aktuell) */}
      <div className="bg-white rounded-2xl shadow-md relative overflow-hidden mb-4 border-l-[6px] border-[#EA4335]">
        <div className="absolute top-0 right-0 bg-[#EA4335] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">AKTUELL</div>
        <div className="p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
              <X size={20} className="text-[#EA4335]" strokeWidth={3} />
            </div>
            <div>
              <div className="text-4xl font-black text-gray-900 flex items-center gap-2">3,6 <Star size={24} className="text-[#FBBC05] fill-[#FBBC05]" /></div>
              <div className="text-xs text-gray-500 font-medium">896 Bewertungen</div>
            </div>
          </div>
          <div className="bg-red-50 text-[#EA4335] text-center py-2 rounded-xl text-xs font-bold">
            -182% Online-Sichtbarkeit
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex justify-center mb-4">
        <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-400">
          <ArrowRight size={16} className="rotate-90" />
        </div>
      </div>

      {/* After Card (Nach Löschung) */}
      <div className="bg-white rounded-2xl shadow-md relative overflow-hidden border-l-[6px] border-[#34A853]">
        <div className="absolute top-0 right-0 bg-[#34A853] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">NACH LÖSCHUNG</div>
        <div className="p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
              <Zap size={20} className="text-[#34A853] fill-current" />
            </div>
            <div>
              <div className="text-4xl font-black text-gray-900 flex items-center gap-2">4,7 <Star size={24} className="text-[#FBBC05] fill-[#FBBC05]" /></div>
              <div className="text-xs text-gray-500 font-medium">566 Bewertungen</div>
            </div>
          </div>
          <div className="bg-green-50 text-[#34A853] text-center py-2 rounded-xl text-xs font-bold">
            +153% Online-Sichtbarkeit
          </div>
        </div>
      </div>
    </div>
  );

  if (type === 'contract') return (
    <div className="h-full bg-white p-6 flex flex-col overflow-y-auto">
      <div className="text-center mb-8 mt-4">
        <h2 className="text-xl font-black text-gray-900 mb-1">Auftragsbestätigung</h2>
        <p className="text-xs text-gray-500 leading-relaxed px-4">
          Hiermit bestätige ich den Auftrag zur Löschung meiner negativen Google-Bewertungen.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {[
          '299 € (einmalig)',
          'Zahlung erst nach Löschung',
          'Dauerhafte Entfernung'
        ].map((text, i) => (
          <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-[#F8F9FA] border border-gray-100">
            <div className="w-5 h-5 bg-[#34A853] rounded flex items-center justify-center shrink-0">
              <CheckSquare size={12} className="text-white" />
            </div>
            <span className="text-sm font-bold text-gray-800">{text}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <p className="text-xs font-bold text-gray-900 uppercase mb-2">Unterschrift</p>
        <div className="border-2 border-dashed border-gray-300 rounded-xl h-32 mb-6 relative flex items-center justify-center bg-gray-50">
          <svg className="w-48 h-24" viewBox="0 0 200 100">
            <path
              d="M10,50 Q50,5 90,50 T190,50"
              fill="none"
              stroke="#4285F4"
              strokeWidth="4"
              strokeLinecap="round"
              className="path-animate"
            />
          </svg>
        </div>
        <button className="w-full bg-[#34A853] text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-200">
          Unterschrift bestätigen <CheckSquare size={16} />
        </button>
      </div>
    </div>
  );

  if (type === 'cash') return (
    <div className="h-full bg-white p-4 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white"></div>
      <div className="relative z-10 text-center w-full">
        <div className="w-20 h-20 bg-[#34A853] rounded-full flex items-center justify-center mb-6 animate-bounce shadow-xl mx-auto ring-4 ring-green-100"><CheckCircle size={40} className="text-white" /></div>
        <h2 className="text-3xl font-black text-gray-900 mb-2">Erfolgreich!</h2>
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 w-full max-w-[240px] mx-auto border border-green-50 transform hover:scale-105 transition-transform"><p className="text-xs font-bold uppercase text-gray-400 tracking-widest mb-1">Provision</p><p className="text-4xl font-black text-[#34A853]">+ 100€</p></div>
      </div>
    </div>
  );

  return null;
};

// --- PREMIUM SCROLLYTELLING (NEW VERSION) ---
const ScrollytellingWalkthrough = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSlide(parseInt(entry.target.dataset.index));
      });
    }, { root: null, rootMargin: '-20% 0px -20% 0px', threshold: 0.3 });
    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => stepRefs.current.forEach((step) => step && observer.unobserve(step));
  }, []);

  const slides = [
    {
      title: "1. Radar einschalten",
      desc: "Die App zeigt dir alle Unternehmen in deiner Umgebung. Die mit schlechten Bewertungen sind rot markiert. Das sind deine potenziellen Kunden.",
      screen: "map"
    },
    {
      title: "2. Schmerz simulieren",
      desc: "Der 'Live-Simulator' zeigt dem Kunden brutal ehrlich: Rot ist der aktuelle Umsatz-Killer. Grün ist die Zukunft nach der Löschung. Dieser visuelle Vergleich verkauft für dich.",
      screen: "simulator"
    },
    {
      title: "3. Deal & Unterschrift",
      desc: "Kein Papierkram. Der Kunde setzt 3 Haken (299€ Fixpreis, 0% Risiko) und unterschreibt direkt mit dem Finger auf deinem Display. Dauert 30 Sekunden.",
      screen: "contract"
    },
    {
      title: "4. Provision kassieren",
      desc: "Sobald die Unterschrift drauf ist, ploppt deine Provision auf. 100€ gehören dir. Mach das 3x am Tag und du hast 9.000€ im Monat.",
      screen: "cash"
    }
  ];

  return (
    <div className="relative">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">

        {/* Left Column: Scrolling Text Steps */}
        <div className="lg:w-[45%] py-24">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              data-index={idx}
              ref={el => stepRefs.current[idx] = el}
              className={`min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center p-6 transition-all duration-700 ${activeSlide === idx ? 'opacity-100 translate-y-0' : 'opacity-30 blur-sm scale-95 translate-y-4'}`}
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center font-black text-xl lg:text-2xl text-white shadow-lg transition-colors duration-500 ${activeSlide === idx ? 'bg-[#4285F4]' : 'bg-gray-300'}`}>
                  {idx + 1}
                </div>
                <h3 className="text-2xl lg:text-4xl font-black text-gray-900">{slide.title}</h3>
              </div>
              <p className="text-lg lg:text-xl text-gray-500 leading-relaxed font-medium pl-4 border-l-4 border-gray-100 ml-5 lg:ml-6 mb-8">
                {slide.desc}
              </p>

              {/* Mobile-Only Visuals (1:1 Phone Design) */}
              <div className={`lg:hidden w-full max-w-[320px] mx-auto transition-all duration-700 delay-100 ${activeSlide === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                <PhoneFrame className="w-full aspect-[9/19] shadow-xl">
                  <PhoneScreen type={slide.screen} />
                </PhoneFrame>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Phone - HIGH DETAIL VERSION */}
        <div className="lg:w-[45%] hidden lg:flex justify-center items-start sticky top-32">
          <PhoneFrame className="w-[340px] h-[680px]">
            {slides.map((slide, idx) => (
              <div key={idx} className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeSlide === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                <PhoneScreen type={slide.screen} />
              </div>
            ))}
          </PhoneFrame>
        </div>

      </div>
    </div>
  );
};

// --- Simple Process Section (Klicken. Zeigen. Kassieren.) ---
// --- Simple Process Section (Klicken. Zeigen. Kassieren.) ---
const ProcessStep = ({ icon, number, title, desc, delay, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      {/* Mobile Connecting Line */}
      {!isLast && (
        <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-100 to-transparent -z-10"></div>
      )}

      <div className="relative mb-8 group">
        <div className="h-24 w-24 bg-white rounded-2xl flex items-center justify-center mx-auto text-[#4285F4] shadow-lg shadow-blue-50 border border-blue-50 group-hover:scale-110 transition-transform duration-500 z-10 relative">
          {icon}
        </div>
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#4285F4] to-[#3367d6] text-white rounded-xl flex items-center justify-center font-black text-lg shadow-lg border-2 border-white transform rotate-3 group-hover:rotate-12 transition-transform duration-500 z-20">
          {number}
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
      </div>

      <h3 className="text-2xl font-black text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed max-w-xs mx-auto">{desc}</p>
    </div>
  );
};

const SimpleProcess = () => {
  return (
    <Section gray id="process">
      <div className="text-center mb-20">
        <span className="text-[#4285F4] font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">Der Ablauf</span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Klicken. &nbsp; Zeigen. &nbsp; Kassieren.</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative max-w-6xl mx-auto">
        {/* Desktop Connecting Line */}
        <div className="hidden md:block absolute top-[3rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-100 to-transparent -z-10"></div>

        <ProcessStep
          number="1"
          icon={<MapPin size={40} />}
          title="Laden finden"
          desc="Die App zeigt dir Läden mit schlechten Bewertungen in deiner Nähe. Geh einfach hin."
        />
        <ProcessStep
          number="2"
          icon={<Smartphone size={40} />}
          title="App zeigen"
          desc="Der Simulator visualisiert das Problem und die Lösung. Das überzeugt sofort."
        />
        <ProcessStep
          number="3"
          icon={<div className="text-center"><span className="block text-[10px] font-bold uppercase tracking-wider text-[#34A853]">Provision</span><span className="block text-2xl font-black text-[#34A853]">100€</span></div>}
          title="Kassieren"
          desc="Der Kunde unterschreibt digital auf deinem Handy. Du bekommst sofort deine Provision."
          isLast={true}
        />
      </div>
    </Section>
  );
};

// --- Partnership Process Section (4-Step Application) ---
const PartnershipProcess = () => {
  const steps = [
    {
      icon: <Mail size={32} className="text-[#4285F4]" />,
      title: "1. Anfrage",
      desc: "Fülle das Formular aus. Unser Team prüft deine Bewerbung.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <Users size={32} className="text-[#EA4335]" />,
      title: "2. Qualifizierung",
      desc: "Kurzes Gespräch, ob wir zusammenpassen. Wir klären alle Fragen.",
      color: "bg-red-50 border-red-100"
    },
    {
      icon: <Video size={32} className="text-[#FBBC05]" />,
      title: "3. Onboarding",
      desc: "Zugang zur App, WhatsApp-Gruppe & Zoom-Calls. Du lernst alles, was du brauchst.",
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      icon: <Euro size={32} className="text-[#34A853]" />,
      title: "4. Start",
      desc: "Leg direkt los. Du kannst noch am selben Tag dein erstes Geld verdienen.",
      color: "bg-green-50 border-green-100"
    }
  ];

  return (
    <Section id="application-process">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Dein Weg zum Partner</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">In 4 einfachen Schritten zum eigenen Business.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 relative items-stretch">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>

        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center h-full">
            <div
              className={`relative bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 ${step.color} flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 w-full h-full animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-4 md:mb-6 border border-gray-100 shrink-0">
                {step.icon}
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-2 md:mb-3">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed flex-1">{step.desc}</p>
            </div>

            {/* Mobile Arrow Connector */}
            {i < steps.length - 1 && (
              <div className="md:hidden py-4 text-gray-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.2 + 0.1}s` }}>
                <ArrowRight size={24} className="rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center gap-8 flex-wrap">
        <div className="flex items-center gap-2 text-gray-600 font-bold bg-white px-5 py-2 rounded-full shadow-sm border border-gray-100">
          <Video size={20} className="text-[#4285F4]" /> Wöchentliche Zoom-Calls
        </div>
        <div className="flex items-center gap-2 text-gray-600 font-bold bg-white px-5 py-2 rounded-full shadow-sm border border-gray-100">
          <MessageCircle size={20} className="text-[#34A853]" /> WhatsApp Community
        </div>
      </div>
    </Section>
  );
};

// --- FAQ Component (OLD VERSION) ---
const FAQ = () => {
  const faqs = [
    { q: "Brauche ich Vorerfahrung im Vertrieb?", a: "Nein. Die App übernimmt das Verkaufen. Du musst nur seriös auftreten und das Tablet bedienen können." },
    { q: "Ist das ein Angestelltenverhältnis?", a: "Nein, du arbeitest als selbstständiger Handelsvertreter (Gewerbeschein). Das gibt dir maximale Freiheit und ungedeckeltes Einkommen." },
    { q: "Wann bekomme ich mein Geld?", a: "Die Provision wird gutgeschrieben, sobald der Kunde digital unterschrieben hat. Auszahlung erfolgt wöchentlich." },
    { q: "Was macht euch besonders?", a: "Wir sind schneller und günstiger als jeder Anwalt. Fixpreis statt Stundenlohn. Erfolgsbasis statt Vorkasse. Und wir nutzen modernste Software zur Analyse." },
    { q: "Wie viele Bewertungen löscht ihr?", a: "Der Kunde zahlt uns immer pauschal 299€ (einmalig) und wir löschen so viele Bewertungen wie er will – egal ob 5 oder 500 Stück. Das bietet sonst niemand an." },
    { q: "Wie viel kann ich realistisch verdienen?", a: "Das hängt von deinem Fleiß ab. Ein Abschluss bringt 100€. Machst du 3 am Tag, sind das 9.000€ im Monat. Viele Partner schaffen deutlich mehr." },
    { q: "Bin ich an feste Arbeitszeiten gebunden?", a: "Nein. Du bist dein eigener Chef. Du entscheidest, wann und wo du arbeitest. Perfekt auch als Nebenjob." },
    { q: "Was brauche ich für den Start?", a: "Ein Smartphone oder Tablet mit Internetzugang und ein gepflegtes Erscheinungsbild. Wir stellen dir die App und das Know-how zur Verfügung." }
  ];
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left">
            <span className="font-bold text-gray-900">{faq.q}</span>
            <ChevronDown className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && <div className="p-5 bg-gray-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
};

// --- Live Ticker Component ---
const LiveTicker = () => {
  // Moved outside or useMemo to avoid recreation, but inside is fine for this scale if we init state correctly
  const payouts = [
    { name: "Luca", city: "München", time: "vor 2 Min" },
    { name: "Ahmed", city: "Hamburg", time: "vor 5 Min" },
    { name: "Sarah", city: "Köln", time: "vor 12 Min" },
    { name: "Dennis", city: "Frankfurt", time: "vor 18 Min" },
    { name: "Anna", city: "Stuttgart", time: "vor 24 Min" },
    { name: "Tom", city: "Leipzig", time: "vor 37 Min" },
    { name: "Julia", city: "Düsseldorf", time: "vor 45 Min" },
    { name: "Michael", city: "Dortmund", time: "vor 1 Std" },
    { name: "Laura", city: "Essen", time: "vor 1.5 Std" },
    { name: "Tim", city: "Bremen", time: "gerade eben" },
    { name: "Lisa", city: "Berlin", time: "vor 8 Min" },
  ];

  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * payouts.length));
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % payouts.length);
        setFade(true);
      }, 1000); // Slower fade out wait (matches duration-1000)
    }, 8000); // Change every 8 seconds (even slower/dezenter)

    return () => clearInterval(interval);
  }, [payouts.length]);

  const current = payouts[currentIndex];

  return (
    <div className="bg-gray-900 text-white py-2.5 overflow-hidden relative z-50 border-b border-gray-800 flex justify-center items-center h-10">
      <div className={`flex items-center gap-2 text-xs font-medium transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-2 h-2 bg-[#34A853] rounded-full animate-pulse"></div>
        <span className="text-gray-400">{current.time}:</span>
        <span className="text-white font-bold">{current.name}</span>
        <span className="text-gray-500">aus {current.city}</span>
        <span className="text-gray-400">hat</span>
        <span className="text-[#34A853] font-bold">+100€</span>
        <span className="text-gray-400">verdient</span>
      </div>
    </div>
  );
};

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <GoogleVibeContainer>
      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />

      {/* Top Ticker */}
      <LiveTicker />

      {/* --- HEADER --- */}
      <nav className={`fixed top-10 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src="LOGO.png" alt="Sternblitz Logo" className="h-8 w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => scrollTo('process')} className="hover:text-[#4285F4] transition-colors">Ablauf</button>
            <button onClick={() => scrollTo('app')} className="hover:text-[#4285F4] transition-colors">Die App</button>
            <button onClick={() => scrollTo('model')} className="hover:text-[#4285F4] transition-colors">Verdienst</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-[#4285F4] transition-colors">FAQ</button>
            <button onClick={() => scrollTo('register')} className="bg-[#1a73e8] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#1557b0] transition-colors shadow-sm hover:shadow-md">
              Partner werden
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4 md:hidden">
            <button onClick={() => scrollTo('process')} className="text-left py-2 font-medium">Ablauf</button>
            <button onClick={() => scrollTo('app')} className="text-left py-2 font-medium">Die App</button>
            <button onClick={() => scrollTo('model')} className="text-left py-2 font-medium">Verdienst</button>
            <button onClick={() => scrollTo('faq')} className="text-left py-2 font-medium">FAQ</button>
            <button onClick={() => scrollTo('register')} className="bg-[#1a73e8] text-white px-5 py-3 rounded-lg font-bold text-center">Jetzt bewerben</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white" id="home">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 text-left">

            {/* NEW: Badge above Headline */}
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-1.5 mb-8 animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34A853]"></span>
              </span>
              <span className="text-xs font-bold text-gray-600 tracking-wide uppercase">Wir suchen Vertriebspartner</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-gray-900 leading-[1.05] mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Der einfachste Vertriebsjob der Welt.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hilf lokalen Unternehmen, negative Google-Bewertungen zu löschen.
              <strong className="text-gray-900 block mt-2">Du bist nur der Bote. Die App verkauft für dich.</strong>
            </p>

            <div className="flex flex-col gap-6 mb-12 lg:mb-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col gap-3 text-sm text-gray-500 font-medium">
                <div className="flex items-center justify-start gap-2.5"><CheckCircle size={18} className="text-[#4285F4]" /> <span>Kein Vorwissen nötig</span></div>
                <div className="flex items-center justify-start gap-2.5"><CheckCircle size={18} className="text-[#4285F4]" /> <span>Wir übernehmen die komplette Arbeit & Löschung</span></div>
                <div className="flex items-center justify-start gap-2.5"><CheckCircle size={18} className="text-[#4285F4]" /> <span>Start ohne Bewerbungsgespräch</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-start pt-2">
                <button onClick={() => setShowVideo(true)} className="flex items-center gap-4 text-gray-800 font-bold hover:text-[#4285F4] transition-colors group bg-white border border-gray-200 pl-2 pr-6 py-2 rounded-full shadow-sm hover:shadow-md hover:border-blue-100">
                  <div className="w-10 h-10 bg-[#EA4335] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform"><PlayCircle size={20} className="fill-current" /></div>
                  <span className="text-sm uppercase tracking-wide">So funktioniert's (1 Min)</span>
                </button>

                {/* NEW: Rating Element */}
                <div className="flex items-center gap-[-10px]">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="ml-3 text-left">
                    <div className="flex items-center gap-0.5">
                      <Star size={12} className="text-[#FBBC05] fill-[#FBBC05]" />
                      <Star size={12} className="text-[#FBBC05] fill-[#FBBC05]" />
                      <Star size={12} className="text-[#FBBC05] fill-[#FBBC05]" />
                      <Star size={12} className="text-[#FBBC05] fill-[#FBBC05]" />
                      <Star size={12} className="text-[#FBBC05] fill-[#FBBC05]" />
                    </div>
                    <p className="text-[10px] font-bold text-gray-500">4.9/5 von Partnern</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }} id="register">
            {/* NEW: Animated Background Blobs behind Form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#34A853] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4285F4] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="w-full max-w-md relative z-20"><PartnerForm /></div>
            <div className="hidden xl:block absolute -right-24 top-8 transform rotate-6 scale-90 opacity-80 -z-10 blur-[0.5px] hover:blur-0 transition-all duration-500 hover:rotate-3 hover:scale-95 hover:opacity-100"><MagicAppDemo /></div>
          </div>
        </div>
      </div>

      {/* --- SIMPLE PROCESS (Klicken. Zeigen. Kassieren.) --- */}
      <SimpleProcess />

      {/* --- SCROLLYTELLING SECTION --- */}
      <div id="app" className="py-12 lg:py-24">
        <div className="text-center mb-20">
          <span className="text-[#34A853] font-bold tracking-widest uppercase text-xs bg-green-50 px-3 py-1 rounded-full">Deep Dive</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 tracking-tight">Ein Blick in die App.</h2>
        </div>
        <ScrollytellingWalkthrough />
      </div>

      {/* --- PARTNERSHIP PROCESS (4-STEP APPLICATION) --- */}
      <PartnershipProcess />

      {/* --- BUSINESS MODEL (OLD DARK VERSION) --- */}
      <Section id="model">
        <div className="bg-[#1e293b] rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4285F4] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Warum ist das so einfach?</h2>
              <p className="text-gray-300 mb-10 text-xl leading-relaxed font-light">Weil das Angebot unschlagbar ist. Konkurrenzanwälte verlangen oft 150€ <em>pro Bewertung</em>.</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4"><div className="bg-[#34A853]/20 p-2 rounded-full mt-1 border border-[#34A853]/30"><CheckCircle size={20} className="text-[#34A853]" /></div><div><strong className="block text-white text-lg">Fixpreis 299€ All-incl.</strong><span className="text-gray-400">Egal ob 5 oder 50 Bewertungen.</span></div></li>
                <li className="flex items-start gap-4"><div className="bg-[#34A853]/20 p-2 rounded-full mt-1 border border-[#34A853]/30"><CheckCircle size={20} className="text-[#34A853]" /></div><div><strong className="block text-white text-lg">Erfolgsbasis</strong><span className="text-gray-400">Kunde zahlt nur bei Erfolg.</span></div></li>
              </ul>
            </div>
            <div className="bg-white text-gray-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]"></div>
              <h3 className="font-bold text-2xl mb-8 flex items-center gap-3"><div className="bg-blue-50 p-2.5 rounded-xl"><Briefcase className="text-[#4285F4]" size={24} /></div>Beispielrechnung</h3>
              <div className="space-y-5 text-base">
                <div className="flex justify-between items-center pb-5 border-b border-gray-100"><span className="text-gray-600 font-medium">Kunde zahlt</span><span className="font-black text-xl text-gray-900 whitespace-nowrap">299,00&nbsp;€</span></div>
                <div className="flex justify-between items-center py-4 bg-green-50 px-5 rounded-2xl border border-green-100"><span className="font-bold text-green-800">Davon DEINE Provision</span><span className="font-black text-3xl text-[#34A853] whitespace-nowrap">100,00&nbsp;€</span></div>
              </div>
              <div className="mt-8 bg-blue-50/50 rounded-2xl p-6 text-center border border-blue-100">
                <button onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })} className="w-full bg-[#4285F4] hover:bg-[#3367d6] text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg">Jetzt Formular oben ausfüllen</button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- FAQ (OLD VERSION) --- */}
      <Section gray id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900">Häufige Fragen</h2>
        </div>
        <FAQ />
      </Section>

      {/* --- FOOTER (UPDATED) --- */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo-white.png" alt="Sternblitz Logo" className="h-8 object-contain" />
            </div>
            <p className="text-sm leading-relaxed">Wir helfen lokalen Unternehmen, ihren digitalen Ruf zu retten.</p>
          </div>
          <div><h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Unternehmen</h4><ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white transition-colors">Über uns</a></li><li><a href="#" className="hover:text-white transition-colors">Karriere</a></li><li><a href="#" className="hover:text-white transition-colors">Partnerprogramm</a></li></ul></div>
          <div><h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Rechtliches</h4><ul className="space-y-2 text-sm"><li><Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link></li><li><Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li><li><Link to="/agb" className="hover:text-white transition-colors">AGB</Link></li></ul></div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Social</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/sternblitz.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Instagram size={20} /> sternblitz.de
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs border-t border-gray-800 pt-8">&copy; 2025 Sternblitz. Alle Rechte vorbehalten.</div>
      </footer>

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        @keyframes bounce-short { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce-short { animation: bounce-short 2s ease-in-out infinite; }
        .path-animate { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: dash 2s ease-in-out infinite; }
        @keyframes dash { to { stroke-dashoffset: 0; } }
      `}</style>
    </GoogleVibeContainer>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
      </Routes>
    </Router>
  );
}

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
