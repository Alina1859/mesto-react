function PopupWithForm({name, isOpen, title, onClose, children}) {
  return (
    <div className={`popup popup_modal_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <form
          className={`form form_${name}`}
          name={`${name}-form`}
          action="/register"
          method="GET"
        >
          <fieldset className="form__field">
            <legend className="form__title">{`${title}`}</legend>
            {children}
          </fieldset>
          <button type="submit" className="popup__submit">
            Сохранить
          </button>
        </form>
        <button
          type="button"
          className="popup__close-btn"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export { PopupWithForm };
