//Users card component

class UserCardElement extends HTMLElement {
constructor(){
    super();
    this.attachShadow({mode: 'open'});
}
connectedCallback(){
    const firstName = this.getAttribute("first-name");
    const lastName = this.getAttribute("last-name");
    const pictureURL = this.getAttribute("picture-url");

    this.shadowRoot.innerHTML = `
    <style>
    h2 {
      color : yellow;
    }
  </style>
    <img src="${pictureURL}">
    <h2>${firstName} ${lastName}</h2>
    `

}
}

window.customElements.define('user-card',UserCardElement)