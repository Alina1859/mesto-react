import React from "react";
import { api } from "../utils/api";

function Main(props) {

  const [userName, setUserName] = React.useState('');

  const getUserDataApi = () => {
    api.getUserData()
    .then((data) => {
      setUserName({
        userName: data.name
      })
    })
  }


  React.useEffect(() => {
    getUserDataApi();
  }, []);


  return (
    <main className="content">

      <section className="profile">
        <div className="profile__info-container">
          <button className="profile__info-avatar-btn" onClick={props.onEditAvatar}>
            <img style={{ backgroundImage: `url(${"props.userAvatar"})` }} alt="фото профиля" className="profile__img" />
          </button>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-btn" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">{"props.userDescription"}</p>
          </div>
        </div>
        <button type="button" className="profile__add-btn" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__items">
        </ul>
      </section>
    </main>
  )
}

export {
  Main
};
