import Tabs from "./Components/Tabs"
import Nav from "./Components/Nav"
import Recordings from "./Components/Recordings"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'  
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/tabs" component={Tabs} />
      <Route path="/recordings" component={Recordings} />
      </Switch>
    </div> 
    </Router>
  )
}

export default App;
