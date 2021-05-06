import "./Boutons.scss"

function Boutons(props) {
  return (
    <button
      onClick={props.onClick}
      className={[`button ${props.color} ${props.state}`]}
    >
      {props.children}
    </button>
  )
}
export default Boutons
