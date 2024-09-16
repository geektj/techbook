import React from 'react';
import { HeaderContainer, HeaderRow, Logo,NavBar, MainMenu, MenuItem,NavLinks, FlexBox } from './header.styled';
import { NavItem } from '../../../Data/NavItem';


const Header = () => {

const navItem = NavItem;

    return(
        <HeaderContainer>
            <HeaderRow>
                <Logo>Interview Book</Logo>
                <FlexBox>
                    <NavBar>
                        <MainMenu>
                            {navItem.map((item) => {
                                return(
                                    <MenuItem key={item.id}>
                                        <NavLinks href={item.path}>{item.name}</NavLinks>
                                    </MenuItem>
                                )
                            })}
                        </MainMenu>
                    </NavBar>
                </FlexBox>
            </HeaderRow>
            
        </HeaderContainer>
    )
}
export default Header;