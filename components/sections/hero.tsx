"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cover } from "../ui/cover";
import { Button } from "../ui/button";
import { ArrowRightIcon, LayoutDashboard, Coffee, Zap, TrendingUp, Sparkles, Droplets, Award } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scrollToSection = <T extends HTMLElement>(
    e: React.MouseEvent<T>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setTilt({ x: -y, y: x });
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative container mx-auto px-4 py-16 overflow-hidden smooth-nav">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --amber-glow: rgba(217, 119, 6, 0.6);
          --amber-soft: rgba(217, 119, 6, 0.15);
          --gold: #d4a843;
        }

        @keyframes floatBg {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(30px) scale(1.05); }
        }

        @keyframes orbitRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbitRingReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes steamRise {
          0% { opacity: 0; transform: translateY(0) scaleX(1) rotate(0deg); }
          30% { opacity: 0.7; }
          100% { opacity: 0; transform: translateY(-50px) scaleX(0.4) rotate(15deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(217,119,6,0.4)) drop-shadow(0 0 20px rgba(217,119,6,0.1)); }
          50% { filter: drop-shadow(0 0 20px rgba(217,119,6,0.9)) drop-shadow(0 0 40px rgba(217,119,6,0.3)); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.7) rotate(-10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes shimmerSlide {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes neonPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(217,119,6,0.3), 0 0 30px rgba(217,119,6,0.1); }
          50% { box-shadow: 0 0 20px rgba(217,119,6,0.6), 0 0 50px rgba(217,119,6,0.25), 0 0 80px rgba(217,119,6,0.1); }
        }

        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.4); opacity: 1; }
        }

        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .hero-body {
          font-family: 'DM Sans', sans-serif;
        }

        .animate-slide-left { animation: slideInLeft 0.9s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-slide-right { animation: slideInRight 0.9s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.23,1,0.32,1) forwards; }
        .animate-scale-in { animation: scaleIn 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .animate-badge-pop { animation: badgePop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .animate-steam { animation: steamRise 2.8s ease-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 2.5s ease-in-out infinite; }
        .animate-orbit { animation: orbitRing 12s linear infinite; }
        .animate-orbit-r { animation: orbitRingReverse 18s linear infinite; }

        .delay-50 { animation-delay: 50ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #b45309 0%, #d97706 25%, #fbbf24 40%, #f59e0b 50%,
            #d97706 60%, #b45309 75%, #d97706 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerSlide 4s linear infinite;
        }

        .dark .shimmer-text {
          background: linear-gradient(
            90deg,
            #fcd34d 0%, #fbbf24 25%, #fff7ed 40%, #fde68a 50%,
            #fbbf24 60%, #fcd34d 75%, #fbbf24 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .orbit-container {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-ring-1 {
          position: absolute;
          inset: 0;
          border: 1.5px dashed rgba(217,119,6,0.25);
          border-radius: 50%;
          animation: orbitRing 20s linear infinite;
        }

        .orbit-ring-2 {
          position: absolute;
          inset: -18px;
          border: 1px dashed rgba(217,119,6,0.12);
          border-radius: 50%;
          animation: orbitRingReverse 28s linear infinite;
        }

        .orbit-dot {
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-dot-2 {
          top: auto;
          bottom: -5px;
          right: -5px;
          left: auto;
          transform: none;
        }

        .orbit-dot-3 {
          top: 50%;
          right: -5px;
          left: auto;
          transform: translateY(-50%);
        }

        .glow-border {
          position: absolute;
          inset: -1px;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, rgba(217,119,6,0.4) 0%, transparent 50%, rgba(245,158,11,0.3) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .image-wrapper:hover .glow-border { opacity: 1; }

        .image-wrapper {
          perspective: 1000px;
        }

        .tilt-card {
          transition: transform 0.2s ease-out, box-shadow 0.3s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .tilt-card:hover {
          box-shadow: 0 30px 80px rgba(217,119,6,0.2), 0 10px 30px rgba(0,0,0,0.15);
        }

        .premium-btn {
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: all 0.35s cubic-bezier(0.23,1,0.32,1);
        }

        .premium-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #92400e 0%, #b45309 45%, #d97706 100%);
          transition: opacity 0.35s ease;
        }

        .premium-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #78350f 0%, #92400e 45%, #b45309 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .premium-btn:hover::after { opacity: 1; }
        .premium-btn:hover { transform: translateY(-3px); animation: neonPulse 2s ease-in-out infinite; }
        .premium-btn:active { transform: translateY(-1px); }

        .badge-pill {
          font-family: 'DM Sans', sans-serif;
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }

        .badge-pill:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          border-radius: inherit;
        }

        .float-icon-1 { animation: floatBg 4s ease-in-out infinite; }
        .float-icon-2 { animation: floatBg 5.5s ease-in-out infinite reverse; }
        .float-icon-3 { animation: floatBg 3.8s ease-in-out infinite 1s; }

        .grid-bg {
          background-image: linear-gradient(rgba(217,119,6,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,119,6,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* Grid background pattern */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60 dark:opacity-30" />

      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-300/40 to-orange-300/20 dark:from-amber-700/30 dark:to-orange-700/15 rounded-full blur-3xl"
          style={{ animation: "floatBg 8s ease-in-out infinite" }} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-yellow-300/30 to-amber-300/15 dark:from-yellow-700/25 dark:to-amber-700/10 rounded-full blur-3xl"
          style={{ animationDelay: "3s", animation: "floatBg 10s ease-in-out infinite reverse" }} />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-200/20 to-transparent dark:from-orange-800/20 dark:to-transparent rounded-full blur-3xl"
          style={{ animation: "floatBg 12s ease-in-out infinite" }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* ── Left Content ── */}
        <div className="flex flex-col gap-8 text-center lg:text-left">

          {/* Orbital Coffee Icon */}
          <div className="flex justify-center lg:justify-start animate-slide-left" style={{ opacity: 0 }}>
            <div className="orbit-container">
              {/* Outer dashed ring with orbiting icons */}
              <div className="orbit-ring-2">
                <div className="orbit-dot float-icon-1">
                  <Sparkles className="w-4 h-4 text-yellow-400 dark:text-yellow-300 drop-shadow-md" strokeWidth={2.5} />
                </div>
              </div>

              {/* Inner dashed ring */}
              <div className="orbit-ring-1">
                <div className="orbit-dot">
                  <Zap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" strokeWidth={2.5} />
                </div>
                <div className="orbit-dot-2" style={{ position: 'absolute', bottom: '-5px', right: '30%' }}>
                  <TrendingUp className="w-3 h-3 text-green-500 dark:text-green-400" strokeWidth={2.5} />
                </div>
              </div>

              {/* Center coffee icon */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-amber-400/20 dark:bg-amber-500/20 rounded-full blur-xl scale-150" />
                <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/60 dark:to-orange-900/40 rounded-full p-3.5 border border-amber-200/60 dark:border-amber-700/40 shadow-lg">
                  <Coffee
                    className="w-8 h-8 text-amber-700 dark:text-amber-300 animate-pulse-glow"
                    strokeWidth={1.5}
                  />
                  {/* Steam particles */}
                  <div className="absolute top-0 left-2.5 w-2 h-2 bg-amber-400/50 rounded-full animate-steam" style={{ animationDelay: "0s" }} />
                  <div className="absolute top-0 right-2 w-1.5 h-1.5 bg-amber-300/40 rounded-full animate-steam" style={{ animationDelay: "0.7s" }} />
                  <div className="absolute -top-1 left-4 w-1 h-1 bg-orange-400/60 rounded-full animate-steam" style={{ animationDelay: "1.4s" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-left delay-100 hero-body" style={{ opacity: 0 }}>
            <h1 className="hero-heading text-gray-900 dark:text-gray-50 relative">
              <span className="block mb-2 text-3xl lg:text-5xl font-light tracking-tight text-gray-700 dark:text-gray-200">
                Ceylon Coffee With
              </span>
              <span className="relative inline-block">
                <span className="absolute -inset-3 bg-gradient-to-r from-amber-600/15 via-orange-500/15 to-yellow-600/15 dark:from-amber-400/20 dark:via-orange-400/20 dark:to-yellow-400/20 blur-xl opacity-80 rounded-xl" />
                <Cover className="relative shimmer-text text-3xl lg:text-5xl">
                  Mobile Vision
                </Cover>
                <div className="absolute -right-7 -top-5 animate-scale-in delay-300" style={{ opacity: 0 }}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400/40 blur-md rounded-full" />
                    <Sparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-300 relative drop-shadow-lg" strokeWidth={2} style={{ animation: "pulseGlow 2s ease-in-out infinite, rotateSlow 8s linear infinite" }} />
                  </div>
                </div>
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="hero-body text-gray-600 dark:text-gray-400 lg:text-lg leading-relaxed font-light animate-fade-up delay-200 max-w-xl" style={{ opacity: 0 }}>
            Transform{" "}
            <span className="font-medium text-amber-700 dark:text-amber-300">Sri Lankan coffee</span>{" "}
            quality assessment with advanced AI-powered computer vision. From disease detection to price forecasting,{" "}
            <span className="font-medium text-orange-700 dark:text-orange-300">we enhance every aspect</span>{" "}
            of your export excellence.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start pt-2 animate-fade-up delay-300" style={{ opacity: 0 }}>
            <Button
              className="group relative h-auto px-8 py-4 text-base lg:text-lg rounded-xl overflow-hidden border-0 premium-btn"
              variant="secondary"
              onClick={(e) => scrollToSection(e, "gridGallery")}
            >
              <span className="relative z-10 flex items-center gap-2.5 text-white">
                <LayoutDashboard
                  className="transition-all duration-400 group-hover:scale-110 group-hover:rotate-6"
                  size={20}
                  strokeWidth={2}
                />
                Explore Components
                <ArrowRightIcon
                  className="transition-all duration-400 group-hover:translate-x-2"
                  size={20}
                  strokeWidth={2}
                />
              </span>
            </Button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up delay-400" style={{ opacity: 0 }}>
            {[
              { icon: Zap, label: "AI-Powered", color: "green", iconColor: "text-green-600 dark:text-green-400", bg: "from-green-50 to-emerald-50 dark:from-green-950/60 dark:to-emerald-950/40", border: "border-green-300/70 dark:border-green-700/50" },
              { icon: TrendingUp, label: "Real-time", color: "blue", iconColor: "text-blue-600 dark:text-blue-400", bg: "from-blue-50 to-cyan-50 dark:from-blue-950/60 dark:to-cyan-950/40", border: "border-blue-300/70 dark:border-blue-700/50" },
              { icon: Award, label: "Smart Vision", color: "amber", iconColor: "text-amber-700 dark:text-amber-400", bg: "from-amber-50 to-orange-50 dark:from-amber-950/60 dark:to-orange-950/40", border: "border-amber-300/70 dark:border-amber-700/50" },
              { icon: Droplets, label: "Pure Quality", color: "teal", iconColor: "text-teal-600 dark:text-teal-400", bg: "from-teal-50 to-cyan-50 dark:from-teal-950/60 dark:to-cyan-950/40", border: "border-teal-300/70 dark:border-teal-700/50" },
            ].map(({ icon: Icon, label, iconColor, bg, border }, i) => (
              <div
                key={label}
                className={`badge-pill animate-badge-pop inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r ${bg} border ${border} backdrop-blur-md`}
                style={{ opacity: 0, animationDelay: `${450 + i * 60}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-current opacity-10 scale-150 blur-sm" />
                  <Icon className={`w-4 h-4 ${iconColor} relative`} strokeWidth={2.5} />
                </div>
                <span className={`text-xs font-semibold hero-body ${iconColor.replace("text-", "text-").replace("-400", "-800").replace("-600", "-900")} dark:${iconColor}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Image ── */}
        <div
          className="flex justify-center lg:justify-end animate-slide-right delay-200 relative image-wrapper"
          style={{ opacity: 0 }}
          onMouseMove={handleImageMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          ref={imageRef}
        >
          <div className="relative w-full max-w-md lg:max-w-full group">
            {/* Glow halo */}
            <div className="absolute -inset-6 bg-gradient-to-br from-amber-400/20 via-orange-300/15 to-yellow-300/10 dark:from-amber-700/25 dark:via-orange-700/20 dark:to-yellow-700/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Animated gradient border */}
            <div className="glow-border" style={{ background: "linear-gradient(135deg, rgba(217,119,6,0.5) 0%, rgba(251,191,36,0.3) 50%, rgba(245,158,11,0.4) 100%)", padding: "1px", borderRadius: "1.25rem" }} />

            {/* 3D tilt card */}
            <div
              className="tilt-card relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/5"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <div className="noise-overlay" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
              <Image
                src="/images/diagrams/main-diagram.png"
                alt="Smart City Computer Vision System Architecture"
                width={600}
                height={500}
                priority
                className="w-full h-auto object-cover"
              />
              {/* Shimmer sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 -translate-x-full z-20" />
            </div>

            {/* Floating badge – Coffee */}
            <div
              className="absolute -top-5 -right-5 float-icon-1 animate-scale-in delay-400"
              style={{ opacity: 0 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full blur-md opacity-60" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-500 rounded-full shadow-xl flex items-center justify-center border-2 border-white/30">
                  <Coffee className="w-7 h-7 text-white drop-shadow-md" strokeWidth={2} style={{ animation: "floatBg 3s ease-in-out infinite, pulseGlow 2s ease-in-out infinite" }} />
                </div>
              </div>
            </div>

            {/* Floating badge – Zap */}
            <div
              className="absolute -bottom-4 -left-4 float-icon-2 animate-scale-in delay-500"
              style={{ opacity: 0 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-md opacity-50" />
                <div className="relative w-11 h-11 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg flex items-center justify-center border-2 border-white/30">
                  <Zap className="w-5 h-5 text-white drop-shadow-md" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Floating sparkle */}
            <div className="absolute top-1/2 -right-8 float-icon-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-300 drop-shadow-lg" strokeWidth={2} style={{ animation: "pulseGlow 2.5s ease-in-out infinite" }} />
            </div>

            {/* Corner accent dots */}
            {[
              { pos: "top-2 left-2" },
              { pos: "top-2 right-2" },
              { pos: "bottom-2 left-2" },
              { pos: "bottom-2 right-2" },
            ].map(({ pos }, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-500`}
                style={{ animation: `dotPulse 2s ease-in-out infinite ${i * 400}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;