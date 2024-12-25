/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Fish.gltf -o src/components/Fish.jsx -r public 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useControls } from 'leva'
import { useEffect } from 'react'

export function Fish(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/models/Fish.gltf')

  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])

  const { nodes, materials } = useGraph(clone)

  const { actions } = useAnimations(animations, group)
  const {animation} = useControls({
    animation: {
      value: "Idle",
      options: Object.keys(actions),
    },
  })
  useEffect(() => {
    actions[animation].reset().fadeIn(0.7).play();

    return () => {
      actions[animation].fadeOut(0.7);
    }
  }, [animation])



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Fish">
            <skinnedMesh name="Sphere026" geometry={nodes.Sphere026.geometry} material={materials.Fish_Main} skeleton={nodes.Sphere026.skeleton} />
            <skinnedMesh name="Sphere026_1" geometry={nodes.Sphere026_1.geometry} material={materials.Fish_Secondary} skeleton={nodes.Sphere026_1.skeleton} />
            <skinnedMesh name="Sphere026_2" geometry={nodes.Sphere026_2.geometry} material={materials.Eye_Black} skeleton={nodes.Sphere026_2.skeleton} />
            <skinnedMesh name="Sphere026_3" geometry={nodes.Sphere026_3.geometry} material={materials.Eye_White} skeleton={nodes.Sphere026_3.skeleton} />
            <skinnedMesh name="Sphere026_4" geometry={nodes.Sphere026_4.geometry} material={materials.Mouth} skeleton={nodes.Sphere026_4.skeleton} />
            <skinnedMesh name="Sphere026_5" geometry={nodes.Sphere026_5.geometry} material={materials.Fish_Flaps} skeleton={nodes.Sphere026_5.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Fish.gltf')