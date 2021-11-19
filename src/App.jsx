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
        <Route path="/" component={Home} />
        <Route path="/convert" component={Convert} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
