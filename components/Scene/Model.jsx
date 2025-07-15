import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

const Model = () => {
  const mesh = useRef();
  const { nodes } = useGLTF('/medias/torrus.glb')
  const { viewport } = useThree()

  useFrame(() => {
    mesh.current.rotation.x += 0.002
  })

  // 11:47

  return (
    <group scale={viewport.width / 3.5}>
      <Text fontSize={0.5} font="fonts/PPNeueMontreal-Bold.otf" position={[0, 0, -0.5]}>
        hello world!
      </Text>
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial />
      </mesh>
    </group>
  )
}

export default Model