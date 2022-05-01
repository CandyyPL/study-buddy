import {
  SearchBarWrapper,
  StatusInfo,
  Input,
  SearchBarArea,
  StyledResults,
  StyledResultsItem,
} from './SearchBar.styles'
import { useEffect, useState } from 'react'
import { useCombobox } from 'downshift'
import { useStudents } from 'hooks/useStudents'

const SearchBar = () => {
  const [allStudents, setAllStudents] = useState([])
  const [matchingStundents, setMatchingStudents] = useState([])

  const { getStudents } = useStudents()

  useEffect(() => {
    getStudents().then(({ data: { students } }) => setAllStudents(students))
  }, [])

  const getMatchingStudents = ({ inputValue }) => {
    const matching = allStudents.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()))

    if (matching.length) setMatchingStudents(matching)
    else setMatchingStudents([{ id: '404', name: 'No matches found' }])
  }

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStundents,
    onInputValueChange: getMatchingStudents,
  })

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchBarArea {...getComboboxProps()}>
        <Input isWithList={isOpen} placeholder='find student' {...getInputProps()} />
        <StyledResults isVisible={isOpen} {...getMenuProps()}>
          {isOpen &&
            matchingStundents.map((item, index) => (
              <StyledResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={item.id}
              >
                {item.name}
              </StyledResultsItem>
            ))}
        </StyledResults>
      </SearchBarArea>
    </SearchBarWrapper>
  )
}

export default SearchBar
