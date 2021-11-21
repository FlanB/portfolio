import './_Slider.scss'

import { Row, Col } from 'react-bootstrap'
import { useState, useRef, useEffect, useContext } from 'react'
import { projectsList, Context } from '../../scenes/Home'

let once = false

export default function Slider() {
  const {
    index: [index, setIndex],
  } = useContext(Context)
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const ProgressBar = useRef(null)

  useEffect(() => {
    setInterval(
      () => setProgressBarWidth((progressBarWidth) => progressBarWidth + 10),
      1000,
    )
  }, [])
  if (progressBarWidth >= 100 && once === false) {
    once = true
    projectsList[index].style.display = 'none'
    if (index === projectsList.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
    projectsList[index].style.display = null
    setTimeout(() => {
      ProgressBar.current.style.transition = 'unset'
      setProgressBarWidth(0)
      once = false
      ProgressBar.current.style.transition = null
    }, 500)
  }

  return (
    <Row className="slider">
      <Col className="line-container" md={{ span: 4 }}>
        0{index + 1}
        <div className="line">
          <span
            ref={ProgressBar}
            style={{ width: progressBarWidth + '%' }}
          ></span>
        </div>
        0{projectsList.length}
      </Col>
    </Row>
  )
}
