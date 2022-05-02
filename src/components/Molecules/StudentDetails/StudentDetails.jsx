import { StyledTitle } from 'components/Atoms/Title/Title.styles'
import Average from 'components/Atoms/Average/Average'
import { Wrapper, MainInfo, ButtonsArea, SubInfo, SubInfoItem } from './StudentDetails.styles'
import DeleteButton from 'components/Atoms/DeleteButton/DeleteButton'

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <MainInfo>
        <Average avg={student.average}>{student.average}</Average>
        <StyledTitle>{student.name}</StyledTitle>
        <ButtonsArea>
          <DeleteButton />
          <DeleteButton />
          <DeleteButton />
        </ButtonsArea>
      </MainInfo>
      <SubInfo>
        <h5>Course:</h5>
        <p>{student.course}</p>
      </SubInfo>
      <SubInfo>
        <h5>Average grades:</h5>
        {student.subAverages.map((e) => (
          <SubInfoItem>
            <p>{e.subject}</p>
            <Average avg={e.average}>{e.average}</Average>
          </SubInfoItem>
        ))}
      </SubInfo>
    </Wrapper>
  )
}

export default StudentDetails
