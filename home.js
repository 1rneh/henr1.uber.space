class Home extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="inner-content">
            <h3>hello!</h3>
            <div>
                <p>
                I am <i>henri, henr1, 1rneh, janika</i> depending on the handle
                availability in the world wide and wild web and I go by the pronouns
                she/her.
                </p>
                <p>
                I am a computer science student and I am blessed to work on Firefox as
                my job as software engineer.
                </p>
                <p>
                You will find a variety of different topics on this site. I am
                capturing interesting happenings or just share ... thoughts. I'd say
                it's the typical start of a blog that has no direction yet.
                </p>
            </div>
        </div>
    `;
  }
}

customElements.define("home-component", Home);
