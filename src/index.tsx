import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { dark, light, accent, Reset } from "react-colorset";
import { createTheme, ThemeProvider } from "@mui/material";

const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${dark.backgroundDefault};
    }
`;

const darkTheme = createTheme ({
  palette: {
    mode: "dark",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
