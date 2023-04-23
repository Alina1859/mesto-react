import React, { useRef, useState } from "react";
import { PopupWithForm } from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const avatarRef = useRef();
  const [avatar, setAvatar] = useState('');

  function handleChange(e) {
    setAvatar(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar,
    });
  };

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="avatar-link-input" className="form__label">
        <input
          type="url"
          name="link"
          placeholder="Ссылка на аватарку"
          id="avatar-link-input"
          className="form__input form__input_avatar_link"
          ref={avatarRef}
          value={avatar} onChange={handleChange}
          required
        />
        <span className="avatar-link-input-error form__input-error"></span>
      </label>
    </PopupWithForm>
  );
};

export { EditAvatarPopup };
