import React from 'react';

import { ContainerTop, SearchLogo, SearchTitle, SearchSub, SearchWrapper, SearchInput, SearchIcon } from './styles';
import githubMark from '../../assets/githubMark.svg';


const SearchContainer = () => {
  return (
    <ContainerTop>
      <SearchLogo>
        <SearchTitle>
          <h1>Git</h1>
          <img src={githubMark} alt=""/>
          <h1>Search</h1>
        </SearchTitle>
        <SearchSub>
          Procure repositorios online
        </SearchSub>
      </SearchLogo>

      <SearchWrapper>
        <SearchInput placeholder="Buscar usuario"/>
        <SearchIcon />
      </SearchWrapper>
    </ContainerTop>
  );
};

export default SearchContainer;
