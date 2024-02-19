class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <code>created by ada t (adas.software)</code>
      </footer>
    `;
    });
  }
}

customElements.define('header-component', Header);
