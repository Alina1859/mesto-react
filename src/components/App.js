import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from "./PopupWithForm";
import { ImagePopup } from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
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
        isOpen={isAddPlacePopupOpen}
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
        isOpen={isEditAvatarPopupOpen}
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

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}></ImagePopup>
    </div>
  );
}

export default App;
