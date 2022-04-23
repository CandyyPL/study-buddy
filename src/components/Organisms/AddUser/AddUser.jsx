import { Wrapper } from '../UsersList/UsersList.styles'
import FormField from 'components/Molecules/FromField/FromField'
import { Button } from 'components/Atoms/Button/Button.styles'

const AddUser = ({ handleInputChange, handleAddUser, formValues }) => {
  return (
    <Wrapper as='form' onSubmit={handleAddUser}>
      <h1>Add new Student</h1>
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
