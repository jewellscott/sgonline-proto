

const HomeNavCard = ({ hText, icon, sHText, handleClick }) => {
  return (
    <div 
      className="home-nav-card"
      onClick={handleClick}
    >
      <figure className="card-rich">
       {/* {icon} */}
       ICON
      </figure>
      <figcaption>
        <h3 className="card-header">{hText}</h3>
        <h4 className="card-subheader">{sHText}</h4>
      </figcaption>
    </div>
  )
}

export default HomeNavCard