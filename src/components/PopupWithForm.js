function PopupWithForm(props) {
  return (
    <div className={`popup popup_modal_${props.name} ${props.isOpen}`}>
      <div className="popup__container">
        <form className={`form form_${props.name}`} name={`${props.name}-form`} action="/register"  method="GET" noValidate>
          <fieldset className="form__field">
            <legend className="form__title">{`${props.title}`}</legend>
              {props.children}
          </fieldset>
          <button type="submit" className="popup__submit">Сохранить</button>
        </form>
        <button type="button" className="popup__close-btn" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export {
  PopupWithForm
};
