const Button = ({ label, handleClick }) => {
  return (
    <button
      className="btn btn-default"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button