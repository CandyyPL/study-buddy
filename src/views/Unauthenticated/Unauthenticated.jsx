import { Button } from 'components/Atoms/Button/Button.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import FormField from 'components/Molecules/FromField/FormField'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRef, useState } from 'react'
import { FormWrapper, Wrapper } from './Unauthenticated.styles'
import Alert from 'components/Atoms/Alert/Alert'
import { auth } from 'auth/firebaseAuth'

const Unauthenticated = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [error, setError] = useState('')

  const handleSignin = async (e) => {
    e.preventDefault()

    if (emailRef.current.value && passwordRef.current.value) {
      try {
        setError('')
        await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      } catch (e) {
        setError('Failed to sign in.')
        console.log(e)
      }
    }
  }

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSignin}>
        <StyledTitle>Study Buddy</StyledTitle>
        {error ? <Alert color='#fc4747'>{error}</Alert> : null}
        <FormField id='email' name='email' label='Email' ref={emailRef} />
        <FormField
          id='password'
          name='password'
          label='Password'
          type='password'
          ref={passwordRef}
        />
        <Button type='submit'>Sign In</Button>
      </FormWrapper>
    </Wrapper>
  )
}

export default Unauthenticated
