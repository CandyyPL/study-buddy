import styled from 'styled-components'

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 25px;
`

export const StyledName = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.mm};
  font-weight: 700;
`

export const StyledAttendance = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.ss};
  font-weight: 400;
  letter-spacing: 0.5px;
`
