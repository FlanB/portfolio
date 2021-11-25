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
          <Col md="4">
            <svg width="100%" viewBox="0 0 394 303">
              <path d="M175.729 71.1229V293.65C175.729 295.903 176.623 298.064 178.214 299.657C179.806 301.25 181.964 302.145 184.215 302.145H238.746C239.86 302.146 240.964 301.927 241.994 301.5C243.024 301.073 243.96 300.448 244.748 299.659C245.536 298.87 246.161 297.933 246.587 296.902C247.013 295.871 247.232 294.766 247.231 293.65V258.497C247.231 247.033 261.205 241.436 269.106 249.738L315.305 298.287C316.49 299.53 317.915 300.52 319.493 301.196C321.071 301.873 322.769 302.222 324.486 302.222H385.219C386.865 302.223 388.476 301.744 389.855 300.844C391.234 299.944 392.322 298.662 392.987 297.154C393.651 295.646 393.863 293.978 393.596 292.351C393.329 290.725 392.596 289.211 391.485 287.995L285.974 172.387C285.098 171.428 284.026 170.666 282.832 170.154C281.638 169.642 280.348 169.391 279.049 169.418C277.75 169.444 276.472 169.748 275.299 170.309C274.127 170.871 273.088 171.676 272.252 172.671L269.627 175.788C262.003 184.85 247.231 179.459 247.231 167.615V8.53381C247.231 1.73261 239.608 -2.37001 234.017 1.48787C208.707 18.9288 183.661 30.3286 169.443 36.0993C168.22 36.5964 167.131 37.3745 166.264 38.3707C165.397 39.367 164.776 40.5535 164.452 41.8343C164.127 43.1152 164.108 44.4544 164.397 45.7439C164.685 47.0334 165.272 48.237 166.111 49.2573C176.288 61.5781 175.729 71.1229 175.729 71.1229Z" />
              <path d="M346.45 95.5132C346.45 95.5132 314.211 99.2294 297.613 140.391C297.341 141.093 297.261 141.854 297.382 142.597C297.503 143.34 297.82 144.037 298.3 144.616C298.78 145.196 299.406 145.636 300.113 145.892C300.821 146.147 301.583 146.21 302.322 146.071C305.388 145.563 308.507 145.463 311.599 145.775C320.87 146.664 328.179 152.151 330.012 153.639L330.186 153.781L330.482 154.032C334.767 157.636 339.89 160.103 345.377 161.205C350.865 162.308 356.542 162.01 361.884 160.34C367.227 158.669 372.064 155.68 375.95 151.647C379.835 147.614 382.645 142.667 384.119 137.262C385.594 131.857 385.686 126.167 384.388 120.717C383.09 115.267 380.442 110.231 376.689 106.074C372.937 101.917 368.199 98.7717 362.914 96.9284C357.628 95.0851 351.964 94.6029 346.444 95.5261L346.45 95.5132Z" />
              <path d="M157.29 224.15C162.887 223.158 165.306 216.518 161.44 212.345L161.588 212.19L125.997 174.655C124.789 173.381 123.332 172.369 121.716 171.684C120.101 170.998 118.361 170.653 116.607 170.67C114.852 170.687 113.12 171.065 111.518 171.782C109.915 172.499 108.478 173.538 107.295 174.835L1.8292 290.385C0.91239 291.399 0.30855 292.657 0.0905997 294.008C-0.12735 295.358 0.0499113 296.743 0.600977 297.995C1.15204 299.247 2.05334 300.312 3.19603 301.062C4.33872 301.812 5.67392 302.215 7.04039 302.222H73.3963C74.3591 302.224 75.3123 302.029 76.1972 301.649C77.0822 301.269 77.8805 300.713 78.5431 300.013L113.066 263.515L143.303 231.557L145.459 229.283C148.682 226.411 153.037 224.904 157.29 224.15Z" />
            </svg>
          </Col>
        </Row>
        <Row md="2" className="text justify-content-center">
          <Col md="4" className="title">
            <h1>{project.name}</h1>
            <span className="date">{project.date}</span>
          </Col>
          <Col md="4">
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
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
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </div>
    </>
  )
}
