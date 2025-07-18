"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

const Index = () => {
  return (
    <Canvas style={{ backgroundColor: "black"}}>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
};

export default Index;
