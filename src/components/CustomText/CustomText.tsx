import React from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";

const CustomText = ({ font, ...props }) => {
    const matcapTexture = useLoader(TextureLoader, "./matcaps/30.png");
    const text: string = "lorem ipsum";

    return (
        <Text3D
            font={font || "./fonts/helvetiker_regular.typeface.json"}
            {...props}
        >
            {text}
            <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
    );
};

export default CustomText;
