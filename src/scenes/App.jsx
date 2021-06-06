import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Project from "./Project"
import Navbar from "../components/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project/:name" component={Project} />
      </Switch>
    </>
  )
}
export default App
