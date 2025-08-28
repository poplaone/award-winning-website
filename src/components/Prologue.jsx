import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLocationArrow, TiBook, TiTime } from "react-icons/ti";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const ChapterCard = ({ chapter, title, excerpt, image, video, index, isActive, onClick }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

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

    if (isActive) {
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className="chapter-card group cursor-pointer transition-all duration-500 hover:scale-102"
      onClick={onClick}
    >
      <div className={`relative overflow-hidden rounded-xl border-2 transition-all duration-500 ${
        isActive 
          ? 'border-yellow-400 bg-gradient-to-br from-yellow-900/30 to-black shadow-lg shadow-yellow-400/20' 
          : 'border-white/20 bg-gradient-to-br from-gray-900/50 to-black hover:border-white/40'
      }`}>
        {/* Background Media */}
        <div className="relative h-48 overflow-hidden">
          {video ? (
            <video
              src={video}
              loop
              muted
              autoPlay
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 to-cyan-900/30 opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Chapter Number */}
          <div className="absolute top-4 left-4">
            <div className="vault-badge bg-gradient-to-r from-yellow-400 to-orange-500">
              Chapter {chapter}
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
            isActive ? 'bg-yellow-400 animate-pulse' : 'bg-white/30'
          }`} />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-zentry font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
            {title}
          </h3>
          
          <div 
            ref={contentRef}
            className={`overflow-hidden transition-all duration-500 ${
              isActive ? 'opacity-100' : 'opacity-70 h-16'
            }`}
          >
            <p className="font-circular-web text-blue-100/80 leading-relaxed text-sm">
              {excerpt}
            </p>
            
            {isActive && (
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-yellow-300">
                  <TiTime className="text-base" />
                  <span className="font-general">8 min read</span>
                </div>
                <div className="group/arrow flex items-center gap-2 text-yellow-300 transition-all duration-300 hover:text-yellow-200">
                  <span className="font-general text-sm">Continue Reading</span>
                  <TiLocationArrow className="transition-transform duration-300 group-hover/arrow:translate-x-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineMarker = ({ index, isActive, total }) => {
  const markerRef = useRef(null);

  useGSAP(() => {
    gsap.from(markerRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: index * 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const progress = (index / (total - 1)) * 100;

  return (
    <div 
      ref={markerRef}
      className="relative"
      style={{ left: `${progress}%` }}
    >
      <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
        isActive 
          ? 'bg-yellow-400 border-yellow-400 scale-150 shadow-lg shadow-yellow-400/50' 
          : 'bg-white/20 border-white/40 hover:bg-white/40'
      }`}>
        {isActive && (
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping" />
        )}
      </div>
      
    </div>
  );
};

