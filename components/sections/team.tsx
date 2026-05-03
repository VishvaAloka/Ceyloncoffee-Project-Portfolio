import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Coffee, Star, Users, Sparkles, Zap, Heart, Award, Flame, Crown, Shield, Linkedin } from "lucide-react";

const guiders = [
  {
    id: "person-1",
    name: "Jenny Krishara",
    role: "Supervisor",
    avatar: "/images/members/Jenny-madam.jpg",
    badge: "Supervisor",
    color: "from-violet-500 via-purple-500 to-pink-600",
    glowColor: "rgba(168, 85, 247, 0.4)",
    accentColor: "#a855f7",
    linkedin: "https://www.linkedin.com/in/jenny-krishara-1a09a0111/",
  },
  {
    id: "person-2",
    name: "Osuri Dunuwila",
    role: "Co-Supervisor",
    avatar: "/images/members/Osuri-madam.jpg",
    badge: "Co-Supervisor",
    color: "from-sky-500 via-blue-500 to-cyan-600",
    glowColor: "rgba(14, 165, 233, 0.4)",
    accentColor: "#0ea5e9",
    linkedin: "https://www.linkedin.com/in/osuri-dunuwila-877843107/",
  },
];

const members = [
  {
    id: "person-5",
    name: "Vishva Aloka",
    role: "Leader",
    avatar: "/images/members/Vishva-Aloka.jpeg",
    badge: "Project Lead",
    color: "from-amber-500 via-orange-500 to-red-500",
    glowColor: "rgba(245, 158, 11, 0.45)",
    accentColor: "#f59e0b",
    icon: Crown,
    linkedin: "https://www.linkedin.com/in/rajeev-aloka/",
  },
  {
    id: "person-6",
    name: "Thiwanka Jayalath",
    role: "Member",
    avatar: "/images/members/Thiwanka-Jayalath.jpg",
    badge: "Team Member",
    color: "from-emerald-500 via-green-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    accentColor: "#10b981",
    icon: Zap,
    linkedin: "https://www.linkedin.com/in/thiwanka-jayalath-3b3937370/",
  },
  {
    id: "person-7",
    name: "Sahan Liyanage",
    role: "Member",
    avatar: "/images/members/Sahan-Liyanage.jpg",
    badge: "Team Member",
    color: "from-rose-500 via-red-500 to-orange-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    accentColor: "#f43f5e",
    icon: Flame,
    linkedin: "https://www.linkedin.com/in/sahan-liyanage-46a804217/",
  },
  {
    id: "person-8",
    name: "Rumalya Mahaduruge",
    role: "Member",
    avatar: "/images/members/Rumalya-Mahaduruge.jpg",
    badge: "Team Member",
    color: "from-indigo-500 via-violet-500 to-purple-600",
    glowColor: "rgba(99, 102, 241, 0.4)",
    accentColor: "#6366f1",
    icon: Shield,
    linkedin: "https://www.linkedin.com/in/rumalya-mahadurage-6508a42b2/",
  },
];

