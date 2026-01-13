import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls, Environment, Float, Sparkles } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const isTablet = useMediaQuery({ minWidth: 854, maxWidth: 1024 });

  // Adjusted positioning to give the text more breathing room
  const astronautScale = isMobile ? 0.0032 : isTablet ? 0.005 : 0.0055;
  
  // Model positions:
  // Mobile: Moved lower to keep text clear
  // Desktop: Moved further right (x: 2.8) to balance the layout
  const astronautPosition = isMobile 
    ? [0, -1.8, 0] 
    : isTablet 
    ? [1.2, -0.5, 0] 
    : [2.8, -1, 0]; 

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[#030412]"
      style={{ userSelect: "none" }}
    >
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParallaxBackground />
      </div>

      {/* 2. TEXT LAYER - Fixed High Position */}
      {/* Using absolute positioning to force it higher up the page */}
      <div className="absolute top-[12%] md:top-[18%] left-0 w-full z-20 px-6 md:px-12">
         <div className="container mx-auto">
            <HeroText />
         </div>
      </div>

      {/* 3. 3D CANVAS LAYER */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Canvas 
            className="w-full h-full"
            camera={{ position: [0, 0, 5], fov: 40 }} // Slightly tighter FOV for less distortion
            gl={{ preserveDrawingBuffer: true, antialias: true }}
        >
          <Suspense fallback={<Loader />}>
            
            {/* --- LIGHTING (Atmospheric Deep Space) --- */}
            {/* Key Light (White/Warm) */}
            <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
            
            {/* Rim Light (Bright Cyan) - Highlights the edges */}
            <spotLight position={[-10, 0, -10]} angle={0.5} intensity={5} color="#06b6d4" />
            
            {/* Fill Light (Deep Purple) - Fills shadows */}
            <pointLight position={[10, -10, -10]} intensity={2} color="#7c3aed" />
            
            {/* Global Ambience */}
            <ambientLight intensity={0.2} />
            <Environment files={"/env.hdr"} background={false} />

            {/* --- THE MODEL --- */}
            <Float 
                speed={2.5} 
                rotationIntensity={1.5} 
                floatIntensity={2} 
                floatingRange={[-0.2, 0.2]}
            >
              <Astronaut
                scale={astronautScale}
                position={astronautPosition}
                // Initial rotation to face the text slightly
                rotation={[0, -0.4, 0]} 
              />
            </Float>
            
            {/* Depth Particles */}
            <Sparkles count={80} scale={6} size={3} speed={0.4} opacity={0.6} color="#ffffff" />

            {/* --- CONTROLS ("Goofy" & Unrestricted) --- */}
            {/* enableZoom={false} preserves page scrolling 
                BUT enableRotate is totally free (no min/max limits) */}
            {!isMobile && (
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    enableRotate={true}
                    rotateSpeed={0.8}
                    autoRotate={true} // Adds a slow spin when idle
                    autoRotateSpeed={0.5}
                />
            )}
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;