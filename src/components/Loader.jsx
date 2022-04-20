import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const Loader = () => {
  const { progress } = useProgress();
  const main = document.querySelector("main");
  useEffect(() => {
    if (progress > 80) {
      // show text content only after it's almost loaded
      main.style.display = "grid";
    }
  }, [progress]);
  return (
    <Html
      center
      style={{
        background: "white",
        fontSize: "50px",
        padding: "10px 18px",
      }}
    >
      {progress} % loaded
    </Html>
  );
};
