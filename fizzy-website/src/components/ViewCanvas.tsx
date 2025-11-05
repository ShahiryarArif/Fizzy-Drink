"use client";

import { Canvas } from "@react-three/fiber";


export default function ViewCanvas() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      shadows
      dpr={[1, 1.5]} // Adjust pixel ratio for better quality on high-res screens
      gl={{ antialias: true }} // Enable antialiasing for smoother edges and avoid jagged lines
      camera={{ fov: 30 }} // Set field of view for the camera
    >
      <mesh rotation={[0.5, 0.5, 0]} position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <ambientLight intensity={2} />
      <spotLight position={[1, 1, 1]} intensity={3} />
    </Canvas>
  );
}