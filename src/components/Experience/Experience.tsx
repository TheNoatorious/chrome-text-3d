import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import CustomText from "../Text/CustomText";

const Experience = () => {
    return (
        <>
            <Perf position="top-left" />

            <OrbitControls makeDefault />

            <CustomText />
        </>
    );
};

export default Experience;
