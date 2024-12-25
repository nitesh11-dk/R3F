import {
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
  Grid,
  useHelper,
  Stats
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'
import { useControls } from "leva";
import { Leva } from "leva";


function Box() {
  const ref = useRef()
  useHelper(ref,THREE.BoxHelper ,'red')

 const {position,color,opacity,transparent} = useControls({
 position :{
  x:0,
  y:0,
  z:0,
 },
 color :{
  value :'red',
  label :'Color',
  options :['red','blue','green','yellow','purple','orange','pink','brown','gray','black','white']
 },
 opacity :{
  value :1,
  min :0,
  max :1,
  step :0.01,
 },
 transparent :true
 })  


  return <mesh ref={ref} position={[position.x,position.y,position.z]}>
    <boxGeometry />
    <meshBasicMaterial  color={color} opacity={opacity} transparent={transparent} />
  </mesh>
}

const Intro = () => {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      {/* Toggle  Leva  */}
        {/* <Leva hidden={false} /> */}

        {/* Stats */}
        <Stats />
      <Canvas camera={{ position: [3, 3, 3] }}>
        <OrbitControls />

        <PerspectiveCamera
          makeDefault
          position={[3, 3, 3]}
          far={100}
          near={0.1}
          fov={45}
        />
        {/* <PerspectiveCamera makeDefault position={[3, 3, 3]} far={100} near={0.1} fov={45} aspect={4}  manual/> */}

        {/* <OrthographicCamera
          makeDefault
          position={[3, 3, 3]}
          top={2}
          bottom={-2}
          left={-2 * (window.innerWidth / window.innerHeight)}
          right={2 * (window.innerWidth / window.innerHeight)}
        /> */}

        {/* Helpers , leva ,stats */}


        <axesHelper args={[5]} />
        {/* <gridHelper args={[10,10]} /> */}
        <Grid
          sectionSize={3}
          sectionColor={'red'}
          sectionThickness={0.5}
          cellSize={1}
          cellThickness={0.5}
          cellColor={'blue'}
          infiniteGrid={true}
          fadeDistance={50}
          fadeStrength={1}
        />

        {/* Box helper */}
        <Box/>




        {/* <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh> */}

        
      </Canvas>
    </div>
  );
};

export default Intro;
