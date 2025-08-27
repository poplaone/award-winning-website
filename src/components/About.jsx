import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Floating particles animation
    gsap.to(".about-particle", {
      y: "random(-30, 30)",
      x: "random(-20, 20)",
      rotation: "random(-180, 180)",
      duration: 8,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    // Background gradient animation
    gsap.to(".about-gradient", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div id="about" className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Overlay */}
        <div className="about-gradient absolute inset-0 bg-gradient-radial from-blue-200/30 via-purple-200/20 to-transparent" />
        
        {/* Primary Floating Particles */}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={`primary-${i}`}
            className="about-particle absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 4 === 0 ? 'rgba(59, 130, 246, 0.3)' :
                              i % 4 === 1 ? 'rgba(147, 51, 234, 0.3)' :
                              i % 4 === 2 ? 'rgba(236, 72, 153, 0.3)' :
                              'rgba(167, 243, 208, 0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
        
        {/* Secondary Glow Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`glow-${i}`}
            className="about-gradient absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(59, 130, 246, 0.08)' :
                i % 3 === 1 ? 'rgba(147, 51, 234, 0.08)' :
                'rgba(236, 72, 153, 0.08)'
              }, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 80px 80px, 60px 60px, 60px 60px'
        }} />
        
        {/* Dynamic Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line x1="10%" y1="10%" x2="30%" y2="40%" stroke="url(#aboutGradient1)" strokeWidth="1" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="70%" y1="20%" x2="90%" y2="50%" stroke="url(#aboutGradient1)" strokeWidth="1" strokeDasharray="3,7">
            <animate attributeName="stroke-dashoffset" values="10;0" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="20%" y1="80%" x2="60%" y2="60%" stroke="url(#aboutGradient2)" strokeWidth="1" strokeDasharray="4,6">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="5s" repeatCount="indefinite" />
          </line>
          
          <defs>
            <linearGradient id="aboutGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="aboutGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to NeuralForge
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> smartest AI <b>e</b>cosystem"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Intelligence Revolution begins—your world, now powered by AI</p>
          <p className="text-gray-500">
            NeuralForge unites cutting-edge AI models, data pipelines, and intelligent 
            systems into a unified AI ecosystem that transforms how you work and innovate
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
