/*
  This file holds my mist/fog/haze effect
*/

// Import styled object, css and keyframes from styled components
import styled, {css, keyframes} from "styled-components"

// Import fog images
import Fog_1 from "../../Images/fog-1.png"
import Fog_2 from "../../Images/fog-2.png"

// Fog drift effect
const DriftKeyframes = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-200vw, 0, 0); }
`

// Before mist, have a background image moving
const BeforeMist = css`
  &:before {
    background-image: url(${Fog_1});
    animation: ${DriftKeyframes} 60s linear 0s infinite;
  }
`

// After mist, have a background image moving
const AfterMist = css`
  &:after {
    background-image: url(${Fog_2});
    animation: ${DriftKeyframes} 25s linear 0s infinite;
  }
`

/* Before and after mist, set content to empty, positioned absolutely,
  anchored top and left, with 300% width, background contained in
  the meeta-element, centered and repeating on X axis */
const BeforeAfterMist = css`
  &:before, &:after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    width: 300%;
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;
  }

  ${BeforeMist}
  ${AfterMist}
`

/* Our mist container shouldl be absolutely positioned, anchored top left,
  with 100% width and height, hidden overflow, and no pointer events */
export const Mist = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;

  ${BeforeAfterMist}
`