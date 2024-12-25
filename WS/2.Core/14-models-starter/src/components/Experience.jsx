import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF , useFBX, Gltf} from "@react-three/drei";
import { Fish } from "./Fish";
export const Experience = () => {
  // const gltf = useLoader(GLTFLoader, "models/Fish.gltf");
  //  ? instead of this we can use useGLTF from drei
  const { scene } = useGLTF("models/Fish.gltf");
  const dino = useFBX("models/Dino.fbx");
  return (
    <>

      <ambientLight intensity={1} />
      {/* <primitive object={scene} /> */}
      {/* we can directly use the tag from the drei library */}
      {/* <Gltf src="models/Fish.gltf" position-x={4} /> */}
      {/* <primitive object={dino} scale={0.01} position-x={-4} /> */}


      <Fish />
    </>
  );
};


// ? we can use npm module ad gltfjsx it is cmd tools  and generate a react component from gltf file 
// npx gltfjsx public/models/Fish.gltf -o 
// src/components/Fish.jsx -r public 
