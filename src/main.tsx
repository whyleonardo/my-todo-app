import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { App } from './App'

import './styles/global.css'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#fffded',
      200: '#fce762',
      300: '#ffb17a',
      400: '#4f4789',
      500: '#201335'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode >
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
