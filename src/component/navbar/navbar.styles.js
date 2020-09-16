import styled,{css} from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import CustomButton from '../button/custom-button.component';
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const NavbarContainer = styled.div`
    flex-grow: 1;
    
`
export const ToolbarContainer = styled(Toolbar)`
    width: 100%;
    height: 100%;

`
export const AppBarContainer = styled(AppBar)`
    background-color: var(--theme-ui-secondary-bg) !important;
    display: flex;
    
    
`
export const LogoContainer  = styled.div`
    padding-right: 3rem;
    @media only screen and (max-width: 600px) {margin-right: 40rem;}


    
`

const active = css`
    border-bottom: 5px solid var(--theme-custom-color-accent-hover);
    margin-top: 20px;
`
export const ImageLogo = styled.img`
    width: 3.5rem;
    height: 3.5rem;

    
`

const getMenuActive = props => {
    if (props.active) {
      return active;
    }
};
export const MenuItem = styled(Typography)`
  color: var(--theme-custom-color-primary-body-text);
  font-size: 1.1rem;
  padding-right: 2.5rem;
  cursor: pointer;


  text-transform: uppercase;
 
`

export const MenuItemContainer = styled.div`
    display: flex ;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    
   
`
export const MenuItemContainerLeft = styled.div`
    display: flex;
    @media only screen and (max-width: 600px) {display: none;}


   

   
`
export const MenuItemContainerRight = styled.div`
    display: flex;

   
   
`

export const LoginButton = styled(CustomButton)`
    height: 100%;
    @media only screen and (max-width: 600px) {display: none}

`

export const IconButtonContainer = styled(IconButton)`
    background-color: #4285f4 !important;
    border-radius: 0% !important;
    @media only screen and (min-width: 720px) {display: none !important}


   
`

export const IconMenu = styled(MenuIcon)`
        @media only screen and (min-width: 720px) {display: none}

`