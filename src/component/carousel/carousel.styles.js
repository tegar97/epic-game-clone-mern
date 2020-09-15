import styled from 'styled-components'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Typography } from '@material-ui/core';

export const CarouselContainer = styled.section`
    height: 40rem;
    background-color: var(--theme-custom-color-primary-bg);
    display: flex;
    @media only screen and (max-width: 600px) {flex-direction: column;height: auto}

    margin-bottom: 2rem;

`

export const CarouselImageContainer = styled.div`
    display: flex;
    flex-basis: 60%;

`

export const CarouselInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem;
    flex-basis: 40%;
    height: 100%;

    @media only screen and (max-width: 600px) {
        padding: 2rem;
       
    }

`
export const CarouselImage = styled.img`
    width: 100%;
    object-fit: cover;

`

export const ArrowContainer = styled.div`
    display: flex;
    height: 1rem;
    margin-top: 2rem;
    @media only screen and (max-width: 600px) {
        display: none;
       
    }

   
    
`

export const ArrowLeft = styled(ArrowBackIcon)`
   

    &:hover{
        background-color: #fff;
    }
`
export const ArrowRight = styled(ArrowForwardIcon)`
    margin-left: 2rem;
   
  

    &:hover{
        background-color: rgba(255, 255, 255,.5);

    }
`

export const CarouselPagination = styled.div`
    width: 100%;
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    
`

export const CarouselTextInfo = styled(Typography)`
    font-size: 1.5rem;
    color: rgba(255,255,255,0.50);
  
    
`

export const CarouselTextContainer = styled.div`
    margin-top: 2.5rem;
`

export const CarouselTextDescription = styled.p`
    font-size: 1.3rem;
    color: rgba(255,255,255,0.50);
    margin-top: 2.5rem;
    margin-bottom: 5rem;
    font-weight: 300 ;
`

export const ButtonLearnMore = styled.a`

    font-size: 1.5rem;
    padding-top: 2rem;
    

`