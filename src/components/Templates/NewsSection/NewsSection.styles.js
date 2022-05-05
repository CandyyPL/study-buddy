import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  overflow-y: auto;

  ${StyledTitle} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`
