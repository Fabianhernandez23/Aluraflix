import { styled } from 'styled-components';
import './Footer.css';
import logo from "/src/assets/logo.png"

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg);
    padding: 2rem;
    box-sizing: border-box;
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
    background-color: var(--color-bg);
    border-top: 2px solid rgba(0, 123, 255, 0.4);
    box-shadow: 0px 4px 6px 9px rgba(0, 123, 255, 0.8);

`;

const IconContainer = styled.ul`
    background-color: transparent;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        background-color: var(--color-bg);
        display: inline-block;
        padding: 0.5rem;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: clamp(30%, 100%, 10.528rem); 
        height: auto;
        background-color: var(--color-bg);
    }
`;

const FooterText = styled.p`
    background-color: transparent;
    font-size: 13px;
    color: var(--color-white-smoke);
    margin: 0;
    line-height: 1.4;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <LogoContainer className='logo'>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <IconContainer>
               <br>
               </br>
            </IconContainer>
            <FooterText className='text'>
                © 2024 - All rights reserved.
            </FooterText>
        </StyledFooter>
    );
}

export default Footer