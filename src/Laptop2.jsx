import {useState} from "react";
import {useGLTF, useTexture} from "@react-three/drei";
import {animated, useScroll} from '@react-spring/three'
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import Gradient from "./components/GradientBackground.jsx";

const gradient = new Gradient();
export function Laptop2({ sectionName }) {
    console.log(sectionName);
    const [scrollVal, setScrollVal] = useState(0); // [0, 1
    useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            const newVal = Math.PI * 6 * scrollYProgress;
            setScrollVal(newVal);
            gradient.animate();
        }
    });
    const { nodes, materials } = useGLTF("laptop_11_test.glb");

    const imageMap = useTexture(`assets/${sectionName}.png`)
    imageMap.repeat.set(1,1);
    return (
            <animated.group
                dispose={null}
                scale={1}
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
                <mesh position={[0,0.95,-0.95]} rotation={[-0.12,0,0]}>
                    <planeBufferGeometry attach="geometry" args={[2.6, 1.6]} />
                    <meshPhongMaterial attach="material" map={imageMap} />
                </mesh>
            </animated.group>

    );
}

useGLTF.preload("laptop_11_test.glb");