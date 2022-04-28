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
  margin-right: 60px;

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

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.2);
  }
`
