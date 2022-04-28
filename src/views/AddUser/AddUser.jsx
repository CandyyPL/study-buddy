import { useContext, useEffect, useReducer, useRef } from 'react'
import { Wrapper } from './AddUser.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import FormField from 'components/Molecules/FromField/FromField'
import { Button } from 'components/Atoms/Button/Button.styles'
import { UsersContext } from 'providers/UsersProvider'
import { useForm } from 'hooks/useForm'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
}

const AddUser = () => {
  const context = useContext(UsersContext)
  const inputRef = useRef(null)

  const { formValues, handleInputChange, handleClearFields, handleThrowError, handleToggleConsent } =
    useForm(initialFormState)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmitUser = (e) => {
    e.preventDefault()
    if (formValues.name && formValues.attendance && formValues.average && formValues.consent) {
      context.handleAddUser(formValues)
      handleClearFields()
    } else {
      handleThrowError('You need to give consent')
    }
  }

  return (
    <Wrapper as='form' onSubmit={handleSubmitUser}>
      <StyledTitle>Add new Student</StyledTitle>
      <FormField
        ref={inputRef}
        label='Name'
        id='name'
        name='name'
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label='Attendance'
        id='attendance'
        name='attendance'
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange} />
      <FormField
        label='Consent'
        id='consent'
        name='consent'
        type='checkbox'
        value={formValues.consent}
        onChange={handleToggleConsent}
      />
      <Button type='submit'>Save</Button>
      {formValues.error && <h3>{formValues.error}</h3>}
    </Wrapper>
  )
}

export default AddUser
