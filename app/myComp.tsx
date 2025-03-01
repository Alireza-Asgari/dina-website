"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { lazy, Suspense } from "react";
import Model from "./Model";
// const Model = lazy(() => import("./Model"));
export default function MyComponent() {
  return (
    <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px] flex justify-center items-center">
      <Canvas>
        <mesh rotation={[1, Math.PI / 4, 0]}>
          <ambientLight />
          <directionalLight position={[1, 1, 1]} intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* <Suspense fallback={null}> */}
          <Model url="laptop.glb" />
          {/* </Suspense> */}
          <OrbitControls />
        </mesh>
      </Canvas>
    </div>
  );
}

// "use client";

// import { Canvas } from "@react-three/fiber";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { OrbitControls } from "@react-three/drei";

// const MyComponent = () => {
//   const laptop = useLoader(GLTFLoader, "laptop.glb");
//   if (!laptop) {
//     return <p>Loading laptop model...</p>; // Display a loading message
//   }

//   return (
//     <div className="w-full h-full">
//       <Canvas>
//         <mesh rotation={[1, Math.PI / 4, 0]}>
//           <ambientLight />
//           <directionalLight position={[1, 1, 1]} intensity={0.8} />
//           <primitive object={laptop.scene} scale={[0.3, 0.3, 0.3]} />
//           <OrbitControls />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// };

// export default MyComponent;
