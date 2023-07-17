import React from "react";
import { Center } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import CustomText from "../CustomText/CustomText";

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
        </>
    );
};

export default Experience;
