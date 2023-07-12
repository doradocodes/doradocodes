import {useEffect, useState} from "react";
import { useGLTF } from "@react-three/drei";
import {animated, useScroll} from '@react-spring/three'
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";


export function Laptop2({ sectionName }) {
    const [scrollVal, setScrollVal] = useState(0); // [0, 1
    useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            const newVal = Math.PI * 6 * scrollYProgress;
            setScrollVal(newVal);
        }
    });
    const { nodes, materials } = useGLTF("laptop_7.glb");
    const texture = useLoader(TextureLoader, 'assets/mesh-gradient.png');

    // Here you can adjust the texture
    useEffect(() => {
        if (texture) {
            // This rotates the texture by 90 degrees.
            texture.center.set(0.5, 0.5);
            // texture.scale.set(0.5, 0.5);
            // texture.rotation = Math.PI / 2;

            // // This scales the texture.
            // texture.repeat.set(2, 2); // The texture will now be repeated twice in both directions.
        }
    }, [texture]);

    return (
            <animated.group
                dispose={null}
                scale={0.9}
                rotation-x={Math.PI * 0.1}
                rotation-y={scrollVal}
            >
                {/*<mesh*/}
                {/*    castShadow*/}
                {/*    receiveShadow*/}
                {/*    geometry={nodes.Cube001.geometry}*/}
                {/*    material={materials["Material.010"]}*/}
                {/*/>*/}
                {/*<mesh // keyboard*/}
                {/*    castShadow*/}
                {/*    receiveShadow*/}
                {/*    geometry={nodes.Cube001_1.geometry}*/}
                {/*    material={materials["Material.011"]}*/}
                {/*/>*/}
                <mesh // screen
                    castShadow
                    receiveShadow
                    geometry={nodes.screen.geometry}
                >
                    <meshStandardMaterial map={texture} />
                </mesh>
            </animated.group>

    );
}

useGLTF.preload("laptop_4.glb");