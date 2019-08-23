/*
    This file holds my index styling
*/

// Import styled object and css from styled components
import styled, {css} from "styled-components"

/* Home page should be a center-aligned column flexbox, justified
    to center, with 85.5vw width, and 1 z-index */
export const Home = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 85.5vw;
    z-index: 1;
`

/* Welcome text has 62px font and white font color */
export const Welcome = styled.div`
    font-size: 62px;
    color: rgb(255,255,255);
`

/* Find out button has blue color and pointer effect */
const FindOutButton = css`
    .findOut {
        color: rgb(114,137,218);
        cursor: pointer;
    }
`

/* Find out text has 32px font size, and white font color */
export const FindOut = styled.div`
    font-size: 32px;
    color: rgb(255,255,255);

    ${FindOutButton}
`
