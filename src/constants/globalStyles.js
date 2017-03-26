import { injectGlobal } from 'styled-components';

export default function() {
  // eslint-disable-next-line
  injectGlobal`
    body {
      font: 14px 'Source Sans Pro', Helvetica, Arial, sans-serif;
      line-height: 1.4;
      background-color: #242424;
      background: url('assets/background-desktop.jpg') no-repeat 0/cover;
      margin: 0;
      width: 100vw;
      height: 100vh;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 300;
    }
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  `;
}
