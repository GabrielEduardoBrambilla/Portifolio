import { AppRoutes } from './routes'
import GlobalStyles from './styles/global'
import { ToastContainer } from 'react-toastify';
export function App() {

  return (
    <>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer />
    </>
  )
}

