import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const transparentInStyles = css`
  background-color: rgba(255, 255, 255,.4);
  color: white;
  border: #4285f4;


  &:hover {
    background-color: rgba(255, 255, 255,.5);

    border: none;
  }
`;
const ButtonOffer = css`
background-color: transparent;
color: white;
border: 1px solid rgb(0, 254, 255);


&:hover {
  background-color: rgba(255, 255, 255,.2);


}
`
const BuyBotton = css`
  background-color: rgb(0, 254, 255);;
  color: black;
  border: 1px solid rgb(0, 254, 255);


&:hover {
  opacity: 90%;


}
`
const chartButton = css`
background-color: rgba(255, 255, 255,.4);
color: white;
border: #4285f4;

&:hover {
  background-color: rgba(255, 255, 255,.5);

  border: none;
}
`
const loginButton = css`
  background-color: #4285f4;
  color: white;
  border: #4285f4;

  &:hover {
    background-color: rgba(255, 255, 255,.5);

    border: none;
  }
`
export const disabled = css`
  color: rgba(255, 255, 255,.5);
  background-color: black;
  

`

const getButtonStyles = props => {
  if (props.transparent) {
    return transparentInStyles;
  }else if(props.ButtonOffer) {
    return ButtonOffer
  }
  else if(props.BuyBotton) {
    return BuyBotton
  }
  else if (props.chartButton) {
    return chartButton
  }
  else if(props.loginButton) {
    return loginButton
  }
  else if(props.disabled) {
    return disabled 
  }
  

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyles}
`;