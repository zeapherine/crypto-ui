import styled from 'styled-components';

export const PaymentsSideBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 15px 20px;
`;

export const PaymentsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const PaymentsHeadingDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const PaymentHeading = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	padding: 15px 0;
	margin-right: 30px;
`;

export const ClearButton = styled.div`
	background-color: #fdf6f0;
	padding: 0.7em 2em;
	cursor: pointer;
	border-radius: 10px;
`;

export const PaymentCard = styled.div`
	width: 90%;
	margin: 10px 0;
	padding: 20px;
	border-radius: 10px;
	background: #ffffff;
	box-shadow: 11px 11px 18px #e8e8e8, -11px -11px 18px #ffffff;
`;

export const PaymentDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

export const PaymentReceivedHeading = styled.h4`
	padding-top: 15px;
	margin-left: 10px;
	margin-right: auto;
	font-size: 1rem;
	font-weight: 700;
`;

export const PaymentParagraph = styled.p`
	padding-top: 15px;
	margin-left: 15px;
	font-size: 0.8rem;
	font-weight: 700;

	color: #808080;
`;

export const PaymentImg = styled.img`
	position: absolute;
	right: 45px;
	padding: 3px;
	background-color: #eeeeee;
	border-radius: 50%;
`;

export const TotalPersons = styled.div`
	position: absolute;
	width: 25px;
	height: 25px;

	font-size: 0.8rem;
	font-weight: 700;
	border-radius: 50%;

	border: 3px solid #eeeeee;
`;

export const PaymentTransfer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	width: 90%;

	margin-top: 20px;
	background-color: #beaee2;
	padding: 10px;
	border-radius: 10px;

	cursor: pointer;
`;
export const TransferWriteIconDiv = styled.div`
	background-color: #fff;
	padding: 5px;
	border-radius: 10px;
`;
export const NewTransfer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: #a239ea;
	font-size: 0.8rem;
	font-weight: 700;
	margin-left: 25px;
`;

export const WalletsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;

	margin: 50px 0;
`;

export const WalletHeading = styled.h3`
	font-size: 2rem;
	font-weight: 700;
`;

export const WalletDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
`;

export const CurrencyHeadingDiv = styled.div``;

export const CurrencyHeading = styled.h4`
	font-weight: 700;
	font-size: 1.2rem;
`;

export const CurrencyParagraphDiv = styled.div`
	margin-left: auto;
`;

export const CurrencyParagraph = styled.p`
	font-size: 1rem;
	font-weight: 700;
	color: #808080;
`;

export const IconDiv = styled.div`
	margin: 10px 15px;
	margin-left: 0;
	margin-bottom: 25px;
	padding: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
`;
