import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLocationArrow, TiStar, TiGift } from "react-icons/ti";

import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";

gsap.registerPlugin(ScrollTrigger);

const VaultItem = ({ title, rarity, category, video, image, value, index, isLocked = false }) => {
  const [isSelected, setIsSelected] = useState(false);
  const itemRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.from(itemRef.current, {
      scale: 0.8,
      opacity: 0,
      rotationY: 45,
      duration: 0.8,
      delay: index * 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const rarityColors = {
    legendary: "from-yellow-400 to-orange-500",
    epic: "from-purple-400 to-pink-500",
    rare: "from-blue-400 to-cyan-500",
    common: "from-gray-400 to-gray-600",
  };

  const handleItemClick = () => {
    if (!isLocked) {
      setIsSelected(!isSelected);
      if (videoRef.current && !isSelected) {
        videoRef.current.play();
      }
    }
  };

  return (
    <BentoTilt className="vault-item group">
      <div
        ref={itemRef}
        className={`relative h-64 w-full cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-500 ${
          isSelected 
            ? `border-${rarity === 'legendary' ? 'yellow' : rarity === 'epic' ? 'purple' : rarity === 'rare' ? 'blue' : 'gray'}-400 shadow-lg shadow-${rarity === 'legendary' ? 'yellow' : rarity === 'epic' ? 'purple' : rarity === 'rare' ? 'blue' : 'gray'}-400/30` 
            : 'border-white/20 hover:border-white/40'
        } ${isLocked ? 'opacity-60' : ''}`}
        onClick={handleItemClick}
      >
        {/* Background Video/Image */}
        {video ? (
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
        )}

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${rarityColors[rarity]} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Locked Overlay */}
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full border-2 border-white/30 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <p className="text-sm font-general text-white/80">Locked</p>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className={`vault-badge bg-gradient-to-r ${rarityColors[rarity]}`}>
              {rarity}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(rarity === 'legendary' ? 5 : rarity === 'epic' ? 4 : rarity === 'rare' ? 3 : 2)].map((_, i) => (
                <TiStar key={i} className="text-yellow-300 text-xs" />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-general uppercase tracking-wider text-white/60">
                {category}
              </span>
              <div className="h-1 flex-1 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
            </div>
            
            <h3 className="text-lg font-zentry font-bold text-white">{title}</h3>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-circular-web text-blue-100/80">
                Value: {value}
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

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-general text-sm uppercase tracking-wider transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-yellow-300 to-orange-400 text-black shadow-lg'
              : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const StatsPanel = ({ totalItems, selectedItems, totalValue }) => {
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

  return (
    <div ref={statsRef} className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10 backdrop-blur-sm">
          <div className="text-3xl font-zentry font-bold text-white mb-2">{totalItems}</div>
          <div className="text-sm font-general uppercase tracking-wider text-white/60">Total Items</div>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-white/10 backdrop-blur-sm">
          <div className="text-3xl font-zentry font-bold text-white mb-2">{selectedItems}</div>
          <div className="text-sm font-general uppercase tracking-wider text-white/60">Selected</div>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-white/10 backdrop-blur-sm">
          <div className="text-3xl font-zentry font-bold text-white mb-2">{totalValue}</div>
          <div className="text-sm font-general uppercase tracking-wider text-white/60">Total Value</div>
        </div>
      </div>
    </div>
  );
};

const Vault = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItems, setSelectedItems] = useState([]);
  const sectionRef = useRef(null);

  const categories = ['All', 'Weapons', 'Armor', 'Artifacts', 'Collectibles'];

  const vaultItems = [
    {
      title: "Crimson Blade",
      rarity: "legendary",
      category: "Weapons",
      video: "videos/feature-1.mp4",
      value: "2,500 ZEN",
    },
    {
      title: "Mystic Scroll",
      rarity: "epic",
      category: "Artifacts",
      image: "img/gallery-1.webp",
      value: "1,200 ZEN",
    },
    {
      title: "Guardian Shield",
      rarity: "rare",
      category: "Armor",
      video: "videos/feature-2.mp4",
      value: "800 ZEN",
    },
    {
      title: "Ancient Rune",
      rarity: "legendary",
      category: "Collectibles",
      image: "img/gallery-2.webp",
      value: "3,000 ZEN",
      isLocked: true,
    },
    {
      title: "Storm Gauntlets",
      rarity: "epic",
      category: "Armor",
      video: "videos/feature-3.mp4",
      value: "1,500 ZEN",
    },
    {
      title: "Phoenix Feather",
      rarity: "rare",
      category: "Artifacts",
      image: "img/gallery-3.webp",
      value: "600 ZEN",
    },
    {
      title: "Void Essence",
      rarity: "legendary",
      category: "Collectibles",
      video: "videos/feature-4.mp4",
      value: "4,000 ZEN",
    },
    {
      title: "Silver Dagger",
      rarity: "common",
      category: "Weapons",
      image: "img/gallery-4.webp",
      value: "200 ZEN",
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? vaultItems 
    : vaultItems.filter(item => item.category === activeCategory);

  useGSAP(() => {
    // Floating background elements
    gsap.to(".vault-particle", {
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

  return (
    <section 
      id="vault" 
      ref={sectionRef}
      className="relative min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="vault-particle absolute w-2 h-2 bg-yellow-400/20 rounded-full"
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
            Digital Vault
          </div>
          
          <AnimatedTitle
            title="Y<b>o</b>ur Digit<b>a</b>l Tr<b>e</b>asure"
            containerClass="mb-8"
          />
          
          <p className="max-w-2xl mx-auto text-lg font-circular-web text-blue-100/80 leading-relaxed">
            Secure, trade, and showcase your most valuable digital assets. 
            Your collection awaits in the ultimate gaming vault.
          </p>
        </div>

        {/* Stats Panel */}
        <StatsPanel 
          totalItems={vaultItems.length}
          selectedItems={selectedItems.length}
          totalValue="12.8K ZEN"
        />

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Vault Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <VaultItem 
              key={`${item.title}-${activeCategory}`} 
              {...item} 
              index={index}
            />
          ))}
        </div>

        {/* Action Bar */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl border border-white/20 bg-gradient-to-r from-gray-900/50 to-black/50 px-8 py-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <TiGift className="text-2xl text-yellow-300" />
              <span className="text-lg font-zentry font-bold text-white">Manage Collection</span>
            </div>
            
            <div className="h-6 w-px bg-white/20" />
            
            <div className="flex gap-3">
              <button className="rounded-full bg-blue-500 px-6 py-2 font-general text-sm font-bold text-white transition-all duration-300 hover:bg-blue-600">
                Trade
              </button>
              <button className="rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 px-6 py-2 font-general text-sm font-bold text-black transition-all duration-300 hover:from-yellow-400 hover:to-orange-500">
                Showcase
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vault;