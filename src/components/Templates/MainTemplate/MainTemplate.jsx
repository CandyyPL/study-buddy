import Navigation from 'components/Organisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.styles'

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  )
}

export default MainTemplate
