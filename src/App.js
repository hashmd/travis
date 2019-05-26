import React from 'react'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import blue from '@material-ui/core/colors/blue'
import 'typeface-roboto'

import store from './store'
import ToDo from './ToDo'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue
  },
  typography: {
    useNextVariants: true
  }
}))

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToDo />
      </ThemeProvider>
    </Provider>
  )
}

export default App
