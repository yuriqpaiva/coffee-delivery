import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
