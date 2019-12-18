import logo from "../assets/logo.png";

let headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    @import '/scss/style.scss';
  </style>

  <header style="background-color:red; width:100px">
    <img src="${image}" alt="logo du site">
  </header>
`;

class HeaderCard extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(headerTemplate.content.cloneNode(true));

    this.img = shadowRoot.querySelector("img");

    setTimeout(() => {
      this.render();
    }, 500);
  }

  render() {}
}

window.customElements.define("the-header", HeaderCard);
