'use client';

import { Canvas } from "@react-three/fiber"
import Module from "./Module";

const Scene = () => {
  return (
    <Canvas>
      <Module />
    </Canvas>
  )
}

export default Scene