import styled from 'styled-components'

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-weight: 200;
`

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`

export const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`

export const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

export const Right = styled.div`
  animation: animate 2s infinite ease alternate;
  flex: 1;
  display: flex;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
