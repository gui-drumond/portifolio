/* eslint-disable  */
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import * as S from './styles'
import { UseCharacterAnimations } from '../../provider/CharacterAnimations'
import { Midoriya } from '../Midoriya'
export default function Who() {
  const { animations, setAnimationIndex, animationIndex } =
    UseCharacterAnimations()
  return (
    <S.Section>
      <S.Container>
        <S.Left>
          <S.InterfaceMidoriya>
            {animations.map(
              (animation, index) =>
                (animation === 'waveHello' || animation === 'punch') && (
                  <S.Button
                    key={animation}
                    onClick={() => setAnimationIndex(index)}
                  >
                    {animation}
                  </S.Button>
                )
            )}
            <Suspense fallback={null}>
              <Canvas camera={{ position: [10, 10, 10], fov: 10 }}>
                <ambientLight intensity={1} />
                <OrbitControls scale={0.2} enableZoom={false} />
                <Midoriya />
              </Canvas>
            </Suspense>
          </S.InterfaceMidoriya>
        </S.Left>
        <S.Right>
          <S.Title>Think outside the square space</S.Title>
          <S.WhatWeDo>
            <S.Line src='./img/line.png' />
            <S.Subtitle></S.Subtitle>
          </S.WhatWeDo>
          <S.Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </S.Desc>
          <a href='https://github.com/gui-drumond'>
            <S.Button>See our works</S.Button>
          </a>
        </S.Right>
      </S.Container>
    </S.Section>
  )
}
