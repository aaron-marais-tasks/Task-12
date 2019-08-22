import styled, { keyframes } from "styled-components"

export const Bar = styled.div`
	display: flex;
	justify-content: space-between;
    align-items: center;
	width: 89vw;
	height: 4vw;
	padding: .25vw 5.5vw;
	z-index: 1;

    .logo {
        display: flex;
        align-items: center;
        transform: translateX(-5.25vw);

        img {
            height: 6vw;
            transform: translateY(.65vw);
        }

        span {
            padding-left: 1vw;
            font-family: Offside;
            font-size: 2vw;
            color: rgb(255,255,255);
        }
    }
`

const BlinkKeyframes = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: rgb(255,255,255);
  }
`

export const Filter = styled.div`
	font-family: Offside;
	flex: 1;
    border: 1px rgb(44,47,51);
    color: rgb(255,255,255);
    font-size: 2vw;

    span {
        transition: color .5s;
        animation: 1s ${BlinkKeyframes} infinite;
    }
`

export const Breadcrumbs = styled.div`
	display: flex;
	align-items: center;
	height: 3.5vw;
	color: white;

	> *:not(:last-child) {
		padding-right: 10px;
	}
`
