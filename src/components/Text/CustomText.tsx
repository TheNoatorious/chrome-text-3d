import React from "react";
import { Text3D } from "@react-three/drei";

const CustomText = () => {
    console.log("Text component");

    return (
        <Text3D font={"./fonts/helvetiker_regular.typeface.json"}>
            LOREM IPSUM
            <meshNormalMaterial />
        </Text3D>
    );
};

export default CustomText;
