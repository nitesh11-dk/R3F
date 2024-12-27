import { RigidBody } from "@react-three/rapier";
import { Controls } from "../App";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { BallCollider,vec3 } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { euler, quat } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";



const MOVEMENT_SPEED = 5;
const ROTATION_SPEED = 5;

export const Player = () => {
  const [, get] = useKeyboardControls();
  const rb = useRef();
  const val = new Vector3();
  const JUMP_FORCE = 10;
  const inTheAir = useRef(false);

  const camera = useRef();
  const cameraTarget = useRef(new Vector3(0, 0, 0));
  
  const punched = useRef(false);

  useFrame(() => {

    cameraTarget.current.lerp(vec3(rb.current.translation()), 0.5);
    camera.current.lookAt(cameraTarget.current);

    const rotVel = {
      x: 0,
      y: 0,
      z: 0,
    };

    const currentVelocity = rb.current.linvel();
    val.x = 0;
    val.y = 0; 
    val.z = 0;

    if (get()[Controls.forward]) {
      val.z -= MOVEMENT_SPEED;
    }

    if (get()[Controls.back]) {
      val.z += MOVEMENT_SPEED;
    }

    if (get()[Controls.left]) {
      rotVel.y += ROTATION_SPEED;
    }
    if (get()[Controls.right]) {
      rotVel.y -= ROTATION_SPEED;
    }

    rb.current.setAngvel(rotVel, true);
    const eulerRot = euler().setFromQuaternion(quat(rb.current.rotation()));
    val.applyEuler(eulerRot);

    if (get()[Controls.jump] && !inTheAir.current) {
      val.y += JUMP_FORCE;
      inTheAir.current = true;
    } else {
      val.y = currentVelocity.y;
    }
    if (!punched.current) {
      rb.current.setLinvel(val, true);
    }

    rb.current.setLinvel(val, true);
  });
  
  const respwan = () => {
    rb.current.setTranslation({x:0,y:5,z:0},true);
  }


  const scene = useThree((state) => state.scene);
  const teleport = () => {
    const gateOut = scene.getObjectByName("gateLargeWide_teamYellow");
    rb.current.setTranslation(gateOut.position);
  };


  return (
    <RigidBody ref={rb}   onCollisionEnter={(other) => {
      if(other.rigidBodyObject.name === 'ground'){
        inTheAir.current = false;
      }

      if (other.rigidBodyObject.name === "swiper") {
        punched.current = true;
        setTimeout(() => {
          punched.current = false;
        }, 200);
      }


    }} gravityScale={2.5}
    onIntersectionEnter={(other)=>{
if(other.rigidBodyObject.name === 'space'){
  respwan();
}
if (other.rigidBodyObject.name === "gateIn") {
  teleport();
}
    }}
    >
      <mesh position-y={0.5} castShadow>
      <PerspectiveCamera makeDefault position={[0, 5, 8]}  ref={camera}/>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    </RigidBody>
  );
};
