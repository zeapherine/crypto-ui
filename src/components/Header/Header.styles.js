import styled from 'styled-components';

export const Logo = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
	padding: 1em 1.5em;
`;

export const SearchDiv = styled.div`
	padding: 1.5em 1.5em;
`;
export const SearchLogo = styled.span`
	position: absolute;
	margin-left: 10px;
	margin-top: 5px;
	height: 25px;
	display: flex;
	align-items: center;
`;
export const SearchInput = styled.input`
	padding-left: 35px;
	height: 35px;
	width: 100%;
	border: none;
	border-radius: 20px;
	background-color: #ededed;

	&:focus {
		outline: none;
	}
`;

export const Profile = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 00px) {
		margin: 15px 20px;
	}
`;

export const ProfileOptions = styled.h4`
	margin-right: 2em;
	font-size: 1.3rem;
	color: #808080;
`;

export const ProfilePicture = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 10px;
`;
