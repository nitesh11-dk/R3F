import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useThree ,useFrame} from "@react-three/fiber";
import { button, useControls } from "leva";
import { useRef } from "react";

const Cube = (props) => {
    // Get camera directly from useThree without selector function
    const { camera } = useThree();

    const updateFov = (fov) => {
        camera.fov = fov;
        camera.updateProjectionMatrix();
    }

    useControls("FOV", {
        smallFov: button(() => updateFov(20)),
        largeFov: button(() => updateFov(42)), 
        xxlFov: button(() => updateFov(60)),
    })
    

    //  threejs render the scene in every frame it can be 60 fps or 30 fps or 10 fps
    //  we can use useFrame to render the scene in every frame
    const ref = useRef();
    // useFrame((state,delta)=> {
    useFrame((_state,delta)=> { // ! if we are not using the state we can use _state 
        ref.current.rotation.y += delta ;
    })
    return (
        <mesh {...props} ref={ref}>
            <boxGeometry />
            <meshStandardMaterial color={"white"} />
        </mesh>
    );
};

function R3FHooks() {
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

export default R3FHooks;
