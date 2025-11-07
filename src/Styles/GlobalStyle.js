import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{ box-sizing: border-box; }
  html,body,#root{ height:100%; }
  body{
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', 'Apple SD Gothic Neo', 'Helvetica Neue', Arial;
    background:#fafafa;
    color:#222;
    -webkit-font-smoothing:antialiased;
  }
  a{ color:inherit; text-decoration:none; }
`;

export default GlobalStyle;