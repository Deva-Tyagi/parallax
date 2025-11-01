// import React, { useState, useEffect, useRef } from 'react';
// import VillaJourney from './VillaJourney';
// import villaImg from '../image/villa.png';

// const VillaGateEffect = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [gateFinished, setGateFinished] = useState(false);
//   const containerRef = useRef(null);

//   const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const elementHeight = containerRef.current.offsetHeight;
//       const total = elementHeight - windowHeight;
//       const scrolled = -rect.top;

//       let progress = scrolled / total;
//       progress = Math.max(0, Math.min(1, progress));
//       setScrollProgress(progress);

//       if (progress >= 0.98 && !gateFinished) {
//         setGateFinished(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [gateFinished]);

//   const eased = easeInOutCubic(scrollProgress);
//   const scale = 1 + eased * 3;
//   const opacity = Math.max(0, 1 - eased * 1.3);

//   return (
//     <div ref={containerRef} className="relative w-full" style={{ height: '300vh' }}>
//       <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
//         {/* BACKGROUND: Only renders, but NO SCROLLTRIGGER until gateFinished */}
//         <div
//           style={{
//             position: 'absolute',
//             inset: 0,
//             pointerEvents: 'none', // Blocks interaction
//           }}
//         >
//           <VillaJourney isActive={gateFinished} />
//         </div>

//         {/* FOREGROUND: Gate Image */}
//         <div
//           style={{
//             position: 'absolute',
//             inset: 0,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             opacity,
//             transform: `scale(${scale})`,
//             transformOrigin: 'center center',
//             visibility: opacity === 0 ? 'hidden' : 'visible',
//             pointerEvents: opacity > 0.1 ? 'auto' : 'none',
//           }}
//         >
//           <div
//             style={{
//               backgroundImage: `url(${villaImg})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               width: '100vw',
//               height: '100vh',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VillaGateEffect;