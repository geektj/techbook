import React from 'react';
import { HeaderContainer, HeaderRow, Logo,NavBar, MainMenu, MenuItem,NavLinks, FlexBox } from './header.styled';

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderRow>
                <Logo>Interview Book</Logo>
                <FlexBox>
                    <NavBar>
                        <MainMenu>
                            <MenuItem><NavLinks href='/'>Dashboard</NavLinks></MenuItem>
                            <MenuItem><NavLinks href='/blogs'>Blogs</NavLinks></MenuItem>
                            <MenuItem><NavLinks href='/'>Resources</NavLinks></MenuItem>
                            <MenuItem><NavLinks href='/practice'>Practice Questions</NavLinks></MenuItem>
                            
                        </MainMenu>
                    </NavBar>
                </FlexBox>
            </HeaderRow>
            
        </HeaderContainer>
    )
}
export default Header;