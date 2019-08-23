import styled, { keyframes } from "styled-components"

import Fog_1 from "../../Images/fog-1.png"
import Fog_2 from "../../Images/fog-2.png"

const DriftKeyframes = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-200vw, 0, 0); }
`

export const Mist = styled.div`
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  pointer-events: none;

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

  &:before {
    background-image: url(${Fog_1});
    animation: ${DriftKeyframes} 60s linear 0s infinite;
  }

  &:after {
    background-image: url(${Fog_2});
    animation: ${DriftKeyframes} 25s linear 0s infinite;
  }
`