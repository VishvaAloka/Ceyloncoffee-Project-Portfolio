"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { TechStackTools } from "../ui/technologies";
import Integration from "../ui/integration";
import { Leaf, Zap, Coffee, Sparkles, Cpu, Rocket, FlaskConical, Atom, Orbit, Binary } from "lucide-react";

/* ─────────────────────────────────────────────
   Inline SVG logos for the rotating marquee
   (no external deps, no <img> network requests)
───────────────────────────────────────────── */
const TechLogos: { name: string; color: string; svg: React.ReactNode }[] = [
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <rect width="128" height="128" rx="6" fill="#3178C6" />
        <path fill="#fff" d="M22 63h22v8H34v37H24V71H22V63zm38 0h36v8H74v8h14c8 0 14 4 14 13s-6 16-16 16H60v-8h28c4 0 6-2 6-7s-3-6-7-6H68V63z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <path fill="#FFA000" d="M20 96 44 14l20 36z" />
        <path fill="#F57F17" d="M20 96 64 32l20 40z" />
        <path fill="#FFCA28" d="M20 96 84 72l-20-40z" />
        <path fill="#FFA000" d="M84 72 108 96 20 96z" />
        <path fill="#FF6F00" d="M64 32 84 72 20 96z" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <path fill="#3776AB" d="M63.4 8C43.6 8 45 17 45 17l.1 9.4h18.7v2.8H32.5S20 27.5 20 47.5s10.6 19.3 10.6 19.3h6.3v-9.3s-.3-10.5 10.3-10.5h17.8s10 .2 10-9.6V18.3S76.6 8 63.4 8zM54 15.2a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4z" />
        <path fill="#FFD43B" d="M64.6 120c19.8 0 18.4-9 18.4-9l-.1-9.4H64.2v-2.8h31.3S108 100.5 108 80.5 97.4 61.2 97.4 61.2h-6.3v9.3s.3 10.5-10.3 10.5H63s-10-.2-10 9.6V109.7S51.4 120 64.6 120zm9.4-7.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4z" />
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    color: "#FF6F00",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <path fill="#FF6F00" d="M64 8L8 40v48l56 32 56-32V40L64 8zm0 10l44 25v7L64 25 20 50v-7L64 18zM20 59l44 25v27L20 86V59zm88 0v27L64 111V84l44-25z" />
      </svg>
    ),
  },
  {
    name: "React Native",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <circle cx="64" cy="64" r="11" fill="#61DAFB" />
        <ellipse cx="64" cy="64" rx="52" ry="19" fill="none" stroke="#61DAFB" strokeWidth="6" />
        <ellipse cx="64" cy="64" rx="52" ry="19" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 64 64)" />
        <ellipse cx="64" cy="64" rx="52" ry="19" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 64 64)" />
      </svg>
    ),
  },
  {
    name: "CNN",
    color: "#EF4444",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <rect width="128" height="128" rx="14" fill="#EF4444" />
        <text x="64" y="82" textAnchor="middle" fill="white" fontSize="40" fontWeight="900" fontFamily="monospace">CNN</text>
      </svg>
    ),
  },
  {
    name: "FastAPI",
    color: "#059669",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <rect width="128" height="128" rx="14" fill="#059669" />
        <path fill="white" d="M72 20H40L34 68h26l-8 40 46-56H70z" />
      </svg>
    ),
  },
  {
    name: "OpenCV",
    color: "#5C3EE8",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <circle cx="64" cy="48" r="22" fill="none" stroke="#5C3EE8" strokeWidth="12" />
        <circle cx="30" cy="92" r="22" fill="none" stroke="#E74C3C" strokeWidth="12" />
        <circle cx="98" cy="92" r="22" fill="none" stroke="#27AE60" strokeWidth="12" />
      </svg>
    ),
  },
  {
    name: "scikit-learn",
    color: "#F7931E",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <path fill="#F7931E" d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm0 88c-19.9 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z" />
        <path fill="#3499CD" d="M64 44c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 32c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <rect width="128" height="128" rx="14" fill="#000" />
        <path fill="white" d="M23 103V25h14l54 63V25h13v78H90L36 40v63z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#539E43",
    svg: (
      <svg viewBox="0 0 128 128" width="36" height="36">
        <path fill="#539E43" d="M64 8L10 40v48l54 32 54-32V40L64 8zm0 10.6l42.7 24.7v9.3L64 28l-42.7 24.6v-9.3L64 18.6zM21.3 82.7V59.4l42.7 24.7v23.3l-42.7-24.7zm85.4 0L64 107.4V84.1l42.7-24.7v23.3z" />
      </svg>
    ),
  },
];

