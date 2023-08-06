"use client"
import React,{useRef} from 'react'
import {Canvas,useFrame} from '@react-three/fiber'
import {PerspectiveCamera,Environment,PresentationControls,ContactShadows,Html,useFBX} from "@react-three/drei"
import { EffectComposer,Bloom } from '@react-three/postprocessing'
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";


type Props = {}

const menuItem = [
    {
        label: "Sobre mi",
        content: null
    },
    {
        label: "Proyectos",
        content: null
    },
    {
        label: "Contactame",
        content: null
    }
]


const SpaceShip = () => {

    const fbx = useFBX("assets/Spaceship.fbx")
    return <primitive object={fbx}  scale={0.2} rotation={[2.2,-0.3,0]} />
}


const CustomMenu = (props: Props) => {
    const ref = useRef()

    

    useFrame((state) =>{
        const t = state.clock.getElapsedTime()
        ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
        ref.current.rotation.y = Math.sin(t / 4) / 8
        ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
        
    })

    return(
        <group ref={ref} {...props} dispose={null}>
                {
                    menuItem.map((item,key) => (
                        <>
                            <mesh>
                                <Html wrapperClass key={key} scale={0.7} rotation={[Math.PI / 2, 0, 0]} position={[1.88, 0, (key + -2) * -0.5]} transform>
                                <div className="group relative cursor-pointer flex items-center justify-center h-[22px] text-menu font-black w-[97px] text-center text-sm hover:text-white"
                                >
                                    <div className="absolute z-[-1] h-full bg-menu w-0 right-0 block transform group-hover:animate-cover"></div>
                                    {item.label}
                                </div>
                                </Html>
                                <mesh scale={[1.7,0.1,0.4]} position={[1.88,0.06, (key + -2) * -0.5]}>
                                
                                <boxGeometry />
                                <meshStandardMaterial color="#ff0a65" />
                                
                                </mesh>
                            </mesh>
                        </>
                    ))
                }
                <SpaceShip /> 
                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={100} />
                </EffectComposer>
        </group>
    )
}




const TestComponent = () => {
    return(
        <>

            <group >
                <SpaceShip />
            </group>
        
        </>
    )
}





export const InteractiveMenu = (props: Props) => {

   


  return (
    <div className="mt-20 h-[65vh] md:mt-0 md:w-full md:h-full">
    <Canvas >
        
        <PerspectiveCamera makeDefault fov={70} position={[0, 0, 5]} />
        <ambientLight color="#ff0a65" intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
        <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />
        <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 6, Math.PI / 6]}>
                    <CustomMenu rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} scale={1} />
                    
                    <ContactShadows position={[0,-1.4,0]} opacity={0.35} scale={10} blur={2.5} far={4}  />
        </PresentationControls>
        <Environment preset="city" />
    </Canvas>
</div>
  )
}