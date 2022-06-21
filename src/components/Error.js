import React from 'react'
import styled from 'styled-components'
import errorpng from '../common/assets/images/errorpng.svg'
const Error = () => {
  return (
    <Wrapper>
      <div className='error'>
      <img src={errorpng} alt="errorpng"/>
      <p>We can't seem to find the page you are looking for</p>
      </div>
    </Wrapper>
  )
}

export default Error

const Wrapper = styled.div`

.error {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
p {
  margin-top: 15px;
}
`