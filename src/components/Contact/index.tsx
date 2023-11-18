import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import * as S from './styles'
import Map from './partials/Map'

const Contact = () => {
  const ref = useRef<any>()
  const [success, setSuccess] = useState(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs
      .sendForm('service_id', 'template_id', ref.current, 'public_key')
      .then(
        (result) => {
          console.log(result.text)
          setSuccess(true)
        },
        (error) => {
          console.log(error.text)
          setSuccess(false)
        }
      )
  }
  return (
    <S.Section>
      <S.Container>
        <S.Left>
          <S.Form ref={ref} onSubmit={handleSubmit}>
            <S.Title>Contact Us</S.Title>
            <S.Input placeholder='Name' name='name' />
            <S.Input placeholder='Email' name='email' />
            <S.TextArea
              placeholder='Write your message'
              name='message'
              rows={10}
            />
            <S.Button type='submit'>Send</S.Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </S.Form>
        </S.Left>
        <S.Right>
          <Map />
        </S.Right>
      </S.Container>
    </S.Section>
  )
}

export default Contact
