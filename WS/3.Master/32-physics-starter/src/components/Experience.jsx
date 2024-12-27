import { Grid, OrbitControls,PerspectiveCamera } from "@react-three/drei";
import { Player } from "./Player";
import { RigidBody } from "@react-three/rapier";
import { Gltf } from "@react-three/drei";
import { BallCollider,CuboidCollider } from "@react-three/rapier";
import { Playground } from "./Playground";

import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export const Experience = () => {
  const shadowCameraRef = useRef();
  useHelper(shadowCameraRef, THREE.CameraHelper);

  
  return (
    <>
      <directionalLight position={[-10, 10, 5]} intensity={0.4} castShadow >
      <PerspectiveCamera
          ref={shadowCameraRef}
          attach={"shadow-camera"}
          near={55}
          far={86}
          fov={80}
        />

        </directionalLight>
      <directionalLight position={[10, 10, 5]} intensity={0.2} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Player />

      {/* <RigidBody type="fixed" position-y={-0.251} name="ground" receiveShadow>
      <mesh position-y={-0.251} receiveShadow>
        <boxGeometry args={[20, 0.5, 20]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      </RigidBody> */}
<Playground/>

<RigidBody
        type="fixed"
        colliders={false}
        sensor
        name="space"
        position-y={-1}
      >
        <CuboidCollider args={[50, 0.5, 50]} />
      </RigidBody>





{/*  ball  */}
      {/* <RigidBody  colliders={false} position-y={3} position-x={3} name="ground" gravityScale={0.2} restitution={1.2} receiveShadow>
        <Gltf src="/models/ball.glb" castShadow/>
        <BallCollider args={[1]} />
      </RigidBody> */}

      <Grid
        sectionSize={3}
        sectionColor={"white"}
        sectionThickness={1}
        cellSize={1}
        cellColor={"#ececec"}
        cellThickness={0.6}
        infiniteGrid
        fadeDistance={100}
        fadeStrength={5}
      />
    </>
  );
};
