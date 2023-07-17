import React from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF, Clone } from "@react-three/drei";
import { TextureLoader, MeshMatcapMaterial, Mesh } from "three";

const Diamond = (props: any) => {
    const model = useGLTF("./models/brilliant-diamond.glb");
    const matcapTexture = useLoader(TextureLoader, "./matcaps/9.png");

    // Create a new material with the Matcap texture
    const material = new MeshMatcapMaterial({ matcap: matcapTexture });

    // Assign the material to the child Mesh object
    const childMesh = model.scene.children[0] as Mesh;
    if (childMesh) {
        childMesh.material = material;
    }
    return <Clone object={model.scene} {...props}></Clone>;
};

export default Diamond;
