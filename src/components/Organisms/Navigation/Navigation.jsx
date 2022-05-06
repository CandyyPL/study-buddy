import { auth } from 'auth/firebaseAuth'
import { signOut } from 'firebase/auth'
import { StyledNav, StyledNavList, StyledLogo, StyledLink, LinkLikeText } from './Navigation.styles'

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLogo>
        Study <br /> Buddy
      </StyledLogo>
      <StyledNavList>
        <StyledLink className={(navData) => (navData.isActive ? 'active' : null)} to='/dashboard'>
          Dashboard
        </StyledLink>
        <LinkLikeText onClick={() => signOut(auth)}>Logout</LinkLikeText>
        {/*<StyledLink className={(navData) => (navData.isActive ? 'active' : null)} to='/add-user'>
          Add user
        </StyledLink>*/}
      </StyledNavList>
    </StyledNav>
  )
}

export default Navigation
