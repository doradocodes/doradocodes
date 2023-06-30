import {useGLTF} from "@react-three/drei";
import {useLayoutEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {useFrame} from "@react-three/fiber";
import { motion } from "framer-motion-3d"
import {useMotionValueEvent, useScroll, useSpring} from "framer-motion"


export default function Laptop(props) {
    const glft = useGLTF('laptop_2.glb');
    const ref = useRef();
    const [rotateY, setRotateY] = useState(-0.525);
    // const scroll = useScroll();
    // const tl = useRef();

    // useFrame((state, delta) => {
    //     // tl.current.seek(scroll.offset * tl.current.duration())
    // });

    // useLayoutEffect(() => {
    //     tl.current = gsap.timeline({defaults: {duration: 1, ease: 'power1.inOut'}});
    //     tl.current.to(ref.current.rotation, { y: 5.5 });
    // }, []);

    const { scrollYProgress } = useScroll()
    const rotateYSpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    console.log('rotateYSpring', rotateYSpring)


    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("Page scroll: ", latest)
    //     setRotateY(rotateY * latest);
    // })

    return (
        <group {...props} >
            <motion.primitive
                ref={ref}
                object={glft.scene}
                position-x={0}
                position-y={-0.5}
                position-z={-2.5}
                rotation-x={Math.PI * 0.1}
                rotation-y={rotateYSpring}
                rotation-z={-0.15}
                scale-x={1.5}
                scale-y={1.5}
                scale-z={1.5}

            />
        </group>
    );
}