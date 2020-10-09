import styled from 'styled-components';
import { Search } from '../../styles/Icons'

export const ContainerTop = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 80px;
   max-width: 100%;
   padding: 0 30px;
`;

//Logo

export const SearchLogo = styled.div`
   display: flex;
   flex-direction: column;

   color: var(--git_black);

   @media(max-width: 600px){
      justify-content: center;
      align-items: center;
   }

`;
export const SearchTitle = styled.div`
   display: flex;
   
   h1{
      font-size: 72px;
      font-weight: 700;
   }

   img{
      margin: 0 18px;
      width: 100px;
   }

   @media(max-width: 600px){


      h1{
      font-size: 60px;
      font-weight: 700;
   }

      img{
         margin: 0 18px;
         width: 70px;
      }
   }

   @media(max-width: 420px){
      h1{
      font-size: 40px;
      font-weight: 700;
   }

      img{
         margin: 0 18px;
         width: 50px;
      }
   }
`;
export const SearchSub = styled.h2`
   font-size: 36px;
   font-weight: 400;
   margin-left: 12px;

   @media(max-width: 600px){
      font-size: 26px;
   }
   @media(max-width: 420px){
      font-size: 22px;
   }
`;

//barra de pesquisa

export const SearchWrapper = styled.div`
   display: flex;
   max-width: 90%;
   justify-content: flex-end;
   position: relative;
   top: 35px;

   background: #fff;
   border: 3px solid var(--git_black);
   border-radius: 40px;

   padding: 10px 5px 10px 15px;
   line-height: 40px;
`;

export const SearchInput = styled.input`
   width: 834px;
   float: left;
   max-width: 98%;

   border: none;
   background: none;
   outline: none;

   padding: 0;

   color: var(--git_black);
   font-size: 24px;
   transition: 0.5px;
   line-height: 40px;
    
`;

export const SearchIcon = styled(Search)`
   width: 35px;
   height: 35px;
   float: right;
   margin-right: 20px;
   position: absolute;

   color: var(--git_black);
   background: none;
   text-decoration: none;

   cursor: pointer;

   
   
`;
