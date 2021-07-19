import React from 'react';
import {
	Button,
	FeatureDiv,
	FeatureLogo,
	FeatureName,
	ImageContainer,
	Img,
	LogoDiv,
} from './SideBarMenu.styles';

const SidebarMenu = () => {
	return (
		<div className='col-lg-3'>
			<FeatureDiv>
				<FeatureLogo>
					<LogoDiv active>
						<i className='fas fa-2x fa-chart-line'></i>
					</LogoDiv>
					<FeatureName>Dashboard</FeatureName>
				</FeatureLogo>

				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-calculator'></i>
					</LogoDiv>
					<FeatureName>Calculator</FeatureName>
				</FeatureLogo>

				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-wallet'></i>
					</LogoDiv>
					<FeatureName>Wallets</FeatureName>
				</FeatureLogo>

				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-piggy-bank'></i>
					</LogoDiv>
					<FeatureName>Savings</FeatureName>
				</FeatureLogo>

				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-money-bill-alt'></i>
					</LogoDiv>
					<FeatureName>Currencies</FeatureName>
				</FeatureLogo>

				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-shopping-basket'></i>
					</LogoDiv>
					<FeatureName>Expenses</FeatureName>
				</FeatureLogo>
			</FeatureDiv>

			<FeatureDiv>
				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-fire'></i>
					</LogoDiv>
					<FeatureName>Upcoming</FeatureName>
				</FeatureLogo>

				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-coffee'></i>
					</LogoDiv>
					<FeatureName>Food</FeatureName>
				</FeatureLogo>

				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-heartbeat'></i>
					</LogoDiv>
					<FeatureName>Health</FeatureName>
				</FeatureLogo>

				<FeatureLogo>
					<LogoDiv>
						<i className='fas fa-2x fa-user-alt'></i>
					</LogoDiv>
					<FeatureName>Account</FeatureName>
				</FeatureLogo>
				<ImageContainer>
					<Img
						src='https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
						alt='get pro'
					/>

					<Button>Get Pro Now</Button>
				</ImageContainer>
			</FeatureDiv>
		</div>
	);
};

export default SidebarMenu;
