function Places(props) {
  return (
    <div className="hero-container">
        <img className="hero-img" src={props.item.img} alt="human"></img>
        <div className="container">
          <div className="container flex">
            <h2 className="hero-location">{props.item.location}</h2>
            <a className="places-map" alt="human" href={props.item.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h1 className="hero-title"> {props.item.name}</h1>
          <h3 className="hero-date">{props.item.date}</h3>
          <p className="hero-desc">{props.item.description}</p>
        </div>

    </div>
  )
}

export default Places