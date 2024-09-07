import { useFrame } from "@react-three/fiber";
import { useEffect, useState, useCallback } from "react";
import { Vector3 } from "three";
import { useSpring } from "framer-motion";

const initialSunRotation = new Vector3(1, 0, 0).applyAxisAngle(
    new Vector3(0, 0, 1),
    Math.PI * (13 / 180)
);

export const useLightDirection = () => {
    const sunRotationSpring = useSpring(0, { velocity: 50, bounce: 0 });
    const [lightDirection, setLightDirection] = useState<Vector3>(
      	initialSunRotation.clone()
    );
	let screenWidth = window.innerWidth;
    

    const [lastMouseX, setLastMouseX] = useState(0);


    const handleMouseMove = useCallback((event: MouseEvent) => {
		const deltaX = (event.clientX / screenWidth) * 360;
		sunRotationSpring.set(sunRotationSpring.get() + deltaX * 0.01);
		setLastMouseX(event.clientX);
    }, [lastMouseX]);


    useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
    }, [handleMouseMove]);


    useEffect(() => {
		const unsubscribeRotation = sunRotationSpring.on("change", (v) => {
			const rotationAxis = new Vector3(0, 1, 0);
			const angle = Math.PI * (-v / 180);
			setLightDirection(
			initialSunRotation.clone().applyAxisAngle(rotationAxis, angle)
			);
		});
		return () => {
			unsubscribeRotation();
		};
    }, []);

    return lightDirection;
}