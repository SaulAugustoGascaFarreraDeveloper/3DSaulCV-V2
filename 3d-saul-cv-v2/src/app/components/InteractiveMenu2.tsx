"use client"
import React,{useRef, useState} from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas,useFrame } from '@react-three/fiber'
import {PerspectiveCamera,Environment,PresentationControls,ContactShadows,Html,useFBX} from "@react-three/drei"
import { EffectComposer,Bloom } from '@react-three/postprocessing'
import { About } from './About'
import { Work } from './Work'
import { Contact } from './Contact'
import Image from 'next/image'


import soundON from './images/sound-on.png'
import soundOFF from './images/sound-off.png'


let audioBG : HTMLAudioElement
let isMusic = false;
let generalVolume = 1

type Props = {}





interface menuItem {
    
        label: string,
        content: JSX.Element
         
}


const MenuItem: menuItem[] = [
    {
        label: "About Me",
        content: <About />
    },
    {
        label: "My Work",
        content: <Work />
    },
    {
        label: "Get in Touch",
        content: <Contact />
    }
];

const SpaceShip = () => {

    const fbx = useFBX("assets/Spaceship.fbx")
    return <primitive  object={fbx}  scale={0.15} rotation={[2.2,-0.3,0]} />
}

const hoverSoundEffect = () => {
    const audioHover = new Audio("/sounds/hover.mp3")
    audioHover.volume = generalVolume - 0.2
    audioHover.play()

    
}


const clickSoundEffect = () => {
    const audioClicked = new Audio("/sounds/click.mp3")
    audioClicked.volume = generalVolume - 0.2
    audioClicked.play()
}


const transitionSoundEffect  = () => {
    const audioTransition = new Audio("/sounds/transition.mp3")
    audioTransition.volume = generalVolume
    audioTransition.play()
}

