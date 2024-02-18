import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Decal, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry attach="geometry" args={[1, 1]} />
        <meshStandardMaterial polygonOffset polygonOffsetFactor={-5} flatShading color="#fff8eb" />
        <Decal
          map={decal}
          flatShading
          rotation={[ 2 * Math.PI, 0, 6.25]}
          position={[0, 0, 1]} />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}/>
        
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default BallCanvas;