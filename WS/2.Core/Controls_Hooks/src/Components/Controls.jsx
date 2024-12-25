import { Environment, OrbitControls , PivotControls, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Lighthouse } from "./Lighthouse";



function Controls() {
  return (
    <>
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
        {/* <OrbitControls 
        enableZoom={false}
        rotateSpeed={0.5}
        /> */}

        {/* <OrbitControls
        enablePan={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} minAzimuthAngle={-Math.PI/2} maxAzimuthAngle={Math.PI/2} minDistance={3} maxDistance={10}
        /> */}


       {/* <PresentationControls
  enabled={true} // the controls can be disabled by setting this to false
  global={false} // Spin globally or by dragging the model
  cursor={true} // Whether to toggle cursor style on drag
  snap={0.7} // Snap-back to center (can also be a spring config)
  speed={1} // Speed factor
  zoom={1} // Zoom factor when half the polar-max is reached
  rotation={[0, 0, 0]} // Default rotation
  polar={[0, Math.PI / 2]} // Vertical limits
  azimuth={[-Infinity, Infinity]} // Horizontal limits
  config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
>        
</PresentationControls> */}

<PivotControls>

<Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />

</PivotControls>

        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default Controls;
