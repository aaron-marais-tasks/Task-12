import styled, {keyframes} from "styled-components"

const Effect = keyframes`
	0% {
		top: 28px;
		left: 28px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	100% {
		top: -1px;
		left: -1px;
		width: 58px;
		height: 58px;
		opacity: 0;
	}
`

export const Ripple = styled.div`
	flex: 1;
	display: inline-block;
	position: relative;
	width: 64px;
	height: 64px;

    div {
		position: absolute;
		border: 4px solid #fff;
		opacity: 1;
		border-radius: 50%;
		animation: ${Effect} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    
    div:nth-child(2) {
		animation-delay: -0.5s;
    }
`

export const LoadingContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	transform: scale(3);
`