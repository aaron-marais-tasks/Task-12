/*
	This file holds styled components for my results page
*/

// Import Styled object, css and keyframes helpers
import styled, {css} from "styled-components"

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

/* Result box should be a column-centered flexbox, with 85.5vw,
	and z-index of 1 */
export const Box = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 85.5vw;
    z-index: 1;
`

/* Status (condition) should take full width, with 35px top/bot padding,
	82px font size, centered white text */
export const Status = styled.div`
	width: 100%;
	padding: 35px 0;
	font-size: 82px;
	text-align: center;
	color: rgb(255,255,255);
`

/* Our temperature container should be a flexbox, end-aligned, justified
	with spaces around, 100% width used */
export const Temperature = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	width: 100%;
`

// Option description
const OptionDesc = css`
	.desc {
		font-size: 22px;
	}
`

// Option value
const OptionVal = css`
	.val {
		border-top: 2px solid rgb(114,137,218);
		margin-top: 5px;
		font-size: 42px;
	}
`

/* Base for Options (temp min, wind speed, etc)
	Should be a column center-aligned flexbox, with white text and
	1 line height. The description has 22px font size. The
	value has 2px blue top border, 5px top margin, and 4px font size */
const Option = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: rgb(255,255,255);
	line-height: 1;

	${OptionDesc}
	${OptionVal}
`

// Based off of Option
Temperature.Min = styled.div`
	${Option}
`

// Average temperature is white color with 62px font size
Temperature.Avg = styled.div`
	color: rgb(255,255,255);
	font-size: 62px;
`

// Based off of Option
Temperature.Max = styled.div`
	${Option}
`

/* Statistics should be a flexbox, justified with a space around,
	taking 100% with and 35px padding */
export const Statistic = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 35px;
`

// Based off of Option
Statistic.Value = styled.div`
	${Option}
`

/* Other options should be a flexbox, justified with a space around,
	taking 100% with and 35px padding */
export const Other = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 35px;
`

// Based off of Option
Other.Item = styled.div`
	${Option}
`
