import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 120px 1fr;
  grid-template-columns: 200px 1fr 0.75fr;
  background-color: ${({ theme }) => theme.colors.lightLightGrey};
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormWrapper = styled.form`
  width: 580px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  padding: 50px;
`
