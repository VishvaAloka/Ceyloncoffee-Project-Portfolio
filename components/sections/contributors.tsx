"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Coffee, Sparkles, Zap, Star, Lightbulb, FlaskConical, Atom } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Vishva Aloka",
    designation: "Leader",
    image: "/images/members/Vishva-Aloka.jpeg",
  },
  {
    id: 2,
    name: "Thiwanka Jayalath",
    designation: "Member",
    image: "/images/members/Thiwanka-Jayalath.jpg",
  },
  {
    id: 3,
    name: "Sahan Liyanage",
    designation: "Member",
    image: "/images/members/Sahan-Liyanage.jpg",
  },
  {
    id: 4,
    name: "Rumalya Mahaduruge",
    designation: "Member",
    image: "/images/members/Rumalya-Mahaduruge.jpg",
  },
];

const ContributorPreview = () => {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Keyframes ── */
        @keyframes cp-fadeUp {
          from { opacity: 0; transform: translateY(56px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cp-fadeDown {
          from { opacity: 0; transform: translateY(-36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cp-orbDrift {
          0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
          33%     { transform: translate(50px,-40px) scale(1.1) rotate(60deg); }
          66%     { transform: translate(-30px,25px) scale(0.94) rotate(120deg); }
        }
        @keyframes cp-orbDriftB {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-60px,30px) scale(1.08); }
        }
        @keyframes cp-rotateCoffee {
          0%   { transform: rotate(-25deg) scale(1); filter: drop-shadow(0 0 6px rgba(217,119,6,.3)); }
          25%  { transform: rotate(0deg) scale(1.2); filter: drop-shadow(0 0 18px rgba(217,119,6,.7)); }
          50%  { transform: rotate(25deg) scale(1); filter: drop-shadow(0 0 6px rgba(217,119,6,.3)); }
          75%  { transform: rotate(0deg) scale(1.2); filter: drop-shadow(0 0 18px rgba(217,119,6,.7)); }
          100% { transform: rotate(-25deg) scale(1); }
        }
        @keyframes cp-orbitSpark {
          0%   { transform: rotate(0deg) translateX(28px) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: rotate(360deg) translateX(28px) rotate(-360deg) scale(1); opacity: 1; }
        }
        @keyframes cp-zapFlash {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(245,158,11,.4)); }
          20%      { transform: scale(1.35) rotate(-15deg); filter: drop-shadow(0 0 20px rgba(245,158,11,.9)); }
          40%      { transform: scale(0.9) rotate(10deg); }
          60%      { transform: scale(1.2); filter: drop-shadow(0 0 14px rgba(245,158,11,.6)); }
        }
        @keyframes cp-bulbGlow {
          0%,100% { transform: scale(1) rotate(-8deg); filter: drop-shadow(0 0 6px rgba(251,191,36,.4)); }
          50%      { transform: scale(1.18) rotate(8deg); filter: drop-shadow(0 0 22px rgba(251,191,36,.9)); }
        }
        @keyframes cp-atomSpin {
          0%   { transform: rotate(0deg) scale(1); filter: drop-shadow(0 0 6px rgba(139,92,246,.3)); }
          50%  { transform: rotate(180deg) scale(1.15); filter: drop-shadow(0 0 18px rgba(139,92,246,.7)); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes cp-shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes cp-borderGlow {
          0%,100% { box-shadow: 0 0 0 0 rgba(217,119,6,.0), 0 24px 60px rgba(217,119,6,.06); border-color: rgba(217,119,6,.18); }
          50%      { box-shadow: 0 0 0 4px rgba(217,119,6,.12), 0 30px 80px rgba(217,119,6,.14); border-color: rgba(217,119,6,.4); }
        }
        @keyframes cp-floatBg {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(45px) scale(1.07); }
        }
        @keyframes cp-dotPop {
          0%,100% { transform: scale(1); opacity: 0.45; }
          50%      { transform: scale(1.9); opacity: 1; }
        }
        @keyframes cp-traceTop {
          0%   { transform: scaleX(0); transform-origin: left; }
          50%  { transform: scaleX(1); transform-origin: left; }
          100% { transform: scaleX(1); }
        }
        @keyframes cp-particleRise {
          0%   { transform: translateY(0) scale(1); opacity: .7; }
          100% { transform: translateY(-55px) scale(0.3); opacity: 0; }
        }
        @keyframes cp-tooltip-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }

        /* ── Helpers ── */
        .cp-font-display { font-family: 'Playfair Display', Georgia, serif; }
        .cp-font-body    { font-family: 'DM Sans', system-ui, sans-serif; }

        .cp-fade-up   { animation: cp-fadeUp .9s cubic-bezier(.34,1.56,.64,1) both; }
        .cp-fade-down { animation: cp-fadeDown .9s cubic-bezier(.34,1.56,.64,1) both; }
        .cp-d100 { animation-delay: 100ms; }
        .cp-d200 { animation-delay: 200ms; }
        .cp-d300 { animation-delay: 300ms; }
        .cp-d400 { animation-delay: 400ms; }
        .cp-d500 { animation-delay: 500ms; }

        /* ── Orbs ── */
        .cp-orb {
          position: absolute; pointer-events: none;
          border-radius: 9999px; filter: blur(90px);
        }

        /* ── Main container ── */
        .cp-container {
          position: relative;
          background: linear-gradient(150deg,
            rgba(255,253,247,.92) 0%,
            rgba(254,248,235,.75) 55%,
            rgba(255,251,243,.88) 100%);
          backdrop-filter: blur(24px);
          border: 1.5px solid rgba(217,119,6,.18);
          border-radius: 2.75rem;
          padding: 3.5rem;
          box-shadow:
            0 24px 64px rgba(217,119,6,.07),
            0 4px 20px rgba(0,0,0,.04),
            inset 0 1px 0 rgba(255,255,255,.9);
          animation: cp-borderGlow 4s ease-in-out infinite;
          transition: transform .5s cubic-bezier(.34,1.56,.64,1);
        }
        .dark .cp-container {
          background: linear-gradient(150deg,
            rgba(10,17,34,.92) 0%,
            rgba(15,25,50,.78) 55%,
            rgba(12,20,40,.88) 100%);
          border-color: rgba(217,119,6,.14);
          box-shadow:
            0 24px 64px rgba(217,119,6,.05),
            0 4px 20px rgba(0,0,0,.4),
            inset 0 1px 0 rgba(255,255,255,.07);
        }
        .cp-container:hover { transform: translateY(-6px); }

        /* Top shimmer rail */
        .cp-container::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg, transparent, rgba(217,119,6,.8), rgba(251,191,36,.6), transparent);
          animation: cp-traceTop 2.5s cubic-bezier(.34,1.56,.64,1) both;
        }

        /* ── Icon cluster ── */
        .cp-icon-bar {
          display: inline-flex;
          gap: 1.4rem;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.75rem;
          padding: 1.2rem 2.25rem;
          background: linear-gradient(135deg, rgba(255,251,235,.8), rgba(254,243,199,.5));
          border: 1px solid rgba(217,119,6,.2);
          border-radius: 1.75rem;
          backdrop-filter: blur(16px);
          box-shadow: 0 4px 20px rgba(217,119,6,.06), inset 0 1px 0 rgba(255,255,255,.7);
        }
        .dark .cp-icon-bar {
          background: linear-gradient(135deg, rgba(15,23,42,.8), rgba(23,37,63,.55));
          border-color: rgba(217,119,6,.18);
          box-shadow: 0 4px 20px rgba(0,0,0,.3), inset 0 1px 0 rgba(255,255,255,.06);
        }

        .cp-icon-slot {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          width: 52px; height: 52px;
        }
        .cp-icon-slot-glow {
          position: absolute; inset: -6px;
          border-radius: 50%;
          opacity: .25;
          animation: cp-zapFlash 2.8s ease-in-out infinite;
        }

        /* Individual icon animations */
        .cp-icon-coffee { animation: cp-rotateCoffee 2.8s cubic-bezier(.68,-.55,.265,1.55) infinite; transform-origin: center; }
        .cp-icon-spark  { animation: cp-orbitSpark 2s linear infinite; transform-origin: center; }
        .cp-icon-zap    { animation: cp-zapFlash 2.2s ease-in-out infinite; }
        .cp-icon-bulb   { animation: cp-bulbGlow 2.6s ease-in-out infinite; }
        .cp-icon-atom   { animation: cp-atomSpin 3s linear infinite; }

        /* ── Eyebrow ── */
        .cp-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: .7rem; font-weight: 600;
          letter-spacing: .25em; text-transform: uppercase;
          color: #b45309;
        }
        .dark .cp-eyebrow { color: #fbbf24; }

        /* ── Title ── */
        .cp-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5.5vw, 4rem);
          font-weight: 900;
          letter-spacing: -.03em;
          line-height: 1.06;
          background: linear-gradient(135deg, #78350f 0%, #b45309 40%, #d97706 70%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: cp-shimmerText 7s linear infinite;
        }
        .dark .cp-title {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 40%, #fbbf24 75%, #f59e0b 100%);
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 200% auto;
        }

        /* ── Divider ── */
        .cp-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(217,119,6,.4), transparent);
          margin: 1.75rem 0;
          animation: cp-shimmerText 4s linear infinite;
        }
        .dark .cp-divider {
          background: linear-gradient(90deg, transparent, rgba(217,119,6,.25), transparent);
        }

        /* ── Description ── */
        .cp-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem; font-weight: 400;
          line-height: 1.75; letter-spacing: .005em;
          color: rgba(120,53,15,.88);
          text-align: center; max-width: 600px; margin: 0 auto;
        }
        .dark .cp-desc { color: rgba(254,235,200,.8); }

        .cp-highlight {
          font-weight: 600; color: #b45309;
          background: linear-gradient(120deg, rgba(217,119,6,.18), rgba(245,158,11,.1));
          padding: .12em .45em; border-radius: .35em;
        }
        .dark .cp-highlight {
          color: #fcd34d;
          background: linear-gradient(120deg, rgba(217,119,6,.22), rgba(245,158,11,.14));
        }

        /* ── Tooltip wrapper ── */
        .cp-tooltip-wrap {
          position: relative;
          display: flex; justify-content: center; align-items: center;
          min-height: 150px; z-index: 10;
          animation: cp-tooltip-float 4s ease-in-out infinite;
        }
        .cp-tooltip-halo {
          position: absolute; inset: -40px;
          background: radial-gradient(circle, rgba(217,119,6,.12) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0; transition: opacity .6s ease;
          pointer-events: none;
        }
        .cp-tooltip-wrap:hover .cp-tooltip-halo { opacity: 1; }

        /* Floating particles around avatar strip */
        .cp-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .cp-p {
          position: absolute; width: 4px; height: 4px;
          border-radius: 50%; opacity: 0;
          background: #f59e0b;
        }
        .cp-tooltip-wrap:hover .cp-p { animation: cp-particleRise 2s ease-out infinite; }

        /* ── Accent dots ── */
        .cp-dot {
          width: 11px; height: 11px; border-radius: 50%;
          background: linear-gradient(135deg, #d97706, #f59e0b);
          box-shadow: 0 0 14px rgba(217,119,6,.5);
        }
        .cp-dot:nth-child(1) { animation: cp-dotPop 2.4s ease-in-out infinite 0ms; }
        .cp-dot:nth-child(2) { animation: cp-dotPop 2.4s ease-in-out infinite 350ms; }
        .cp-dot:nth-child(3) { animation: cp-dotPop 2.4s ease-in-out infinite 700ms; }
      `}</style>

      {/* Background orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="cp-orb" style={{
          width: 540, height: 540,
          background: 'radial-gradient(circle, rgba(251,191,36,.16) 0%, rgba(217,119,6,.05) 70%)',
          top: -180, right: -180,
          animation: 'cp-orbDrift 14s ease-in-out infinite'
        }} />
        <div className="cp-orb" style={{
          width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(245,158,11,.1) 0%, rgba(253,230,138,.04) 70%)',
          bottom: -120, left: -100,
          animation: 'cp-orbDriftB 18s ease-in-out infinite'
        }} />
        <div className="cp-orb" style={{
          width: 320, height: 320,
          background: 'radial-gradient(circle, rgba(139,92,246,.07) 0%, transparent 70%)',
          top: '30%', left: '10%',
          animation: 'cp-orbDrift 24s ease-in-out infinite reverse'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="cp-container cp-fade-up">

          {/* ── Icon bar ── */}
          <div className="flex justify-center mb-2">
            <div className="cp-icon-bar">

              {/* Coffee */}
              <div className="cp-icon-slot">
                <div className="cp-icon-slot-glow" style={{ background: 'radial-gradient(circle, rgba(217,119,6,.6), transparent)' }} />
                <Coffee className="w-7 h-7 text-amber-700 dark:text-amber-400 cp-icon-coffee relative z-10" strokeWidth={1.6} />
              </div>

              {/* Separator */}
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-transparent dark:via-amber-600/30" />

              {/* Sparkles orbiting */}
              <div className="cp-icon-slot">
                <div className="cp-icon-slot-glow" style={{ background: 'radial-gradient(circle, rgba(251,191,36,.6), transparent)', animationDelay: '0.4s' }} />
                <Sparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-400 cp-icon-spark relative z-10" strokeWidth={1.8} />
              </div>

              {/* Separator */}
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-transparent dark:via-amber-600/30" />

              {/* Zap */}
              <div className="cp-icon-slot">
                <div className="cp-icon-slot-glow" style={{ background: 'radial-gradient(circle, rgba(245,158,11,.6), transparent)', animationDelay: '0.8s' }} />
                <Zap className="w-6 h-6 text-amber-600 dark:text-amber-300 cp-icon-zap relative z-10" strokeWidth={1.8} />
              </div>

              {/* Separator */}
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-transparent dark:via-amber-600/30" />

              {/* Lightbulb */}
              <div className="cp-icon-slot">
                <div className="cp-icon-slot-glow" style={{ background: 'radial-gradient(circle, rgba(251,191,36,.55), transparent)', animationDelay: '1.2s' }} />
                <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-300 cp-icon-bulb relative z-10" strokeWidth={1.8} />
              </div>

              {/* Separator */}
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-transparent dark:via-amber-600/30" />

              {/* Atom */}
              <div className="cp-icon-slot">
                <div className="cp-icon-slot-glow" style={{ background: 'radial-gradient(circle, rgba(139,92,246,.55), transparent)', animationDelay: '1.6s' }} />
                <Atom className="w-6 h-6 text-violet-500 dark:text-violet-400 cp-icon-atom relative z-10" strokeWidth={1.8} />
              </div>
            </div>
          </div>

          {/* Eyebrow */}
          <p className="cp-eyebrow cp-fade-down cp-d100 text-center mb-3">
            AI-Powered Coffee Research
          </p>

          {/* Title */}
          <h1 className="cp-title cp-fade-down cp-d200 cp-font-display text-center">
            Project Contributors
          </h1>

          {/* Divider */}
          <div className="cp-divider cp-fade-up cp-d300" />

          {/* Description */}
          <p className="cp-desc cp-fade-up cp-d400">
            Meet the{" "}
            <span className="cp-highlight">exceptional talent</span>{" "}
            driving innovation in AI-powered coffee quality assessment. A{" "}
            <span className="cp-highlight">collaborative team</span>{" "}
            of researchers, developers, and innovators united by a vision to transform agricultural technology.
          </p>

          {/* Avatar cluster */}
          <div className="mt-14 cp-fade-up cp-d500">
            <div className="cp-tooltip-wrap">
              <div className="cp-tooltip-halo" />
              {/* Particles */}
              <div className="cp-particles">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="cp-p" style={{
                    left: `${12 + i * 10}%`,
                    top: `${20 + (i % 3) * 20}%`,
                    background: i % 2 === 0 ? '#f59e0b' : '#a855f7',
                    animationDelay: `${i * 200}ms`,
                    animationDuration: `${1.4 + i * 0.2}s`,
                  }} />
                ))}
              </div>
              <AnimatedTooltip items={people} />
            </div>
          </div>

          {/* Accent dots */}
          <div className="flex justify-center gap-4 mt-10">
            <div className="cp-dot" />
            <div className="cp-dot" />
            <div className="cp-dot" />
          </div>
        </div>

        {/* Bottom shimmer rail */}
        <div className="mt-10 flex justify-center">
          <div
            className="h-[3px] w-28 rounded-full opacity-50"
            style={{
              background: 'linear-gradient(90deg, transparent, #f59e0b, #fbbf24, transparent)',
              animation: 'cp-shimmerText 3s linear infinite'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContributorPreview;