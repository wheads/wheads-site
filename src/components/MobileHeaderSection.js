import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from './logo.svg'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px;
  background-color: #e8f0e8;

  @media (max-width: 767px) {
    padding: 22px 32px;
  }
`;

const Header = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 0;
  display: block;

  @media (max-width: 1023px) {
    width: 200px;
  }
`;

const MenuLink = styled(Link)`
  margin-left: 24px;
  font-size: 20px;
  text-decoration: none;
  color: #69757a;
  border-bottom: 2px solid #f5f7f8;
  width: 100%;
  
  &:hover {
    color: #424242;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 10px;
  }
`;

class MobileHeaderSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(e) {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    const { imgAltTitle, mobileMenuLink1, mobileMenuLink2, mobileMenuLink3, mobileMenuLink4 } = this.props;

    return (
      <HeaderContainer>
        <Header>
          <Link to="/" style={{ textDecoration: `none`}}>
            <Logo src={logo} alt={imgAltTitle} />
          </Link>
        </Header>
        <div>
          <p style={{color:`#00b9ff`,fontWeight:`bold`,marginBottom:`0`}} onClick={this.showMenu}>
            MENU
          </p>
          
          {
            this.state.showMenu
              ? (
                <div
                  style={{
                    position:`fixed`,
                    top:`0`,
                    bottom:`0`,
                    left:`0`,
                    right:`0`,
                    backgroundColor:`#e8f0e8`,
                    zIndex:`999`
                  }}  
                >
                  <div
                    style={{
                      display:`flex`,
                      flexDirection:`row`,
                      alignItems:`center`,
                      justifyContent:`space-between`,
                      maxWidth:`1200px`,
                      padding:`22px 32px`,
                      margin:`auto`,
                      backgroundColor:`#fff`
                    }}
                  >
                    <div>
                      <Link to="/">
                        <Logo src={logo} alt="EveryPeso.com" />
                      </Link>
                    </div>
                    <p style={{color:`#00b9ff`,fontWeight:`bold`,marginBottom:`0`}} onClick={this.closeMenu}>
                      CLOSE
                    </p>
                  </div>  
                  <div 
                    style={{
                      display:`flex`,
                      flexDirection:`column`,
                      padding:`32px`
                    }}
                    className="menu"
                  >
                    <MenuLink to="/">Home</MenuLink>
                    <MenuLink to={mobileMenuLink1}>Get Started</MenuLink>
                    <MenuLink to={mobileMenuLink2}>Classes</MenuLink>
                    <MenuLink to={mobileMenuLink3}>Tools</MenuLink>
                    <MenuLink to={mobileMenuLink4}>Contact</MenuLink>
                  </div>
                </div>
              )
              : (
                null
              )
          }        
        </div>
      </HeaderContainer>  
    );
  }
}

export default MobileHeaderSection