import { useReducer } from 'react'

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearFields: 'CLEAR FIELDS',
  toggleConsent: 'TOGGLE CONSENT',
  throwError: 'THROW ERROR',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      }
    case actionTypes.clearFields:
      return action.initialValues
    case actionTypes.toggleConsent:
      return {
        ...state,
        consent: !state.consent,
      }
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      }
    default:
      return state
  }
}

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues)

  const handleInputChange = (e) => {
    dispatch({ type: actionTypes.inputChange, field: e.target.name, value: e.target.value })
  }

  const handleClearFields = () => {
    dispatch({ type: actionTypes.clearFields, initialValues })
  }

  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage })
  }

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.toggleConsent })
  }

  return {
    formValues,
    handleInputChange,
    handleClearFields,
    handleThrowError,
    handleToggleConsent,
  }
}
