import React from 'react';

import {
	ClearButton,
	CurrencyHeading,
	CurrencyHeadingDiv,
	CurrencyParagraph,
	CurrencyParagraphDiv,
	IconDiv,
	NewTransfer,
	PaymentCard,
	PaymentDiv,
	PaymentHeading,
	PaymentImg,
	PaymentParagraph,
	PaymentReceivedHeading,
	PaymentsContainer,
	PaymentsHeadingDiv,
	PaymentsSideBarContainer,
	PaymentTransfer,
	TotalPersons,
	TransferWriteIconDiv,
	WalletDiv,
	WalletHeading,
	WalletsContainer,
} from './AccountContent.styles';

const AccountContent = () => {
	return (
		<div className='col-lg-3'>
			<PaymentsSideBarContainer>
				<PaymentsContainer>
					<PaymentsHeadingDiv>
						<PaymentHeading>Payments</PaymentHeading>
						<ClearButton>Clear</ClearButton>
					</PaymentsHeadingDiv>

					<PaymentCard>
						<PaymentDiv>
							<i
								className='fab fa-2x  fa-bitcoin'
								style={{
									color: '#F21170',
								}}
							></i>
							<PaymentReceivedHeading>Received BTC</PaymentReceivedHeading>
							<i className='fas fa-chevron-down'></i>
							<PaymentParagraph>+ 15.08 USD</PaymentParagraph>
						</PaymentDiv>
						<PaymentDiv>
							<PaymentParagraph>09/28/2020 19:22</PaymentParagraph>
							<PaymentImg
								src='https://i.pravatar.cc/25'
								alt='profile picture'
							/>
							<PaymentImg
								src='https://i.pravatar.cc/25'
								alt='profile picture'
								style={{ right: '30px' }}
							/>

							<TotalPersons style={{ right: '20px', background: '#F21170' }}>
								+6
							</TotalPersons>
						</PaymentDiv>
					</PaymentCard>

					<PaymentCard>
						<PaymentDiv>
							<i
								className='fab fa-2x fa-ethereum'
								style={{
									color: '#78DEC7',
								}}
							></i>
							<PaymentReceivedHeading>Received ETR</PaymentReceivedHeading>
							<i className='fas fa-chevron-down'></i>
							<PaymentParagraph>+ 957.08 USD</PaymentParagraph>
						</PaymentDiv>
						<PaymentDiv>
							<PaymentParagraph>09/28/2020 19:22</PaymentParagraph>
							<PaymentImg
								src='https://i.pravatar.cc/25'
								alt='profile picture'
							/>
							<PaymentImg
								src='https://i.pravatar.cc/25'
								alt='profile picture'
								style={{ right: '30px' }}
							/>

							<TotalPersons style={{ right: '20px', background: '#78DEC7' }}>
								+6
							</TotalPersons>
						</PaymentDiv>
					</PaymentCard>

					<PaymentTransfer>
						<TransferWriteIconDiv>
							<i className='fas  fa-pen' style={{ color: '#A239EA' }}></i>
						</TransferWriteIconDiv>
						<NewTransfer>
							<i className='fas  fa-plus' style={{ margin: '10px' }}></i>
							New Transfer
						</NewTransfer>
					</PaymentTransfer>
				</PaymentsContainer>

				<WalletsContainer>
					<WalletHeading>Wallets</WalletHeading>
					<WalletDiv>
						<IconDiv style={{ background: '#FFE3E3' }}>
							<i
								className='fab fa-2x fa-bitcoin'
								style={{ color: '#FFA0A0' }}
							></i>
						</IconDiv>
						<CurrencyHeadingDiv>
							<CurrencyHeading>BTC</CurrencyHeading>
							<CurrencyParagraph>Bitcoin</CurrencyParagraph>
						</CurrencyHeadingDiv>

						<CurrencyParagraphDiv>
							<CurrencyHeading>37%</CurrencyHeading>
							<CurrencyParagraph style={{ color: '#78DEC7' }}>
								-2.5%
							</CurrencyParagraph>
						</CurrencyParagraphDiv>
					</WalletDiv>

					<WalletDiv>
						<IconDiv style={{ background: '#FFE3E3' }}>
							<i
								className='fab fa-2x fa-dyalog'
								style={{ color: '#FFC947' }}
							></i>
						</IconDiv>
						<CurrencyHeadingDiv>
							<CurrencyHeading>DAI</CurrencyHeading>
							<CurrencyParagraph>Dai</CurrencyParagraph>
						</CurrencyHeadingDiv>

						<CurrencyParagraphDiv>
							<CurrencyHeading>23%</CurrencyHeading>
							<CurrencyParagraph>+7.2%</CurrencyParagraph>
						</CurrencyParagraphDiv>
					</WalletDiv>

					<WalletDiv>
						<IconDiv style={{ background: '#AAD8D3' }}>
							<i
								className='fab fa-2x fa-ethereum'
								style={{ color: '#00ADB5' }}
							></i>
						</IconDiv>
						<CurrencyHeadingDiv>
							<CurrencyHeading>ETR</CurrencyHeading>
							<CurrencyParagraph>Etherium</CurrencyParagraph>
						</CurrencyHeadingDiv>

						<CurrencyParagraphDiv>
							<CurrencyHeading>20%</CurrencyHeading>
							<CurrencyParagraph style={{ color: '#78DEC7' }}>
								-3.1%
							</CurrencyParagraph>
						</CurrencyParagraphDiv>
					</WalletDiv>

					<WalletDiv>
						<IconDiv style={{ background: '#AAD8D3' }}>
							<i
								className='fab fa-2x fa-viacoin'
								style={{ color: '#28B5B5' }}
							></i>
						</IconDiv>
						<CurrencyHeadingDiv>
							<CurrencyHeading>USDT</CurrencyHeading>
							<CurrencyParagraph>Tether</CurrencyParagraph>
						</CurrencyHeadingDiv>

						<CurrencyParagraphDiv>
							<CurrencyHeading>17%</CurrencyHeading>
							<CurrencyParagraph>+1.8%</CurrencyParagraph>
						</CurrencyParagraphDiv>
					</WalletDiv>
				</WalletsContainer>
			</PaymentsSideBarContainer>
		</div>
	);
};

export default AccountContent;
