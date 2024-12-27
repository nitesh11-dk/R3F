import { OrbitControls } from "@react-three/drei";
import { TeslaModel3 } from "./TeslaModel3";
import { Stage } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Background } from "./Background";
import { Lights } from "./Light";
export const Experience = () => {
  return (
    <>
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.72}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={15}
        minDistance={6}
      />
      <ambientLight intensity={0.4} />

      {/* <Stage intensity={0.4}  preset={"upfront"} environment="studio" >
      <TeslaModel3 scale={0.012} position-z={0.6} />
      </Stage> */}


          {/* <Environment preset="city" background/> */}


          {/* <Environment >
          <Background/>
</Environment> */}
<Environment frames={Infinity} resolution={512} blur={0.5} >
  <Lights />
</Environment>

      <TeslaModel3  scale={0.012} position-z={0.6} />



      <mesh position={[0, -0.76, 0]} rotation-x={-Math.PI / 2}>
  <planeGeometry args={[100, 100]} />
  <MeshReflectorMaterial
    color="#171720"
    resolution={1024}
    mixStrength={3}
    roughness={0.6}
  />
</mesh>
    </>
  );
};
