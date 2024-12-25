import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { KeyboardControls } from "@react-three/drei";
import { useMemo } from "react";


export const Controls = {
  forward: "forward",
  backward: "backward",
  left: "left",
  right: "right",
}

function App() {
const map = useMemo(()=>  [
  {
    name: Controls.forward,
    keys: ["ArrowUp", "w"]
  },
  {
    name: Controls.backward,
    keys: ["ArrowDown", "s"]
  },
  {
    name: Controls.left,
    keys: ["ArrowLeft", "a"]  
  },
  {
    name: Controls.right,
    keys: ["ArrowRight", "d"]
  }
])
  return (
    <>
    
   <KeyboardControls
   map={map}
   >
    <Canvas camera={{ position: [0, 1, 8], fov: 42 }}>
        <Experience />
      </Canvas>
   </KeyboardControls>
    </>
  );
}

export default App;
