import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
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

  useEffect(() => {
    setNewCardName('')
    setNewCardLink('')
  }, [isOpen]);

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading? 'Добавление...' : 'Добавить'}
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
          value={newCardLink} onChange={handleLinkChange}
          required
        />
        <span className="place-link-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  );
};
