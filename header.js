class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        header {
            display: flex;
            column-gap: 2em;
        }
        </style>
        <header>
            <a href="index.html">/</a>
            <a href="blog.html">BLOG</a>
            <a href="contact.html">CONTACT</a>
        </header>
    `;
  }
}

customElements.define("header-component", Header);
