import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'
import { Routes } from './Routes'
import { CoffeesProvider } from './contexts/CoffeesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesProvider>
        <Routes />
      </CoffeesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
