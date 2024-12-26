import { useGLTF , Html} from "@react-three/drei";
import { useState } from "react";

const sceneItems = [
  {
    model: "Japanese Door.glb",
    position: [0, -0.88, -1.2],
    scale: 1.8,
    name: "Hemnes",
    price: 300,
    labelOffset: [3, 6, -1],
  },
  {
    model: "Counter Sink.glb",
    position: [1.3, 0, -2.8],
    name: "Lillången",
    price: 450,
    labelOffset: [-0.5, 1, 1.5],
  },
  {
    model: "Chopping board.glb",
    position: [2.8, 1.9, -2.8],
    scale: 0.5,
    name: "Skogsta",
    price: 25,
    labelOffset: [0, 1, 0],
  },
  {
    model: "Fridge.glb",
    position: [-2.1, 0, -3],
    name: "Lagan",
    price: 600,
    labelOffset: [-0.5, 3, 2],
  },
  {
    model: "Table.glb",
    position: [-1, 0, 2],
    scale: [1, 1, 1],
    name: "Lerhamn",
    price: 80,
    labelOffset: [1, 1, 0],
  },
  {
    model: "Dango.glb",
    position: [-1.4, 1.64, 2],
    scale: 0.72,
    rotation: [0, Math.PI / 6, 0],
    name: "Dango",
    price: 4,
    labelOffset: [-1, 0.5, 0],
  },
];
export const Experience = () => {
  return (
    <>
      {sceneItems.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </>
  );
};

const Item = ({ model, position, rotation,name , price , labelOffset , ...props }) => {
  const gltf = useGLTF(`models/${model}`);
const [hidden , setHidden] = useState(false)
  return (
    <group position={position} rotation={rotation}>
      <primitive object={gltf.scene} {...props} />
      {/*  to use html we can use Html tag from drei */}

      <Html occlude position={labelOffset} transform scale={0.5} onOcclude={setHidden}>
  <div
    className={`${hidden ? "opacity-0 scale-95" : "opacity-100 scale-100"} transition-all duration-[900ms] ease-in-out noselect pointer-events-none px-2 py-1 bg-zinc-900 text-white rounded-md`}
  >
    <h1 className="text-sm capitalize tracking-wider">{name}</h1>
    <p className="text-sm font-bold">${price}</p>
  </div>
</Html>

    </group>
  );
};
