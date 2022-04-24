import { useState, useContext } from 'react'
import { Wrapper } from 'components/Templates/Wrapper/Wrapper.styles'
import { StyledTitle } from './AddUser.styles'
import FormField from 'components/Molecules/FromField/FromField'
import { Button } from 'components/Atoms/Button/Button.styles'
import { UsersContext } from 'providers/UsersProvider'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
}

const AddUser = () => {
  const context = useContext(UsersContext)

  const [formValues, setFormValues] = useState(initialFormState)

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitUser = (e) => {
    e.preventDefault()
    context.handleAddUser(formValues)
    setFormValues(initialFormState)
  }

  return (
    <Wrapper as='form' onSubmit={handleSubmitUser}>
      <StyledTitle>Add new Student</StyledTitle>
      <FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange} />
      <FormField
        label='Attendance'
        id='attendance'
        name='attendance'
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange} />
      <Button type='submit'>Save</Button>
    </Wrapper>
  )
}

export default AddUser
