
import { useGLTF } from "@react-three/drei";
import React from "react";

export function Lighthouse(props) {
  const { nodes, materials } = useGLTF("models/Lighthouse.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Lighthouse.geometry}
        material={materials.lambert2SG}
      />
    </group>
  );
}

useGLTF.preload("models/Lighthouse.glb");
