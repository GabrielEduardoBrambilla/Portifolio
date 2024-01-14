import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import Theme from './styles/Theme'
import { ToastContainer } from 'react-toastify';
export function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <AppRoutes />
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}

