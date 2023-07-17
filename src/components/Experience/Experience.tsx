import React from "react";
import { OrbitControls, Center, meshBounds } from "@react-three/drei";
import { Perf } from "r3f-perf";
import CustomText from "../CustomText/CustomText";
import Diamond from "../Diamond/Diamond";

const Experience = () => {
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
        </>
    );
};

export default Experience;
