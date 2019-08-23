/*
    This file holds my header component
*/

// Import styled object and css from styled components
import styled, {css, keyframes} from "styled-components"

/* Logo image has 6vw height and moved .65vw to right */
const LogoImage = css`
    img {
        height: 6vw;
        transform: translateY(.65vw);
    }
`

/* Logo text has 1vw left padding, font set to Offside, 2vw font size,
    and white font color */
const LogoText = css`
    span {
        padding-left: 1vw;
        font-family: Offside;
        font-size: 2vw;
        color: rgb(255,255,255);
    }
`

/* Logo is a center-aligned flexbox, moved 5.25vw left */
const Logo = css`
    .logo {
        display: flex;
        align-items: center;
        transform: translateX(-5.25vw);

        ${LogoImage}
        ${LogoText}
    }
`

/* Our header bar is a center-aligned flexbox, justified with
    a space between items, taking 89vw width, with 4vw height,
    and .25vw top/bottom and 5.5vw left/right padding */
export const Bar = styled.div`
	display: flex;
	justify-content: space-between;
    align-items: center;
	width: 89vw;
	height: 4vw;
	padding: .25vw 5.5vw;

    ${Logo}
`

/* Blink our filter cursor from transparent to white */
const BlinkKeyframes = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: rgb(255,255,255);
  }
`

/* Style filter blinked to be a acolor transition for .5 seconds */
const FilterBlinker = css`
    span {
        transition: color .5s;
        animation: 1s ${BlinkKeyframes} infinite;
    }
`

/* Our filter text uses offside font, with 2vw font size, white color */
export const Filter = styled.div`
	font-family: Offside;
	flex: 1;
    color: rgb(255,255,255);
    font-size: 2vw;

    ${FilterBlinker}
`

/* Our breadcrumbs should be a center-aligned flexbox, with 3.5vw height,
    and white color. The last child in this div with have a 10px right
    padding. */
export const Breadcrumbs = styled.div`
	display: flex;
	align-items: center;
	height: 3.5vw;
    color: rgb(255,255,255);

	> *:not(:last-child) {
		padding-right: 10px;
	}
`
