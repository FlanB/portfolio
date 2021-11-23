import { Route, Switch } from 'react-router-dom'
import { useState, useMemo, createContext } from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import Navbar from '../components/Navbar/Navbar'

export const SkillContext = createContext({
  skill: 0,
  setSkill: () => {},
})

function App() {
  const [skill, setSkill] = useState(0)
  const value = useMemo(() => ({ skill, setSkill }), [skill, setSkill])

 
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
