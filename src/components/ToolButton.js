const ToolButton = ({icon, text}) => {
  return (
    <button>
        <div>
            {icon}
        </div>
        <p>{text}</p>
    </button>
  )
}

export default ToolButton