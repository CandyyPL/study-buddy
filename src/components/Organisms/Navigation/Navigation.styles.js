import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNav = styled.nav`
  width: 200px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightLightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const navBottomElevation = 40
export const StyledLogo = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: translateY(${navBottomElevation}px);
  padding: 30px;
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const StyledNavList = styled.div`
  width: 100%;
  min-height: 500px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 30px;
  transform: translateY(${navBottomElevation}px);
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  position: relative;
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    width: 20px;
    height: 3px;
    top: 46%;
    right: -30px;
  }

  &.active {
    ::after {
      opacity: 0.8;
    }
  }
`

export const LinkLikeText = styled.p`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  position: relative;
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
