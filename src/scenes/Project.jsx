import "./_Project.scss"
import projects from "../projects.json"

import { Container, Row, Col } from "react-bootstrap"
import { useRef, useEffect } from "react"
let project
export default function Project(props) {
  const scrollBtn = useRef(null)
  const name = props.match.params.name
  project = undefined
  Object.values(projects).forEach((el) => {
    if (project) return
    project = el.find((i) => {
      return i.name === name
    })
  })

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollBtn.current) {
        if (window.scrollY > window.innerHeight) {
          scrollBtn.current.style.opacity = 1
        } else {
          scrollBtn.current.style.opacity = 0
        }
      }
    })
  }, [])

  return (
    <>
      <div className="project-container-title">
        <Row className="justify-content-center">
          <Col md="4" className="justify-content-center d-flex">
            <img src={project.logo} alt={project.name} />
          </Col>
        </Row>
        <Row md="2" className="text justify-content-center">
          <Col md="5" className="title">
            <h1>{project.name}</h1>
            <span className="date">{project.date}</span>
          </Col>
          <Col md="4">
            <p> {project.description}</p>
            {project.link ? <a href={project.link}>Accéder au site</a> : null}
          </Col>
        </Row>
      </div>
      <Container className="project">
        <div className="img">
          {project.imgs.map((image, index) => (
            <img key={index} src={image} alt={project.name} />
          ))}
        </div>
        <Row className="credits">
          <Col className="title">Équipe</Col>
          <Col className="jobs">
            {Object.keys(project.team).map((jobs) => (
              <div key={jobs}>
                <span>{jobs}</span>
                <ul>
                  {project.team[jobs].map((job) => (
                    <li key={job}>{job}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      <div
        className="scroll-top"
        ref={scrollBtn}
        onClick={() => window.scrollTo(0, 0)}
        style={{ opacity: 0 }}
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"/>
          <polyline points="5 12 12 5 19 12"/>
        </svg>
      </div>
    </>
  )
}
