import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './views/NavBar'
import Home from './views/Home'
import Documents from './views/Documents'
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/documents" component={Documents} />
      </Switch>
    </Router>
  )
}

export default App
