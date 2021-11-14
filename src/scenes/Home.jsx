import "./_Home.scss"
import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import projects from "../projects.json"

function Home() {
  const [progressBarWidth, setProgressBarWidth] = useState(0)

  useEffect(() => {
    setInterval(
      () => setProgressBarWidth((progressBarWidth) => progressBarWidth + 10),
      1000
    )
  }, [])
  if (progressBarWidth >= 100) {
    setProgressBarWidth(0)
    setTimeout(() => console.log("endTransition"), 1000)
  }

  return (
    <>
      <Container className="home">
        <Row className="content">
          <Col md={{ span: 7 }}>
            <img src={projects[0].imgs[0]} alt="" />
          </Col>
          <Col className="home-info" md={{ span: 5 }}>
            <div className="home-text">
              <h1 className="home-display">{projects[0].name}</h1>
              <p>{projects[0].description}</p>
            </div>
            <div className="home-interaction">
              <Link to="/project/makyma" className="red btn">
                En savoir plus
              </Link>
              <div className="line"></div>
            </div>
          </Col>
        </Row>
        <Row className="slider">
          <Col className="line-container" md={{ span: 4 }}>
            01
            <div className="line">
              <span style={{ width: progressBarWidth + "%" }}></span>
            </div>
            03
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
