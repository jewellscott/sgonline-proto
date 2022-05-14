const Button = ({ text }) => {
  return (
    <button>
        { text }
    </button>
  )
}

export default Button

Button.defaultProps = {
    text: 'Button',
}

