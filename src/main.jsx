import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 1. Using a style object
// const theme = {
//   styles: {
//     global: {
//       'html, body': {
//         color: 'gray.600',
//         lineHeight: 'tall',
//       },
//     },
//   },
// }
// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  global: {
    'html, body': {
      bg: 'blackAlpha.900',
      lineHeight: 'tall',
    },
  },
  fonts: {
    body: `'Alice', serif`,
    h2: `'Share-Tech-Mono', sans-serif`,
  },
  // colors: {
  //   brand: {
  // }
})

// 3. Pass the `theme` prop to the `ChakraProvider`

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
