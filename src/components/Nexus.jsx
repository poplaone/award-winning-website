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
  const cardRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: index * 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
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

  return (
    <BentoTilt className="game-card group">
      <div
        ref={cardRef}
        className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm transition-all duration-500 hover:border-yellow-300/30 hover:shadow-2xl hover:shadow-yellow-300/10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={video}
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-50"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <div className="nexus-badge">
              {badge}
            </div>
            <div className={`transition-transform duration-300 ${isHovered ? 'rotate-45' : ''}`}>
              <TiLocationArrow className="text-2xl text-yellow-300" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-zentry font-bold text-white">{title}</h3>
            <p className="text-sm font-circular-web text-blue-100/80 line-clamp-3">
              {description}
            </p>
            
            <div className="flex items-center gap-2 pt-2">
              <div className="h-1 w-8 bg-gradient-to-r from-yellow-300 to-purple-400 rounded-full" />
              <span className="text-xs font-general uppercase tracking-wider text-yellow-300">
                Active
              </span>
            </div>
          </div>
        </div>
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
      className="absolute w-3 h-3 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping" />
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
      y: "-=20",
      x: "+=10",
      rotation: 360,
      duration: 6,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
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
      className="relative min-h-screen w-screen bg-gradient-to-br from-black via-purple-950/30 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="nexus-badge mx-auto mb-6">
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

        {/* Network Visualization */}
        <div className="nexus-network relative mb-20 h-40 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
          <svg className="absolute inset-0 w-full h-full">
            <line x1="10%" y1="50%" x2="30%" y2="20%" className="connection-line" stroke="url(#gradient1)" strokeWidth="2" />
            <line x1="30%" y1="20%" x2="70%" y2="30%" className="connection-line" stroke="url(#gradient1)" strokeWidth="2" />
            <line x1="70%" y1="30%" x2="90%" y2="60%" className="connection-line" stroke="url(#gradient1)" strokeWidth="2" />
            <line x1="10%" y1="50%" x2="50%" y2="80%" className="connection-line" stroke="url(#gradient1)" strokeWidth="2" />
            <line x1="50%" y1="80%" x2="90%" y2="60%" className="connection-line" stroke="url(#gradient1)" strokeWidth="2" />
            
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
          
          <ConnectionNode x={10} y={50} delay={0} />
          <ConnectionNode x={30} y={20} delay={0.2} />
          <ConnectionNode x={70} y={30} delay={0.4} />
          <ConnectionNode x={90} y={60} delay={0.6} />
          <ConnectionNode x={50} y={80} delay={0.8} />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-zentry font-bold text-white mb-1">Live Network</h3>
              <p className="text-sm font-general text-yellow-300">47,392 Active Models</p>
            </div>
          </div>
        </div>

        {/* AI Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aiModelCards.map((card, index) => (
            <GameCard key={index} {...card} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 rounded-full border border-yellow-300/30 bg-gradient-to-r from-yellow-300/10 to-purple-400/10 px-8 py-4 backdrop-blur-sm">
            <span className="text-lg font-zentry font-bold text-white">Ready to Build?</span>
            <div className="group flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-2 transition-all duration-300 hover:bg-yellow-400 cursor-pointer">
              <span className="text-sm font-general font-bold text-black uppercase tracking-wider">Enter Hub</span>
              <TiLocationArrow className="text-black transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nexus;