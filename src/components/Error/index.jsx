import styled from 'styled-components'
import ErrorImg from '../../assets/404.svg'

const ErrorContainer = styled.div`
 display: grid;
 justify-content: center;
 align-items: center;
 text-align: center;
`

const ErrorImage = styled.img`
  width: 33.75rem;
  height: 31.625rem;
`

function Error() {
  return (
    <ErrorContainer>
      <h1>Oups...</h1>
      <ErrorImage src={ErrorImg}></ErrorImage>
      <h2>Ile semblerait qu'il y ait un problème</h2>
    </ErrorContainer>
  )
}

export default Error
