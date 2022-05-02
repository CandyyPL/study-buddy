import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 80px;
  cursor: pointer;

  :not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`
