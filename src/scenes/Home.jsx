import { createContext, useEffect, useMemo, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

import "./_Home.scss"

import Slider from "../components/Slider/Slider"
import { SkillContext } from "../scenes/App"

import projects from "../projects.json"

export let projectsList = []
export const Context = createContext({
  index: 0,
  setIndex: () => {},
})

function Home() {
  const [index, setIndex] = useState(0)
  const { skill } = useContext(SkillContext)
  const value = useMemo(
    () => ({ index, setIndex, skill }),
    [index, setIndex, skill]
  )
  const [content, setContent] = useState(
    Object.values(projects)[skill].map((project, index) => (
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
            <Link to={"/project/" + project.name} className="red btn">
              En savoir plus
            </Link>
            <div className="line"></div>
          </div>
        </Col>
      </Row>
    ))
  )
  useEffect(() => {
    setContent(
      Object.values(projects)[skill].map((project, index) => (
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
              <Link to={"/project/" + project.name} className="red btn">
                En savoir plus
              </Link>
              <div className="line"></div>
            </div>
          </Col>
        </Row>
      ))
    )
  }, [skill])
  //init array
  useEffect(() => {
    projectsList = []
    Object.values(projects)[0].forEach((project, index) => {
      projectsList.push(document.getElementById(index))
    })
    for (let id = 1; id < projectsList.length; id++) {
      projectsList[id].style.display = "none"
    }
  }, [])

  //slide animation
  useEffect(() => {
    const random = Math.random() * (500 - -100) + -100
    document.querySelectorAll(".content").forEach((el) => {
      el.querySelector("img").style.transform = `translateX( ${random}px)`
      el.querySelector(
        ".home-info"
      ).style.transform = `translateX( -${random}px)`
    })
  }, [index])

  return (
    <>
      <Container className="home">
        {content}
        <Context.Provider value={value}>
          <Slider />
        </Context.Provider>
      </Container>
    </>
  )
}

export default Home
