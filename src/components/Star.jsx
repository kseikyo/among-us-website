import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Star = () => {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -500]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(width),
    y: THREE.MathUtils.randFloatSpread(height),
  });

  useFrame(() => {
    ref.current.position.set(data.x, (data.y += .125), -500);

    if (data.y > height / 2) {
      data.y = -height / 2;
    }
  });
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};
