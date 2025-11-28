import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function SketchfabRobot() {
  const robotRef = useRef()
  const { scene } = useGLTF('/models/robot.glb')
  
  // Clone the scene to avoid issues
  const clonedScene = scene.clone()
  
  // Auto-rotate and float animation
  useFrame((state) => {
    if (robotRef.current) {
      robotRef.current.rotation.y += 0.005
      robotRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <primitive 
      ref={robotRef}
      object={clonedScene}
      scale={2}
      position={[0, -1, 0]}
    />
  )
}

export function FloatingShapes() {
  const shape1 = useRef()
  const shape2 = useRef()
  const shape3 = useRef()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (shape1.current) {
      shape1.current.position.y = Math.sin(time) * 0.5
      shape1.current.rotation.x += 0.01
      shape1.current.rotation.y += 0.01
    }
    
    if (shape2.current) {
      shape2.current.position.y = Math.cos(time * 1.2) * 0.6
      shape2.current.rotation.x += 0.015
      shape2.current.rotation.z += 0.01
    }
    
    if (shape3.current) {
      shape3.current.position.y = Math.sin(time * 0.8) * 0.4
      shape3.current.rotation.y += 0.02
    }
  })

  return (
    <>
      {/* Floating Cube */}
      <mesh ref={shape1} position={[-3, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial 
          color="#00f0ff" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#00f0ff"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Floating Sphere */}
      <mesh ref={shape2} position={[3, 0, -1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial 
          color="#9d00ff" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#9d00ff"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Floating Torus */}
      <mesh ref={shape3} position={[0, 2, -2]}>
        <torusGeometry args={[0.4, 0.15, 16, 100]} />
        <meshStandardMaterial 
          color="#0080ff" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#0080ff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </>
  )
}

// Preload the model for better performance
useGLTF.preload('/models/robot.glb')
