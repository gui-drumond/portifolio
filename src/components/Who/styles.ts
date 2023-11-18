import styled from 'styled-components'

export const InterfaceMidoriya = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  justify-content: space-evenly;
  width: 600px;
  height: 600px;

  button {
    width: 100px;
    height: 40px;
    border-radius: 10px;
  }
`
export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

export const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`

export const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Line = styled.img`
  height: 5px;
`

export const Subtitle = styled.h2`
  color: #da4ea2;
`

export const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`

export const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 140px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`
