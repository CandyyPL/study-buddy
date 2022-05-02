import Average from 'components/Atoms/Average/Average'
import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 20px;
`

export const MainInfo = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  ${StyledTitle} {
    margin: 0;
    margin-left: 25px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

export const ButtonsArea = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const SubInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  margin-top: 40px;

  h5 {
    margin: 0;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`

export const SubInfoItem = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 40%;
  }
`
