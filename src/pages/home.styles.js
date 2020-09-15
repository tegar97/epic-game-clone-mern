import styled,{css} from 'styled-components';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';

export const HomeContainer = styled(Container)`
    padding: 4rem 10rem !important;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {padding: 2rem !important}


/* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) { padding: 4rem 5rem !important;}

/* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) { padding: 4rem 8rem !important;}

`


export const CardImageContainer = styled(CardMedia)`
    height: 140px;
`

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  padding: 1rem 0;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1
  }
  `
