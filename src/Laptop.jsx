import {useGLTF} from "@react-three/drei";
import {useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {useFrame, useLoader} from "@react-three/fiber";
import { motion } from "framer-motion-3d"
import {useMotionValueEvent, useScroll, useSpring} from "framer-motion"
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";


export default function Laptop(props) {
    // const glft = useGLTF('laptop_4.glb');
    // const ref = useRef();
    //
    // const { scrollYProgress } = useScroll()
    // const rotateYSpring = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // })
    //
    // return (
    //     <group {...props} >
    //         <motion.primitive
    //             ref={ref}
    //             object={glft.scene}
    //             position-x={0}
    //             position-y={-0.5}
    //             position-z={-2.5}
    //             rotation-x={Math.PI * 0.1}
    //             rotation-y={rotateYSpring}
    //             rotation-z={-0.15}
    //             scale-x={1.5}
    //             scale-y={1.5}
    //             scale-z={1.5}
    //
    //         />
    //     </group>
    // );
}