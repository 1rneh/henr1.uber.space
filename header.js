class Header extends HTMLElement {
  constructor() {
    super();

    this.updateContentWith = this.updateContentWith.bind(this);
  }

  updateContentWith(componentId) {
    const contentContainer = document.querySelector(".content");

    while (contentContainer.firstChild) {
      contentContainer.removeChild(contentContainer.firstChild);
    }
    const newElement = document.createElement(componentId);
    contentContainer.appendChild(newElement);
  }

  connectedCallback() {
    this.innerHTML = `
        <div id="header">
          <a id="header-home">/</a>
          <a id="header-blog">BLOG</a>
          <a id="header-contact">CONTACT</a>
        </div>
        `;
    this.querySelector("#header-home").addEventListener("click", () =>
      this.updateContentWith("home-component")
    );
    this.querySelector("#header-blog").addEventListener("click", () =>
      this.updateContentWith("blog-component")
    );
    this.querySelector("#header-contact").addEventListener("click", () =>
      this.updateContentWith("contact-component")
    );
  }
}

customElements.define("header-component", Header);
