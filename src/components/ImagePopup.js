function ImagePopup(props) {
  return (
    <div className={`popup popup_modal_image ${props.card ? 'popup_opened' : ""}`}>
      <div className="popup__container-image">
        <img src={props.card.link} alt={props.card.name} className="popup__card-image" tabIndex="0" />
        <p className="popup__image-title">{props.card.name}</p>
        <button type="button" className="popup__close-btn" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export {
  ImagePopup
};
