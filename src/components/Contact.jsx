import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  useGSAP(() => {
    // Floating particles animation
    gsap.to(".contact-particle", {
      y: "random(-25, 25)",
      x: "random(-15, 15)",
      rotation: "random(-180, 180)",
      duration: 10,
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
      ease: "sine.inOut",
    });

    // Glow pulse animation
    gsap.to(".contact-glow", {
      opacity: "random(0.2, 0.4)",
      scale: "random(0.9, 1.1)",
      duration: 4,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: "power2.inOut",
    });
  });

  return (
    <div id="contact" className="relative my-20 min-h-96 w-screen px-10 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="contact-particle absolute w-1 h-1 bg-blue-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
        
        {/* Ambient Glows */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="contact-glow absolute w-80 h-80 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(59, 130, 246, 0.08)' : 'rgba(147, 51, 234, 0.08)'
              }, transparent 70%)`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden border border-white/10 backdrop-blur-sm">
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 rounded-lg" />
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 z-10">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 z-10">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join NeuralForge
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> <b>A</b>I t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
