import styled, {css, keyframes} from "styled-components"

const RainFrontrow = css`
    z-index: 2;
`

const RainBackrow = css`
    z-index: 1;
    bottom: 60px;
    opacity: 0.5;
`

export const Rain = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    ${props => props.backRow ? RainBackrow : RainFrontrow}
`

const DropFrames = keyframes`
    0% {
        transform: translateY(0vh);
    }
    75% {
        transform: translateY(90vh);
    }
    100% {
        transform: translateY(90vh);
    }
`

export const Drop = styled.div`
    position: absolute;
    bottom: ${props => props.five * 2 - 1 + 100}%;
    width: 15px;
    height: 120px;
    pointer-events: none;
    animation: ${DropFrames} 0.5s linear infinite;
    animation-delay: 0.${props => props.hundred}s;
    animation-duration: 0.5${props => props.hundred}s;

    ${
        props => props.right ? "right" :
            props.left ? "left" :
            "right"
    }: ${props => props.step}%;
`

const StemFrames = keyframes`
    0% {
        opacity: 1;
    }
    65% {
        opacity: 1;
    }
    75% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`
const Stem = css`
    width: 1px;
    height: 60%;
    margin-left: 7px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
    animation: ${StemFrames} 0.5s linear infinite;
`

const SplatFrames = keyframes`
    0% {
        opacity: 1;
        transform: scale(0);
    }
    80% {
        opacity: 1;
        transform: scale(0);
    }
    90% {
        opacity: 0.5;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1.5);
    }
`

const Splat = css`
    width: 15px;
    height: 10px;
    border-top: 2px dotted rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    animation: ${SplatFrames} 0.5s linear infinite;
`

export const Effect = styled.div`
    ${props => props.splat ? Splat : props.stem ? Stem : Splat}

    animation-delay: 0.${props => props.hundred}s;
    animation-duration: 0.5${props => props.hundred}s;
`
