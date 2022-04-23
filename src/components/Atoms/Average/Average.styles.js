import styled from 'styled-components'

export const StyledAverage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ getProperColor }) => getProperColor()};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 600;
`
