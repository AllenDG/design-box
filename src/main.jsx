import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import { myTheme } from '@/components/theme/myTheme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import theme from '@/components/theme/theme'
import mainRoutes from '@/routes/mainRoutes'
const router = createBrowserRouter(mainRoutes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ChakraProvider theme={myTheme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
  </StrictMode>,
)
  