import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.header`
    background-color: ${theme.colors.white};
    width: 100%;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14),0 7px 12px -5px rgba(144,164,174,.46);
    height: 60px;
    padding: 10px 0px;
    display: flex;
    align-items: center;

`

export const HeaderRow = styled.div `
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 90%;
`
export const Logo = styled.div`
    
`
export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
`
export const NavBar = styled.nav`
   
`
export const MainMenu = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
`
export const MenuItem = styled.li`

`

export const NavLinks = styled.a`
    text-decoration: none;
    color: ${theme.colors.black}
`
