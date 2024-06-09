import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Router } from "react-router-dom";

import { Routerr } from "./router/Router";
import theme from "./theme/theme";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routerr />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
