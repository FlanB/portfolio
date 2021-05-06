import "./Arbo.scss"

function Arbo(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.children}
    </button>
    // <div className="Arbo">
    //   <button onClick={()=> setPage("home")} className={page==="home" ? "nav-active" : "nav-disactive"}>Clément Renou</button>
      // <svg
      //   width="12"
      //   height="35"
      //   viewBox="0 0 12 35"
      //   fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
      //   className="slash"
      // >
      //   <line
      //     x1="10.9963"
      //     y1="1.24727"
      //     x2="1.24725"
      //     y2="33.3784"
      //     stroke="#FB7185"
      //     strokeWidth="2"
      //     strokeLinecap="round"
      //   />
      // </svg>
    //   <button onClick={()=> setPage("about")} className={page==="about" ? "nav-active" : "nav-disactive"}>
    //     À propos
    //   </button>
    // </div>
  )
}

export default Arbo
