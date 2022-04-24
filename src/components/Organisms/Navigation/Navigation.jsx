import { StyledNav, StyledNavList, StyledLogo } from './Navigation.styles'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLogo>
        Study <br /> Buddy
      </StyledLogo>
      <StyledNavList>
        <Link to='/'>
          <li>Dashboard</li>
        </Link>
        <Link to='/add-user'>
          <li>Add user</li>
        </Link>
        <Link to='/settings'>
          <li>Settings</li>
        </Link>
        <Link to='/logout'>
          <li>Logout</li>
        </Link>
      </StyledNavList>
    </StyledNav>
  )
}

export default Navigation
