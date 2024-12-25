import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lighthouse } from "./Lighthouse";



function Controls() {
  return (
    <>
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        <OrbitControls />
        <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default Controls;
