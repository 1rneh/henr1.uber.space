class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="inner-content">
        <h3>contact me!</h3>
        <div>
            <p>Choose a platform and say hi :)</p>
            <div class="contacts">
                <a href="https://github.com/1rneh">GITHUB</a>
                <a href="https://mozilla.social/@janika">MASTODON</a>
                <a href="https://www.linkedin.com/in/janika-neuberger/">LINKEDIN</a>
                <a href="mailto:henri-blog (at) mailbox (dot) org">EMAIL</a>
            </div>
        </div>
        <p>&copy; 2024 Henri</p>
      `;
  }
}

customElements.define("contact-component", Contact);