const TechStack = () => {
  const features = [
    {
      title: "Core Functionality",
      description: "Seamless data access, real-time monitoring, and AI-driven insights for comprehensive coffee quality analysis and optimization.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
      icon: Leaf,
      delay: 0,
    },
    {
      title: "Technologies & Stack",
      description: "Cutting-edge AI, machine learning, cloud services, and development frameworks for fast, secure, and scalable coffee quality grading system.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
      icon: Cpu,
      delay: 1,
    },
  ];

  return (
    <div className="relative z-20 mt-20 mb-12 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Keyframes ── */
        @keyframes ts-fadeDown {
          from { opacity: 0; transform: translateY(-44px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ts-fadeUp {
          from { opacity: 0; transform: translateY(44px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ts-orbDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(55px,-40px) scale(1.1); }
          66%     { transform: translate(-30px,30px) scale(0.93); }
        }
        @keyframes ts-orbRev {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-65px,35px) scale(1.07); }
        }
        @keyframes ts-shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes ts-rocketFloat {
          0%,100% { transform: translateY(0px) rotate(-8deg) scale(1); filter: drop-shadow(0 0 10px rgba(217,119,6,.4)); }
          50%      { transform: translateY(-18px) rotate(8deg) scale(1.1); filter: drop-shadow(0 0 22px rgba(217,119,6,.8)); }
        }
        @keyframes ts-coffeeSway {
          0%   { transform: rotate(-22deg) scale(1); filter: drop-shadow(0 0 8px rgba(217,119,6,.3)); }
          25%  { transform: rotate(0deg) scale(1.18); filter: drop-shadow(0 0 20px rgba(217,119,6,.7)); }
          50%  { transform: rotate(22deg) scale(1); }
          75%  { transform: rotate(0deg) scale(1.18); filter: drop-shadow(0 0 20px rgba(217,119,6,.7)); }
          100% { transform: rotate(-22deg) scale(1); }
        }
        @keyframes ts-leafSway {
          0%,100% { transform: rotate(-12deg) scale(1); filter: drop-shadow(0 0 6px rgba(16,185,129,.4)); }
          50%      { transform: rotate(12deg) scale(1.15); filter: drop-shadow(0 0 18px rgba(16,185,129,.8)); }
        }
        @keyframes ts-cpuPulse {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(99,102,241,.4)); }
          25%     { transform: scale(1.12) rotate(5deg); filter: drop-shadow(0 0 16px rgba(99,102,241,.8)); }
          50%     { transform: scale(1); filter: drop-shadow(0 0 6px rgba(99,102,241,.4)); }
          75%     { transform: scale(1.12) rotate(-5deg); filter: drop-shadow(0 0 16px rgba(99,102,241,.8)); }
        }
        @keyframes ts-sparkOrbit {
          0%   { transform: rotate(0deg) translateX(24px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(24px) rotate(-360deg); }
        }
        @keyframes ts-atomSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ts-zapFlash {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(245,158,11,.4)); }
          20%      { transform: scale(1.4) rotate(-12deg); filter: drop-shadow(0 0 22px rgba(245,158,11,.9)); }
          40%      { transform: scale(0.88) rotate(8deg); }
          60%      { transform: scale(1.25); filter: drop-shadow(0 0 16px rgba(245,158,11,.6)); }
        }
        @keyframes ts-cardIn {
          0%   { opacity: 0; transform: scale(0.9) translateY(30px); }
          60%  { transform: scale(1.02) translateY(-3px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ts-borderPulse {
          0%,100% { border-color: rgba(217,119,6,.22); box-shadow: 0 0 0 0 rgba(217,119,6,.0); }
          50%      { border-color: rgba(217,119,6,.48); box-shadow: 0 0 30px rgba(217,119,6,.12); }
        }
        @keyframes ts-dotPop {
          0%,100% { transform: scale(1); opacity: .45; }
          50%      { transform: scale(1.9); opacity: 1; }
        }

        /* ── MARQUEE ── */
        @keyframes ts-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ts-logoFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-5px); }
        }
        @keyframes ts-logoGlow {
          0%,100% { opacity: .85; filter: drop-shadow(0 2px 8px rgba(0,0,0,.1)); }
          50%      { opacity: 1; filter: drop-shadow(0 4px 16px rgba(0,0,0,.22)); }
        }
        @keyframes ts-logoHoverPop {
          0%  { transform: scale(1) rotate(0deg); }
          40% { transform: scale(1.18) rotate(-5deg); }
          70% { transform: scale(1.22) rotate(4deg); }
          100%{ transform: scale(1.15) rotate(0deg); }
        }

        /* ── Helpers ── */
        .ts-font-display { font-family: 'Playfair Display', Georgia, serif; }
        .ts-font-body    { font-family: 'DM Sans', system-ui, sans-serif; }

        .ts-fade-down { animation: ts-fadeDown .85s cubic-bezier(.34,1.56,.64,1) both; }
        .ts-fade-up   { animation: ts-fadeUp .85s cubic-bezier(.34,1.56,.64,1) both; }
        .ts-d100 { animation-delay: 100ms; }
        .ts-d200 { animation-delay: 200ms; }
        .ts-d300 { animation-delay: 300ms; }
        .ts-d400 { animation-delay: 400ms; }

        /* ── Orbs ── */
        .ts-orb {
          position: absolute; border-radius: 9999px;
          filter: blur(88px); pointer-events: none;
        }

        /* ── Header icon bar ── */
        .ts-icon-bar {
          display: inline-flex;
          align-items: center;
          gap: 1.2rem;
          padding: .8rem 1.75rem;
          background: linear-gradient(135deg, rgba(255,251,235,.85), rgba(254,243,199,.55));
          border: 1px solid rgba(217,119,6,.2);
          border-radius: 9999px;
          backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px rgba(217,119,6,.07), inset 0 1px 0 rgba(255,255,255,.6);
          margin-bottom: 1.5rem;
        }
        .dark .ts-icon-bar {
          background: linear-gradient(135deg, rgba(15,23,42,.85), rgba(23,37,63,.6));
          border-color: rgba(217,119,6,.18);
        }

        /* ── Title ── */
        .ts-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 7vw, 5rem);
          font-weight: 900;
          letter-spacing: -.04em;
          line-height: 1.04;
          background: linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 65%, #f59e0b 90%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: ts-shimmerText 7s linear infinite;
        }
        .dark .ts-title {
          background: linear-gradient(135deg, #fffbeb 0%, #fde68a 35%, #fbbf24 65%, #f59e0b 90%);
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 200% auto;
        }

        /* ── Eyebrow ── */
        .ts-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: .68rem; font-weight: 600;
          letter-spacing: .28em; text-transform: uppercase;
          color: #b45309;
        }
        .dark .ts-eyebrow { color: #fbbf24; }

        /* ── Description ── */
        .ts-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: .975rem;
          line-height: 1.78;
          color: #525252;
          max-width: 900px; margin: 0 auto;
          text-align: center;
        }
        .dark .ts-desc { color: #d4d4d4; }

        .ts-hl-amber  { font-weight: 700; color: #b45309; padding: .1em .4em; border-radius: .3em; background: rgba(217,119,6,.1); }
        .ts-hl-orange { font-weight: 700; color: #c2410c; padding: .1em .4em; border-radius: .3em; background: rgba(234,88,12,.08); }
        .ts-hl-yellow { font-weight: 700; color: #a16207; padding: .1em .4em; border-radius: .3em; background: rgba(161,98,7,.08); }
        .dark .ts-hl-amber  { color: #fbbf24; background: rgba(217,119,6,.18); }
        .dark .ts-hl-orange { color: #fb923c; background: rgba(234,88,12,.14); }
        .dark .ts-hl-yellow { color: #fde047; background: rgba(161,98,7,.14); }

        /* ── Feature grid wrapper ── */
        .ts-grid-wrap {
          border: 2px solid rgba(217,119,6,.25);
          border-radius: 2rem;
          background: linear-gradient(160deg, rgba(255,255,255,.6) 0%, rgba(255,251,235,.4) 100%);
          backdrop-filter: blur(8px);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(217,119,6,.08), 0 4px 20px rgba(0,0,0,.04);
          animation: ts-borderPulse 4.5s ease-in-out infinite;
        }
        .dark .ts-grid-wrap {
          background: linear-gradient(160deg, rgba(10,17,34,.65) 0%, rgba(15,25,50,.45) 100%);
          box-shadow: 0 20px 60px rgba(217,119,6,.05), 0 4px 20px rgba(0,0,0,.35);
        }

        /* ── Feature cards ── */
        .ts-feature-card {
          position: relative;
          overflow: hidden;
          transition: background .4s ease;
          animation: ts-cardIn .85s cubic-bezier(.34,1.56,.64,1) both;
        }
        .ts-feature-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(217,119,6,.08), rgba(245,158,11,.04));
          opacity: 0; transition: opacity .4s ease;
          pointer-events: none;
        }
        .ts-feature-card:hover::before { opacity: 1; }
        .ts-feature-card::after {
          content: '';
          position: absolute; top: -2px; left: -110%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.07), transparent);
          transition: left .65s ease;
          pointer-events: none;
        }
        .ts-feature-card:hover::after { left: 110%; }
        .ts-feature-card:hover { background: rgba(255,251,235,.1); }
        .dark .ts-feature-card:hover { background: rgba(217,119,6,.04); }

        /* ── Icon wrapper in cards ── */
        .ts-card-icon-wrap {
          position: relative;
          display: inline-flex;
          width: 52px; height: 52px;
          align-items: center; justify-content: center;
          border-radius: 1rem;
          background: linear-gradient(135deg, rgba(217,119,6,.12), rgba(245,158,11,.07));
          border: 1px solid rgba(217,119,6,.2);
          transition: all .4s cubic-bezier(.34,1.56,.64,1);
          overflow: hidden;
        }
        .ts-feature-card:hover .ts-card-icon-wrap {
          transform: scale(1.18) rotate(12deg);
          background: linear-gradient(135deg, rgba(217,119,6,.22), rgba(245,158,11,.14));
          border-color: rgba(217,119,6,.45);
          box-shadow: 0 6px 24px rgba(217,119,6,.25);
        }
        .ts-card-icon-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,.25), transparent);
          border-radius: inherit;
        }

        /* ── Card typography ── */
        .ts-card-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.25rem, 2.5vw, 1.6rem);
          font-weight: 700;
          letter-spacing: -.02em;
          color: #1a1a1a;
          transition: color .3s;
        }
        .dark .ts-card-title { color: #fafafa; }
        .ts-feature-card:hover .ts-card-title { color: #b45309; }
        .dark .ts-feature-card:hover .ts-card-title { color: #fbbf24; }

        .ts-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: .9rem; line-height: 1.7;
          color: #525252;
        }
        .dark .ts-card-desc { color: #a3a3a3; }

        /* ── Icon animations ── */
        .ts-icon-rocket { animation: ts-rocketFloat 3.2s ease-in-out infinite; }
        .ts-icon-coffee { animation: ts-coffeeSway 2.8s cubic-bezier(.68,-.55,.265,1.55) infinite; transform-origin: center; }
        .ts-icon-leaf   { animation: ts-leafSway 3s ease-in-out infinite; }
        .ts-icon-cpu    { animation: ts-cpuPulse 2.4s ease-in-out infinite; }
        .ts-icon-spark  { animation: ts-sparkOrbit 2.2s linear infinite; transform-origin: center; }
        .ts-icon-zap    { animation: ts-zapFlash 2.2s ease-in-out infinite; }
        .ts-icon-atom   { animation: ts-atomSpin 4s linear infinite; }

        /* ── Bottom dots ── */
        .ts-dot {
          width: 11px; height: 11px; border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          box-shadow: 0 0 14px rgba(245,158,11,.5);
        }
        .ts-dot:nth-child(1) { animation: ts-dotPop 2.4s ease-in-out infinite 0ms; }
        .ts-dot:nth-child(2) { animation: ts-dotPop 2.4s ease-in-out infinite 200ms; }
        .ts-dot:nth-child(3) { animation: ts-dotPop 2.4s ease-in-out infinite 400ms; }
        .ts-dot:nth-child(4) { animation: ts-dotPop 2.4s ease-in-out infinite 600ms; }
        .ts-dot:nth-child(5) { animation: ts-dotPop 2.4s ease-in-out infinite 800ms; }

        /* ────────────────────────────
           MARQUEE — Tech logo strip
        ──────────────────────────── */
        .ts-marquee-outer {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 1.5rem 0;
          /* soft fade edges */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .ts-marquee-track {
          display: flex;
          width: max-content;
          animation: ts-marquee 28s linear infinite;
          gap: 2.5rem;
          align-items: center;
        }
        .ts-marquee-track:hover { animation-play-state: paused; }

        .ts-logo-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: .55rem;
          padding: .9rem 1.3rem;
          border-radius: 1.2rem;
          background: linear-gradient(135deg, rgba(255,255,255,.85), rgba(255,251,235,.6));
          border: 1.5px solid rgba(217,119,6,.15);
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 16px rgba(217,119,6,.07), 0 1px 4px rgba(0,0,0,.04);
          cursor: default;
          transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease, border-color .3s ease;
          animation: ts-logoGlow 3s ease-in-out infinite;
          flex-shrink: 0;
          min-width: 84px;
        }
        .dark .ts-logo-pill {
          background: linear-gradient(135deg, rgba(15,23,42,.85), rgba(23,37,63,.6));
          border-color: rgba(217,119,6,.18);
          box-shadow: 0 2px 16px rgba(217,119,6,.06), 0 1px 4px rgba(0,0,0,.3);
        }
        .ts-logo-pill:hover {
          transform: translateY(-6px) scale(1.1);
          box-shadow: 0 12px 36px rgba(217,119,6,.18), 0 4px 12px rgba(0,0,0,.08);
          border-color: rgba(217,119,6,.4);
          animation-play-state: paused;
        }
        .dark .ts-logo-pill:hover {
          box-shadow: 0 12px 36px rgba(217,119,6,.2), 0 4px 12px rgba(0,0,0,.5);
        }

        .ts-logo-img {
          transition: transform .3s cubic-bezier(.34,1.56,.64,1), filter .3s ease;
          animation: ts-logoFloat 3.5s ease-in-out infinite;
        }
        .ts-logo-pill:hover .ts-logo-img {
          animation: ts-logoHoverPop .5s cubic-bezier(.34,1.56,.64,1) both;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,.2));
        }

        .ts-logo-name {
          font-family: 'DM Sans', sans-serif;
          font-size: .65rem;
          font-weight: 600;
          letter-spacing: .04em;
          color: #78350f;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .dark .ts-logo-name { color: #fde68a; }

        /* ── Marquee section heading ── */
        .ts-marquee-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 2vw, 1.15rem);
          font-weight: 700;
          letter-spacing: .06em;
          text-transform: uppercase;
          text-align: center;
          color: #92400e;
          margin-bottom: .5rem;
        }
        .dark .ts-marquee-heading { color: #fcd34d; }

        .ts-marquee-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .ts-marquee-line {
          flex: 1;
          max-width: 140px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(217,119,6,.45), transparent);
        }
      `}</style>

      {/* Background orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="ts-orb" style={{
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(251,191,36,.16) 0%, rgba(217,119,6,.05) 70%)',
          top: -160, right: -160,
          animation: 'ts-orbDrift 12s ease-in-out infinite'
        }} />
        <div className="ts-orb" style={{
          width: 450, height: 450,
          background: 'radial-gradient(circle, rgba(16,185,129,.08) 0%, transparent 70%)',
          bottom: -130, left: -130,
          animation: 'ts-orbRev 16s ease-in-out infinite'
        }} />
        <div className="ts-orb" style={{
          width: 340, height: 340,
          background: 'radial-gradient(circle, rgba(99,102,241,.08) 0%, transparent 70%)',
          top: '35%', left: '8%',
          animation: 'ts-orbDrift 20s ease-in-out infinite reverse'
        }} />
      </div>

      <div className="px-4 md:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="ts-fade-down flex flex-col items-center text-center mb-10">
          <p className="ts-eyebrow mb-4">AI-Powered Agricultural Intelligence</p>

          {/* Icon bar + title row */}
          <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
            <div className="ts-icon-bar ts-fade-down ts-d100">
              <Rocket className="w-8 h-8 text-amber-700 dark:text-amber-300 ts-icon-rocket" strokeWidth={2} />
              <div className="h-7 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-transparent" />
              <Coffee className="w-8 h-8 text-amber-700 dark:text-amber-300 ts-icon-coffee" strokeWidth={2} />
              <div className="h-7 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-transparent" />
              <Atom className="w-7 h-7 text-violet-500 dark:text-violet-400 ts-icon-atom" strokeWidth={1.8} />
              <div className="h-7 w-px bg-gradient-to-b from-transparent via-amber-300/50 to-transparent" />
              <Sparkles className="w-7 h-7 text-yellow-500 dark:text-yellow-400 ts-icon-spark" strokeWidth={1.8} />
            </div>
          </div>

          <h1 className="ts-title ts-font-display ts-fade-down ts-d200 mt-6 mb-3">
            Tools &amp; Technologies
          </h1>

          {/* Under-title accent */}
          <div className="ts-fade-up ts-d300 flex items-center gap-3 mb-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <Leaf className="w-5 h-5 text-emerald-500 ts-icon-leaf" strokeWidth={2} />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
        </div>

        {/* ── Description ── */}
        <div className="ts-fade-up ts-d200 mb-10">
          <p className="ts-desc ts-font-body">
            This{" "}
            <span className="ts-hl-amber">integrated AI-powered system</span>{" "}
            transforms Sri Lanka's coffee value chain through three intelligent modules: an{" "}
            <span className="ts-hl-orange">image-based disease detection</span>{" "}
            and{" "}
            <span className="ts-hl-amber">yield prediction</span>{" "}
            tool for early crop protection, a{" "}
            <span className="ts-hl-yellow">market forecasting engine</span>{" "}
            for price and demand analysis to guide export strategies, and a{" "}
            <span className="ts-hl-orange">predictive resource allocator</span>{" "}
            optimizing labor and transportation planning. By leveraging artificial intelligence, machine learning, and data-driven forecasting, the solution addresses challenges from farm to export — improving productivity, reducing losses, and enhancing global competitiveness for Sri Lankan coffee stakeholders.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          ROTATING TECH LOGO MARQUEE
      ══════════════════════════════════════════ */}
      <div className="ts-fade-up ts-d300 px-4 md:px-8 mb-12">
        <div className="ts-marquee-heading">Technologies &amp; Stack</div>
        <div className="ts-marquee-divider">
          <div className="ts-marquee-line" />
          <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400 ts-icon-cpu" strokeWidth={2} />
          <div className="ts-marquee-line" />
        </div>

        <div className="ts-marquee-outer">
          {/* Double the list so it loops seamlessly */}
          <div className="ts-marquee-track">
            {[...TechLogos, ...TechLogos].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="ts-logo-pill"
                style={{ animationDelay: `${(i % TechLogos.length) * 0.3}s` }}
                title={tech.name}
              >
                <div className="ts-logo-img">
                  {tech.svg}
                </div>
                <span className="ts-logo-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature grid ── */}
      <div className="relative mt-4 px-4 md:px-8">
        <div className="ts-grid-wrap grid grid-cols-1 lg:grid-cols-6">
          {features.map((feature, idx) => (
            <React.Fragment key={feature.title}>
              <div
                className={cn("ts-feature-card p-6 sm:p-10 group", feature.className)}
                style={{ animationDelay: `${feature.delay * 120 + 300}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="ts-card-icon-wrap">
                    <feature.icon className="w-6 h-6 text-amber-700 dark:text-amber-300 relative z-10 group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors" strokeWidth={2} />
                  </div>
                </div>

                {/* Text */}
                <p className="ts-card-title mb-3">{feature.title}</p>
                <p className="ts-card-desc mb-8">{feature.description}</p>

                {/* Skeleton */}
                <div className="w-full">{feature.skeleton}</div>
              </div>
              <hr className="lg:hidden dark:border-neutral-800 border-amber-100" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Bottom accent dots ── */}
      <div className="flex justify-center gap-3 mt-16">
        <div className="ts-dot" />
        <div className="ts-dot" />
        <div className="ts-dot" />
        <div className="ts-dot" />
        <div className="ts-dot" />
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={cn("p-4 sm:p-8 relative overflow-hidden", className)} style={style}>
    {children}
  </div>
);

export const SkeletonOne = () => <Integration />;
export const SkeletonTwo = () => <TechStackTools />;

export default TechStack;