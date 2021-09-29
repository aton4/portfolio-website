import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import NavBar from './views/NavBar'
import Home from './views/Home'
import Documents from './views/Documents'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/portfolio-website" component={Home} />
          <Route path="/portfolio-website/documents" component={Documents} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
