import React from "react";
import { api } from "../utils/api";
import { Card } from "../components/Card";

function Main(props) {

  const [userName, setUserName] = React.useState('Матье Балл');
  const [userDescription, setUserDescription] = React.useState('Знаменитый философ');
  const [userAvatar, setuserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const getUserDataApi = () => {
    api.getUserData()
    .then((data) => {
      setUserName(data.name)
      setUserDescription(data.about)
      setuserAvatar(data.avatar)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }

  const getCardsApi = () => {
    api.getInitialCards()
    .then((data) => {
      setCards(...cards, data)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
  }


  React.useEffect(() => {
    getUserDataApi();
    getCardsApi();
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__info-container">
          <button className="profile__info-avatar-btn" onClick={props.onEditAvatar}>
            <img src={userAvatar} className="profile__img" alt="Фото профиля" />
          </button>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit-btn" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-btn" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__items">
        {cards.map((card, i) => (
           <Card
            key={i}
            name={card.name}
            alt={card.name}
            link={card.link}
            count={(card.likes).length}
            onCardClick={props.onCardClick}
           >
           </Card>
        ))}
        </ul>
      </section>
    </main>
  )
}

export {
  Main
};
