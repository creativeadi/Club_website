import React  from 'react'
import { useRef } from 'react';
import {Suspense,useEffect,useState} from 'react'
import { Canvas, events } from '@react-three/fiber'
import { Environment, OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber';

const Computers = ({isMobile,isTab}) => {
  const computer= new useGLTF('./mech_drone/robot.glb')

  const modelRef=useRef()


  useFrame((state,delta,xrFrame) => {
    if (modelRef.current && !isMobile) {
      modelRef.current.rotation.y = rotation;
    }
    else if (isMobile) {
      modelRef.current.position.y=Math.sin(state.clock.elapsedTime)
      modelRef.current.rotation.y += 0.01;
    }
  });

  const [rotation, setRotation] = useState(4.4);

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.014+4.4);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
    <mesh >
      <hemisphereLight intensity={5.15} groundColor="white" />
      <pointLight intensity={10} />
      <spotLight position={[-20,50,10]} angle={12} penumbra={0.11} intensity={1} shadow-mapSize={1024} />
      <primitive object={computer.scene}  ref={modelRef} scale={isTab?4.15:5.75} position={isTab?[0,1.5,0]:[0,-2,0]} rotation={[0,4.4,0]}/>
    </mesh>
    </>
  )
}

const ComputersCanvas = () => {

  const [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:768px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange=(event) =>{setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  const [isTab,setIsTab]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia('(max-width:1170px)');
    setIsTab(mediaQuery.matches);
    const handleMediaQueryChange=(event) =>{setIsTab(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return ()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange)
    }
  },[])

  return (
    <Canvas frameloop='always' style={{position:`${isMobile? 'absolute' :'fixed'}`,width:'600px'}} shadows camera={{position: [30,60,5] ,fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
        <Computers isMobile={isMobile} isTab={isTab}/>
        <Environment preset='lobby' />
      </Suspense>
      
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas