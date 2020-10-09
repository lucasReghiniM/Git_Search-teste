import styled from 'styled-components';
import { ArrowLeft } from '../../styles/Icons'

export const Container = styled.div`
    .engrenagem{
        margin: 35px 0px 0px 45px;
    }
`;

export const ArrowIcon = styled(ArrowLeft)`
    width: 50px;
    height: 50px;

    float: right;
    margin: 35px 45px 0 0;
    cursor: pointer;

    color: var(--git_black);
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const TextWrapper = styled.div`
    display: flex;
    color: var(--git_black);

    img{
        margin-right: 20px;
        
        height: 30px;
        width: 30px;
    }
`;
export const RepoWrapper = styled.div`
    width: 994px;

    padding: 60px 20px;
    margin-top: 18px;

    border-radius: 10px;
    color: var(--branco);
    background: var(--git_black);


`;