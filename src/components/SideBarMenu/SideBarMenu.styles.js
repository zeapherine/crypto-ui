import styled from 'styled-components';

export const FeatureDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

export const FeatureLogo = styled.div`
	width: 40%;
	margin: 10px 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 800px) {
		width: 20%;
	}
`;
export const FeatureName = styled.p`
	margin-top: 10px;
	color: #808080;
`;

export const LogoDiv = styled.div`
	width: fit-content;
	padding: 10px;
	border-radius: 10px;
	background-color: ${({ active }) => (active ? '#7868E6' : '#e8e8e8')};

	&:hover {
		background-color: #b8b5ff;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 70%;
	margin: 25px 0;

	padding: 1.5em;
	border-radius: 10px;
	background-color: #c6b4ce;
`;

export const Img = styled.img`
	width: 130px;
	height: 130px;
	border-radius: 50%;
`;

export const Button = styled.div`
	background-color: #fff;
	border-radius: 10px;
	font-size: 0.7rem;
	padding: 0.7em 1.2em;
	margin-top: 20px;
`;
