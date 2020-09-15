import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';



  
export const CardContainer = styled(Card)`
    max-width: 345px;
    background-color: transparent !important;
    width: 100%;
    border: none;
    box-shadow: none;
   
    
`

export const CardTitle = styled(Typography)`
    color: var(--theme-ui-primary-text);
 
    font-weight: 600 !important;
`
export const CardStudio = styled(Typography)`
    color: var(--theme-custom-color-primary-body-text  );
    

`
export const CardPriceContainer = styled.div`
    display: flex;
    
`

export const CardPriceDiscount = styled.p`
    display: flex;
    align-items: center;
    color:var(--theme-ui-primary-text);
    background-color: var( --theme-custom-color-accent-hover-inverse);
    padding:  .3rem .5rem;
    font-size: 1.2rem;
    

`

export const CardPriceBeforeDiscount = styled.p`
    font-size: 1.6rem;
    color: var(--theme-custom-color-primary-body-text  );
    text-decoration: line-through;
    padding-left: 1rem;
`
export const CardPrice = styled.p`
    font-size: 1.6rem;
    color: var(--theme-ui-primary-text);
    
    padding-left: 1rem;

`