import styled from 'styled-components'
import colors from '../../utils/style/colors'
import HomeImg from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;
    padding: 4rem;
    gap: 3rem;
    background-color: ${colors.backgroundLight};
`

const LeftContainer =styled.div`
display: flex;
flex-direction: column;
align-content: center;
gap: 60px;
padding: 0 140px;
`

const Button =styled.a`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 260px;
height: 40px;
color: white;
border-radius: 30px;
background-color: ${colors.primary};
`

const HomeImage = styled.img`
  width: 33.75rem;
  height: 31.625rem;
    
`

function Home() {
  return (
    <HomeContainer>
      <LeftContainer>
      <h1> Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</h1>
      <Button>Faire le test</Button>
      </LeftContainer>
      <HomeImage src={HomeImg}></HomeImage>
    </HomeContainer>
  )
}

export default Home
