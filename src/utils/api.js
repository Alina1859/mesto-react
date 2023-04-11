export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((res) => this._getResponseData(res));
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((res) => this._getResponseData(res));
  }

  patchUserData(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${data.name}`,
        about: `${data.description}`,
      }),
    }).then((res) => this._getResponseData(res));
  }

  addNewCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${data.name}`,
        link: `${data.link}`,
      }),
    }).then((res) => this._getResponseData(res));
  }

  removeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }

  putLikeOnCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }

  removeLikeFromCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
    }).then((res) => this._getResponseData(res));
  }

  patchUserAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: `${link}`,
      }),
    }).then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    authorization: "8badccc2-e21d-49cd-93bc-2a509575d5e5",
    "Content-Type": "application/json",
  },
});

export { api };
