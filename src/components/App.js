import React from 'react';
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);


  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }


  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(false)
  }

  return (
    <div className="App">
      <div className="page">

        <Header/>
        <Main
          onEditAvatar = {handleEditAvatarClick}
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onCardClick = {handleCardClick}
        />
        <Footer/>

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={
            isEditProfilePopupOpen ?
            "popup_opened"
            : ""}
          onClose={closeAllPopups}
        >
          <label htmlFor="profile-name-input" className="form__label">
            <input
              type="text"
              name="name"
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

        <PopupWithForm
          name="place"
          title="Новое место"
          isOpen={
            isAddPlacePopupOpen ?
            "popup_opened"
            : ""}
          onClose={closeAllPopups}
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
              required
            />
            <span className="place-link-input-error form__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          isOpen={
            isEditAvatarPopupOpen ?
            "popup_opened"
            : ""}
          onClose={closeAllPopups}
        >
          <label htmlFor="avatar-link-input" className="form__label">
            <input
              type="url"
              name="link"
              placeholder="Ссылка на аватарку"
              id="avatar-link-input"
              className="form__input form__input_avatar_link"
              required
            />
            <span className="avatar-link-input-error form__input-error"></span>
          </label>
        </PopupWithForm>

        <ImagePopup

          card={selectedCard}

          onClose={closeAllPopups}
        >
        </ImagePopup>
      </div>
    </div>
  );
}

export default App;
