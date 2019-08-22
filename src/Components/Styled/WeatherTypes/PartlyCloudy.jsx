import styled, {css, keyframes} from "styled-components"

const osc = keyframes`
  to {
    transform: translateY(calc(var(--i, 1)*10px))
  }
`

const rot = keyframes`
  to {
    transform: rotate(30deg)
  }
`

const exp = keyframes`
  to {
    transform: scalex(1.5)
  }
`

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

  > svg {
    flex: 1;
    fill: none;
    stroke: white;
    stroke-width: 5px;
    stroke-linecap: round;
    opacity: .3;
    height: 160%;

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
  }
`
