import Chords from "./Components/Chords"
import Nav from "./Components/Nav"
import Recordings from "./Components/Recordings"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'  
function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/chords" component={Chords} />
      <Route path="/recordings" component={Recordings} />
      </Switch>
    </div> 
    </Router>
  )
}

const Home = () => (
  <div className="Home">
    <h1 className="page-header">Home</h1>
  </div>
)


export default App;
