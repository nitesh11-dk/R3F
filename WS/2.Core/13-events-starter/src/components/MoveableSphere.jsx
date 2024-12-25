import { useCursor ,useKeyboardControls } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {Controls} from "../App"

export const MoveableSphere = (props) => {

  const [color, setColor] = useState(false)
  // useCursor(color )
  useCursor(color , "grab", "pointer")

  const [selected, setSelected] = useState(false)
  let color12 = color ? "pink" : "white";
  if(selected){
    color12 = "hotpink"
  }

  const ref = useRef()

//  using keyboard controls
const MOVEMENT_SPEED = 3;
const forwardPressed = useKeyboardControls((state) => state[Controls.forward]);
const backwardPressed = useKeyboardControls((state) => state[Controls.backward]);
const leftPressed = useKeyboardControls((state) => state[Controls.left]);
const rightPressed = useKeyboardControls((state) => state[Controls.right]);

useFrame((_state, delta) => {
 if(!selected) return 
 if(forwardPressed){
  ref.current.position.y += MOVEMENT_SPEED * delta
 }
 if(backwardPressed){
  ref.current.position.y -= MOVEMENT_SPEED * delta
 }
 if(leftPressed){
  ref.current.position.x -= MOVEMENT_SPEED * delta
 }
 if(rightPressed){
  ref.current.position.x += MOVEMENT_SPEED * delta
 }
})

  return (
    <mesh {...props} ref={ref}
     onPointerOver={(event) => {
      event.stopPropagation()
      setColor(true)
     }}
      onPointerOut={(event) => {
        event.stopPropagation()
        setColor(false)
      }}
       onClick={(event) => {
        event.stopPropagation()
        setSelected(!selected)
       }}
       onPointerMissed={() => {
        setSelected(false)
       }}
       >
        
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color12} />
    </mesh>
  );
};

//   ? if the spsere is one behind the color then the issue of event propagation occurs to stop this we can  use event.stopPropagation()