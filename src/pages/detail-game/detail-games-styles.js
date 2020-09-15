import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core'
import CustomButton from '../../component/button/custom-button.component'

export const DetaileGamesContainer = styled(Container)`
    padding: 2rem 11rem !important;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {padding: 2rem !important}



`

export const SliderContainer = styled.div`
    padding: 4rem;
`

export const SummaryGameInfo = styled.div`
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 600px) {  flex-direction: column;}

`
export const DetailLogoContainer = styled.div`
    background: var(--theme-custom-color-primary);
    border-radius: .5rem;
    padding: 0 7rem;
`

export const DetailTextContainer = styled.div`
    display: flex;
    
    margin-left: 2.5rem;
    
    border-bottom: 2px solid var(--theme-ui-secondary-bg);
    @media only screen and (max-width: 600px) { 
         flex-direction: column;
         text-align: center;
        
         
      
        
        }

`

export const DetailTextDescription = styled(Typography)`
    
    font-size: 1.5rem !important;
    @media only screen and (max-width: 600px) { 
        
        font-size: 1.5rem !important;
         
      
        
        }
   
`
export const DetailGameLogo = styled.img`
    width: 100%;
    @media only screen and (max-width: 600px) {  display: none;}
`

export const OfferButton = styled(CustomButton)`
    margin-left: 2rem;
    @media only screen and (max-width: 600px) {  margin-right: 1rem;margin-top: 2rem;}

`

