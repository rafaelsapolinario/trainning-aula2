import './Button.scss'

export default function Button(props) {
    
  return (
    <button
      type="button"
      className={`more ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
