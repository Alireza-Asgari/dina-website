"use client";
import { useEffect, useState } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Group } from "three";

const Model = ({ url }: { url: string }) => {
  const [model, setModel] = useState<Group | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      setModel(gltf.scene);
    });
  }, [url]);

  return model ? <primitive object={model} scale={[0.3, 0.3, 0.3]} /> : null;
};

export default Model;
