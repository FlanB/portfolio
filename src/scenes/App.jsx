import { Route, Switch } from "react-router-dom"
import { useState, useMemo, createContext, useEffect } from "react"
import Home from "./Home"
import About from "./About"
import Project from "./Project"
import Navbar from "../components/Navbar/Navbar"

export const SkillContext = createContext({
  skill: 0,
  setSkill: () => {},
})

let color

function App() {
  const [skill, setSkill] = useState(0)
  const value = useMemo(() => ({ skill, setSkill }), [skill, setSkill])

  useEffect(() => {
    switch (skill) {
      case 0:
        color = "#fb7185"
        break

      case 1:
        color = "#a78bfa"
        break
      case 2:
        color = "#60c3fa"
        break
      default:
        color = "#fb7185"
        break
    }
    document.querySelector("body").style.color = color
  }, [skill])
  return (
    <>
      <SkillContext.Provider value={value}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project/:name" component={Project} />
        </Switch>
      </SkillContext.Provider>
    </>
  )
}
export default App
