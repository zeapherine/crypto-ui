import React from 'react';
import {
	MainContainerDiv,
	UserTitle,
	TitleSpan,
	Age,
	CryptoCard,
	CryptoHeading,
	CryptoCardDiv,
	HeadingContainer,
	CoinAmount,
	AmountInUSD,
	DownArrow,
	ActivityHeadingContainer,
	ActivityHeader,
	LatestActivity,
	UpdatedAt,
	Edit,
	SettingsIconDiv,
	IconDiv,
	ActivitiesContainer,
	ActivityDivContainer,
	ActivityDiv,
	ActivityH3,
	ActivityP,
} from './MainContent.styles';

const MainContent = () => {
	const iconStyle = {
		color: '#fff',
		opacity: '0.5',
	};

	return (
		<div className='col-lg-6'>
			<MainContainerDiv>
				<UserTitle>
					<TitleSpan>Hi</TitleSpan>, Mikey <Age>23</Age>
				</UserTitle>

				<CryptoCardDiv>
					<CryptoCard color='orange'>
						<HeadingContainer>
							<CryptoHeading>Bitcoin</CryptoHeading>
							<i className='fas fa-ellipsis-v'></i>
						</HeadingContainer>
						<i className='fab fa-7x fa-bitcoin' style={iconStyle}></i>
						<CoinAmount>0.2232345 BTC</CoinAmount>
						<AmountInUSD>11,032.24 USD</AmountInUSD>
					</CryptoCard>

					<CryptoCard color='purple'>
						<HeadingContainer>
							<CryptoHeading>Etherium</CryptoHeading>
							<i className='fas fa-ellipsis-v'></i>
						</HeadingContainer>
						<i className='fab fa-7x fa-ethereum' style={iconStyle}></i>
						<CoinAmount>10.612356 ETH</CoinAmount>
						<AmountInUSD>1242.31 USD</AmountInUSD>
					</CryptoCard>

					<CryptoCard>
						<HeadingContainer>
							<CryptoHeading>Litecoin</CryptoHeading>
							<i className='fas fa-ellipsis-v'></i>
						</HeadingContainer>
						<i className='fab fa-7x fa-viacoin' style={iconStyle}></i>
						<CoinAmount>120.235 LTC</CoinAmount>
						<AmountInUSD>37,747 USD</AmountInUSD>
					</CryptoCard>

					<CryptoCard color='orange'>
						<HeadingContainer>
							<CryptoHeading>DogCoin</CryptoHeading>
							<i className='fas fa-ellipsis-v'></i>
						</HeadingContainer>
						<i className='fab fa-7x fa-viacoin' style={iconStyle}></i>
						<CoinAmount>120.235 DTC</CoinAmount>
						<AmountInUSD>37,747 USD</AmountInUSD>
					</CryptoCard>

					<CryptoCard color='purple'>
						<HeadingContainer>
							<CryptoHeading>Bitcoin</CryptoHeading>
							<i className='fas fa-ellipsis-v'></i>
						</HeadingContainer>
						<i className='fab fa-7x fa-viacoin' style={iconStyle}></i>
						<CoinAmount>120.235 LTC</CoinAmount>
						<AmountInUSD>37,747 USD</AmountInUSD>
					</CryptoCard>

					<CryptoCard>
						<HeadingContainer>
							<CryptoHeading>Bitcoin</CryptoHeading>
							<i className='fas fa-ellipsis-v'></i>
						</HeadingContainer>
						<i className='fab fa-7x fa-viacoin' style={iconStyle}></i>
						<CoinAmount>120.235 LTC</CoinAmount>
						<AmountInUSD>37,747 USD</AmountInUSD>
					</CryptoCard>
				</CryptoCardDiv>

				<DownArrow>
					<i className='fas fa-chevron-down'></i>
				</DownArrow>

				<ActivitiesContainer>
					<ActivityHeadingContainer>
						<ActivityHeader>
							<LatestActivity>Latest Activity</LatestActivity>
							<UpdatedAt>Updated 12 minutes ago</UpdatedAt>
						</ActivityHeader>

						<Edit>edit</Edit>

						<SettingsIconDiv>
							<IconDiv>
								<i className='fas  fa-cog'></i>
							</IconDiv>
							<IconDiv color={'#7868E6'}>
								<i className='fas fa-plus-square '></i>
							</IconDiv>
						</SettingsIconDiv>
					</ActivityHeadingContainer>

					<ActivityDivContainer>
						<IconDiv color={'#B5EAEA'}>
							<i className='fas fa-shield-alt'></i>
						</IconDiv>
						<ActivityDiv>
							<ActivityH3>Insurance</ActivityH3>
							<ActivityP>Property Coverage</ActivityP>
						</ActivityDiv>
						<ActivityDiv>
							<ActivityH3>LTC Wallet</ActivityH3>
							<ActivityP>Personal account</ActivityP>
						</ActivityDiv>
						<ActivityDiv>
							<ActivityH3>7 Jun, 21</ActivityH3>
							<ActivityP>Last Payment</ActivityP>
						</ActivityDiv>
						<ActivityDiv>
							<ActivityH3>-10.24LTC</ActivityH3>
							<ActivityP>Balance</ActivityP>
						</ActivityDiv>
					</ActivityDivContainer>

					<ActivityDivContainer>
						<IconDiv color={'#FF8474'}>
							<i className='fas fa-bolt'></i>
						</IconDiv>
						<ActivityDiv>
							<ActivityH3>Insurance</ActivityH3>
							<ActivityP>Property Coverage</ActivityP>
						</ActivityDiv>
						<ActivityDiv>
							<ActivityH3>LTC Wallet</ActivityH3>
							<ActivityP>Personal account</ActivityP>
						</ActivityDiv>
						<ActivityDiv>
							<ActivityH3>7 Jun, 21</ActivityH3>
							<ActivityP>Last Payment</ActivityP>
						</ActivityDiv>
						<ActivityDiv>
							<ActivityH3>-10.24LTC</ActivityH3>
							<ActivityP>Balance</ActivityP>
						</ActivityDiv>
					</ActivityDivContainer>
				</ActivitiesContainer>
			</MainContainerDiv>
		</div>
	);
};

export default MainContent;
