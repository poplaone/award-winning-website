import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  useGSAP(() => {
    // Floating footer particles animation
    gsap.to(".footer-particle", {
      y: "random(-15, 15)",
      x: "random(-10, 10)",
      rotation: "random(-90, 90)",
      duration: 8,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut",
    });

    // Footer glow animation
    gsap.to(".footer-glow", {
      opacity: "random(0.1, 0.3)",
      scale: "random(0.8, 1.2)",
      duration: 6,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "power2.inOut",
    });
  });

  return (
    <footer className="relative w-screen bg-gradient-to-r from-purple-600 via-[#5542ff] to-purple-700 py-8 text-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="footer-particle absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(255, 255, 255, 0.4)' :
                              i % 3 === 1 ? 'rgba(147, 51, 234, 0.4)' :
                              'rgba(236, 72, 153, 0.4)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
        
        {/* Ambient Glows */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`glow-${i}`}
            className="footer-glow absolute rounded-full"
            style={{
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(147, 51, 234, 0.15)'
              }, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              filter: 'blur(2px)',
            }}
          />
        ))}
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '60px 60px, 80px 80px, 40px 40px, 40px 40px'
        }} />
        
        {/* Subtle animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="0%" y1="20%" x2="100%" y2="30%" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" strokeDasharray="2,4">
            <animate attributeName="stroke-dashoffset" values="0;6" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="0%" y1="70%" x2="100%" y2="60%" stroke="rgba(147,51,234,0.4)" strokeWidth="0.5" strokeDasharray="3,3">
            <animate attributeName="stroke-dashoffset" values="6;0" dur="4s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
      
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©NeuralForge 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
