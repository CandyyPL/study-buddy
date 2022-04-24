import styled from 'styled-components'

export const StyledNav = styled.nav`
  position: absolute;
  width: 180px;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.lightLightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const StyledLogo = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transform: translateY(40px);
  padding: 20px;
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const StyledNavList = styled.ul`
  width: 100%;
  transform: translateY(50px);
  padding: 20px;
  list-style: none;
  text-align: right;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    width: 100%;
    text-align: right;
    margin: 25px 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
  }
`
