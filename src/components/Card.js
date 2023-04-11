function Card({link, alt, name, count, card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img
        src={link}
        alt={alt}
        className="card__img"
        onClick={handleClick}
      />
      <div className="card__info-container">
        <h2 className="card__name">{name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-btn"></button>
          <p className="card__like-count">{count}</p>
        </div>
      </div>
      <button className="card__trash-btn"></button>
    </li>
  );
}

export { Card };
