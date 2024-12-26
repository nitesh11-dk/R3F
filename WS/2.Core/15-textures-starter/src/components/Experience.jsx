import { useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

export const Experience = () => {
  // const texture = useTexture("/textures/PavingStones130_1K_Color.jpg");
  // it is  basically a pbr texture so we can add roughness and metalness also the ambient occlusion map and normal map this can be done using the useTexture hook only but in different way 
  const texture = useTexture({
    map:"/textures/PavingStones130_1K_Color.jpg",
   roughnessMap:"/textures/PavingStones130_1K_Roughness.jpg",
   normalMap:"/textures/PavingStones130_1K_NormalGL.jpg",
   aoMap:"/textures/PavingStones130_1K_AmbientOcclusion.jpg",
});
  
  
  // texture.repeat.set(2, 2);
  // texture.repeat.set(0.45, 0.45);
  // texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
  // texture.rotation = Math.PI / 2;


//  ?  MatCap Texture
// MatCap stands for Material Capture. It is a technique used to capture the appearance of a material. It is often used in video games to render realistic materials without the need to set up complex lighting.

const matcapTexture = useTexture("/textures/matcapTexture.png");

// ? video texture 
const videoTexture = useVideoTexture("/textures/spongebob-squarepants.mp4");

  return (
    <>
      <mesh>
        <boxGeometry />
        {/* <meshStandardMaterial  map={texture} /> */}
        {/* <meshStandardMaterial  {...texture}/> */}

        {/*  MatCap Texture  */}
        {/* <meshMatcapMaterial matcap={matcapTexture}/> */}

        {/* video texture
          */}
          <meshBasicMaterial map={videoTexture} />


      </mesh>
    </>
  );
};
