import styled from 'styled-components'

export const CardPromotionContainer = styled.section`

  
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   position: relative;
   height: 45rem;
   margin-top: 5rem;
   margin-bottom: 5rem;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {  display: flex; flex-direction: column;height:20rem}

/* Small devices (portrait tablets and large phones, 600px and up) */





`

export const CardImageContainer = styled.div`
    position: absolute;

    top: -12%;

    width: 60%;
    right: 2%;
     /* Extra small devices (phones, 600px and down) */
     @media only screen and (max-width: 600px) {display: none;}



`
export const CardImage = styled.img`
    
    width: 100%;
    height: 100%;
    object-fit: cover;
    

`

export const CardPromotionTitle = styled.h4`
    font-family: 'Grandstander', cursive;
    font-size: 5.5rem;
    @media only screen and (max-width: 600px) {   font-size: 3rem;}


`

export const CardPromotionDescription = styled.p`
    font-family: 'Grandstander', cursive;
    font-size: 2.2rem;
    margin-bottom: 1rem;
    color: var(--theme-custom-color-primary-body-text  );
    @media only screen and (max-width: 600px) {   font-size: 1.5rem;}

`

export const CardTextContainer = styled.div`
    padding: 10rem 5rem;
    width: 50%;
    
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) { padding: 3rem 1.5rem; width: 100%}
`