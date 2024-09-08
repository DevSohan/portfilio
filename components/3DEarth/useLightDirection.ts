import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import { useSpring } from "framer-motion";

const initialSunRotation = new Vector3(1, 0, 0).applyAxisAngle(
  new Vector3(0, 0, 1),
  Math.PI * (13 / 180)
);


/**
 * A hook that returns a Vector3 representing the direction of the light source.
 *
 * It uses Leva to expose a control for the sun rotation, and uses a spring to animate the rotation.
 * The rotation is based on the 'sunRotation' control, which is the rotation around the Y axis.
 * The rotation is expressed in degrees.
 *
 * It also exposes an 'autoRotate' control, which is a boolean that determines if the sun rotates automatically.
 * If true, the sun rotates at a constant speed.
 *
 * The hook returns the current light direction as a Vector3.
 *
 * @returns The current light direction as a Vector3.
 */
export const useLightDirection = () => {
  // The spring that animates the sun rotation
  const sunRotationSpring = useSpring(0, { velocity: 1, bounce: 0 });

  // The state that holds the current light direction
  const [lightDirection, setLightDirection] = useState<Vector3>(
    initialSunRotation.clone()
  );

  // The Leva controls for the sun rotation and auto rotate
  const [config, setControls]: any = useControls(() => ({
    sunRotation: {
      label: "Sun rotation",
      value: 0,
      min: 0,
      max: 360,
      step: 0.1,
    },
    autoRotate: {
      label: "Auto rotate",
      value: false,
    },
  }));

  // Animate the sun rotation on each frame if the auto rotate control is true
  useFrame((_, delta) => {
    if (config.autoRotate) {
      setControls({ sunRotation: config.sunRotation + delta });
    }
  });

  // Update the spring when the sun rotation control changes
  useEffect(() => {
    sunRotationSpring.set(config.sunRotation);
  }, [config.sunRotation]);

  // Update the light direction when the spring changes
  useEffect(() => {
    const unsuscribeRotation = sunRotationSpring.on("change", (v) => {
      // Calculate the rotation matrix from the spring value
      const rotationAxis = new Vector3(0, 1, 0);
      const angle = Math.PI * (-v / 180);
      // Update the light direction by applying the rotation matrix
      setLightDirection(
        initialSunRotation.clone().applyAxisAngle(rotationAxis, angle)
      );
    });
    // Clean up the spring event listener when the component is unmounted
    return () => {
      unsuscribeRotation();
    };
  }, []);
  // Return the current light direction
  return lightDirection;
}
