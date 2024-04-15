import {KeyboardModel} from "../KeyboardModel.jsx";
import styles from "./Homepage.module.css";
import {Laptop} from "../Laptop.jsx";
import {Canvas} from "@react-three/fiber";
import {CameraControls, OrthographicCamera, useGLTF} from "@react-three/drei";
export default function TestPage() {
    return (
        <div>
            <h1>Test Page</h1>
            <Canvas className={styles.canvas}>
                <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={1} />
                <CameraControls />
                {/*<Fisheye zoom={0}>*/}
                {/*    <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />*/}
                {/*    <ambientLight intensity={Math.PI / 2} />*/}
                {/*    <KeyboardModel />*/}
                {/*</Fisheye>*/}
                <ambientLight
                    intensity={0.68}
                />
                {/*<pointLight position={[xPos, yPos, zPos]} rotation={[xRot, yRot, zRot]} intensity={1} />*/}
                <directionalLight
                    position={[1.09, 0, 6.3]}
                />
                <KeyboardModel position={[0,0, 5]} />
            </Canvas>

        </div>
    )
}
