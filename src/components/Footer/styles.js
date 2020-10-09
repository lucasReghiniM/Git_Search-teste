import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 325px;
    background: var(--git_black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--branco);

    h1{
        font-size: 28px;
        font-weight: 700;
        text-align: center;
    }

    h3{
        font-size: 24px;
        font-weight: 400;
        margin-left: 10px;
        max-width: 80%;
        text-align: center;
    }
`;


export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;

    h2{
        font-size: 14px;
        font-weight: 400;
        color: var(--branco);
    }
`;

export const Circulo = styled.div`
    width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
    border: 2px solid var(--branco);
    margin: 22px 0 10px 0;

    .git{
        margin: 15px 0 0 16px;
    }
    .linkedin{
        margin: 20px 0 0 18px;
    }
`;

export const CircleWrapper = styled.a`
    display: flex;
    flex-direction: column;
    margin: 0 80px;
    align-items: center;
    text-decoration: none;

    @media(max-width: 500px){
        margin: 0 40px;
   }
`;