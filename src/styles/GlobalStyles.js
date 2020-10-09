import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html {
        background: var(--fundo);
    }

    :root {
    --fundo: #FDFFFD;
    --git_black: #323131;
    --branco: #fff;
    
  }
`;