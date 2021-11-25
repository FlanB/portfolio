import './_Navbar.scss'

import Boutons from '../Boutons/Boutons'

import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { SkillContext } from '../../scenes/App'

export default function Navbar() {
  const location = useLocation()
  const { skill, setSkill } = useContext(SkillContext)

  return (
    <nav>
      <div className="navbar">
        <div className="nav-permanent">
          <Link
            to="/"
            className={location.pathname === '/' ? '' : 'a-disactive'}
          >
            Clément Renou
          </Link>
          <svg
            width="12"
            height="35"
            viewBox="0 0 12 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line
              x1="10.9963"
              y1="1.24727"
              x2="1.24725"
              y2="33.3784"
            />
          </svg>
          <Link
            to="/about"
            className={location.pathname === '/about' ? '' : 'a-disactive'}
          >
            À propos
          </Link>
        </div>
        <div
          className="nav-buttons"
          style={location.pathname === '/' ? null : { visibility: 'hidden' }}
        >
          <Boutons
            color="red"
            enable={skill === 0 ? true : false}
            onClick={() => setSkill(0)}
          >
            Design
          </Boutons>
          <Boutons
            color="violet"
            center
            enable={skill === 1 ? true : false}
            onClick={() => setSkill(1)}
          >
            Programmation
          </Boutons>
          <Boutons
            color="blue"
            enable={skill === 2 ? true : false}
            onClick={() => setSkill(2)}
          >
            Audiovisuel
          </Boutons>
        </div>
      </div>
    </nav>
  )
}
