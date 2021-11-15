import "./_Home.scss"
import { useState, useEffect, useRef } from "react"

import { Link } from "react-router-dom"

import { Container, Row, Col } from "react-bootstrap"

import projects from "../projects.json"

let index = 0
let once = false
let projectsList = []

function Home() {
  const ProgressBar = useRef(null)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  useEffect(() => {
    projects.forEach((project, index) => {
      projectsList.push(document.getElementById(index))
    })
    for (let id = 1; id < projectsList.length; id++) {
      projectsList[id].style.display = "none"
    }
    setInterval(
      () => setProgressBarWidth((progressBarWidth) => progressBarWidth + 10),
      1000
    )
  }, [])

  if (progressBarWidth >= 100 && once === false) {
    once = true
    projectsList[index].style.display = "none"
    if (index === projectsList.length - 1) {
      index = 0
    } else {
      index++
    }
    projectsList[index].style.display = null
    setTimeout(() => {
      ProgressBar.current.style.transition = "unset"
      setProgressBarWidth(0)
      once = false
      ProgressBar.current.style.transition = null
    }, 500)
  }

  return (
    <>
      <Container className="home">
        {projects.map((project, index) => (
          <Row className="content" key={index} id={index}>
            <Col md={{ span: 7 }}>
              <img src={project.imgs[0]} alt="" />
            </Col>
            <Col className="home-info" md={{ span: 5 }}>
              <div className="home-text">
                <h1 className="home-display">{project.name}</h1>
                <p>{project.description}</p>
              </div>
              <div className="home-interaction">
                <Link to="/project/makyma" className="red btn">
                  En savoir plus
                </Link>
                <div className="line"></div>
              </div>
            </Col>
          </Row>
        ))}
        <Row className="slider">
          <Col className="line-container" md={{ span: 4 }}>
            0{index + 1}
            <div className="line">
              <span
                ref={ProgressBar}
                style={{ width: progressBarWidth + "%" }}
              ></span>
            </div>
            0{projects.length}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
