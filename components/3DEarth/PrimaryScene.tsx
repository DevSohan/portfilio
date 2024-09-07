import { createPortal, useFrame, useThree } from '@react-three/fiber'
import React, { PropsWithChildren, useEffect, useMemo, useRef } from 'react'
import { useLightDirection } from './useLightDirection'
import { RGBAFormat, Scene, type PerspectiveCamera as PerspectiveCameraType} from 'three'
import { OrbitControls, PerspectiveCamera, useFBO } from '@react-three/drei'
import BackgroundScene from './BackgroundScene'
import { EarthScene } from './EarthScene'

export interface PrimarySceneProps {}

const PrimaryScene = ({children}:PropsWithChildren<PrimarySceneProps>) => {
    const {scene} = useThree()
    const lightDirection = useLightDirection()

    const cam = useRef<PerspectiveCameraType | null>(null)
    const target = useFBO({
        samples:8,
        stencilBuffer:false,
        format:RGBAFormat
    })

    const backgroundScene = useMemo(()=>{
        const bgScene = new Scene()
        return bgScene
    }, [])

    useFrame((state) => {
        if(!cam.current) return

        cam.current.rotation.copy(state.camera.rotation)

        state.gl.setRenderTarget(target)
        state.gl.render(backgroundScene, cam.current)
        state.gl.setRenderTarget(null)
    })

    useEffect(()=>{
        scene.background = target.texture
    }, [target.texture])

  return (
    <>
        <PerspectiveCamera fov={40} ref={cam} />
        {
            createPortal(
                <BackgroundScene lightDirection={lightDirection} />,
                backgroundScene as any
            )
        }
        {children}
        <EarthScene lightDirection={lightDirection} />
        <OrbitControls  enableZoom={false}/>
        <ambientLight />
    </>
  )
}

export default PrimaryScene
