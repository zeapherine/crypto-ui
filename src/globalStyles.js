import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    // global styled component 
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        background-color: #dddddd;

    }
`;

export const Container = styled.div`
	background-color: #fff;
	width: 100%;
	max-width: 1300px;
	margin: 60px auto;
	padding-right: 50px;
	padding-right: 50px;
`;

export default GlobalStyle;
