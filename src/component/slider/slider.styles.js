import styled from 'styled-components'
import VideoPlayer from 'react-video-js-player'

export const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
`
export const SliderImageContaienr = styled.div`
    width: 100%;
    height: 60vh;
`
export const SliderImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-left: 4rem;
  

`
export const  SliderVideoContainer = styled.div`
    width: 100%;
    height: 60vh;
    padding: 0;
`

export const VideoSlider = styled(VideoPlayer)`
    width: 100%;
    height: 100%;
`