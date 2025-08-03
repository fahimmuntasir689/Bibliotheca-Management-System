import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/router.ts'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/app/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
    </Provider>

  </StrictMode>,
)
