import { useThree } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import {
    SRGBColorSpace,
    TextureLoader,
    Vector3,
    WebGLCubeRenderTarget,
  } from "three";
import Sun from './Sun';

interface BackgroundSceneProps{
    lightDirection:Vector3
}
const BackgroundScene = ({lightDirection}: BackgroundSceneProps) => {
    const [cubeTexture, setCubeTexture] = useState(null)

    const {gl, scene} = useThree()

    useEffect(() => {
        const loader = new TextureLoader()
        loader.load("/images/earth/starmap_g4k.jpg", (texture)=>{
            texture.colorSpace = SRGBColorSpace
            const cubeRenderTarget = new WebGLCubeRenderTarget(texture.image.height)
            cubeRenderTarget.fromEquirectangularTexture(gl, texture)
            setCubeTexture(cubeRenderTarget.texture as any)
        })
    }, [gl])

    useEffect(()=>{
        if(cubeTexture) scene.background = cubeTexture
    }, [cubeTexture])
  return (
    <>
        <Sun position={lightDirection.clone().multiplyScalar(10)} />
    </>
  )
}

export default BackgroundScene
