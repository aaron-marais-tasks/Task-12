import styled, {css, keyframes} from "styled-components"

export const Box = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
    width: 85.5vw;
    z-index: 1;
`

export const Status = styled.div`
	width: 100%;
	padding: 35px 0;
	font-size: 82px;
	text-align: center;
	color: rgb(255,255,255);
`

export const Temperature = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	width: 100%;
`

Temperature.Min = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: rgb(255,255,255);
	line-height: 1;

	.desc {
		font-size: 22px;
	}

	.temp {
		border-top: 2px solid rgb(114,137,218);
		margin-top: 5px;
		font-size: 42px;
	}
`

Temperature.Avg = styled.div`
	color: rgb(255,255,255);
	font-size: 62px;
`

Temperature.Max = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: rgb(255,255,255);
	line-height: 1;

	.desc {
		font-size: 22px;
	}

	.temp {
		border-top: 2px solid rgb(114,137,218);
		margin-top: 5px;
		font-size: 42px;
	}
`

export const Statistic = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 35px;
`

Statistic.Value = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: rgb(255,255,255);
	line-height: 1;

	.desc {
		font-size: 22px;
	}

	.val {
		border-top: 2px solid rgb(114,137,218);
		margin-top: 5px;
		font-size: 42px;
	}
`

export const Other = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding: 35px;
`

Other.Item = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: rgb(255,255,255);
	line-height: 1;

	.desc {
		font-size: 22px;
	}

	.val {
		border-top: 2px solid rgb(114,137,218);
		margin-top: 5px;
		font-size: 42px;
	}
`
