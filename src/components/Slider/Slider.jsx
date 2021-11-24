import "./_Slider.scss"

import { Row, Col } from "react-bootstrap"
import { useState, useRef, useEffect, useContext } from "react"
import { projectsList, Context } from "../../scenes/Home"

let once = false

export default function Slider() {
  const { index, setIndex, skill } = useContext(Context)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const ProgressBar = useRef(null)
  useEffect(() => {
    setProgressBarWidth(0)
  }, [skill])
  useEffect(() => {
    setInterval(
      () => setProgressBarWidth((progressBarWidth) => progressBarWidth + 10),
      1000
    )
  }, [])

  useEffect(() => {
    if (progressBarWidth >= 100 && once === false) {
      once = true
      projectsList[index].style.display = "none"
      if (index === projectsList.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
      if (index < projectsList.length - 1) {
        projectsList[index + 1].style.display = null
      } else {
        projectsList[0].style.display = null
      }
      //   ProgressBar.current.style.transition = 'unset'
      setProgressBarWidth(0)
      //   ProgressBar.current.style.transition = null
      setTimeout(() => {
        once = false
      }, 500)
    }
  }, [index, progressBarWidth, setIndex])

  return (
    <Row className="slider">
      <Col className="line-container" md={{ span: 4 }}>
        0{index + 1}
        <div className="line">
          <span
            ref={ProgressBar}
            style={{ width: progressBarWidth + "%" }}
          ></span>
        </div>
        0{projectsList.length}
      </Col>
    </Row>
  )
}
