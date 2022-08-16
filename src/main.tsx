import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { App } from './App'

import './styles/global.css'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        transitionProperty: 'all',
        transitionDuration: '500ms',
      }
    }
  },


  colors: {
    brand: {
      100: '#fffded',
      200: '#fce762',
      300: '#ffb17a',
      350: '#7B6286',
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
