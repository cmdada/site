class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		    <nav>
		        <a href="index.html">home</a>
		        <a href="about.html">about</a>
		        <a href="stuff.html">projects</a>
		        <a href="contact.html">contact</a>
		        <a href="blog.html">blog</a>
		    </nav>
    `;
  }
}

customElements.define('header-component', Header);

