import React from 'react';
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PopupWithForm } from './PopupWithForm';
import { api } from '../utils/api';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">

        <Header/>
        <Main
          onEditAvatar = {handleEditAvatarClick}
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
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

        <div className="popup popup_modal_image">
          <div className="popup__container-image">
            <img src="#" alt="#" className="popup__card-image" tabIndex="0" />
            <p className="popup__image-title"></p>
            <button type="button" className="popup__close-btn"></button>
          </div>
        </div>

        <div className="popup popup_modal_approve-delete">
          <div className="popup__container">
            <form className="form form_modal_approve-delete" name="approve-delete-form" noValidate>
              <fieldset className="form__field">
                <legend className="form__title form__title_approve-delete">Вы уверены?</legend>
              </fieldset>
              <button type="submit" className="popup__submit">Сохранить</button>
            </form>
            <button type="button" className="popup__close-btn"></button>
          </div>
        </div>



      </div>

      {/* Шаблон карточки */}
      <template id="cardTemplate">
        <li className="card">
          <img src="#" alt="#" className="card__img" />
          <div className="card__info-container">
            <h2 className="card__name"> </h2>
            <div className="card__like-container">
              <button type="button" className="card__like-btn"></button>
              <p className="card__like-count">0</p>
            </div>

          </div>
          <button className="card__trash-btn"></button>
        </li>
      </template>
    </div>
  );
}

export default App;
