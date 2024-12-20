import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Intro = () => {
    
  return (
    <div className='h-screen w-screen bg-zinc-900'>
    <Canvas camera={{position: [3, 3, 3]}}>
        <OrbitControls />
        <mesh>
            <boxGeometry />
            <meshNormalMaterial  />
        </mesh>
    </Canvas>
    </div>
  )
}

export default Intro
