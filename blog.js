class Blog extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="inner-content">
            <div>
                <h3>a blog? a blog!</h3>
                <p>
                <i>
                Is this a blog? Or is this my therapeutic approach to giving free
                rein to my thoughts? Or are all blogs essentially that?
                </i>
                </p>
            </div>
            <div class="container-articles"></div>
        </div>
    `;

    renderPosts();
  }
}

customElements.define("blog-component", Blog);
