import styled from 'styled-components'

export const CardBuyContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var( --theme-ui-secondary-bg);
    width: 100%;
    flex-basis: 70%;
`

export const CardContentContainer = styled.div`
 
    display: flex;  
    @media only screen and (max-width: 600px) {            flex-direction: column;;};

`
export const CardBuyImageContainer = styled.div`
    display: flex;

    flex-basis: 42%;
    

    

`

export const ButtonContainer = styled.div`
    width: 50%;
    display: flex;
    
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 600px) {flex-direction: row;    width: 100%;
}

`



export const CardImage = styled.img`
    width: 100%;
    object-fit: cover;
`

export const CardBuyText = styled.div`
    display: flex;
    flex-basis: 58%;

    border-bottom: 1px solid rgba(255,255,255,.3);
    padding: 3rem;
`
export const  TextContainer = styled.div`
    display: flex;
    flex-direction: column;

`

export const CardContentFooter = styled.div`
    display: flex;

    padding: 2rem;
    justify-content: space-between;
    
    align-items: center;
    @media only screen and (max-width: 600px) {    flex-direction: column;}

`

export const CardContentPrice = styled.span`
    font-size: 1.9rem;
    font-weight: 400;
    font-family: 'Grandstander', cursive;
        margin-left: 20rem;
    @media only screen and (max-width: 600px) {        
        margin-left: 0;
        margin-bottom: 1rem;
}

`