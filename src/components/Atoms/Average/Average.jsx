import { useTheme } from 'styled-components'
import { StyledAverage } from './Average.styles'

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
