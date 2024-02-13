class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		    <nav>
		        <a href="index.html"></a>
		        <a href="about.html"></a>
		        <a href="stuff.html"></a>
		        <a href="contact.html">󰛋</a>
		        <a href="blog.html"></a>
		    </nav>
    `;
  }
}

customElements.define('header-component', Header);

