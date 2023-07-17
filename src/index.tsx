import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience/Experience";

import "./style.css";

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.querySelector("#root")! // element will exist
);

root.render(
    <Canvas
        camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [4, -2, 6],
        }}
    >
        <Experience />
    </Canvas>
);
