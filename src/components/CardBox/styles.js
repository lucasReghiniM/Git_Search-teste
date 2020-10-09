import styled from 'styled-components';
import { Users, Cogs, PenFancy } from '../../styles/Icons'


export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin-top: 10px;

    width: 290px;
    height: 330px;

    border-radius: 10px;
    background: white;
    
    transition: 0.3s;

    &:hover{
        background: var(--git_black);
        
        .sub, .titu, .icone{
            transition: 0.5s;
            color: white;
        }
    }
`;

export const Circulo = styled.div`
    width: 130px;
	height: 130px;
	border-radius: 50%;
	overflow: hidden;
    border: 5px solid var(--git_black);
    display: flex;
    justify-content: center;
    align-items: center;
    
`
//ICONS
export const Icon = styled(Users)`
    width: 65px;
    height: 65px;
    color: var(--git_black);
`
export const Icon2 = styled(Cogs)`
    width: 65px;
    height: 65px;
    color: var(--git_black);
`
export const Icon3 = styled(PenFancy)`
    width: 65px;
    height: 65px;
    color: var(--git_black);
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
    color: var(--git_black);
    margin-top: 12px;
`
export const SubTitle = styled.h2`
    font-weight: 400;
    font-size: 20px;
    color: var(--git_black);
    text-align: center;
    margin-top: 12px;
    max-width: 22ch;
`