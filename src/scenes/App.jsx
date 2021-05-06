import Home from "./Home"
import About from "./About"
import Arbo from "../components/Navbar/Arbo/Arbo"
import Boutons from "../components/Boutons/Boutons"
import "../components/Navbar/Navbar.scss"

import { useState } from "react"

function App() {
  let [page, setPage] = useState("home")
  let [skill, setSkill] = useState(0)

  return (
    <div className="global">
      <nav>
        <div className="Arbo">
          <Arbo
            onClick={() => setPage("home")}
            className={page === "home" ? "nav-active" : "nav-disactive"}
          >
            Clément Renou
          </Arbo>
          <svg
            width="12"
            height="35"
            viewBox="0 0 12 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="slash"
          >
            <line
              x1="10.9963"
              y1="1.24727"
              x2="1.24725"
              y2="33.3784"
              stroke={page === "home" ? "#FB7185" : "#000000"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <Arbo
            onClick={() => setPage("about")}
            className={page === "about" ? "nav-active" : "nav-disactive"}
          >
            À propos
          </Arbo>
        </div>

        {page === "home" ? (
          <div className="boutons">
            <div>
              <Boutons
                onClick={() => setSkill(0)}
                state={skill !== 0 ? "disable" : ""}
                color="red"
              >
                Design
              </Boutons>
            </div>
            <div className="margin-btn">
              <Boutons
                onClick={() => setSkill(1)}
                state={skill !== 1 ? "disable" : ""}
                color="violet"
              >
                Programmation
              </Boutons>
            </div>
            <div>
              <Boutons
                onClick={() => setSkill(2)}
                state={skill !== 2 ? "disable" : ""}
                color="blue"
              >
                Audiovisuel
              </Boutons>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
      {page === "about" ? <About /> : <Home />}
    </div>
  )
}
export default App
