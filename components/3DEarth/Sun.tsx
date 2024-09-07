import { MeshProps, useFrame } from '@react-three/fiber'
import React, { useState } from 'react'

const Sun = (props: MeshProps) => {

  return (
    <mesh {...props}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#fff" emissive="orange" emissiveIntensity={10} toneMapped={false} />
    </mesh>
  )
}

export default Sun
