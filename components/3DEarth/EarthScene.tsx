import { Sphere } from "@react-three/drei";
import { Mesh, SRGBColorSpace, ShaderMaterial, TextureLoader, Vector3 } from "three";
import { useFrame, useLoader } from "@react-three/fiber";

import { earthFragmentShader, earthVertexShader } from "./EarthShraders";
import { useEffect, useRef } from "react";
import { Atmosphere } from "./Atmosphere"

export const lightDirectionDELETE = new Vector3(1, 0, 0).applyAxisAngle(
  new Vector3(0, 0, 1),
  Math.PI * (13 / 180)
);

const verteces = Math.pow(2, 9);

export interface EarthProps {
  lightDirection: Vector3;
}

export const EarthScene = ({ lightDirection }: EarthProps) => {

  const [earthDayTexture, nightTexture, cloudTexture] = useLoader(
    TextureLoader,
    [
      "/images/earth/8k_earth_daymap.jpg",
      "/images/earth/8k_earth_nightmap.jpg",
      "/images/earth/8k_earth_clouds.jpg",
    ]
  );

  earthDayTexture.colorSpace =
    nightTexture.colorSpace =
    cloudTexture.colorSpace =
      SRGBColorSpace;

  const uniformsRef = useRef({
    dayMap: { value: earthDayTexture },
    nightMap: { value: nightTexture },
    cloudMap: { value: cloudTexture },
    uTime: { value: 0 },
    lightDirection: { value: lightDirection.clone() },
  });
  const earthRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    uniformsRef.current.uTime.value += delta;
  })

  useEffect(() => {
    uniformsRef.current.lightDirection.value.copy(lightDirection);
  }, [lightDirection])

  return (
    <Sphere ref={earthRef} args={[2, verteces, verteces]}>
      <shaderMaterial
        vertexShader={earthVertexShader}
        fragmentShader={earthFragmentShader}
        uniforms={uniformsRef.current}
      />
      <Atmosphere lightDirection={lightDirection} />
    </Sphere>
  );
};
