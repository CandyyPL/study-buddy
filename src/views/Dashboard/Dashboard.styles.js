import { Button } from 'components/Atoms/Button/Button.styles'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 40px;
`

export const GroupInfo = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${StyledTitle} {
    margin: 0;
  }

  ${Button} {
    margin-left: 25px;
    padding: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    a {
      text-decoration: none;
      color: inherit;
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`
