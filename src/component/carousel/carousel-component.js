import React,{useState} from 'react'
import {CarouselContainer,CarouselImageContainer,CarouselInfoContainer,CarouselImage,ArrowContainer,ArrowLeft,ArrowRight,CarouselPagination,CarouselTextInfo,CarouselTextContainer,CarouselTextDescription,ButtonLearnMore} from './carousel.styles'
import Dots from 'material-ui-dots'
import { Typography } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
const CarouselHomePage = () => {
    const [index,setIndex] = useState(0);
    const [carouseid,setCarouselId] = useState(0)
    return (
        <React.Fragment>
        <CarouselContainer >
            <CarouselImageContainer>
                <CarouselImage src="https://cdn2.unrealengine.com/en-egs-creatorschoice-store-featuredcarousel-1920x1080-1920x1080-972556925.jpg?h=1080&resize=1&w=1920"/>
            </CarouselImageContainer>
            <CarouselInfoContainer>
            <CarouselPagination>
            
                <ArrowContainer>
                    <ArrowLeft />
                    <ArrowRight />
                </ArrowContainer>
                <Dots
                    index={index}
                    count={5}
                    onDotClick={(index) => setIndex( index )}
                />
            </CarouselPagination>
                <CarouselTextContainer>
                 <CarouselTextInfo variant="h5" component="h3">Sales And Specials</CarouselTextInfo>
                 <Typography variant="h3" component="h2" style={{marginTop: '1.5rem'}}>Creators Choice Sale</Typography>
                 <CarouselTextDescription >Discover which titles your favorite Creators have chosen in our Creators Choice event! Savings up to 70% end Sept 24.</CarouselTextDescription>
                 <ButtonLearnMore>Learn More &rarr;</ButtonLearnMore>
                </CarouselTextContainer>
            </CarouselInfoContainer>
          
        </CarouselContainer>   
        </React.Fragment>
    )
}

export default CarouselHomePage