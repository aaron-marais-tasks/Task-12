/*
    This file holds my raining effect
*/

// Import styled object, css and keyframes from styled components
import styled, {css, keyframes} from "styled-components"

// Front row has higher z-index
const RainFrontrow = css`
    z-index: 2;
`

// Back row has lower z-index, raised up slightly, and lower opacity
const RainBackrow = css`
    z-index: 1;
    bottom: 60px;
    opacity: 0.5;
`

/* Our rain effect is positioned absolutly, anchored left, taking
    100% width and height, with .5 opacity, and no pointer events */
export const Rain = styled.div`
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: .5;
    pointer-events: none;
    ${props => props.backRow ? RainBackrow : RainFrontrow}
`

/* Raindrop frames */
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

/* Each drop is positioned absolutely, bottom changing with random from 1-5,
    width of 15px, height of 120px, no pointer events, with linear
    animation, random delay and duration, and left/right offset
    based on props passed */
export const Drop = styled.div`
    position: absolute;
    bottom: ${props => props.five * 2 - 1 + 100}%;
    width: 15px;
    height: 120px;
    pointer-events: none;
    animation: ${DropFrames} 0.5s linear infinite;
    animation-delay: 0.${props => props.hundred}s;
    animation-duration: 0.5${props => props.hundred}s;

    ${props => props.right ? "right" : "left"}: ${props => props.step}%;
`

/* Drop stem frames */
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

/* Stems have 1px width, 60% height, 7px left bargin, a linear
    gradient background from top to bottom from low-opacity white to
    quarter-opacity white, and a .5s linear animation */
const Stem = css`
    width: 1px;
    height: 60%;
    margin-left: 7px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
    animation: ${StemFrames} 0.5s linear infinite;
`

/* Droplet splat frames */
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

/* Splat css has 15px width, 10px height, a 2px top dotted half-opaque
    border, 50% border radius, starting at 0x scale, and a .5s linear
    animation */
const Splat = css`
    width: 15px;
    height: 10px;
    border-top: 2px dotted rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    opacity: 1;
    transform: scale(0);
    animation: ${SplatFrames} 0.5s linear infinite;
`

/* Effect component generates a splat or stem depending on props.
    Also changes animation delay and duration */
export const Effect = styled.div`
    ${props => props.splat ? Splat : Stem}

    animation-delay: 0.${props => props.hundred}s;
    animation-duration: 0.5${props => props.hundred}s;
`