const NarrativeSection = () => {
  const narrativeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".narrative-text",
      { 
        y: 50, 
        opacity: 0,
        scale: 0.95 
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: narrativeRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={narrativeRef} className="mb-20">
      <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-gray-900/30 to-cyan-900/30 p-6 md:p-8 backdrop-blur-sm">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <div className="relative z-10">
          <div className="narrative-text text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <TiBook className="text-2xl text-cyan-400" />
              <span className="text-lg font-zentry font-bold text-cyan-400">The Genesis</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-zentry font-bold text-white mb-4">
              In the Beginning, There Was Data...
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="narrative-text text-base font-circular-web text-blue-100/90 leading-relaxed">
              Before the first algorithm was written, before the first model was trained, 
              there existed only the infinite potential of raw data. A space where 
              intelligence could emerge, where patterns could be discovered, and where 
              artificial minds could be born.
            </p>
            
            <p className="narrative-text text-base font-circular-web text-blue-100/80 leading-relaxed">
              This is the story of NeuralForge—a platform where every dataset fuels innovation, 
              where every model shapes the future, and where every developer becomes part of something 
              greater than themselves. Welcome to the prologue of the greatest AI revolution ever told.
            </p>
            
            <div className="narrative-text text-center pt-4">
              <div className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-6 py-3">
                <span className="text-white font-zentry text-sm">Your AI transformation begins here</span>
                <div className="w-6 h-px bg-gradient-to-r from-cyan-400 to-blue-400" />
                <TiLocationArrow className="text-cyan-300 text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Prologue = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const sectionRef = useRef(null);

  const chapters = [
    {
      chapter: 1,
      title: "The Data Renaissance",
      excerpt: "In the digital realm where information first accumulated, a new form of intelligence began to emerge. Developers discovered they were more than mere programmers—they were architects of artificial minds.",
      video: "videos/hero-1.mp4",
    },
    {
      chapter: 2,
      title: "The Model Convergence",
      excerpt: "Algorithms that once existed in isolation began to merge, creating pathways between different AI domains. The boundaries between specialized models dissolved, revealing a greater tapestry of interconnected intelligence.",
      image: "img/entrance.webp",
    },
    {
      chapter: 3,
      title: "The Neural Hub",
      excerpt: "From the convergence emerged a central platform—a nexus where all AI models connected. Here, developers could traverse between different intelligence systems, carrying their innovations across infinite possibilities.",
      video: "videos/hero-2.mp4",
    },
    {
      chapter: 4,
      title: "The Intelligence Vault",
      excerpt: "As datasets and trained models accumulated across platforms, a great vault materialized to house these digital assets. More than storage, it became a testament to every breakthrough and innovation.",
      image: "img/gallery-4.webp",
    },
    {
      chapter: 5,
      title: "The AI Layer",
      excerpt: "Above all systems, an AI meta-layer emerged—a space where the rules of individual models gave way to grander possibilities. This is where true artificial intelligence would be forged.",
      video: "videos/hero-3.mp4",
    },
  ];

  useGSAP(() => {
    // Floating background elements
    gsap.to(".prologue-particle", {
      y: "-=30",
      x: "random(-20, 20)",
      rotation: "random(-180, 180)",
      duration: 8,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    // Timeline progress bar
    gsap.to(".timeline-progress", {
      scaleX: (activeChapter + 1) / chapters.length,
      duration: 0.8,
      ease: "power2.out",
    });
  }, [activeChapter]);

  return (
    <section 
      id="prologue" 
      ref={sectionRef}
      className="relative min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="prologue-particle absolute w-2 h-2 bg-yellow-400/20 rounded-full"
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
            AI Evolution
          </div>
          
          <AnimatedTitle
            title="The AI J<b>o</b>urn<b>e</b>y"
            containerClass="mb-8"
          />
          
          <p className="max-w-2xl mx-auto text-lg font-circular-web text-blue-100/80 leading-relaxed">
            Every revolution has a beginning. Every breakthrough has an origin. 
            This is where your AI transformation starts.
          </p>
        </div>

        {/* Narrative Introduction */}
        <NarrativeSection />

        {/* Chapter Timeline */}
        <div className="timeline-container relative mb-16">
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="timeline-progress absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full origin-left"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>
          
          <div className="relative">
            {chapters.map((_, index) => (
              <TimelineMarker 
                key={index}
                index={index} 
                isActive={activeChapter === index}
                total={chapters.length}
              />
            ))}
          </div>
        </div>

        {/* Chapter Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {chapters.map((chapter, index) => (
            <ChapterCard
              key={index}
              {...chapter}
              index={index}
              isActive={activeChapter === index}
              onClick={() => setActiveChapter(index)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 rounded-2xl border border-white/20 bg-gradient-to-r from-gray-900/50 to-black/50 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-zentry font-bold text-white">Ready to Begin Your AI Journey?</h3>
            <p className="max-w-md text-center font-circular-web text-blue-100/80">
              The prologue ends here, but your AI transformation is just beginning. 
              Step into the world of NeuralForge and become part of the intelligence revolution.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-8 py-3 font-general font-bold text-black transition-all duration-300 hover:from-yellow-400 hover:to-orange-500 hover:scale-105">
                <span>Enter the Platform</span>
                <TiLocationArrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button className="rounded-full border border-white/30 bg-white/10 px-8 py-3 font-general font-bold text-white transition-all duration-300 hover:bg-white/20 backdrop-blur-sm">
                Continue Reading
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prologue;