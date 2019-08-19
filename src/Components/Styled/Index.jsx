import styled from 'styled-components'

export const Find = {
	Box: styled.div`
		display: flex;
		flex-direction: column;
	`,
	Inputs: styled.div`
		display: flex;
		width: 80vw;
		max-height: calc(100vh - 7.5vw);
		overflow: auto;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		span {
			padding: 1vw;
		}
	`,
	Location: styled.span`
		padding: .5vw;
		margin: .5vw;
		background-color: lightblue;
		cursor: pointer;
		border-radius: 1vw;
	`
}

export const Index = {
	Box: styled.div`
		display: flex;
		flex-direction: column;
		height: 7.5vw;
	`,
	Header: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between
	`
}
