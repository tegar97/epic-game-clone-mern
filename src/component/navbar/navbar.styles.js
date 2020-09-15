import styled,{css} from 'styled-components';

import Typography from '@material-ui/core/Typography';




export const NavbarContainer = styled.div`
    flex-grow: 1;
    
`
export const AppBarContainer = styled.div`
    background-color: var(--theme-ui-secondary-bg);
    display: flex;
    
`
export const LogoContainer  = styled.div`
    padding-right: 3rem;
    
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
    display: flex;
    flex-direction: row;
   
`
export const MenuItemContainerLeft = styled.div`
    display: flex;

   
`
export const MenuItemContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
   
`

