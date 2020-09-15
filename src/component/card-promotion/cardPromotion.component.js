import React from 'react'
import CustomButton from './../button/custom-button.component'
import { CardPromotionContainer,CardImage,CardImageContainer,CardPromotionTitle,CardTextContainer,CardPromotionDescription} from './cardPromotion.styles'
const CardPromotion = ({backgroundColor,title,description,button,image}) => {
 
    return (
        <CardPromotionContainer style={{ background: backgroundColor ?  backgroundColor: '#fff'}}>
            <CardTextContainer>
                <CardPromotionTitle>{title}</CardPromotionTitle>
                <CardPromotionDescription>{description}</CardPromotionDescription>
                <CustomButton transparent>{button}</CustomButton>
            </CardTextContainer>
            <CardImageContainer >
                <CardImage  src={image} alt={`photo ${title}`}/>
            </CardImageContainer>
        </CardPromotionContainer>
    )
}

export default CardPromotion