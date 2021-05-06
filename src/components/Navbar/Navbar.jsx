import "./Navbar.scss"
import Arbo from "./Arbo/Arbo"
import Boutons from "../Boutons/Boutons"
import { useState } from "react"

function Navbar() {
  let [skill, setSkill] = useState(0)
  return (
    <nav>
      <div className="boutons">
        <Boutons
          onClick={() => setSkill(0)}
          state={skill !== 0 ? "disable" : ""}
          color="red"
        >
          Design
        </Boutons>
        <div className="margin-btn">
          <Boutons
            onClick={() => setSkill(1)}
            state={skill !== 1 ? "disable" : ""}
            color="violet"
          >
            Programmation
          </Boutons>
        </div>
        <Boutons
          onClick={() => setSkill(2)}
          state={skill !== 2 ? "disable" : ""}
          color="blue"
        >
          Audiovisuel
        </Boutons>
      </div>
    </nav>
  )
}
export default Navbar
