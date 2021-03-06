import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';


import {MenuItemContainer,AppBarContainer,NavbarContainer,LogoContainer,ImageLogo,MenuItem,MenuItemContainerLeft,MenuItemContainerRight,CardPrice,ToolbarContainer,LoginButton,IconButtonContainer,IconMenu} from './navbar.styles'
import { Link } from 'react-router-dom';


export default function Navbar() {

  return (
    <NavbarContainer>
      <AppBarContainer   position="fixed" >
        <ToolbarContainer >
          <LogoContainer edge="start"  color="inherit" aria-label="menu">
            <Link to="/">
              <ImageLogo src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png" />
            
            </Link>
          </LogoContainer>
          <MenuItemContainer>
            
            <MenuItemContainerLeft >          
              <MenuItem variant="h6"  >
                Store
              </MenuItem>
              <MenuItem variant="h6"> 
                News
              </MenuItem>
              <MenuItem variant="h6"> 
                FAQ
              </MenuItem>
              <MenuItem variant="h6"> 
                Help
              </MenuItem>
              <MenuItem variant="h6" >  
                Unreal Engine
              </MenuItem>
            </MenuItemContainerLeft>
              <MenuItemContainerRight >
               <LoginButton loginButton>Login</LoginButton>
               <IconButtonContainer edge="start"  color="inherit" aria-label="menu">
                <IconMenu/>
              </IconButtonContainer>
              </MenuItemContainerRight>
           </MenuItemContainer>
        </ToolbarContainer>
      </AppBarContainer>
    </NavbarContainer>
  );
}
