import { StyledNav, StyledNavList, StyledLogo, StyledLink } from './Navigation.styles'

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLogo>
        Study <br /> Buddy
      </StyledLogo>
      <StyledNavList>
        <StyledLink className={(navData) => (navData.isActive ? 'active' : null)} to='/'>
          Dashboard
        </StyledLink>
        <StyledLink className={(navData) => (navData.isActive ? 'active' : null)} to='/add-user'>
          Add user
        </StyledLink>
      </StyledNavList>
    </StyledNav>
  )
}

export default Navigation
