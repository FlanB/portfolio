import "./_Slider.scss"

import { Row, Col } from "react-bootstrap"
import { useState, useRef, useEffect, useContext } from "react"
import { projectsList, Context } from "../../scenes/Home"

let once = false
let once2 = false

export default function Slider() {
  const { index, setIndex, skill } = useContext(Context)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const ProgressBar = useRef(null)
  useEffect(() => {
    setProgressBarWidth(0)
  }, [skill, index])
  useEffect(() => {
    setInterval(
      () => setProgressBarWidth((progressBarWidth) => progressBarWidth + 10),
      1000
    )
  }, [])

  useEffect(() => {
    if (progressBarWidth >= 100 && once === false) {
      once = true
      if (index === projectsList.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
      setTimeout(() => {
        once = false
      }, 500)
    }
  }, [index, progressBarWidth, setIndex])

  useEffect(() => {
    if (once2 === true) {
      if (index === 1) {
        projectsList[0].style.display = "none"
      } else if (index === 0) {
        projectsList[projectsList.length - 1].style.display = "none"
      } else {
        projectsList[index - 1].style.display = "none"
      }

      projectsList[index].style.display = null
    }
    once2 = true
  }, [index])

  return (
    <Row className="slider">
      <Col className="line-container" md={{ span: 4 }}>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1)
              setProgressBarWidth(0)
            }
          }}
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        0{index + 1}
        <div className="line">
          <span
            ref={ProgressBar}
            style={{ width: progressBarWidth + "%" }}
          ></span>
        </div>
        0{projectsList.length}
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => {
            if (index < projectsList.length - 1) {
              setIndex(index + 1)
              setProgressBarWidth(0)
            }
          }}
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </Col>
    </Row>
  )
}
