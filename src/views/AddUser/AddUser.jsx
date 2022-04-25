import { useContext, useEffect, useReducer, useRef } from 'react'
import { Wrapper } from 'components/Templates/Wrapper/Wrapper.styles'
import { StyledTitle } from './AddUser.styles'
import FormField from 'components/Molecules/FromField/FromField'
import { Button } from 'components/Atoms/Button/Button.styles'
import { UsersContext } from 'providers/UsersProvider'

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
}

const reducerActions = {
  inputChange: 'INPUT CHANGE',
  clearFields: 'CLEAR FIELDS',
  toggleConsent: 'TOGGLE CONSENT',
  throwError: 'THROW ERROR',
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerActions.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      }
    case reducerActions.clearFields:
      return initialFormState
    case reducerActions.toggleConsent:
      return {
        ...state,
        consent: !state.consent,
      }
    case reducerActions.throwError:
      return {
        ...state,
        error: action.errorValue,
      }
    default:
      return state
  }
}

const AddUser = () => {
  const context = useContext(UsersContext)

  const [formValues, dispatch] = useReducer(reducer, initialFormState)

  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleInputChange = (e) => {
    dispatch({ type: reducerActions.inputChange, field: e.target.name, value: e.target.value })
  }

  const handleSubmitUser = (e) => {
    e.preventDefault()
    if (formValues.name && formValues.attendance && formValues.average && formValues.consent) {
      context.handleAddUser(formValues)
      dispatch({ type: reducerActions.clearFields })
    } else {
      dispatch({ type: reducerActions.throwError, errorValue: 'You need to give consent' })
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
        onChange={() => dispatch({ type: reducerActions.toggleConsent })}
      />
      <Button type='submit'>Save</Button>
      {formValues.error && <h3>{formValues.error}</h3>}
    </Wrapper>
  )
}

export default AddUser
