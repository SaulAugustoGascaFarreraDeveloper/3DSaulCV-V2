import React from 'react'
import { InteractiveMenu } from './InteractiveMenu'
import { TestModel } from './TestModel'
import { InteractiveMenu2 } from './InteractiveMenu2'

type Props = {}

export const Portafolio = (props: Props) => {
  return (
    <>
    
        <div className='absolute top-[20px] left-[20px] md:top-[60px] md:left-[100px]'>
            <h1 className='drop-shadow-md text-primary md:text-[90px]'>
            <span className='text-[30px] font-normal'>Hola, </span> <br/> Soy Saul</h1>
            <p className='text-white mt-8 text-[15px] md:text-[20px]'>Soy ingeniero en Software </p>
            <p className='text-white mt-8 text-[15px] md:text-[20px]'>tengo experiencia en desarollo en  apps web y apps interactivas</p>
        </div>
       
        <InteractiveMenu2 />
        
    </>
  )
}