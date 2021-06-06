import "./_Navbar.scss"

import Boutons from "../Boutons/Boutons"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const location = useLocation()
  const [skill, setSkill] = useState("design")

  return (
    <nav>
      <div className="navbar">
        <div className="nav-permanent">
          <Link
            to="/"
            className={location.pathname === "/" ? "" : "a-disactive"}
          >
            Clément Renou
          </Link>
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
              stroke="#FB7185"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "" : "a-disactive"}
          >
            À propos
          </Link>
        </div>
        <div
          className="nav-buttons"
          style={location.pathname === "/" ? null : { visibility: "hidden" }}
        >
          <Boutons
            color="red"
            enable={skill === "design" ? true : false}
            onClick={() => setSkill("design")}
          >
            Design
          </Boutons>
          <Boutons
            color="violet"
            center
            enable={skill === "programmation" ? true : false}
            onClick={() => setSkill("programmation")}
          >
            Programmation
          </Boutons>
          <Boutons
            color="blue"
            enable={skill === "audiovisuel" ? true : false}
            onClick={() => setSkill("audiovisuel")}
          >
            Audiovisuel
          </Boutons>
        </div>
      </div>
    </nav>
  )
}
