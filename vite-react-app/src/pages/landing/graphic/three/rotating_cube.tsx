import * as React from 'react';
import { useRef } from 'react';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber'

const Model: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame(() => {
        if ( meshRef.current ) {
            meshRef.current.rotation.x += 0.007;
            meshRef.current.rotation.y += 0.014;
        }
    });

    return(
        <mesh ref={meshRef} rotation={[ Math.PI / 4, Math.PI / 4, 0 ]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
        </mesh>
    )
}

interface sceneProps {
    size: number;
}

const Scene: React.FC<sceneProps> = ({ size }) => (
    <Canvas
        camera={{
            fov: 20,
            position: [0, 0, 5]
        }}
        style={{
            width: size,
            height: size,
            position: 'absolute',
            top: 0, left: '50%',
            transform: 'translateX(-50%)'
        }}
    >
        <ambientLight />
        <pointLight power={100} position={[2, 2, 2]} />
        <Model />
    </Canvas>
)

export default Scene;