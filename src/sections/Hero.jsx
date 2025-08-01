import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      id="home"
      className="flex items-start mb-[150px] justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
      style={{ userSelect: "none" }}
    >
      <HeroText />
      <ParallaxBackground />

      <figure
        className="absolute top-15 right-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas>
          {/* Lights */}

          {/* 3D Astronaut Model */}
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} />

            {/* Environment lighting for realistic PBR rendering */}
            <Environment files={"/env.hdr"} background={false} />
            <Float>
              <Astronaut
                scale={isMobile && 0.004}
                position={isMobile && [0, -0.69, 0]}
              />
            </Float>
            {/* Controls to rotate only (no zoom) */}
            {!isMobile && <OrbitControls enableZoom={false} />}
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.06,
      delta
    );
  });
}

export default Hero;
