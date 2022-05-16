const Button = ({ label, onClick }) => {

  return (
    <button
      className="btn btn-default"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button