import styled, { useTheme } from 'styled-components'

const StyledAverage = styled.div`
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

const Average = ({ avg }) => {
  const theme = useTheme()

  const getProperColor = () => {
    if (+avg < 3) return theme.colors.error
    else if (+avg >= 3 && +avg < 4) return theme.colors.warning
    else return theme.colors.success
  }

  return <StyledAverage getProperColor={getProperColor}>{avg}</StyledAverage>
}

export default Average
