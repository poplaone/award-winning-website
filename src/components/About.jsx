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
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="about-particle absolute w-2 h-2 bg-blue-400/20 rounded-full"
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
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
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
