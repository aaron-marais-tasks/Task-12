import styled from 'styled-components'

export const Box = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 85.5vw;
    z-index: 1;
`

export const Inputs = styled.div`
	display: flex;
	width: 90vw;
	max-height: calc(100vh - 4.5vw);
	overflow: auto;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	
	scrollbar-width: none;
	-ms-overflow-style: none;

	::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
`

export const Location = styled.span`
	line-height: 1;
	padding: .5vw;
	margin: .5vw;
	background-color: rgb(35,39,42);
	color: rgb(255,255,255);
	cursor: pointer;
	border: 2px solid hsla(0,0%,100%,.8);
	border-radius: 1vw;
`
