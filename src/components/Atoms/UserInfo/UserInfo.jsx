import { StyledUserInfo, StyledName, StyledAttendance } from './UserInfo.styles'

const UserInfo = ({ userData: [name, attendance] }) => {
  return (
    <StyledUserInfo>
      <StyledName>{name}</StyledName>
      <StyledAttendance>attendance: {attendance}</StyledAttendance>
    </StyledUserInfo>
  )
}

export default UserInfo
