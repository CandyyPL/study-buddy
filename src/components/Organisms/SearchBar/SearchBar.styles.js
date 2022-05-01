import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  text-align: left;
`

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  white-space: nowrap;

  p {
    margin: 0;

    strong {
      font-size: ${({ theme }) => theme.fontSize.ll};
    }
  }
`

export const Input = styled.input`
  width: 60%;
  height: 50%;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  padding: 10px 25px;
  font-size: ${({ theme }) => theme.fontSize.mm};
  transition: all 0.1s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.2);
  }

  border-bottom-left-radius: ${({ isWithList }) => (isWithList ? 0 : '50px')};
  border-bottom-right-radius: ${({ isWithList }) => (isWithList ? 0 : '50px')};
`

export const SearchBarArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`

export const StyledResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  width: 60%;
  height: fit-content;
  max-height: 500px;
  overflow-y: auto;
  position: absolute;
  top: 75%;
  left: 0;
  margin: 0;
  padding: 15px 10px;
  background-color: #fff;
  list-style: none;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.1);
`

export const StyledResultsItem = styled.li`
  width: 90%;
  min-height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  position: relative;
  padding: 0 10px;
  transition: all 0.2s;

  :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  :not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }

  :hover {
    background-color: #eee;
  }

  background-color: ${({ isHighlighted: isHl }) => (isHl ? '#eee' : 'white')};
`
