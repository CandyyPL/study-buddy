import { SearchBarWrapper, StatusInfo, Input, SearchBarArea, MatchList } from './SearchBar.styles'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [matchingStundents, setMatchingStudents] = useState([])
  const [showMatchList, setShowMatchList] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    axios.get('/students').then(({ data: { students } }) => {
      const matching = students.filter(({ name }) => {
        if (name.toLowerCase().includes(inputValue.toLowerCase())) return true
        else return false
      })
      setMatchingStudents(matching)
    })
  }, [inputValue])

  useEffect(() => {
    setShowMatchList(inputValue && matchingStundents.length)
  }, [inputValue, matchingStundents])

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchBarArea>
        {showMatchList ? (
          <Input withList placeholder='find student' value={inputValue} onChange={handleInputChange} />
        ) : (
          <Input placeholder='find student' value={inputValue} onChange={handleInputChange} />
        )}
        {showMatchList ? (
          <MatchList>
            {matchingStundents.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </MatchList>
        ) : null}
      </SearchBarArea>
    </SearchBarWrapper>
  )
}

export default SearchBar
