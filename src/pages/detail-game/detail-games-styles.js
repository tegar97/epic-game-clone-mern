import styled from 'styled-components'
import Container from '@material-ui/core/Container';

export const DetaileGamesContainer = styled(Container)`
    padding: 4rem 10rem !important;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {padding: 2rem !important}


/* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) { padding: 4rem 5rem !important;}

/* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) { padding: 4rem 8rem !important;}

`

export const SliderContainer = styled.div`
    padding: 4rem;
`