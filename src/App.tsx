import { type FunctionComponent } from 'react'
import Contact from './components/Contact'
import Who from './components/Who'
import Works from './components/Works'
import Hero from './components/Hero'
import styled from 'styled-components'
import { CharacterAnimationProvider } from './provider/CharacterAnimations'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url('./img/bg.jpeg');
  &::-webkit-scrollbar {
    display: none;
  }
`

const App: FunctionComponent = () => {
  return (
    <CharacterAnimationProvider>
      <Container>
        <Hero />
        <Contact />
        <Who />
        <Works />
      </Container>
    </CharacterAnimationProvider>
  )
}

export default App
