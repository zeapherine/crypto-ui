import styled from 'styled-components';

export const MainContainerDiv = styled.div`
	margin-top: 50px;
`;

export const UserTitle = styled.h2`
	padding: 1em;

	font-size: 2.5rem;
`;
export const TitleSpan = styled.span`
	font-weight: 700;
`;

export const Age = styled.sup`
	background-color: #ff8474;
	color: #fff;
	border-radius: 50%;
	padding: 6px;
`;

export const CryptoCardDiv = styled.div`
	display: flex;

	justify-content: space-between;
	align-items: center;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		height: 10px;
	}

	&::-webkit-scrollbar-track {
		background-color: #fdf6f0;
		border-radius: 20px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #0779e4;
		border-radius: 20px;
	}
`;

export const CryptoCard = styled.div`
	margin: 25px 10px;
	padding: 15px;
	background-color: ${({ color }) =>
		color === 'orange'
			? '#F4A9A8'
			: color === 'purple'
			? '#BEAEE2'
			: '#A2DBFA'};

	border-radius: 10px;
`;

export const HeadingContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 15px;
`;
export const CryptoHeading = styled.h5`
	font-size: 1rem;
	font-weight: 700;
	margin-right: 80px;
`;

export const CoinAmount = styled.h3`
	font-size: 1.2rem;
	font-weight: 700;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const AmountInUSD = styled.p`
	font-size: 0.8rem;
	font-weight: 700;
`;

export const DownArrow = styled.div`
	width: fit-content;
	margin: 30px auto;
	padding: 15px;
	border-radius: 50px;
	background: #ffffff;
	box-shadow: 7px 7px 15px #d9d9d9, -7px -7px 15px #ffffff;
`;

export const ActivitiesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ActivityHeadingContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ActivityHeader = styled.div``;

export const LatestActivity = styled.h3`
	font-size: 2rem;
	font-weight: 700;
`;

export const UpdatedAt = styled.p`
	font-weight: 700;
	color: #808080;
`;

export const Edit = styled.p`
	text-decoration: underline;
	color: #808080;
	font-weight: 700;
	padding-top: 50px;
`;

export const SettingsIconDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const IconDiv = styled.div`
	margin: 10px 10px;
	padding: 10px;
	border-radius: 10px;
	background-color: ${({ color }) =>
		color === '#7868E6'
			? '#7868E6'
			: color === '#FF8474'
			? '#FF8474'
			: color === '#B5EAEA'
			? '#B5EAEA'
			: '#fff'};
`;

export const ActivityDivContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;
export const ActivityDiv = styled.div`
	margin: 10px 10px;
`;

export const ActivityH3 = styled.h3`
	font-size: 1rem;
	font-weight: 700;
`;
export const ActivityP = styled.p`
	font-size: 1rem;
	color: #808080;
`;
