import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState ,useMemo } from "react";
import { useControls ,button} from "leva";


const Cube = (props) => {
    const [color, setColor] = useState("white");

    useControls({
      changeColorToRed: button(() => setColor("red")),
      changeColorToBlue: button(() => setColor("blue")),
      changeColorToGreen: button(() => setColor("green")),
    });
    
    const material = useMemo(() => <meshStandardMaterial color={color} />, [color]);
    
                
  return (
    <mesh {...props}>
      <boxGeometry />
      {material}
    </mesh>
  );
};

function App() {



    

  return (
    <>
      <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
        <OrbitControls />
        <Cube rotation-y={Math.PI / 4} />
        <ContactShadows
          position-y={-2}
          opacity={0.5}
          blur={2}
          color={"pink"}
          scale={10}
        />
        <Environment preset="city" />
      </Canvas>
    </>
  );
}

export default App;