const CustomMenu = (props: any) => {

    //const {setCurrentMenuClicked,setTimed} = props

    //const [isTime,setTime] = useState(false)

    const ref = useRef<THREE.Group>()

    useFrame((state) =>{
        const t = state.clock.getElapsedTime()
        if(ref.current)
        {
            ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
            ref.current.rotation.y = Math.sin(t / 4) / 8
            ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
            ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
            
        }
        
        
    })

    const menuClicked = (item: any) => {

        isMusic && clickSoundEffect();

        props.setCurrentMenuClicked(item)
       

        setTimeout(() => {
            props.setTimed(true);
        },600)
    }


   return(
    <group ref={ref} {...props} dispose={null}>


                {
                    MenuItem.map((item,key) => (
                        <>
                            <mesh>
                                <Html key={key} scale={0.7} rotation={[Math.PI / 2, 0, 0]} position={[1.88, 0, (key + -2) * -0.5]} transform>
                                <div className="group relative cursor-pointer flex items-center justify-center h-[22px] text-menuText font-black w-[97px] text-center text-sm hover:text-white"
                                onClick={() => menuClicked(item)}
                                onMouseEnter={() => isMusic && hoverSoundEffect()}
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

export const InteractiveMenu2 = () => {

    //const [getCurrentMenuClicked, setCurrentMenuClicked] = useState(false);
    const [getCurrentMenuClicked, setCurrentMenuClicked] = useState<menuItem | null>(null); // Cambio aquí
    const [isTimed, setTimed] = useState(false);
    const [isMusicOn, setIsMusicOn] = useState(false);


    const closePage = () => {
        setCurrentMenuClicked(null)
        setTimed(false)
        isMusic && transitionSoundEffect()
        window.scroll(0,0)
    }


    const backGroundMusic = (e: any) => {

        // Verifica si la instancia de Audio ya existe, si no, crea una nueva.
    if (!audioBG) {
        audioBG = new Audio("/sounds/music.mp3");
        audioBG.volume = generalVolume;
        audioBG.loop = true;
    }

    // Verifica si la música está reproduciéndose o no y actúa en consecuencia.
    if (!isMusic) {
        audioBG.play();
        setIsMusicOn(true);
    } else {
        audioBG.pause();
        setIsMusicOn(false);
    }
    isMusic = !isMusic; // Cambia el estado de isMusic al valor opuesto.
        

        
    }


            // Referencia al componente OrbitControls
        const orbitControlsRef = useRef<any>();

        // Estado para controlar la rotación
        const [isRotating, setRotating] = useState(false);

        // Manejador del frame, actualiza los controles de órbita si está activada la rotación
        // useFrame((state) => {
        //     if (isRotating && orbitControlsRef.current) {
        //     orbitControlsRef.current.update();
        //     }
        // });

        const startRotation = () => {
            setRotating(true);
        };

        const stopRotation = () => {
            setRotating(false);
        };


    return (


        <>



        <div className={`mt-20 h-[65vh] md:mt-0 md:w-full md:h-full transition-opacity duration-500 opacity-0 ${!getCurrentMenuClicked && 'opacity-100'}`}>
                <Canvas
                onClick={startRotation}
                onPointerUp={stopRotation}
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0, 4], fov: 70 }}
                >
                   

                    <OrbitControls
                            ref={orbitControlsRef}
                            enableZoom={false} // Deshabilitar el zoom
                            enableRotate={true} // Habilitar la rotación
                            enablePan={true} // Opcional: deshabilitar el pan (movimiento lateral)
                            rotateSpeed={0.5} // Opcional: ajustar la velocidad de rotación (predeterminada es 1)
                            zoomSpeed={0.5} // Opcional: ajustar la velocidad de zoom (predeterminada es 1)
                            panSpeed={0.5} // Opcional: ajustar la velocidad de pan (predeterminada es 1)
                    />


                    <PerspectiveCamera makeDefault fov={70} position={[0, 0, 5]} up={[0,0,0]} />
                    <ambientLight color="#ff0a65" intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
                    {/* <PresentationControls
                        global
                        config={{ mass: 2, tension: 500 }}
                        snap={{ mass: 4, tension: 1500 }}
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 4, Math.PI / 4]}
                        azimuth={[-Math.PI / 6, Math.PI / 6]}>
                        
                    </PresentationControls> */}

                        {!getCurrentMenuClicked && <CustomMenu rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} scale={1} setCurrentMenuClicked={setCurrentMenuClicked} setTimed={setTimed} />}
                    

                    
                    <ContactShadows position={[0, -1.4, 0]} opacity={0.35} scale={10} blur={2.5} far={4} />
                    <Environment preset="city" />
                </Canvas>
            </div>

            

           

            {getCurrentMenuClicked &&
                <div className='absolute w-full min-h-full bg-gradient top-0 z-20 flex justify-center'>
                    <div className={`p-10 mt-8 md:mt-0 md:max-w-[80%] md:p-20 transition-opacity duration-1000 opacity-0 ${isTimed && 'delay-300 opacity-100'}`}>
                        {getCurrentMenuClicked.content}

                        <div className='fixed group top-[10px] right-[10px] md:top-[50px] md:right-[50px] w-[50px] h-[50px] bg-primary cursor-pointer flex justify-center items-center text-menuText hover:text-white' onClick={() => closePage()} onMouseEnter={() => isMusic && hoverSoundEffect()}>

                            <div className="absolute h-full bg-menu w-0 right-0 block transform group-hover:animate-cover"></div>
                            <p className='absolute font-normal text-[30px]'>&#10005;</p>
                        </div>
                    </div>
                </div>
            }


           


                    {/* <div className={`absolute block w-full bg-menu z-20 transition-all duration-500 ease-in ${getCurrentMenuClicked ? 'bottom-0 h-full' : 'h-0'}  ${isTimed && 'delay-[unset] top-0 h-0'}`}></div> */}

                
                <Image id="musicTrigger" alt="sound icon" src={isMusicOn ? soundON : soundOFF} className="absolute opacity-80 w-[40px] h-[40px] z-10 bottom-10 right-[calc(50vw-20px)] md:bottom-[40px] cursor-pointer" onClick={(e) => backGroundMusic(e)} />
        </>

       

        
        
      )
}