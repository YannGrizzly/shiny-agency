import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Logo from '../../assets/dark-logo.png'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.875rem 1.9rem;

`

const HeaderImage = styled.img`
  width: 11.75rem;
  height: 4.5rem;
    
`

const StyledNav = styled.div`
  align-self: center;
  `

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

function Header() {
  return (
    <HeaderContainer>
    <HeaderImage src={Logo} alt="Logo"></HeaderImage>
    <StyledNav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/freelances">Profils</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
    </StyledNav>
    </HeaderContainer>
  )
}

export default Header