const Team = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="team">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(48px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(40px,-30px) scale(1.08); }
          66%     { transform: translate(-20px,20px) scale(0.95); }
        }
        @keyframes orbDriftR {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(-50px,25px) scale(1.06); }
          66%     { transform: translate(30px,-20px) scale(0.97); }
        }
        @keyframes rotateCoffee {
          0%   { transform: rotate(-22deg) scale(1); }
          25%  { transform: rotate(0deg) scale(1.18); }
          50%  { transform: rotate(22deg) scale(1); }
          75%  { transform: rotate(0deg) scale(1.18); }
          100% { transform: rotate(-22deg) scale(1); }
        }
        @keyframes spinStar {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.25); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes pulseHeart {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(244,63,94,.3)); }
          50%      { transform: scale(1.28); filter: drop-shadow(0 0 18px rgba(244,63,94,.7)); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0px) rotateZ(-3deg); }
          50%      { transform: translateY(-14px) rotateZ(3deg); }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.25; }
          50%      { opacity: 0.65; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes particleFly {
          0%   { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.6; }
          50%  { transform: translateY(-24px) translateX(8px) scale(1.3); opacity: 1; }
          100% { transform: translateY(-48px) translateX(-4px) scale(0.6); opacity: 0; }
        }
        @keyframes cardReveal {
          0%   { opacity: 0; transform: translateY(40px) scale(0.93); }
          60%  { transform: translateY(-4px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes borderTrace {
          0%   { clip-path: inset(0 100% 100% 0); }
          25%  { clip-path: inset(0 0 100% 0); }
          50%  { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        @keyframes zap {
          0%,100% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 4px rgba(217,119,6,.3)); }
          20%      { transform: scale(1.3) rotate(-10deg); filter: drop-shadow(0 0 16px rgba(217,119,6,.8)); }
          40%      { transform: scale(0.95) rotate(8deg); }
          60%      { transform: scale(1.2) rotate(-5deg); filter: drop-shadow(0 0 12px rgba(217,119,6,.6)); }
          80%      { transform: scale(1.05) rotate(3deg); }
        }
        @keyframes crownBob {
          0%,100% { transform: translateY(0) rotate(-8deg); filter: drop-shadow(0 0 8px rgba(245,158,11,.4)); }
          50%      { transform: translateY(-10px) rotate(8deg); filter: drop-shadow(0 0 20px rgba(245,158,11,.8)); }
        }
        @keyframes flameFlicker {
          0%,100% { transform: scale(1) skewX(0deg); filter: drop-shadow(0 0 6px rgba(248,113,113,.5)); }
          25%      { transform: scale(1.15) skewX(4deg); filter: drop-shadow(0 0 14px rgba(248,113,113,.9)); }
          75%      { transform: scale(0.92) skewX(-3deg); }
        }
        @keyframes shieldPulse {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(99,102,241,.3)); }
          50%      { transform: scale(1.2); filter: drop-shadow(0 0 18px rgba(99,102,241,.7)); }
        }
        @keyframes awardSpin {
          0%   { transform: rotateY(0deg); }
          50%  { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes dotPop {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50%      { transform: scale(1.8); opacity: 1; }
        }

        /* ── Utility ── */
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }

        .anim-fade-up   { animation: fadeUp 0.85s cubic-bezier(.34,1.56,.64,1) both; }
        .anim-fade-down { animation: fadeDown 0.85s cubic-bezier(.34,1.56,.64,1) both; }

        .d-100 { animation-delay: 100ms; }
        .d-200 { animation-delay: 200ms; }
        .d-300 { animation-delay: 300ms; }
        .d-400 { animation-delay: 400ms; }
        .d-500 { animation-delay: 500ms; }
        .d-600 { animation-delay: 600ms; }
        .d-700 { animation-delay: 700ms; }

        /* ── Background orbs ── */
        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          pointer-events: none;
        }
        .orb-amber {
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(251,191,36,.18) 0%, rgba(217,119,6,.06) 70%);
          top: -160px; right: -160px;
          animation: orbDrift 14s ease-in-out infinite;
        }
        .orb-rose {
          width: 440px; height: 440px;
          background: radial-gradient(circle, rgba(244,63,94,.12) 0%, rgba(251,113,133,.04) 70%);
          bottom: -120px; left: -120px;
          animation: orbDriftR 18s ease-in-out infinite;
        }
        .orb-violet {
          width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(139,92,246,.1) 0%, rgba(99,102,241,.04) 70%);
          top: 40%; left: 5%;
          animation: orbDrift 22s ease-in-out infinite reverse;
        }

        /* ── Section heading ── */
        .section-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #d97706;
        }
        .dark .section-eyebrow { color: #fbbf24; }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.05;
          background: linear-gradient(135deg, #78350f 0%, #b45309 45%, #d97706 75%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: shimmer 6s linear infinite;
        }
        .dark .section-title {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 40%, #fbbf24 75%, #f59e0b 100%);
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 200% auto;
        }

        /* ── Sub-section labels ── */
        .sub-label {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 1.25rem;
          border-radius: 9999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid rgba(217,119,6,.25);
          background: linear-gradient(135deg, rgba(255,251,235,.7), rgba(254,243,199,.4));
          color: #92400e;
          backdrop-filter: blur(12px);
        }
        .dark .sub-label {
          background: linear-gradient(135deg, rgba(15,23,42,.7), rgba(23,37,63,.5));
          border-color: rgba(217,119,6,.2);
          color: #fde68a;
        }

        /* ── Cards ── */
        .team-card {
          position: relative;
          overflow: hidden;
          border-radius: 1.75rem;
          background: linear-gradient(160deg, rgba(255,255,255,.88) 0%, rgba(255,250,240,.7) 100%);
          border: 1.5px solid rgba(217,119,6,.15);
          box-shadow:
            0 4px 24px rgba(0,0,0,.05),
            inset 0 1px 0 rgba(255,255,255,.8);
          transition: transform .45s cubic-bezier(.34,1.56,.64,1),
                      box-shadow .4s ease,
                      border-color .4s ease;
          animation: cardReveal .8s cubic-bezier(.34,1.56,.64,1) both;
          cursor: default;
        }
        .dark .team-card {
          background: linear-gradient(160deg, rgba(15,23,42,.85) 0%, rgba(23,37,63,.7) 100%);
          border-color: rgba(217,119,6,.12);
          box-shadow:
            0 4px 24px rgba(0,0,0,.3),
            inset 0 1px 0 rgba(255,255,255,.06);
        }
        .team-card:hover {
          transform: translateY(-14px) scale(1.01);
          border-color: rgba(217,119,6,.45);
          box-shadow:
            0 24px 60px rgba(217,119,6,.18),
            0 8px 24px rgba(0,0,0,.08),
            inset 0 1px 0 rgba(255,255,255,.9);
        }
        .dark .team-card:hover {
          border-color: rgba(217,119,6,.35);
          box-shadow:
            0 24px 60px rgba(217,119,6,.12),
            0 8px 24px rgba(0,0,0,.4),
            inset 0 1px 0 rgba(255,255,255,.1);
        }

        /* card top-edge shimmer on hover */
        .team-card::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(217,119,6,.8), rgba(245,158,11,.6), transparent);
          transition: left .55s ease;
        }
        .team-card:hover::after { left: 100%; }

        /* ── Avatar ring ── */
        .avatar-ring {
          position: absolute;
          inset: -6px;
          border-radius: 9999px;
          background: conic-gradient(from 0deg, var(--ring-color-a), var(--ring-color-b), var(--ring-color-a));
          opacity: 0;
          transition: opacity .4s ease;
          animation: none;
        }
        .team-card:hover .avatar-ring {
          opacity: 1;
          animation: spinStar 3s linear infinite;
        }

        /* ── Particles ── */
        .particle {
          position: absolute;
          width: 5px; height: 5px;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
        }
        .team-card:hover .particle { animation: particleFly 1.8s ease-out infinite; }

        /* ── Horizontal divider ── */
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(217,119,6,.35) 50%, transparent 100%);
          margin: 3.5rem 0 2rem;
        }

        /* ── Bottom dots ── */
        .accent-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #ef4444);
          box-shadow: 0 0 12px rgba(245,158,11,.5);
        }
        .accent-dot:nth-child(1) { animation: dotPop 2.2s ease-in-out infinite 0ms; }
        .accent-dot:nth-child(2) { animation: dotPop 2.2s ease-in-out infinite 300ms; }
        .accent-dot:nth-child(3) { animation: dotPop 2.2s ease-in-out infinite 600ms; }
        .accent-dot:nth-child(4) { animation: dotPop 2.2s ease-in-out infinite 900ms; }
        .accent-dot:nth-child(5) { animation: dotPop 2.2s ease-in-out infinite 1200ms; }

        /* ── Icon animations ── */
        .icon-coffee   { animation: rotateCoffee 2.8s cubic-bezier(.68,-.55,.265,1.55) infinite; transform-origin: center; }
        .icon-star     { animation: spinStar 3s linear infinite; }
        .icon-heart    { animation: pulseHeart 2s ease-in-out infinite; }
        .icon-users    { animation: floatY 3s ease-in-out infinite; }
        .icon-award    { animation: awardSpin 4s ease-in-out infinite; transform-origin: center; transform-style: preserve-3d; }
        .icon-zap      { animation: zap 2.4s ease-in-out infinite; }
        .icon-crown    { animation: crownBob 2.6s ease-in-out infinite; }
        .icon-flame    { animation: flameFlicker 1.8s ease-in-out infinite; }
        .icon-shield   { animation: shieldPulse 2.8s ease-in-out infinite; }

        .icon-glow-amber  { filter: drop-shadow(0 0 10px rgba(245,158,11,.5)); }
        .icon-glow-violet { filter: drop-shadow(0 0 10px rgba(168,85,247,.5)); }
        .icon-glow-rose   { filter: drop-shadow(0 0 10px rgba(244,63,94,.5)); }
      `}</style>

      {/* Background orbs */}
      <div aria-hidden="true">
        <div className="orb orb-amber" />
        <div className="orb orb-rose" />
        <div className="orb orb-violet" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Page header ── */}
        <div className="flex flex-col items-center text-center mb-20">

          {/* Eyebrow + icon cluster */}
          <div className="anim-fade-down flex items-center gap-5 mb-5">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-400 blur-xl opacity-30 animate-pulse" />
              <Users className="w-9 h-9 text-amber-600 dark:text-amber-300 relative icon-users icon-glow-amber" />
            </div>
            <span className="section-eyebrow">The People Behind It</span>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-35" style={{ animation: 'glowPulse 2.5s ease-in-out infinite' }} />
              <Sparkles className="w-7 h-7 text-yellow-500 dark:text-yellow-400 relative icon-star" />
            </div>
          </div>

          <h2 className="section-title anim-fade-down d-100 font-display mb-5">
            Meet Our Team
          </h2>

          {/* Thin line */}
          <div className="anim-fade-up d-200 w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-6" />

          <p className="anim-fade-up d-300 font-body max-w-2xl text-neutral-600 dark:text-neutral-300 text-[0.975rem] leading-[1.75] mb-2">
            A dedicated group of{" "}
            <span className="font-semibold text-amber-700 dark:text-amber-400">passionate researchers</span>{" "}
            and{" "}
            <span className="font-semibold text-amber-700 dark:text-amber-400">innovators</span>{" "}
            working together to revolutionize coffee quality assessment — advancing knowledge through cutting-edge AI.
          </p>
        </div>

        {/* ── Supervisors ── */}
        <div className="anim-fade-up d-200 mb-16">
          <div className="sub-label mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-full blur-md opacity-40" style={{ animation: 'glowPulse 2.5s ease-in-out infinite' }} />
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-300 relative icon-award" />
            </div>
            Supervisors &amp; Guides
            <div className="relative">
              <Sparkles className="w-4 h-4 text-yellow-500 dark:text-yellow-300 icon-star" />
            </div>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto">
            {guiders.map((person, idx) => (
              <div
                key={person.id}
                className="team-card group p-8 flex flex-col items-center"
                style={{ animationDelay: `${idx * 120 + 200}ms` }}
              >
                {/* Particles */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      background: person.accentColor,
                      left: `${15 + i * 18}%`,
                      top: `${10 + i * 8}%`,
                      animationDelay: `${i * 300}ms`,
                      animationDuration: `${1.4 + i * 0.3}s`,
                    }}
                  />
                ))}

                {/* LinkedIn icon */}
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  style={{ color: person.accentColor }}
                  title={`Visit ${person.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                {/* Avatar */}
                <div className="relative mb-6">
                  {/* Rotating conic border on hover */}
                  <div
                    className="avatar-ring"
                    style={{
                      "--ring-color-a": person.accentColor,
                      "--ring-color-b": "transparent",
                    } as React.CSSProperties}
                  />
                  <div
                    className="absolute -inset-2 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${person.glowColor}, transparent 70%)` }}
                  />
                  <Avatar className="relative size-28 border-[3px] border-white/80 dark:border-neutral-800/80 shadow-2xl ring-2 ring-white/40 dark:ring-white/10">
                    <AvatarImage src={person.avatar} className="object-cover" />
                    <AvatarFallback className={`bg-gradient-to-br ${person.color} text-white font-bold text-xl`}>
                      {person.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name */}
                <p className="font-display font-bold text-neutral-900 dark:text-white text-xl mb-1 tracking-tight">
                  {person.name}
                </p>

                {/* Badge */}
                <div
                  className={`mt-3 px-5 py-2 rounded-full bg-gradient-to-r ${person.color} text-white text-xs font-semibold tracking-wider uppercase shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300`}
                  style={{ boxShadow: `0 4px 18px ${person.glowColor}` }}
                >
                  {person.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ── Members ── */}
        <div className="anim-fade-up d-400">
          <div className="sub-label mb-10" style={{ borderColor: 'rgba(244,63,94,.25)', background: 'linear-gradient(135deg,rgba(255,241,242,.7),rgba(255,228,230,.4))', color: '#be123c' }}>
            <div className="relative">
              <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-300 icon-coffee icon-glow-amber" />
            </div>
            Team Members
            <div className="relative">
              <Heart className="w-4 h-4 text-rose-500 dark:text-rose-400 icon-heart icon-glow-rose" />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((person, idx) => {
              const Icon = person.icon;
              return (
                <div
                  key={person.id}
                  className="team-card group p-7 flex flex-col items-center"
                  style={{ animationDelay: `${idx * 100 + 400}ms` }}
                >
                  {/* Particles */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="particle"
                      style={{
                        background: person.accentColor,
                        left: `${20 + i * 20}%`,
                        top: `${5 + i * 12}%`,
                        animationDelay: `${i * 250}ms`,
                        animationDuration: `${1.5 + i * 0.25}s`,
                      }}
                    />
                  ))}

                  {/* LinkedIn icon */}
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ color: person.accentColor }}
                    title={`Visit ${person.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  {/* Floating role icon */}
                  <div
                    className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: person.accentColor }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Avatar */}
                  <div className="relative mb-5">
                    <div
                      className="avatar-ring"
                      style={{
                        "--ring-color-a": person.accentColor,
                        "--ring-color-b": "transparent",
                      } as React.CSSProperties}
                    />
                    <div
                      className="absolute -inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle, ${person.glowColor}, transparent 70%)` }}
                    />
                    <Avatar className="relative size-[88px] border-[3px] border-white/80 dark:border-neutral-800/80 shadow-xl ring-2 ring-white/40 dark:ring-white/10">
                      <AvatarImage src={person.avatar} className="object-cover" />
                      <AvatarFallback className={`bg-gradient-to-br ${person.color} text-white font-bold`}>
                        {person.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <p className="font-display font-bold text-neutral-900 dark:text-white text-base tracking-tight text-center leading-snug">
                    {person.name}
                  </p>

                  <div
                    className={`mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r ${person.color} text-white text-[0.65rem] font-bold tracking-widest uppercase shadow-md group-hover:scale-105 transition-transform duration-300`}
                    style={{ boxShadow: `0 3px 14px ${person.glowColor}` }}
                  >
                    {person.badge}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom accent dots ── */}
        <div className="flex justify-center gap-3 mt-16">
          {[...Array(5)].map((_, i) => <div key={i} className="accent-dot" />)}
        </div>
      </div>
    </section>
  );
};

export default Team;