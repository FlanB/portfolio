import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "../components/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </>
  )
}
export default App
