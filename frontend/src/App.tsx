import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { AppContainer } from "./AppStyle"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <GlobalStyle/>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
