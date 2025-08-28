import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLocationArrow } from "react-icons/ti";

import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";

gsap.registerPlugin(ScrollTrigger);

const GameCard = ({ title, description, video, badge, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef(null);
  const videoRef = useRef(null);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    if (videoRef.current && !isSelected) {
      videoRef.current.play();
    }
  };

  // Rarity colors to match Vault component
  const rarityColors = {
    CV: "from-blue-400 to-cyan-500",
    NLP: "from-purple-400 to-pink-500",
    Analytics: "from-green-400 to-emerald-500",
    AutoML: "from-yellow-400 to-orange-500",
  };

  return (
    <BentoTilt className="vault-item group">
      <div
        ref={cardRef}
        className={`relative h-64 w-full cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-500 ${
          isSelected 
            ? 'border-yellow-400 shadow-lg shadow-yellow-400/30' 
            : 'border-white/20 hover:border-white/40'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <video
          ref={videoRef}
          src={video}
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${rarityColors[badge] || 'from-gray-400 to-gray-600'} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col justify-between p-4">
          <div className="flex items-start justify-between">
            <div className={`vault-badge bg-gradient-to-r ${rarityColors[badge] || 'from-gray-400 to-gray-600'}`}>
              {badge}
            </div>
            <div className={`transition-transform duration-300 ${isHovered ? 'rotate-45' : ''}`}>
              <TiLocationArrow className="text-2xl text-yellow-300" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-general uppercase tracking-wider text-white/60">
                AI Model
              </span>
              <div className="h-1 flex-1 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
            </div>
            
            <h3 className="text-lg font-zentry font-bold text-white">{title}</h3>
            
            <p className="text-sm font-circular-web text-blue-100/80 line-clamp-3">
              {description}
            </p>
            
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-circular-web text-blue-100/80">
                Enterprise
              </span>
              {isSelected && (
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              )}
            </div>
          </div>
        </div>
        
        {/* Selection Border Animation */}
        {isSelected && (
          <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl">
            <div className="absolute inset-0 border border-yellow-400/50 rounded-xl animate-pulse" />
          </div>
        )}
      </div>
    </BentoTilt>
  );
};

const ConnectionNode = ({ x, y, delay = 0 }) => {
  const nodeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(nodeRef.current, 
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".nexus-network",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(nodeRef.current, {
      scale: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: delay + 1,
    });
  }, []);

  return (
    <div
      ref={nodeRef}
      className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping" />
    </div>
  );
};

const Nexus = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const networkRef = useRef(null);

  useGSAP(() => {
    // Floating particles animation
    gsap.to(".floating-particle", {
      y: "-=30",
      x: "random(-20, 20)",
      rotation: "random(-180, 180)",
      duration: 8,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    // Network lines animation
    gsap.fromTo(".connection-line",
      { strokeDasharray: "0,1000" },
      {
        strokeDasharray: "1000,1000",
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".nexus-network",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const aiModelCards = [
    {
      title: "Neural Vision",
      description: "Advanced computer vision models for image recognition, object detection, and visual analysis. Deploy at scale with enterprise-grade performance.",
      video: "videos/feature-1.mp4",
      badge: "CV",
    },
    {
      title: "Language Master",
      description: "State-of-the-art natural language processing models. From text generation to sentiment analysis and language translation.",
      video: "videos/feature-2.mp4",
      badge: "NLP",
    },
    {
      title: "Data Fusion",
      description: "Connect and analyze data from multiple sources. Advanced algorithms for predictive analytics and business intelligence.",
      video: "videos/feature-3.mp4",
      badge: "Analytics",
    },
    {
      title: "AutoML Engine",
      description: "Automated machine learning platform. Build, train, and deploy custom models without extensive ML expertise required.",
      video: "videos/feature-4.mp4",
      badge: "AutoML",
    },
  ];

  return (
    <section 
      id="nexus" 
      ref={sectionRef}
      className="relative min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-yellow-400/20 rounded-full"
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
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="vault-badge mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500">
            AI Model Hub
          </div>
          
          <AnimatedTitle
            title="C<b>o</b>nnect • C<b>o</b>mpute • C<b>r</b>eate"
            containerClass="mb-8"
          />
          
          <p className="max-w-2xl mx-auto text-lg font-circular-web text-blue-100/80 leading-relaxed">
            Enter the ultimate AI ecosystem where every model matters, every connection counts, 
            and every innovation accelerates across the intelligence network.
          </p>
        </div>


        {/* AI Model Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {aiModelCards.map((card, index) => (
            <GameCard key={index} {...card} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl border border-white/20 bg-gradient-to-r from-gray-900/50 to-black/50 px-8 py-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <TiLocationArrow className="text-2xl text-yellow-300" />
              <span className="text-lg font-zentry font-bold text-white">Access Models</span>
            </div>
            
            <div className="h-6 w-px bg-white/20" />
            
            <div className="flex gap-3">
              <button className="rounded-full bg-blue-500 px-6 py-2 font-general text-sm font-bold text-white transition-all duration-300 hover:bg-blue-600">
                Deploy
              </button>
              <button className="rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-6 py-2 font-general text-sm font-bold text-black transition-all duration-300 hover:from-yellow-400 hover:to-orange-500">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nexus;