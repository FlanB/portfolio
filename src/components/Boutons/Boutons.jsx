import "./_Boutons.scss"

function Boutons(props) {
  return (
    <button
      className={`btn ${props.color} btn-${props.center ? "center" : ""} btn-${
        props.enable ? "enable" : "disable"
      }`}
      onClick={props.onClick}
      // renderAs={props.renderAs}
    >
      {props.children}
    </button>
  )
}
export default Boutons
