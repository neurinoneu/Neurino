import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';

function App() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({
    hero: true,
    about: true,
    tokenomics: true,
    roadmap: true,
    nft: true,
    community: true
  });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const NavigationBar = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrollY > 50 
        ? 'bg-black/95 backdrop-blur-2xl border-b border-primary-gray/40 shadow-2xl' 
        : 'bg-black/80 backdrop-blur-xl border-b border-primary-gray/20 shadow-lg'
    }`}>
      {/* Enhanced glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-gray/5 via-transparent to-secondary-gray/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          
          {/* Enhanced Logo Section */}
          <button 
            onClick={() => window.location.href = '/'} 
            className="flex items-center space-x-3 cursor-pointer group bg-transparent border-none p-0"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-gray/30 to-secondary-gray/30 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-400"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-full p-1 border border-primary-gray/30 shadow-xl group-hover:border-accent-silver/50 transition-all duration-400">
                <img 
                  src={logo} 
                  alt="Neurino Logo" 
                  className="h-11 w-11 rounded-full object-cover border-2 border-primary-gray/20 shadow-lg hover:scale-105 transition-all duration-400 group-hover:border-accent-silver/60 group-hover:shadow-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black bg-gradient-to-r from-white via-primary-gray to-accent-silver bg-clip-text text-transparent group-hover:from-accent-silver group-hover:via-white group-hover:to-primary-gray transition-all duration-400">
                Neurino
              </span>
                             <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">
                 Neural Revolution
               </span>
             </div>
           </button>
          
          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { href: "#about", label: "About" },
              { href: "#tokenomics", label: "Tokenomics" },
              { href: "#roadmap", label: "Roadmap" },
              { href: "#nft", label: "NFTs" },
              { href: "#community", label: "Community" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="relative group px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium text-sm tracking-wide"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-gray/20 to-secondary-gray/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100 transform"></div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-gray to-accent-silver transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Enhanced Buy Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-gray/60 to-accent-silver/60 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-400"></div>
            <a 
              href="https://dexscreener.com/solana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative bg-gradient-to-r from-primary-gray to-accent-silver text-charcoal px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xl hover:shadow-2xl border border-white/10"
              onClick={(e) => {
                console.log('Buy button clicked!');
                e.preventDefault();
                window.open('https://dexscreener.com/solana', '_blank');
              }}
              style={{ pointerEvents: 'auto' }}
            >
              <span className="flex items-center gap-2">
                💎 BUY $NEU
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          
        </div>
      </div>
      
      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gray/40 to-transparent"></div>
    </nav>
  );

  const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-gray-900 to-charcoal"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-gray/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary-gray/15 via-transparent to-transparent"></div>
      </div>
      
      {/* Advanced Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div style={{
          backgroundImage: `linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} className="w-full h-full"></div>
      </div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary-gray/40 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-1 h-8 bg-secondary-gray/30 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 border border-primary-gray/30 rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-60 right-40 w-1 h-1 bg-accent-silver/50 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      
      {/* Enhanced Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-gray/[0.03] to-secondary-gray/[0.03] rounded-full blur-3xl animate-float" style={{animationDuration: '8s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary-gray/[0.04] to-accent-silver/[0.02] rounded-full blur-3xl animate-float" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} id="hero">
          
                     {/* Enhanced Logo Section */}
           <div className="relative group mb-8">
             {/* Multi-layered glow effect */}
             <div className="absolute -inset-6 bg-gradient-to-r from-primary-gray/10 via-accent-silver/10 to-secondary-gray/10 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition duration-700"></div>
             <div className="absolute -inset-3 bg-gradient-to-r from-primary-gray/15 via-white/5 to-secondary-gray/15 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
             
             {/* Premium logo container */}
             <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl rounded-full p-2 border border-primary-gray/20 shadow-2xl group-hover:shadow-primary-gray/20 transition-all duration-500">
               <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/50 rounded-full p-1 border border-accent-silver/10">
                 <img 
                   src={logo} 
                   alt="Neurino Logo" 
                   className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover mx-auto border-2 border-primary-gray/30 shadow-xl hover:scale-105 transition-all duration-700 group-hover:border-accent-silver/50 group-hover:shadow-2xl"
                 />
               </div>
               
               {/* Animated rings */}
               <div className="absolute inset-0 rounded-full border border-accent-silver/20 group-hover:border-accent-silver/40 transition-all duration-500 animate-pulse" style={{animationDuration: '3s'}}></div>
               <div className="absolute -inset-1 rounded-full border border-primary-gray/10 group-hover:border-primary-gray/20 transition-all duration-700 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
             </div>
             
             {/* Enhanced reflection */}
             <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gradient-to-b from-primary-gray/8 to-transparent rounded-full blur-lg"></div>
           </div>
          
                     {/* Enhanced Typography */}
           <div className="space-y-4 mb-8">
             <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
               <div className="relative">
                 <span className="bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text text-transparent drop-shadow-sm">
                   Powered by
                 </span>
                 <span className="bg-gradient-to-r from-primary-gray via-accent-silver to-primary-gray bg-clip-text text-transparent ml-4 animate-gradient-x">
                   neurons
                 </span>
               </div>
               <div className="relative mt-1">
                 <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                   united by
                 </span>
                 <span className="bg-gradient-to-r from-secondary-gray via-accent-silver to-secondary-gray bg-clip-text text-transparent ml-4 animate-gradient-x" style={{animationDelay: '1s'}}>
                   memes
                 </span>
               </div>
             </h1>
           </div>
           
           {/* Enhanced Subtitle */}
           <div className="max-w-4xl mx-auto mb-10">
             <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light mb-3">
               Where <span className="text-primary-gray font-medium">artificial intelligence</span> meets <span className="text-secondary-gray font-medium">community power</span>
             </p>
             <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
               🧠 Join the neural revolution and shape the future of AI-powered Web3
             </p>
           </div>
           
           {/* Enhanced Feature Cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
             <div className="bg-gradient-to-br from-primary-gray/5 to-secondary-gray/5 border border-primary-gray/10 rounded-xl p-3 backdrop-blur-sm hover:border-primary-gray/20 transition-all duration-300">
               <div className="text-xl mb-1">🤖</div>
               <p className="text-xs text-gray-300 font-medium">AI-Powered Ecosystem</p>
             </div>
             <div className="bg-gradient-to-br from-secondary-gray/5 to-accent-silver/5 border border-secondary-gray/10 rounded-xl p-3 backdrop-blur-sm hover:border-secondary-gray/20 transition-all duration-300">
               <div className="text-xl mb-1">🏛️</div>
               <p className="text-xs text-gray-300 font-medium">Decentralized Governance</p>
             </div>
             <div className="bg-gradient-to-br from-accent-silver/5 to-primary-gray/5 border border-accent-silver/10 rounded-xl p-3 backdrop-blur-sm hover:border-accent-silver/20 transition-all duration-300">
               <div className="text-xl mb-1">🚀</div>
               <p className="text-xs text-gray-300 font-medium">Meme-Driven Innovation</p>
             </div>
           </div>
           
           {/* Enhanced CTA Section */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto px-4">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-gray/50 to-accent-silver/50 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <button className="relative w-full sm:w-auto bg-gradient-to-r from-primary-gray to-accent-silver text-charcoal px-8 py-4 rounded-full font-bold text-lg opacity-50 cursor-not-allowed shadow-xl" disabled>
                <span className="flex items-center justify-center gap-2">
                  Join Community
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              <div className="absolute -top-2 -right-2 bg-accent-silver text-charcoal px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg">
                SOON
              </div>
            </div>
            
            <div className="relative group w-full sm:w-auto">
              <a
                href="/Neurino_Whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-secondary-gray text-secondary-gray px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary-gray/10 hover:border-secondary-gray hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span className="flex items-center justify-center gap-2">
                  📄 Whitepaper
                </span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative group cursor-pointer">
          <div className="w-8 h-12 border-2 border-primary-gray/60 rounded-full flex justify-center group-hover:border-primary-gray transition-colors duration-300">
            <div className="w-1.5 h-4 bg-gradient-to-b from-primary-gray to-secondary-gray rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 delay-300 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-primary-gray to-accent-silver bg-clip-text text-transparent">
                What is Neurino?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-gray to-accent-silver mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Neurino ($NEU) represents the fusion of artificial intelligence and decentralized community governance. 
                We're not just another token – we're building the infrastructure for the next generation of AI-powered Web3 applications.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our ecosystem combines the viral nature of meme culture with sophisticated neural network technology, 
                creating a unique platform where community decisions are enhanced by artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-gradient-to-r from-primary-gray/20 to-secondary-gray/20 border border-primary-gray/30 rounded-full px-4 py-2">
                  <span className="text-primary-gray font-semibold">AI-Powered</span>
                </div>
                <div className="bg-gradient-to-r from-secondary-gray/20 to-primary-gray/20 border border-secondary-gray/30 rounded-full px-4 py-2">
                  <span className="text-secondary-gray font-semibold">Community-Driven</span>
                </div>
                <div className="bg-gradient-to-r from-primary-gray/20 to-accent-silver/20 border border-accent-silver/30 rounded-full px-4 py-2">
                  <span className="text-accent-silver font-semibold">Meme-Powered</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-gray/10 to-secondary-gray/10 border border-primary-gray/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary-gray mb-2">2025</div>
                    <div className="text-sm text-gray-400">Launch Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-secondary-gray mb-2">0%</div>
                    <div className="text-sm text-gray-400">Transaction Tax</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary-gray mb-2">SOL</div>
                    <div className="text-sm text-gray-400">Blockchain</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-secondary-gray mb-2">24/7</div>
                    <div className="text-sm text-gray-400">AI Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Tokenomics = () => (
    <section id="tokenomics" className="py-24 px-4 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${isVisible.tokenomics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-secondary-gray to-primary-gray bg-clip-text text-transparent">
                Tokenomics
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-gray to-primary-gray mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Token Details */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary-gray/10 to-secondary-gray/10 border border-primary-gray/20 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-primary-gray flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-gray rounded-full flex items-center justify-center">
                    <span className="text-charcoal text-sm font-black">$</span>
                  </div>
                  Token Details
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Symbol', value: '$NEU' },
                    { label: 'Network', value: 'Solana' },
                    { label: 'Use Case', value: 'NFTs, Staking, Games' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-b-0">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Use Cases */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-secondary-gray/10 to-primary-gray/10 border border-secondary-gray/20 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-secondary-gray flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary-gray rounded-full flex items-center justify-center">
                    <span className="text-charcoal text-sm font-black">⚡</span>
                  </div>
                  Utility & Use Cases
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: '🎨', title: 'NFT Minting', desc: 'Create AI-generated NFTs with neural network algorithms' },
                    { icon: '🗳️', title: 'DAO Governance', desc: 'Vote on platform decisions and development proposals' },
                    { icon: '💎', title: 'Staking Rewards', desc: 'Earn passive income by staking your $NEU tokens' },
                    { icon: '🎮', title: 'Gaming Platform', desc: 'Use $NEU as currency in our upcoming neural games' },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Roadmap = () => (
    <section id="roadmap" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${isVisible.roadmap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-primary-gray to-accent-silver bg-clip-text text-transparent">
                Roadmap
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-gray to-accent-silver mx-auto mb-8"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-gray via-secondary-gray to-primary-gray hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  quarter: 'Q1 2025',
                  title: 'Foundation & Launch',
                  items: ['Token Launch on Solana', 'Community Building & Discord', 'DEX Listing (Raydium)', 'Website & Branding'],
                  color: 'primary-gray',
                  position: 'left'
                },
                {
                  quarter: 'Q2 2025',
                  title: 'NFT & Partnerships',
                  items: ['AI-Generated NFT Collection', 'Staking Platform Launch', 'Strategic Partnerships', 'Marketing Campaign'],
                  color: 'secondary-gray',
                  position: 'right'
                },
                {
                  quarter: 'Q3 2025',
                  title: 'DAO & Expansion',
                  items: ['DAO Governance Launch', 'Mobile App Development', 'CEX Listings (Tier 1)', 'AI Integration Beta'],
                  color: 'primary-gray',
                  position: 'left'
                },
                {
                  quarter: 'Q4 2025',
                  title: 'Neural Gaming',
                  items: ['Gaming Platform Launch', 'Advanced AI Features', 'Global Community Events', 'Cross-Chain Bridge'],
                  color: 'primary-gray',
                  position: 'right'
                }
              ].map((phase, index) => (
                <div key={index} className={`relative ${phase.position === 'right' ? 'lg:ml-1/2 lg:pl-12' : 'lg:mr-1/2 lg:pr-12'}`}>
                  {/* Timeline Node */}
                  <div className={`absolute left-1/2 lg:${phase.position === 'right' ? 'left-0' : 'right-0'} transform ${phase.position === 'right' ? 'lg:translate-x-0' : 'lg:-translate-x-full'} -translate-x-1/2 lg:translate-y-0 translate-y-0 w-4 h-4 bg-${phase.color} rounded-full border-4 border-charcoal z-10 hidden lg:block`}></div>
                  
                  <div className={`bg-gradient-to-br from-${phase.color}/10 to-${phase.color === 'primary-gray' ? 'secondary-gray' : 'primary-gray'}/10 border border-${phase.color}/20 rounded-2xl p-6 hover:scale-105 transition-transform duration-300`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-${phase.color} font-black text-xl`}>{phase.quarter}</span>
                      <div className={`flex-1 h-px bg-gradient-to-r from-${phase.color} to-transparent`}></div>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-${phase.color}`}>{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3 text-gray-300">
                          <div className={`w-2 h-2 bg-${phase.color} rounded-full`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const NFTSection = () => (
    <section id="nft" className="py-24 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${isVisible.nft ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-secondary-gray to-primary-gray bg-clip-text text-transparent">
                Neural NFT Collection
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-gray to-primary-gray mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each NFT represents a unique neural pathway, algorithmically generated by our AI systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Neural Genesis #001', rarity: 'Legendary', traits: '7 Unique Traits' },
              { name: 'Brain Surge #002', rarity: 'Epic', traits: '5 Unique Traits' },
              { name: 'Meme Neural #003', rarity: 'Rare', traits: '4 Unique Traits' }
            ].map((nft, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-primary-gray/10 to-secondary-gray/10 border border-primary-gray/20 rounded-2xl p-4 hover:scale-105 transition-all duration-300 group-hover:border-secondary-gray/50">
                  {/* NFT Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-primary-gray/20 to-secondary-gray/20 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    {/* Geometric pattern background */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-2 left-2 w-8 h-8 border-2 border-primary-gray rounded-full"></div>
                      <div className="absolute top-8 right-4 w-6 h-6 border-2 border-secondary-gray rotate-45"></div>
                      <div className="absolute bottom-4 left-6 w-4 h-4 bg-accent-silver rounded-full"></div>
                      <div className="absolute bottom-8 right-2 w-10 h-2 bg-primary-gray rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-secondary-gray rounded-full"></div>
                    </div>
                    {/* Main icon */}
                    <div className="relative z-10 text-6xl">
                      {index === 0 && '🧠'}
                      {index === 1 && '⚡'}
                      {index === 2 && '🎨'}
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-gray mb-2">{nft.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{nft.rarity}</span>
                    <span className="text-sm text-secondary-gray">{nft.traits}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const Community = () => (
    <section id="community" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible.community ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary-gray to-accent-silver bg-clip-text text-transparent">
              Join the Neural Revolution
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-gray to-accent-silver mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Connect with thousands of neural pioneers building the future of AI-powered Web3.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            {[
              { 
                name: 'Discord', 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                ), 
                color: 'primary-gray' 
              },
              { 
                name: 'Twitter', 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                ), 
                color: 'secondary-gray' 
              },
              { 
                name: 'Telegram', 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                ), 
                color: 'primary-gray' 
              },
              { 
                name: 'Instagram', 
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                  </svg>
                ), 
                color: 'primary-gray' 
              }
            ].map((social, index) => (
              <div key={index} className="relative group">
                {social.name === 'Twitter' ? (
                  <a
                    href="https://x.com/Neurino_sol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-gradient-to-br from-${social.color}/20 to-${social.color === 'primary-gray' ? 'secondary-gray' : 'primary-gray'}/20 border border-${social.color}/30 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 text-${social.color} hover:border-${social.color}/60 hover:bg-gradient-to-br hover:from-${social.color}/30 hover:to-${social.color === 'primary-gray' ? 'secondary-gray' : 'primary-gray'}/30`}
                  >
                    <span className="hover:scale-110 transition-transform duration-300">{social.icon}</span>
                  </a>
                ) : (
                  <>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${social.color}/20 to-${social.color === 'primary-gray' ? 'secondary-gray' : 'primary-gray'}/20 border border-${social.color}/30 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed text-${social.color}`}
                    >
                      <span className="opacity-70">{social.icon}</span>
                    </div>
                    <div className={`absolute -top-2 -right-2 bg-${social.color} text-charcoal px-2 py-1 rounded-full text-[10px] font-medium tracking-wide`}>
                      COMING SOON
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary-gray/10 to-accent-silver/10 border border-primary-gray/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary-gray">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest news, updates, and exclusive content delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-charcoal border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:border-primary-gray focus:outline-none"
                disabled
              />
              <div className="relative group">
                <button 
                  className="bg-gradient-to-r from-primary-gray to-accent-silver text-charcoal px-6 py-3 rounded-full font-semibold opacity-50 cursor-not-allowed"
                  disabled
                >
                  Subscribe
                </button>
                <div className="absolute -top-2 -right-2 bg-accent-silver text-charcoal px-2 py-1 rounded-full text-xs font-medium">
                  COMING SOON
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="py-12 px-4 bg-gradient-to-t from-black/40 to-transparent border-t border-primary-gray/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-gray/50 to-secondary-gray/50 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <img 
                src={logo} 
                alt="Neurino Logo" 
                className="relative w-12 h-12 rounded-full object-cover border-2 border-primary-gray/20 shadow-lg hover:scale-110 transition-all duration-300 hover:border-accent-silver/30"
              />
            </div>
            <div>
              <h3 className="font-bold text-primary-gray text-xl">Neurino</h3>
              <p className="text-sm text-gray-400">Where AI meets memes</p>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2025 Neurino. All rights reserved. | 
            <span className="text-primary-gray"> Powered by neural networks</span>
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="bg-charcoal text-white min-h-screen">
      <NavigationBar />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <NFTSection />
      <Community />
      <Footer />
    </div>
  );
}

export default App;

