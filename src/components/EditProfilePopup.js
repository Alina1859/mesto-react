import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  };

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading? 'Сохранение...' : 'Сохранить'}
    >
      <label htmlFor="profile-name-input" className="form__label">
        <input
          type="text"
          name="name"
          value={name || ''}
          onChange={handleChangeName}
          placeholder="Введите имя профиля"
          id="profile-name-input"
          className="form__input form__input_profile_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="profile-name-input-error form__input-error"></span>
      </label>
      <label htmlFor="profile-description-input" className="form__label">
        <input
          type="text"
          name="description"
          value={description || ''}
          onChange={handleChangeDescription}
          placeholder="Введите описание профиля"
          id="profile-description-input"
          className="form__input form__input_profile_description"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="profile-description-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  );
};
