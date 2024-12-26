import { ContactShadows, useGLTF, Text, Billboard, Text3D } from "@react-three/drei";
import { Character } from "./Character";

import * as THREE from "three";

export const Experience = () => {
  const woodenSign = useGLTF("models/Wooden Sign.glb");

  return (
    <>
      <Text3D rotation-y={THREE.MathUtils.degToRad(30)} size={4} position={[-8, 0, -5]} font='font/Inter_Regular (1).json'
      bevelEnabled
      bevelThickness={0.5}
      bevelSize={0.1}
      bevelOffset={0.1}
      bevelSegments={10}
      letterSpacing={0.2}
      // lineHeight={0.5}
      // height={0.5}
      // curveSegments={12}
    

      >
        Zelda
        <meshStandardMaterial color="red"  metalness={0} roughness={0}/>
      </Text3D>

      <group position-x={-1.5} rotation-y={THREE.MathUtils.degToRad(15)}>
        <primitive object={woodenSign.scene} />
        <Text fontSize={0.3} position={[0, 1.2, 0.01]} textAlign="center" maxWidth={1} font="font/MedievalSharp-Regular.ttf" >
          Hello Sir
          <meshBasicMaterial color="#783a1a" />

        </Text>
      </group>
      <group position={[1.5, 0, 0]} rotation-y={-Math.PI / 4}>

        <Billboard position-y={3}>
          {/*  the text is overlappting so  it takes time to deal with te postion so we can use anchorX  or Y to fix it  */}
          {/*   piche se text hiddern ho jata hai so we can use Billborad component to fix it  from drei lib */}
          <Text fontSize={0.3} anchorY={"bottom"} >
            Link
            <meshBasicMaterial color="#783a1a" />
          </Text>
          <Text fontSize={0.3} anchorY={"center"} >
            Zelda a private Hero
            <meshBasicMaterial color="gray" />
          </Text>
        </Billboard>
        <Character />
      </group>
      <ContactShadows opacity={0.42} scale={42} far={42} />
    </>
  );
};

// ? for 3d test , there is no deafult font is available  for 3d in threejs , we use Typeface.js format 