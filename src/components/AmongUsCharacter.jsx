import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

// Unfortunately, I couldn't figure out a way to change the color of the model
// when looping through the same model, and the solution that I found was just
// load a different model, (I know this is not scalable when there would be more
// colors) and just pass the model path and color as props, as simply sending
// the color, would override the colors with the last one

export const AmongUsCharacter = ({
  z,
  color = "red",
  modelPath = "/among-us-v1-transformed.glb",
  ...props
}) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF(modelPath);
  const { viewport, camera } = useThree();

  // making it constant for a more real space feeling
  const randomRotation = 0.001;

  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    // randomizing values in THREE js
    x: THREE.MathUtils.randFloatSpread(width), //if it's 6 it would return -3 to 3
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += randomRotation),
      (data.rY += randomRotation),
      (data.rZ += randomRotation)
    );
    ref.current.position.set((data.x += 0.008), (data.y += 0.008), z);
    if (data.y > height) {
      data.y = -height;
    }
    if (data.x > width) {
      data.x = -width;
    }
  });

  return (
    <group ref={ref} {...props}>
      <group rotation={[-1.71, -0.05, 0.34]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 140.11, -110.94]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[66.52, 72.94, 53.9]}
          >
            <mesh
              geometry={nodes.BackPack_Body_0.geometry}
              material={nodes.BackPack_Body_0.material}
              position={[0, -0.41, 0.48]}
              // Change color in a better way
              material-emissive={color}
            />
          </group>
          <group
            position={[0, 158.42, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[106.16, 100, 100]}
          >
            <mesh
              geometry={nodes.Body_Body_0.geometry}
              material={nodes.Body_Body_0.material}
              position={[0, -0.07, -0.15]}
            />
          </group>
          <group
            position={[202.36, 158.97, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Co2_Metal_0.geometry}
              material={nodes.Co2_Metal_0.material}
              position={[-1.23, 0.81, -0.36]}
            />
            <mesh
              geometry={nodes.Co2_Oxigeno_0.geometry}
              material={materials.Oxigeno}
              position={[-0.83, 0.25, -0.73]}
            />
          </group>
          <group
            position={[0, 139, 135.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[41.51, 58.34, 36.17]}
          >
            <mesh
              geometry={nodes.Visor_Visor_0.geometry}
              material={materials.Visor}
              position={[0, 0.36, 1.64]}
            />
          </group>
          <group
            position={[0, 139, 135.48]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[41.51, 58.34, 36.17]}
          >
            <mesh
              geometry={nodes.Visor_Metal_Metal_0.geometry}
              material={nodes.Visor_Metal_Metal_0.material}
              position={[0.11, 1.32, 1.57]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export const AmongUsCharacterWhite = ({ z, ...props }) => {
  return (
    <AmongUsCharacter modelPath="/white.glb" color="white" z={z} {...props} />
  );
};

export const AmongUsCharacterYellow = ({ z, ...props }) => {
  return (
    <AmongUsCharacter modelPath="/yellow.glb" color="yellow" z={z} {...props} />
  );
};

export const AmongUsCharacterPurple = ({ z, ...props }) => {
  return (
    <AmongUsCharacter modelPath="/purple.glb" color="blue" z={z} {...props} />
  );
};

useGLTF.preload("/among-us-v1-transformed.glb");
useGLTF.preload("/yellow.glb");
useGLTF.preload("/white.glb");
useGLTF.preload("/purple.glb");
