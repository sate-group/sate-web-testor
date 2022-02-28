import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { accent, dark, reset } from "react-colorset";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./app";

import { Provider } from "react-redux";
import { store } from "./store";

const GlobalStyle = createGlobalStyle`
  ${reset}
    body {
      background-color: ${dark.backgroundRoot};
    }
`;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: accent.accentBlueStronger,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
