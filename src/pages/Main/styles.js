import styled from 'styled-components';
import { ArrowDownS } from '../../styles/Icons'

export const Container = styled.div`

    .engrenagem{
        margin: 35px 0px 0px 45px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ArrowIcon = styled(ArrowDownS)`
    position: relative;
    top: 115px;
    width: 60px;
    height: 60px;
    color: var(--git_black);
`;