import styled from 'styled-components'
import { Button } from 'components/Atoms/Button/Button.styles'

export const NewsItemWrapper = styled.div`
  width: auto;
  height: 350px;
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
  justify-content: space-around;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 10px 0;
`

export const StyledButton = styled.button`
  width: 150px;
  height: 28px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  margin: 20px 0;
  padding: 12px 50px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`
