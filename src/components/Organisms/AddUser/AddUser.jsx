import { ViewWrapper } from 'components/Templates/Wrapper/ViewWrapper'
import { StyledTitle } from './AddUser.styles'
import FormField from 'components/Molecules/FromField/FromField'
import { Button } from 'components/Atoms/Button/Button.styles'

const AddUser = ({ handleInputChange, handleAddUser, formValues }) => {
  return (
    <ViewWrapper as='form' onSubmit={handleAddUser}>
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
    </ViewWrapper>
  )
}

export default AddUser
