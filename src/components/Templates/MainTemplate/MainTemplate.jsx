import Navigation from 'components/Organisms/Navigation/Navigation'
import { Wrapper } from './MainTemplate.styles'
import styled from 'styled-components'

const SearchBar = styled.div`
  grid-row: 1/2;
  grid-column: 2;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`

const News = styled.div`
  grid-row: 1/3;
  grid-column: 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
`

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News />
    </Wrapper>
  )
}

export default MainTemplate
