import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect } from 'react'
import PrimaryScene from './PrimaryScene'
import { Html } from '@react-three/drei';
import { Effects } from './Effects';

const Earth = () => {
    return (
        <>
            <Canvas className='!h-[100vh]' camera={{ fov: 40, position: [8, 0, 8] }}>
                <Effects />
                <PrimaryScene />
            </Canvas>
        </>
    )
}

export default Earth
