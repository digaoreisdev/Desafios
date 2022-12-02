import { ThemeProvider } from 'styled-components'
import { Menu } from './pages/Menu'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <Menu />
    </ThemeProvider>
  )
}