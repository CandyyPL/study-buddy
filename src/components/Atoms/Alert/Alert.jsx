import { StyledAlert } from './Alert.styles'

const Alert = ({ color, children }) => {
  return <StyledAlert color={color}>{children}</StyledAlert>
}

export default Alert
