import React  from 'react'
import { useRef } from 'react';
import {Suspense,useEffect,useState} from 'react'
import { Canvas, events } from '@react-three/fiber'
import { Environment, OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useFrame } from '@react-three/fiber'

const Computers = ({isMobile}) => {
  const computer= new useGLTF('./mech_drone/robot.glb')

  const modelRef=useRef()

  useFrame((state,delta,xrFrame)=>{
    modelRef.current.position.y=-4+Math.sin(state.clock.elapsedTime)*0.5;
  })

  return (
    <mesh>
      <hemisphereLight intensity={50.15} groundColor="white" />
      <pointLight intensity={10} />
      <spotLight position={[-20,50,10]} angle={12} penumbra={0.11} intensity={1} shadow-mapSize={1024} />
      <primitive object={computer.scene} ref={modelRef} scale={isMobile?1.25:5.75} position={isMobile?[0,-3,-2.2]:[0,-4,0]} rotation={[0,4.5,0]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:500)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange=(event) =>{setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])
  return (
    <Canvas frameloop='demand' shadows camera={{position: [30,60,5] ,fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <Computers isMobile={isMobile}/>
        <Environment preset='lobby' />
      </Suspense>
      
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas