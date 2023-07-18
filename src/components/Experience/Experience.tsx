import React, { useRef } from "react";
import { OrbitControls, Center, meshBounds } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import CustomText from "../CustomText/CustomText";
import Diamond from "../Diamond/Diamond";

const Experience = () => {
    const particlesGroup: any = useRef();

    /**
     * @param {int} state Access to the renderer
     * @param {int} delta Time between frames
     * @returns {int} The rotation
     **/
    useFrame((state, delta) => {
        for (const particle of particlesGroup.current.children) {
            particle.rotation.y += delta * 0.1;
        }
    });

    return (
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />
            <Center>
                <CustomText
                    font="./fonts/canterbury-regular.json"
                    size={0.75}
                    height={0.2}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                />
            </Center>
            <group ref={particlesGroup}>
                {[...Array(100)].map((value, index) => (
                    <Diamond
                        key={index}
                        rotation={[
                            Math.random() * Math.PI,
                            Math.random() * Math.PI,
                            Math.random() * Math.PI,
                        ]}
                        position={[
                            (Math.random() - 0.5) * 10,
                            (Math.random() - 0.5) * 10,
                            (Math.random() - 0.5) * 10,
                        ]}
                        scale={0.2 + Math.random() * 0.2}
                    />
                ))}
            </group>
        </>
    );
};

export default Experience;
