import styled from 'styled-components'
import Logo from 'assets/fampaylogo.svg'

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

const Navbar = () => {
  return (
    <NavbarWrapper>
      <img src={Logo} alt="FamPay Logo" />
    </NavbarWrapper>
  )
}

export default Navbar
