import { Route, Switch } from 'wouter'

// Pages
import Home from './pages/Home'
import Convert from './pages/Convert'

// Components
import NotFound from './components/NotFound'

import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/convert">
          <Convert />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
