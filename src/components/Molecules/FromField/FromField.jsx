import PropTypes from 'prop-types'
import { Input } from 'components/Atoms/Input/Input.styles'
import { Label } from 'components/Atoms/Label/Label.styles'
import { Wrapper } from './FormField.styles'

const FormField = ({ label, name, id, type = 'text', onChange, value }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} onChange={onChange} value={value} />
    </Wrapper>
  )
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default FormField
