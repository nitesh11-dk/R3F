import {
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
  Grid,
  useHelper,
  Stats,
  SpotLight,
  SoftShadows,
  BakeShadows,
  ContactShadows,
  AccumulativeShadows,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { Leva } from "leva";

function Box() {
  const ref = useRef();
  useHelper(ref, THREE.BoxHelper, "red");

  const { position, color, opacity, transparent } = useControls({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    color: {
      value: "red",
      label: "Color",
      options: [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
        "gray",
        "black",
        "white",
      ],
    },
    opacity: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    transparent: true,
  });

  return (
    <>
      <mesh ref={ref} position={[position.x, position.y, position.z]}>
        <boxGeometry />
        <meshBasicMaterial
          color={color}
          opacity={opacity}
          transparent={transparent}
        />
      </mesh>
    </>
  );
}

// const Intro = () => {
//   return (
//     <div className="h-screen w-screen bg-zinc-900">
//       {/* Toggle  Leva  */}
//       <Leva hidden={false} />
//       {/*  Shadows - shadowsmapping */}
//       <Canvas shadows camera={{ position: [0, 3, 3] }}>
//         <OrbitControls />
//         <ambientLight intensity={0.5} />
//         {/* <directionalLight
//           castShadow
//           position={[5, 5, 5]}
//           intensity={0.5}
//           shadow-camera-far={50}
//           shadow-camera-top={10}
//           shadow-camera-right={10}
//           shadow-camera-bottom={-10}
//           shadow-camera-left={-10}
//           shadow-mapSize={[1024, 1024]}
//         /> */}
//         {/*  or  */}
//         <directionalLight
//           castShadow
//           position={[5, 5, 5]}
//           intensity={0.5}
//     >   <orthographicCamera attach="shadow-camera" args={[-10,10,10,-10]} />
//     </directionalLight>
//         <directionalLight
//           castShadow
//           position={[-5, 5, 5]}
//           intensity={0.5}
//           color="red"
//         />

//         <group position={[0, 1, 0]}>
//           <mesh castShadow scale={0.5} position={[-1, 1, 1]}>
//             <sphereGeometry />
//             <meshStandardMaterial color="white" />
//           </mesh>

//           <mesh castShadow receiveShadow rotation-y={Math.PI / 4}>
//             <boxGeometry />
//             <meshStandardMaterial color="white" />
//           </mesh>

//           <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-0.5}>
//             <planeGeometry args={[5, 5]} />
//             <meshStandardMaterial color="white" />
//           </mesh>
//         </group>

//         <group position={[10, 1, 0]}>
//           <mesh castShadow scale={0.5} position={[-1, 1, 1]}>
//             <sphereGeometry />
//             <meshStandardMaterial color="white" />
//           </mesh>

//           <mesh castShadow receiveShadow rotation-y={Math.PI / 4}>
//             <boxGeometry />
//             <meshStandardMaterial color="white" />
//           </mesh>

//           <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-0.5}>
//             <planeGeometry args={[5, 5]} />
//             <meshStandardMaterial color="white" />
//           </mesh>

//         </group>

// {/*  SHADOWS  */}

//         {/*  shadows show hote hai camera ke rnage me agar rehenge to the  only we see the shadow   */}
//         {/*   to calutation of shadow shadow mapping is done , but for this 3js issuse camera   */}
//         {/* to see the shadow we need to use the shadow map size   on the light as shadow-camera-far , shadow-camera-near , shadow-camera-top , shadow-camera-right , shadow-camera-bottom , shadow-camera-left  */}
//         {/* <directionalLight
//           castShadow
//           position={[5, 5, 5]}
//           intensity={0.5}
//           shadow-camera-far={50}
//           shadow-camera-top={10}
//           shadow-camera-right={10}
//           shadow-camera-bottom={-10}
//           shadow-camera-left={-10}
//           shadow-mapSize={[1024, 1024]}
//         /> */}
//         {/* ? or   */}
// {/*
//         <directionalLight
//           castShadow
//           position={[5, 5, 5]}
//           intensity={0.5}
//     >
//          <orthographicCamera attach="shadow-camera" args={[-10,10,10,-10]} />

//     </directionalLight> */}
//       </Canvas>
//     </div>
//   );
// };

const Intro = () => {
  const { cubeInAir } = useControls({
    cubeInAir: false,
  });

  return (
    <div className="h-screen w-screen bg-zinc-900">
      <Leva hidden={false} />
      {/* The ContactShadows component needs to be moved inside the Canvas and positioned correctly */}
      {/* The current ContactShadows settings are: */}
      {/* - Too high position-y (0.51) */}
      {/* - Resolution might be too low */}
      {/* - Scale might be too large */}
      {/* Let's adjust these in the Canvas component */}

      {/* Move the ContactShadows inside Canvas and use these settings:
            - position-y={-1.4} (below the objects)
            - opacity={0.75} (more subtle)
            - scale={10} (matches scene scale)
            - blur={2.5} (softer shadows)
            - resolution={1024} (higher quality)
        */}

      <Canvas camera={{ position: [0, 3, 3] }}>
        {/*  Soft Shadows  enhances shadows  */}
        {/* <SoftShadows />  */}
        {/*  Bake Shadows  */}
        {/* <BakeShadows /> */}
        {/* <ContactShadows
          position-y={-0.1}
          opacity={1}
          color="red"
          scale={10}
          blur={1}
          resolution={512}
          frames={1}
        /> */}
 <AccumulativeShadows
          temporal
          frames={35}
          alphaTest={0.85}
          scale={5}
          position={[0, -0.499, 0]}
          color="#EFBD4E"
        >
          <RandomizedLight
            amount={4}
            radius={9}
            intensity={0.55}
            ambient={0.25}
            position={[5, 5, -10]}
          />
          <RandomizedLight
            amount={4}
            radius={5}
            intensity={0.25}
            ambient={0.55}
            position={[-5, 5, -9]}
          />
        </AccumulativeShadows>

        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[5, 5, 5]} intensity={0.5} />
        <directionalLight
          castShadow
          position={[-5, 5, 5]}
          intensity={0.5}
          color="red"
        />

        <group position={[0, 1, 0]}>
          <mesh castShadow scale={0.5} position={[-1, 1, 1]}>
            <sphereGeometry />
            <meshStandardMaterial color="white" />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            position-y={cubeInAir ? 1 : 0}
            rotation-y={Math.PI / 4}
          >
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>

          <mesh receiveShadow rotation-x={-Math.PI / 2} position-y={-0.5}>
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial  />
          </mesh>
        </group>

        {/*  SOft Shadows */}

        {/*  shadow are calutalted at every framer , so some objects ar there who are fices at postion and the shadow is also fixed so what we do <BakeShadows /> in canvas to make the shadow static and  it will we not render at every frame  */}
      </Canvas>
    </div>
  );
};

export default Intro;
