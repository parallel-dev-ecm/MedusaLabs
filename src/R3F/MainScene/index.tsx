import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as React from 'react';

export interface MainSceneProps {
}

export function MainScene (props: MainSceneProps) {
  return (
        <Canvas>
            <ambientLight/>
            <directionalLight color="red" position={[0, 0, 5]} />
            <OrbitControls />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
      
  );
}
