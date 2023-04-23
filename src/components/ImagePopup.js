function ImagePopup({isOpen, card, onClose}) {
  return (
    <div
      className={`popup popup_modal_image ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container-image">
        <img
          src={card.link}
          alt={card.name}
          className="popup__card-image"
          tabIndex="0"
        />
        <p className="popup__image-title">{card.name}</p>
        <button
          type="button"
          className="popup__close-btn"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export { ImagePopup };
