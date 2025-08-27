import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  useGSAP(() => {
    // Floating particles animation
    gsap.to(".features-particle", {
      y: "random(-40, 40)",
      x: "random(-30, 30)",
      rotation: "random(-360, 360)",
      duration: 12,
      repeat: -1,
      yoyo: true,
      stagger: 0.4,
      ease: "sine.inOut",
    });

    // Ambient glow animation
    gsap.to(".features-glow", {
      opacity: "random(0.1, 0.3)",
      scale: "random(0.8, 1.2)",
      duration: 6,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  });

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900/50 to-black pb-52 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Primary Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`primary-${i}`}
            className="features-particle absolute rounded-full"
            style={{
              width: `${Math.random() * 2.5 + 1}px`,
              height: `${Math.random() * 2.5 + 1}px`,
              backgroundColor: i % 4 === 0 ? 'rgba(59, 130, 246, 0.4)' :
                              i % 4 === 1 ? 'rgba(147, 51, 234, 0.4)' :
                              i % 4 === 2 ? 'rgba(236, 72, 153, 0.4)' :
                              'rgba(34, 197, 94, 0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px currentColor`,
            }}
          />
        ))}
        
        {/* Larger Ambient Glows */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`glow-${i}`}
            className="features-glow absolute rounded-full"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? 'rgba(59, 130, 246, 0.08)' : 
                i % 4 === 1 ? 'rgba(147, 51, 234, 0.08)' : 
                i % 4 === 2 ? 'rgba(236, 72, 153, 0.08)' :
                'rgba(34, 197, 94, 0.06)'
              }, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px, 80px 80px, 80px 80px, 80px 80px'
        }} />
        
        {/* Dynamic Connection Network */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <line x1="15%" y1="15%" x2="35%" y2="45%" stroke="url(#featuresGradient1)" strokeWidth="1" strokeDasharray="4,6">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="65%" y1="25%" x2="85%" y2="55%" stroke="url(#featuresGradient2)" strokeWidth="1" strokeDasharray="3,7">
            <animate attributeName="stroke-dashoffset" values="10;0" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="25%" y1="75%" x2="55%" y2="45%" stroke="url(#featuresGradient3)" strokeWidth="1" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" values="0;10" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="45%" y1="85%" x2="75%" y2="15%" stroke="url(#featuresGradient1)" strokeWidth="0.5" strokeDasharray="2,8">
            <animate attributeName="stroke-dashoffset" values="10;0" dur="6s" repeatCount="indefinite" />
          </line>
          
          <defs>
            <linearGradient id="featuresGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="featuresGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="featuresGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    <div className="container relative z-10 mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              radia<b>n</b>t
            </>
          }
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                zig<b>m</b>a
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                n<b>e</b>xus
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                az<b>u</b>l
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
  );
};

export default Features;
