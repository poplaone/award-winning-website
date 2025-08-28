import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLocationArrow, TiWeatherCloudy, TiFlowChildren, TiChartBar } from "react-icons/ti";

import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";

gsap.registerPlugin(ScrollTrigger);

const IntelligenceCard = ({ title, description, icon, index }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      scale: 0.8,
      opacity: 0,
      rotationY: 45,
      duration: 0.8,
      delay: index * 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <BentoTilt className="vault-item group">
      <div
        ref={cardRef}
        className="relative h-64 w-full cursor-pointer overflow-hidden rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-500"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col justify-between p-4">
          <div className="flex items-start justify-between">
            <div className="vault-badge bg-gradient-to-r from-blue-400 to-cyan-500">
              Layer
            </div>
            <div className="text-2xl text-cyan-400">
              {icon}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-general uppercase tracking-wider text-white/60">
                Intelligence
              </span>
              <div className="h-1 flex-1 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
            </div>
            
            <h3 className="text-lg font-zentry font-bold text-white">{title}</h3>
            
            <p className="text-sm font-circular-web text-blue-100/80 line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </BentoTilt>
  );
};

const StatsPanel = () => {
  const statsRef = useRef(null);

  useGSAP(() => {
    gsap.from(statsRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "2.5M", label: "Models Deployed" },
    { value: "150+", label: "Integrations" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div ref={statsRef} className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-white/10 backdrop-blur-sm"
          >
            <div className="text-3xl font-zentry font-bold text-white mb-2">{stat.value}</div>
            <div className="text-sm font-general uppercase tracking-wider text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IntelligenceLayer = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Floating background elements
    gsap.to(".intelligence-particle", {
      y: "-=30",
      x: "random(-20, 20)",
      rotation: "random(-180, 180)",
      duration: 8,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });
  }, []);

  const intelligenceFeatures = [
    {
      title: "Neural Orchestration",
      description: "Intelligent coordination of multiple AI models working in harmony to solve complex problems with minimal human intervention.",
      icon: <TiFlowChildren />,
    },
    {
      title: "Adaptive Learning",
      description: "Continuous improvement through real-time feedback loops that enhance model performance and accuracy over time.",
      icon: <TiChartBar />,
    },
    {
      title: "Cognitive Mesh",
      description: "Interconnected intelligence network that enables seamless knowledge transfer between specialized AI systems.",
      icon: <TiWeatherCloudy />,
    },
    {
      title: "Predictive Intelligence",
      description: "Advanced forecasting capabilities that anticipate trends and provide actionable insights for strategic decision-making.",
      icon: <TiLocationArrow />,
    },
  ];

  return (
    <section 
      id="intelligence" 
      ref={sectionRef}
      className="relative min-h-screen w-screen bg-gradient-to-br from-black via-blue-900/20 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="intelligence-particle absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="vault-badge mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-blue-500">
            AI Intelligence Layer
          </div>
          
          <AnimatedTitle
            title="Immerse in <b>I</b>ntell<b>i</b>gence"
            containerClass="mb-8"
          />
          
          <p className="max-w-2xl mx-auto text-lg font-circular-web text-blue-100/80 leading-relaxed">
            Immerse yourself in a rich and ever-expanding ecosystem where cutting-edge AI models 
            converge into an interconnected intelligence platform that transforms your workflow.
          </p>
        </div>

        {/* Stats Panel */}
        <StatsPanel />

        {/* Intelligence Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {intelligenceFeatures.map((feature, index) => (
            <IntelligenceCard 
              key={index} 
              {...feature} 
              index={index}
            />
          ))}
        </div>

        {/* Action Bar */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl border border-white/20 bg-gradient-to-r from-blue-900/50 to-black/50 px-8 py-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <TiLocationArrow className="text-2xl text-cyan-400" />
              <span className="text-lg font-zentry font-bold text-white">Activate Intelligence</span>
            </div>
            
            <div className="h-6 w-px bg-white/20" />
            
            <div className="flex gap-3">
              <button className="rounded-full bg-blue-600 px-6 py-2 font-general text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700">
                Connect
              </button>
              <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 font-general text-sm font-bold text-black transition-all duration-300 hover:from-cyan-500 hover:to-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceLayer;
