import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./Loader";
import {
  AmongUsCharacter,
  AmongUsCharacterPurple,
  AmongUsCharacterWhite,
  AmongUsCharacterYellow,
} from "./AmongUsCharacter";
import { Star } from "./Star";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

export const AmongUs = ({ AmongUsCount = 100, depth = 30 }) => {
  return (
    <Canvas className="bg-[#0d0d0d] fixed top-0 left-0">
      {/* <color attach="background" args={["#0d0d0d"]}/> */}
      {/* <ambientLight intensity={0.2} /> */}
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={<Loader />}>
        <Environment preset="sunset" />
        {Array.from({ length: AmongUsCount }, (_, i) => {
          if (i % 3 === 0) {
            return <AmongUsCharacterYellow key={i} scale={0.01} z={-i} />;
          }
          if (i % 5 === 0) {
            return <AmongUsCharacterPurple key={i} scale={0.01} z={-i} />;
          }
          if (i % 2 === 0) {
            return <AmongUsCharacterWhite key={i} scale={0.01} z={-i} />;
          }
          return <AmongUsCharacter key={i} scale={0.01} z={-i} />;
        })}
        <EffectComposer>
          <DepthOfField
            target={[0, 0, depth]}
            focalLength={0.5}
            bokehScale={0.3}
          />
        </EffectComposer>
      </Suspense>
      {Array.from({ length: 1000 }, (_, i) => {
        return <Star key={i} />;
      })}
    </Canvas>
  );
};

export default AmongUs;
