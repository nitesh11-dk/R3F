import {
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
  Grid,
  useHelper,
  Stats,
  SpotLight,
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


function PointLight() {
  const light = useRef();
  const { position, color, intensity, distance, decay } = useControls({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    intensity: {
      value: 10,
      min: 0,
      max: 100,
      step: 0.01,
    },
    distance: {
      value: 6,
      min: 0,
      max: 10,
      step: 0.01,
    },
    decay: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.01,
    },
  });
  return (
    <>
      <pointLight
        ref={light}
        intensity={intensity}
        position={[position.x, position.y, position.z]}
        color={color}
        distance={distance}
        decay={decay}
      />
    </>
  );
}

function SpotLightfn() {
  const light = useRef();
  useHelper(light, THREE.SpotLightHelper, "red");
const {color ,distance  , angle , anglePower ,intensity,attenuation} = useControls({
  color: 'blue',
  distance: {
    value: 6,
    min: 0,
    max: 10,
    step: 0.1
  },
  angle: {
    value: 0.5,
    min: 0,
    max: Math.PI/2,
    step: 0.01
  },
  anglePower: {
    value: 1,
    min: 0,
    max: 10,
    step: 0.1
  },
  intensity: {
    value: 10,
    min: 0,
    max: 100,
    step: 0.1
  },
  attenuation: {
    value: 1,
    min: 0,
    max: 10,
    step: 0.1
  }
})
  
  return (
    <>
      <SpotLight ref={light} position={[0, 3, 0]} color={color} distance={distance} angle={angle} anglePower={anglePower} intensity={intensity} attenuation={attenuation} />
    </>
  );
}

const Intro = () => {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      {/* Toggle  Leva  */}
      <Leva hidden={false} />

      <Canvas camera={{ position: [3, 3, 7] }}>
        <OrbitControls />

        <axesHelper args={[5]} />
        <Grid
          sectionSize={3}
          sectionColor={"red"}
          sectionThickness={0.5}
          cellSize={1}
          cellThickness={0.5}
          cellColor={"blue"}
          infiniteGrid={true}
          fadeDistance={50}
          fadeStrength={1}
        />

        {/* Box helper */}
        {/* <Box/> */}

        {/* ! Lights  */}
        {/* <ambientLight intensity={0.2}  />
  <directionalLight  intensity={0.5} position={[3,3,3]} color={'red'} />
  <directionalLight  intensity={0.5} position={[0,3,-3]} color={'green'} />
  <directionalLight  intensity={0.5} position={[-3,3,-3]} color={'blue'} />
   */}

        {/* <PointLight/> */}
        {/* <PointLight/> */}

        {/* Hemisphere Light */}
            {/* <hemisphereLight color={"red"} groundColor={"blue"} intensity={0.5} /> */}

        <SpotLightfn/>

        <mesh>
          <sphereGeometry  />
          <meshStandardMaterial  />
        </mesh>

        <mesh position={[2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

        <mesh rotation={[-(Math.PI / 2), 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          {/* <meshStandardMaterial roughness={0} metalness={0.5} /> */}
          <meshPhysicalMaterial clearcoat={0.5} reflectivity={0.8} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Intro;
