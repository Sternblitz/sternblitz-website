import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle, MessageCircle, PlayCircle, MapPin } from 'lucide-react';

const Qualified = () => {
    useEffect(() => {
        // Trigger confetti on load
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    // Timer Logic
    const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-01-06T18:00:00'); // Target: Jan 6th 2026, 18:00

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-sans antialiased text-gray-800 bg-white min-h-screen">

            {/* --- SECTION 1: HEADER / HERO --- */}
            <section className="pt-16 pb-8 px-4 md:px-6 bg-gradient-to-b from-green-50 to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-6 animate-bounce-short">
                        <span className="text-4xl">🎉</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
                        Glückwunsch! <br className="hidden md:block" />
                        <span className="text-[#34A853]">Du bist in der engeren Auswahl.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                        Deine Audio hat uns überzeugt. Du gehörst zu den Top 20%, die wir zum Onboarding zulassen.
                    </p>
                </div>
            </section>

            {/* --- SECTION 2: THE MONEY (VIDEO 1) --- */}
            <section className="py-10 px-4 md:px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-[#4285F4] font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">Schritt 1</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Dein Verdienst & Deine Karriere</h2>
                    </div>

                    <div className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-100 mb-8">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/Zo8z_wfg5M8"
                            title="Dein Verdienst & Deine Karriere"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <p className="text-center text-lg text-gray-600 font-medium max-w-3xl mx-auto">
                        In diesem Video erklärt dir kurz unser Gründer Lano, was wir machen und wie du mit der 299€-Pauschale jeden Tag Abschlüsse machst.
                    </p>
                </div>
            </section>

            {/* --- SECTION 3: THE WEAPON (VIDEO 2) --- */}
            <section className="py-10 px-4 md:px-6 bg-[#f8f9fa]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-[#EA4335] font-bold tracking-widest uppercase text-xs bg-red-50 px-3 py-1 rounded-full inline-block mb-4">Schritt 2</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Deine Waffe – Die Sternblitz App</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        {/* Portrait Video Container */}
                        <div className="relative w-full max-w-[350px] aspect-[9/16] bg-black rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-900 ring-1 ring-gray-200">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/xEM5eXH-Sm0"
                                title="Deine Waffe – Die Sternblitz App"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="md:w-1/2 text-left">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                                <MapPin size={40} className="text-[#4285F4] mb-6" />
                                <h3 className="text-2xl font-black text-gray-900 mb-4">Vergiss Zettelwirtschaft.</h3>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    Unsere App zeigt dir auf der Karte genau, wo das Geld liegt. Anschauen, verstehen, heiß werden.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: THE CLOSE (CTA) --- */}
            <section className="py-12 px-4 md:px-6 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-[#34A853] font-bold tracking-widest uppercase text-xs bg-green-50 px-3 py-1 rounded-full inline-block mb-4">Schritt 3</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#EA4335] mb-8 tracking-tight">
                        Hol dir den Vertrag im Live-Call
                    </h2>

                    <p className="text-xl text-gray-700 font-medium mb-10">
                        Wir vergeben die Verträge und App-Zugänge ausschließlich persönlich im nächsten Zoom-Call.
                    </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-10 inline-block w-full max-w-lg text-left shadow-sm">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-[#4285F4] font-bold">1</div>
                            <div>
                                <div>
                                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Wann?</span>
                                    <span className="text-lg font-bold text-gray-900">Dienstag, 06.01. um 18 Uhr</span>
                                    <div className="flex gap-2 mt-2 text-center">
                                        {['Tage', 'Std', 'Min', 'Sek'].map((label, i) => {
                                            const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];
                                            return (
                                                <div key={label} className="bg-gray-100 rounded-lg p-2 min-w-[50px]">
                                                    <div className="font-black text-xl text-[#EA4335]">{values[i]}</div>
                                                    <div className="text-[10px] font-bold text-gray-400 uppercase">{label}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0 text-[#4285F4] font-bold">2</div>
                            <div>
                                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Wo?</span>
                                <span className="text-lg font-bold text-gray-900">Den Link posten wir im WhatsApp Kanal</span>
                            </div>
                        </div>

                        <a
                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sternblitz+Live-Call&dates=20260106T170000Z/20260106T180000Z&details=Wichtiger+Live-Call+f%C3%BCr+das+Onboarding.&location=Zoom+(Link+in+WhatsApp)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-xl transition-colors text-sm"
                        >
                            📅 Termin im Kalender speichern
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://whatsapp.com/channel/0029VbBMjVq5PO18KqJLtb0G"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-black text-lg md:text-xl py-5 px-10 rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-105 transition-all animate-pulse hover:animate-none"
                        >
                            <MessageCircle size={28} />
                            JETZT DEM KANAL BEITRETEN (WhatsApp) 🚀
                        </a>
                        <p className="mt-4 text-xs text-gray-400 font-medium uppercase tracking-wide">
                            Kostenlos & Unverbindlich
                        </p>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes bounce-short { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce-short { animation: bounce-short 2s ease-in-out infinite; }
      `}</style>
        </div>
    );
};

export default Qualified;
