import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const Container = styled.div`
  min-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const Logo = styled.span`
  font-size: 50px;
  font-family: 'Vibur', 'Courier New', Courier, monospace;
  color: #fee;
  text-shadow:
    0 -40px 100px,
    0 0 2px,
    0 0 1em #1000f5,
    0 0 0.5em #5144ff,
    0 0 0.1em #6944ff,
    0 10px 3px #000;
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const ListItem = styled.li`
  cursor: pointer;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Icon = styled(FiSearch)`
  font-size: 25px;
  cursor: pointer;
`

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>drumond</Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
