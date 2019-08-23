/*
  This file holds my partly cloudy weather effects
*/

// Import styled object, css and keyframes from styled components
import styled, {css, keyframes} from "styled-components"

// Oscillation effect
const osc = keyframes`
  to {
    transform: translateY(calc(var(--i, 1)*10px))
  }
`

// Rotation effect
const rot = keyframes`
  to {
    transform: rotate(30deg)
  }
`

// Expansion effect
const exp = keyframes`
  to {
    transform: scalex(1.5)
  }
`

// Holds our SVG animations
const Animations = css`
  animation: ${osc} 2s ease-in-out infinite alternate

  #rays {
    animation: ${rot} 2s linear infinite
  }

  line {
    animation: ${exp} 2s ease-in-out infinite alternate
  }

  g#osc {
    animation: ${osc} 2s ease-in-out infinite alternate
  }
`

/* Immediate child of partly cloudy effect container should take up
  full size with flex: 1, no fill, white 5px rounded stroke, .3
  opacity, and 160% of the height of thee container */
const SVGStyling = css`
  > svg {
    flex: 1;
    fill: none;
    stroke: white;
    stroke-width: 5px;
    stroke-linecap: round;
    opacity: .3;
    height: 160%;

    ${Animations}
  }
`

/* Our partly cloudy container should be an absolute center-aligned flexbox,
  with -1 z-index, anchored top left, using 100% width and height, translated
  18vh down, with no pointer events */
export const PartlyCloudy = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(18vh);
  pointer-events: none;

  ${SVGStyling}
`
