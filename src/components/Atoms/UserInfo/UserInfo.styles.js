import styled from 'styled-components'

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 20px;
`

export const StyledName = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
`

export const StyledAttendance = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  letter-spacing: 0.5px;
`
