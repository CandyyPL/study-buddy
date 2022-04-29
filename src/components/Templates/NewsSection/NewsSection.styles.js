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
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

export const NewsItem = styled.div`
  width: auto;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  padding: 40px;

  p {
    color: #666;
    line-height: 25px;
  }

  &:not(:last-child) {
    margin-bottom: 35px;
  }

  &:last-child {
    margin-bottom: 50px;
  }

  ${Button} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`

export const ArticleTitle = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};

  h3 {
    margin: 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
  }
`

export const ArticleBody = styled.div`
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled.button`
  width: 100px;
  height: 28px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  margin: 20px 0;
  padding: 10px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.ss};
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
