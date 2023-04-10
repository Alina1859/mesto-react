function Card(props) {

  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <li className="card">
      <img src={props.link} alt={props.alt} className="card__img" onClick={handleClick} />
      <div className="card__info-container">
        <h2 className="card__name">{props.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-btn"></button>
          <p className="card__like-count">{props.count}</p>
        </div>
      </div>
      <button className="card__trash-btn"></button>
    </li>
  )
}

export {
  Card
}
