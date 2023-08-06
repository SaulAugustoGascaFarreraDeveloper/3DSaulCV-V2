"use client"
import Image from 'next/image'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import { Footer } from './components/Footer'
import { Portafolio } from './components/Portafolio'
import {PerspectiveCamera,Environment,PresentationControls,ContactShadows,Html,useFBX} from "@react-three/drei"
import {Canvas,useFrame} from '@react-three/fiber'


const SpaceShip = () => {

  const fbx = useFBX("assets/Spaceship.fbx")
  return <primitive object={fbx}  scale={0.2} rotation={[2.2,-0.3,0]} />
}


export default function Home() {
  return (
   

      <>
      
        <Suspense fallback={null}>
            <Portafolio />
            <Footer />
        </Suspense>
        <Loader />
      
      
      </>

      
  )
}
