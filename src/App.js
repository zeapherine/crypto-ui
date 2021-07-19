import GlobalStyle, { Container } from './globalStyles';
import Header from './components/Header/Header';
import SidebarMenu from './components/SideBarMenu/SidebarMenu';
import MainContent from './components/MainContent/MainContent';
import AccountContent from './components/AccountContent/AccountContent';

function App() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
				<div className='container'>
					<div className='row'>
						<SidebarMenu />
						<MainContent />
						<AccountContent />
            
					</div>
				</div>
			</Container>
		</>
	);
}

export default App;
