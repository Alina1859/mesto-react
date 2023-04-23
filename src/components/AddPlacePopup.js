import React, { useRef, useState } from "react";
import { PopupWithForm } from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const newCardNameRef = useRef();
  const newCardLinkRef = useRef();
  const [newCardName, setNewCardName] = useState('');
  const [newCardLink, setNewCardLink] = useState('');

  function handleLinkChange(e) {
    setNewCardLink(e.target.value);
  };

  function handleNameChange(e) {
    setNewCardName(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    onAddCard({
      name: newCardName,
      link: newCardLink
    });

  };

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="place-name-input" className="form__label">
        <input
          type="text"
          name="name"
          placeholder="Название"
          id="place-name-input"
          className="form__input form__input_place_name"
          minLength="2"
          maxLength="30"
          ref={newCardNameRef || ''}
          value={newCardName} onChange={handleNameChange}
          required
        />
        <span className="place-name-input-error form__input-error"></span>
      </label>
      <label htmlFor="place-link-input" className="form__label">
        <input
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          id="place-link-input"
          className="form__input form__input_place_link"
          ref={newCardLinkRef || ''}
          value={newCardLink} onChange={handleLinkChange}
          required
        />
        <span className="place-link-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  );
};

export { AddPlacePopup };
