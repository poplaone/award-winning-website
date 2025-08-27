import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);

  useGSAP(() => {
    // Floating particles animation
    gsap.to(".story-particle", {
      y: "random(-35, 35)",
      x: "random(-25, 25)",
      rotation: "random(-270, 270)",
      duration: 15,
      repeat: -1,
      yoyo: true,
      stagger: 0.4,
      ease: "sine.inOut",
    });

    // Mystical glow animation
    gsap.to(".story-glow", {
      opacity: "random(0.1, 0.25)",
      scale: "random(0.8, 1.3)",
      duration: 8,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "power2.inOut",
    });
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="relative min-h-dvh w-screen bg-black text-blue-50 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="story-particle absolute w-1 h-1 bg-violet-400/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          />
        ))}
        
        {/* Mystical Glows */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="story-glow absolute w-96 h-96 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? 'rgba(147, 51, 234, 0.08)' : 
                i % 4 === 1 ? 'rgba(59, 130, 246, 0.06)' :
                i % 4 === 2 ? 'rgba(236, 72, 153, 0.07)' :
                'rgba(168, 85, 247, 0.05)'
              }, transparent 70%)`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
        
        {/* Subtle Star Field */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px, 150px 150px, 100px 100px'
        }} />
      </div>

      <div className="relative z-10 flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="relative z-20 -mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
