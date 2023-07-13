import {useState} from "react";
import { useGLTF } from "@react-three/drei";
import {animated, useScroll} from '@react-spring/three'
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import Gradient from "./components/GradientBackground.jsx";

const gradient = new Gradient();
export function Laptop2({ sectionName }) {
    const [scrollVal, setScrollVal] = useState(0); // [0, 1
    useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            const newVal = Math.PI * 6 * scrollYProgress;
            setScrollVal(newVal);
            gradient.animate();
        }
    });
    const { nodes, materials } = useGLTF("laptop_10.glb");
    const imageMap = useLoader(TextureLoader, 'assets/day36.png');
    // imageMap.rotation = Math.PI * 0.25;
    // imageMap.repeat = 1;
    // imageMap.wrapS = 1000;
    return (
            <animated.group
                dispose={null}
                scale={0.9}
                rotation-x={Math.PI * 0.1}
                rotation-y={scrollVal}
                rotation-z={Math.PI * 0.05}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials["Material.010"]}
                />
                <mesh // keyboard
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={materials["Material.011"]}
                />
                <mesh // screen
                    castShadow
                    receiveShadow
                    geometry={nodes.laptop001.geometry}
                    material={materials["Material.011"]}
                >
                    {/*<meshStandardMaterial map={imageMap}  />*/}
                </mesh>
            </animated.group>

    );
}

useGLTF.preload("laptop_4.glb");