import styled, {css} from 'styled-components'

// Error 404 title styling
const Err404Title = css`
	.title {
		font-size: 62px;
	}
`

// Error 404 back button styling
const Err404Back = css`
	.title {
		font-size: 62px;
	}
	.back {
		color: rgb(114,137,218);
		cursor: pointer;
	}
`

/* Error 404 component is a flexbox, column center-aligned/-justified,
	with 32px font size, andd white font. Size of title is 62px, and back
	button has blue color */
export const Err404 = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 32px;
	color: rgb(255,255,255);

	${Err404Title}
	${Err404Back}
`

/* The Locations boxo container should be a center-aligned flexbox,
	in column, with 85.5vw width and z-index of 1 */
export const Box = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 85.5vw;
    z-index: 1;
`

/* Our inputs should be a center-aligned wrapped flexbox, justified
	with a space between, with 100% width, max height of (100vw - 4.5vw),
	and overflow scrollbars hidden. */
export const Inputs = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	max-height: calc(100vh - 4.5vw);
	overflow: auto;
	
	scrollbar-width: none;
	-ms-overflow-style: none;

	::-webkit-scrollbar {
		width: 0px;
		background: transparent;
	}
`

/* Each location should have line height of 1, .5vw margin and padding,
	a gray background color, a white font color, a pointer cursor when hover,
	a 2px white .8 opacity border, with 1vw border radius */
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
