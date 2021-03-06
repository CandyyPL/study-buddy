import Navigation from 'components/Organisms/Navigation/Navigation'
import SearchBar from 'components/Organisms/SearchBar/SearchBar'
import NewsSection from 'components/Templates/NewsSection/NewsSection'
import { Wrapper } from './MainTemplate.styles'

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  )
}

export default MainTemplate
