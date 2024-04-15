import {useEffect, useRef, useState} from "react";
import {useGLTF, useTexture} from "@react-three/drei";
import {animated, useScroll} from '@react-spring/three'
import Gradient from "./components/GradientBackground.jsx";
import {useLoader} from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const gradient = new Gradient();
export function Laptop({ sectionName }) {
    // const materialRef = useRef(null);
    //
    // useEffect(() => {
    //     if (materialRef.current) {
    //         materialRef.current.needsUpdate = true;
    //     }
    // })

    const [scrollVal, setScrollVal] = useState(0);

    const [section1Texture, section2Texture, section3Texture, section4Texture] = useLoader(TextureLoader, [
        `assets/section1.png`,
        `assets/section2.png`,
        `assets/section3.png`,
        `assets/section4.png`,
    ]);

    const getTexture = (sectionName) => {
        switch (sectionName) {
            case 'section1':
                return section1Texture;
            case 'section2':
                return section2Texture;
            case 'section3':
                return section3Texture;
            case 'section4':
                return section4Texture;
            default:
                return section1Texture;
        }
    }

    useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
            const newVal = Math.PI * 6 * scrollYProgress;
            setScrollVal(newVal);
            gradient.animate();
        }
    });
    const { nodes, materials } = useGLTF("laptop_11_test.glb");

    // const imageMap = useTexture(`assets/${sectionName}.png`)
    // imageMap.repeat.set(1,1);

    const imageMap = getTexture(sectionName);
    imageMap.repeat.set(1,1);
    // make image darker

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
                    <meshPhongMaterial attach="material" map={imageMap} onUpdate={self => self.needsUpdate = true}  />
                </mesh>
            </animated.group>

    );
}

useGLTF.preload("laptop_11_test.glb");
