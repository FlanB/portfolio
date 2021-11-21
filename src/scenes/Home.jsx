import { createContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import './_Home.scss'

import Slider from '../components/Slider/Slider'

import projects from '../projects.json'

export let projectsList = []

export const Context = createContext()

function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    projects.forEach((project, index) => {
      projectsList.push(document.getElementById(index))
    })
    for (let id = 1; id < projectsList.length; id++) {
      projectsList[id].style.display = 'none'
    }
    // document
    //   .getElementById(index)
    //   .querySelector('img').style.transform = `translateX: ${
    //   Math.random() * (1000 - 500) + 500
    // }`
  }, [index])

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
                <Link to="/project/{project.name}" className="red btn">
                  En savoir plus
                </Link>
                <div className="line"></div>
              </div>
            </Col>
          </Row>
        ))}
        <Context.Provider value={{ index: [index, setIndex] }}>
          <Slider />
        </Context.Provider>
      </Container>
    </>
  )
}

export default Home
