import React from 'react';
import {
	Logo,
	Profile,
	ProfileOptions,
	ProfilePicture,
	SearchDiv,
	SearchInput,
	SearchLogo,
} from './Header.styles';

const Header = () => {
	return (
		<div className='container'>
			<div className='row'>
				<Logo className='col-lg-3'>
					<i className='fab fa-cuttlefish' style={{ color: '#FF8474' }}></i> GND CRP
				</Logo>
				<SearchDiv className='col-lg-6'>
					<SearchLogo>
						<i className='fas fa-search'></i>
					</SearchLogo>
					<SearchInput type='text' placeholder='Search...' />
				</SearchDiv>
				<Profile className='col-lg-3'>
					<ProfileOptions>Quit</ProfileOptions>
					<ProfileOptions>Personal</ProfileOptions>
					<ProfilePicture
						src='https://i.pravatar.cc/300'
						alt='profile picture'
					/>
				</Profile>
			</div>
		</div>
	);
};

export default Header;
