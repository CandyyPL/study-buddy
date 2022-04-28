import { Button } from 'components/Atoms/Button/Button.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-row: 1/3;
  grid-column: 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 40px;

  ${StyledTitle} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

export const NewsItem = styled.div`
  width: 500px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  padding: 50px;

  p {
    color: #666;
    line-height: 25px;
  }

  :not(:last-child) {
    margin-bottom: 50px;
  }

  ${Button} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`
