import { SearchBarWrapper, StatusInfo, Input } from './SearchBar.styles'

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input placeholder='find student' />
    </SearchBarWrapper>
  )
}

export default SearchBar
