import Card from '../../components/Card'
import colors from '../../utils/style/colors'
import styled from 'styled-components'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const Layout = styled.div`
  display: grid;
  gap: 6.25rem;
`

const TitlesContainer = styled.div`
  display: grid;
  gap: 24px;
`

const Title = styled.h1`
display: flex;
justify-content: center;
`

const SubTitle = styled.h2`
display: flex;
justify-content: center;
color: ${colors.secondary};
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

function Freelances() {
  return (
    <Layout>
      <TitlesContainer>
      <Title>Trouvez votre prestataire
</Title>
<SubTitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</SubTitle>
</TitlesContainer>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </Layout>
  )
}

export default Freelances
