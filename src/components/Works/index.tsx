/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import Development from './partials/Development'
// import ProductDesign from './ProductDesign'
// import WebDesign from './WebDesign'
import { Section, Container, Left, List, Right, ListItem } from './styles'
import Stacks from './partials/Stacks'

const data = [
  'Stacks',
  'Development',
  'Illustration',
  'Product Design',
  'Social Media'
]

const Works = () => {
  const [work, setWork] = useState('Stacks')
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === 'Stacks' ? (
            <Stacks />
          ) : work === 'Development' ? (
            <Development />
          ) : (
            ' '
          )}
        </Right>
      </Container>
    </Section>
  )
}

export default Works
