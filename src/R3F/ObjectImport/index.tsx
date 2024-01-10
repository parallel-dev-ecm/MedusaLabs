import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

type Props = {
    objectPath: string;
    objectScale: number;
}

function ObjectImport({objectPath, objectScale}: Props) {
    const {scene, animations} = useGLTF(objectPath, true)
    const ref = useRef()
    const {  mixer, names, actions, clips } = useAnimations(animations, ref)


    useEffect(()=>{
       actions[names[0]]?.play()

      

    }, [mixer])

  return (
    
    <primitive object={scene} ref={ref} scale={objectScale} />
  )
}

export default ObjectImport