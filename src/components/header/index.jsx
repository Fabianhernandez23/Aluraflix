import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import HeaderLink from "../headerLink";
import styled from "styled-components";

const HeaderStyled = styled.header`

display: flex;
justify-content: space-between;
align-items: center;
padding: 2.4rem 2.5rem;
background-color: var(--color-bg);
border-bottom: 2px solid rgba(0, 123, 255, 0.4);
box-shadow: 1px 4px 6px 9px rgba(0, 123, 255, 0.8);


a{ text-decoration: none;}

section {
    height: auto;
    display: flex;
    align-items: center;
    background-color: var(--color-bg);
}

nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-bg);
}

img {
    width: 170px;
    height: 42px;
    align-self: start;
}

div {
    display: flex;
    justify-content: space-around;
    background-color: var(--color-bg);
}


@media (max-width: 600px) {
    header {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 70px;
        right: 5px;
        background-color: var(--color-dark-gray-border);
        padding: 1rem;
        border-radius: 5px;
        z-index: 10;
    }

}
`

function Header() {

    return (
        <HeaderStyled>
            <Link to="/">
                <section >
                    <img src={logo} alt="Logo Alura" />
                </section>
            </Link>
            <nav>
                <div>
                    <HeaderLink url="./">INICIO</HeaderLink>
                    <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink>
                </div>
            </nav>
        </HeaderStyled>
    );
}

export default Header;