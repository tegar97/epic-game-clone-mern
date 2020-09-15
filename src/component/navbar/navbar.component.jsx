import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';


import {MenuItemContainer,AppBarContainer,NavbarContainer,LogoContainer,ImageLogo,MenuItem,MenuItemContainerLeft,MenuItemContainerRight,CardPrice} from './navbar.styles'


export default function Navbar() {

  return (
    <NavbarContainer>
      <AppBarContainer position="static" >
        <Toolbar >
          <LogoContainer edge="start"  color="inherit" aria-label="menu">
           <ImageLogo src="https://cdn2.unrealengine.com/Unreal+Engine%2Feg-logo-filled-1255x1272-0eb9d144a0f981d1cbaaa1eb957de7a3207b31bb.png" />
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
           <MenuItemContainerRight  mr="auto">
             <MenuItem variant="h6"> 
             News
             </MenuItem>
           </MenuItemContainerRight>
           </MenuItemContainer>
        </Toolbar>
      </AppBarContainer>
    </NavbarContainer>
  );
}
