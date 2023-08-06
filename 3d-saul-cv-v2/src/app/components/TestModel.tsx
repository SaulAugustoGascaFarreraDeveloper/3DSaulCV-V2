import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {PerspectiveCamera,Environment,PresentationControls,ContactShadows,Html,useFBX} from "@react-three/drei"
import { EffectComposer,Bloom } from '@react-three/postprocessing'

type Props = {}

const SpaceShip = () => {

    const fbx = useFBX("assets/Spaceship.fbx")
    return <primitive  object={fbx}  scale={0.15} rotation={[2.2,-0.3,0]} />
}

export const TestModel = (props: Props) => {
  return (
    <Canvas>
        {/* <OrbitControls /> */}
        {/* <mesh>
            <boxGeometry />
        </mesh> */}
        <group>

            <ambientLight color="#ff0a65" intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
            <SpaceShip />
            <EffectComposer>
                        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={100} />
            </EffectComposer>

        </group>
        
    </Canvas>
  )
}