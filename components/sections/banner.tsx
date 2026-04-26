"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Coffee, Zap, TrendingUp, Leaf, Sparkles, Award, Shield, Globe } from "lucide-react";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxX = (mousePosition.x - 0.5) * 24;
  const parallaxY = (mousePosition.y - 0.5) * 24;

  return (
    <div
      className="w-full relative py-20 px-4 md:px-8 overflow-hidden my-12"
      ref={containerRef}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

        @keyframes meshFloat1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); border-radius: 60% 40% 50% 50%; }
          33% { transform: translate(30px, -20px) scale(1.08); border-radius: 50% 60% 40% 55%; }
          66% { transform: translate(-20px, 30px) scale(0.95); border-radius: 55% 45% 60% 40%; }
        }
        @keyframes meshFloat2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); border-radius: 50% 60% 55% 45%; }
          33% { transform: translate(-25px, 20px) scale(1.05); border-radius: 60% 40% 50% 55%; }
          66% { transform: translate(20px, -25px) scale(1.1); border-radius: 45% 55% 40% 60%; }
        }
        @keyframes meshFloat3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
          50% { transform: translate(15px, 15px) rotate(5deg) scale(1.06); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes steamRise {
          0% { opacity: 0; transform: translateY(0) scaleX(1) rotate(0deg); }
          40% { opacity: 0.7; }
          100% { opacity: 0; transform: translateY(-55px) scaleX(0.3) rotate(20deg); }
        }

        @keyframes orbitCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes holoPulse {
          0%, 100% {
            background-position: 0% center;
            filter: drop-shadow(0 0 15px rgba(217,119,6,0.5));
          }
          50% {
            background-position: 100% center;
            filter: drop-shadow(0 0 30px rgba(251,191,36,0.8));
          }
        }

        @keyframes neonBorder {
          0%, 100% { box-shadow: 0 0 10px rgba(217,119,6,0.3), inset 0 0 10px rgba(217,119,6,0.05); }
          50% { box-shadow: 0 0 30px rgba(217,119,6,0.5), 0 0 60px rgba(217,119,6,0.2), inset 0 0 20px rgba(217,119,6,0.08); }
        }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-10px) rotate(calc(var(--rot, 0deg) + 5deg)); }
        }

        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.75) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes shimmerText {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .banner-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .banner-body {
          font-family: 'DM Sans', sans-serif;
        }

        .holo-text {
          background: linear-gradient(
            90deg,
            #92400e 0%, #b45309 15%, #d97706 30%, #fbbf24 45%,
            #f59e0b 55%, #d97706 70%, #b45309 85%, #92400e 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerText 5s linear infinite;
        }
        .dark .holo-text {
          background: linear-gradient(
            90deg,
            #fde68a 0%, #fbbf24 15%, #fff7ed 30%, #fde68a 45%,
            #fbbf24 55%, #fcd34d 70%, #fde68a 85%, #fbbf24 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .animate-slide-down { animation: slideDown 0.9s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-slide-up { animation: slideUp 0.9s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-scale-in { animation: scaleIn 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .animate-badge-pop { animation: badgePop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }

        .icon-orbit-outer {
          position: absolute;
          width: 180px;
          height: 180px;
          border: 1px dashed rgba(217,119,6,0.18);
          border-radius: 50%;
          animation: orbitCW 25s linear infinite;
        }
        .icon-orbit-inner {
          position: absolute;
          width: 110px;
          height: 110px;
          border: 1.5px dashed rgba(217,119,6,0.3);
          border-radius: 50%;
          animation: orbitCCW 15s linear infinite;
        }
        .orbit-icon {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
        }
        .orbit-icon-r {
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
        }
        .orbit-icon-m {
          position: absolute;
          top: 50%;
          right: -14px;
          transform: translateY(-50%);
        }

        .center-coffee-glow {
          position: relative;
        }
        .center-coffee-glow::before {
          content: '';
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(217,119,6,0.25) 0%, transparent 70%);
          border-radius: 50%;
          animation: neonBorder 3s ease-in-out infinite;
        }

        .pulse-ring {
          position: absolute;
          inset: -4px;
          border: 1.5px solid rgba(217,119,6,0.4);
          border-radius: 50%;
          animation: pulseRing 2.5s ease-out infinite;
        }
        .pulse-ring-2 {
          animation-delay: 1.25s;
        }

        .cta-primary {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
          background: linear-gradient(135deg, #92400e, #b45309, #d97706);
          border: 1px solid rgba(255,255,255,0.15);
        }
        .cta-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.7s ease;
        }
        .cta-primary:hover::after { transform: translateX(100%); }
        .cta-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(217,119,6,0.4), 0 8px 20px rgba(0,0,0,0.15);
          animation: neonBorder 2s ease-in-out infinite;
        }
        .cta-primary:active { transform: translateY(-2px); }

        .cta-outline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
          border: 1.5px solid;
        }
        .cta-outline::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(217,119,6,0.08), rgba(245,158,11,0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .cta-outline:hover::before { opacity: 1; }
        .cta-outline:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(217,119,6,0.15);
        }

        .badge-item {
          font-family: 'DM Sans', sans-serif;
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .badge-item:hover {
          transform: translateY(-5px) scale(1.06);
          box-shadow: 0 16px 32px rgba(0,0,0,0.12);
        }

        .glass-card {
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .dark .glass-card {
          background: rgba(0,0,0,0.25);
        }

        .noise-tex {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none;
          border-radius: inherit;
          z-index: 1;
        }
      `}</style>

      {/* ── Background layer ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-950 dark:via-amber-950 dark:to-orange-950 rounded-2xl" />
      <div className="noise-tex rounded-2xl" />

      {/* Liquid mesh blobs */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-25 dark:opacity-15"
          style={{
            background: "radial-gradient(circle, #f59e0b 0%, #d97706 40%, transparent 70%)",
            animation: "meshFloat1 12s ease-in-out infinite",
            transform: `translate(${parallaxX * 0.6}px, ${parallaxY * 0.6}px)`,
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-20 dark:opacity-10"
          style={{
            background: "radial-gradient(circle, #fbbf24 0%, #f59e0b 40%, transparent 70%)",
            animation: "meshFloat2 15s ease-in-out infinite",
            transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)`,
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-80 h-80 opacity-15 dark:opacity-8"
          style={{
            background: "radial-gradient(circle, #d97706 0%, transparent 70%)",
            animation: "meshFloat3 18s ease-in-out infinite",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Animated gradient border ring */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(var(--angle, 0deg), transparent 40%, rgba(217,119,6,0.35) 50%, transparent 60%)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            padding: "1.5px",
            animation: "orbitCW 6s linear infinite",
          }}
        />
      </div>

      {/* ── Glass content card ── */}
      <div className="relative z-10 glass-card rounded-2xl border border-white/70 dark:border-white/10 shadow-2xl p-8 md:p-12 lg:p-16" style={{ animation: "neonBorder 4s ease-in-out infinite" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">

            {/* ── Icon Constellation ── */}
            <div className="relative h-44 w-44 flex items-center justify-center animate-scale-in" style={{ opacity: 0 }}>
              {/* Outer orbit ring */}
              <div className="icon-orbit-outer" style={{ top: "-90px", left: "-90px" }}>
                <div className="orbit-icon">
                  <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="orbit-icon-r">
                  <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                </div>
                <div className="orbit-icon-m">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full shadow-lg flex items-center justify-center">
                    <Award className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Inner orbit ring */}
              <div className="icon-orbit-inner" style={{ top: "-55px", left: "-55px" }}>
                <div className="orbit-icon">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-md flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="orbit-icon-r">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-md flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Center coffee icon */}
              <div className="relative center-coffee-glow z-10">
                <div className="pulse-ring" />
                <div className="pulse-ring pulse-ring-2" />
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/25 dark:border-white/10">
                  <div className="relative">
                    <Coffee className="w-10 h-10 text-white" strokeWidth={1.5}
                      style={{ animation: "floatIcon 3s ease-in-out infinite, holoPulse 3s ease-in-out infinite" }} />
                    {/* Steam */}
                    <div className="absolute -top-1 left-1.5 w-2 h-2 bg-white/50 rounded-full" style={{ animation: "steamRise 2.5s ease-out infinite 0s" }} />
                    <div className="absolute -top-0.5 right-1 w-1.5 h-1.5 bg-white/40 rounded-full" style={{ animation: "steamRise 2.5s ease-out infinite 0.8s" }} />
                    <div className="absolute top-0 left-3 w-1 h-1 bg-white/60 rounded-full" style={{ animation: "steamRise 2.5s ease-out infinite 1.6s" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Heading ── */}
            <div className="space-y-3 animate-slide-down delay-200" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 dark:bg-amber-900/30 border border-amber-300/50 dark:border-amber-700/40 mb-2">
                <Shield className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" strokeWidth={2} />
                <span className="text-xs font-semibold banner-body text-amber-800 dark:text-amber-300 tracking-wider uppercase">Ceylon Coffee Intelligence</span>
              </div>
              <h1 className="banner-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-amber-950 dark:text-amber-50 leading-tight">
                <span className="block font-light italic mb-1">AI-Powered</span>
                <span className="block holo-text">
                  Coffee Quality Grading
                </span>
                <span className="block font-light">&amp; Export Enhancement</span>
              </h1>
            </div>

            {/* ── Subtitle ── */}
            <p className="banner-body text-base md:text-lg text-amber-900/75 dark:text-amber-100/85 max-w-2xl leading-relaxed font-light animate-slide-up delay-300" style={{ opacity: 0 }}>
              <span className="font-semibold text-amber-900 dark:text-amber-100">Revolutionizing Sri Lankan coffee production</span>{" "}
              through artificial intelligence, machine learning, and data-driven insights. From disease detection to price forecasting, we optimize the entire coffee value chain with cutting-edge technology.
            </p>

            {/* ── CTA Buttons ── */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up delay-400" style={{ opacity: 0 }}>
              <Link
                href="#scope"
                className="group cta-primary px-8 py-4 text-white rounded-xl shadow-xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                  <Zap className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" strokeWidth={2} />
                  Explore Our Solution
                </span>
              </Link>
              <Link
                href="#features"
                className="group cta-outline px-8 py-4 rounded-xl border-amber-600 dark:border-amber-500 text-amber-900 dark:text-amber-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                  <Coffee className="w-5 h-5 transition-all duration-300 group-hover:scale-110" strokeWidth={2} />
                  Learn More
                </span>
              </Link>
            </div>

            {/* ── Feature Badges ── */}
            <div className="flex flex-wrap gap-3 justify-center pt-4 animate-slide-up delay-500" style={{ opacity: 0 }}>
              {[
                { icon: Shield, label: "AI-Powered Detection", color: "from-green-500 to-emerald-600", bg: "bg-green-100/60 dark:bg-green-900/30", border: "border-green-300 dark:border-green-700/50", text: "text-green-900 dark:text-green-200" },
                { icon: Zap, label: "Real-time Analysis", color: "from-blue-500 to-cyan-600", bg: "bg-blue-100/60 dark:bg-blue-900/30", border: "border-blue-300 dark:border-blue-700/50", text: "text-blue-900 dark:text-blue-200" },
                { icon: Globe, label: "Export Ready", color: "from-purple-500 to-violet-600", bg: "bg-purple-100/60 dark:bg-purple-900/30", border: "border-purple-300 dark:border-purple-700/50", text: "text-purple-900 dark:text-purple-200" },
                { icon: Award, label: "Grade Certified", color: "from-amber-500 to-orange-600", bg: "bg-amber-100/60 dark:bg-amber-900/30", border: "border-amber-300 dark:border-amber-700/50", text: "text-amber-900 dark:text-amber-200" },
              ].map(({ icon: Icon, label, color, bg, border, text }, i) => (
                <div
                  key={label}
                  className={`badge-item animate-badge-pop inline-flex items-center gap-2 px-4 py-2.5 rounded-full ${bg} border ${border} backdrop-blur-sm`}
                  style={{ opacity: 0, animationDelay: `${550 + i * 80}ms` }}
                >
                  <div className={`w-5 h-5 bg-gradient-to-br ${color} rounded-full flex items-center justify-center shadow-sm`}>
                    <Icon className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </div>
                  <span className={`text-xs font-semibold banner-body ${text}`}>{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;