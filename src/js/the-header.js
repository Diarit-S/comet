import logo from "../assets/logo.png";

let headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    @import '/scss/style.scss';
  </style>

  <header style="background-color:#25262E; width:100vw;
          height:70px; display:flex; align-items: center; 
          padding-left: 30px; position: fixed;"
  >
    <img src="${logo}" alt="logo du site" style="height:38px">
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
