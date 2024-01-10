import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as React from 'react';
import ObjectImport from '../ObjectImport';

export interface MainSceneProps {
}

export function MainScene (props: MainSceneProps) {

    const jellyObjectPath = '3DObjects/jellyfish.glb'
  return (
        <Canvas>
            <ambientLight/>
            <directionalLight color="red" position={[0, 0, 5]} />
            <OrbitControls />
            <ObjectImport objectPath={jellyObjectPath} objectScale={1} />
            
        </Canvas>
      
  );
}
