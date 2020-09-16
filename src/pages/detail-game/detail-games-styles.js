import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core'
import CustomButton from '../../component/button/custom-button.component'
import {ReactComponent as Windows} from './svg/windows.svg'

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
    @media only screen and (max-width: 600px) {  margin-right: 1rem;margin-top: 2rem;};

`

export const AboutGame = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    @media only screen and (max-width: 600px) {     
        flex-direction: column;
        padding: 3rem;
    }


`
export const AboutGameWrap = styled.div`
    display: flex;
    flex-basis: 28%;
`

export const AboutGameTextWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    
   
        

    
`
export const AboutGameDetail = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem 23.5rem;
    @media only screen and (max-width: 600px) {     
        grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    }

    
    

`

export const AboutGameTitle = styled(Typography)`
    font-size: 1.7rem !important;
    font-weight: 400 !important;
    color: #f5f5f5;
    opacity: 70%;
    margin-bottom: .8rem !important;

    
`

export const AboutGameText = styled(Typography)`
    font-size: 1.25rem !important;
    font-weight: medium !important;
    font-family: sans-serif; 
`

export const SvgWrapper = styled(Windows)`
    width: 2rem;
    fill: #fff;
    &:not(:first-child):not(:last-child) {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
  
`
export const AboutDescription = styled.div`
  
    width: 100%;
    padding-left: 28%;
    margin-top: 5rem;
    @media only screen and (max-width: 600px) {padding-left: 0;};

`
export const AboutGameDescription = styled.span`
    font-size: 1.3rem;
    color: #f5f5f5;
    opacity: 60%;
   
    margin-bottom: 1rem !important;
   
`


export const GamesBuyContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 600px) {    flex-direction: column;};

    width: 100%;
    margin-top: 5rem;
`

