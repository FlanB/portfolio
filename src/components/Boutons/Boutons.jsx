import "./_Boutons.scss"

function Boutons(props) {
  return (
    <button
      className={`button ${props.color} btn-${props.center ? "center" : ""} btn-${
        props.enable ? "enable" : "disable"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
export default Boutons
