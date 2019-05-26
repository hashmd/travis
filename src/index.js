import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import blue from '@material-ui/core/colors/blue'
import 'typeface-roboto'

import store from './store'
import ToDo from './ToDo'
import * as serviceWorker from './serviceWorker'

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

ReactDOM.render(<App />, document.querySelector('#root'))
serviceWorker.register()
