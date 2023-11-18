/* eslint-disable react/no-unknown-property */
import Navbar from '../NavBar'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Suspense } from 'react'
import * as S from './styles'

export default function Hero() {
  return (
    <S.Section>
      <Navbar />
      <S.Container>
        <S.Left>
          <S.Title> Think. Make. Solve.</S.Title>
          <S.WhatWeDo>
            <S.Line src='./img/line.png' />
            <S.Subtitle>What We Do</S.Subtitle>
          </S.WhatWeDo>
          <S.Desc></S.Desc>
          <S.Button> Learn More</S.Button>
        </S.Left>
        <S.Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color='#2c0a54'
                  attach='material'
                  distort={0.35}
                  speed={1.2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <S.Img src='./img/moon.png' />
        </S.Right>
      </S.Container>
    </S.Section>
  )
}
