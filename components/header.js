class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		<header>
		        <h1>ada's blog</h1>
		    </header>
		    <nav>
		        <a href="index.html">home</a>
		        <a href="about.html">fancy about me</a>
		        <a href="stuff.html">projects</a>
		        <a href="contact.html">contact me</a>
		        <a href="blog.html">blog</a>
		    </nav>
    `;
  }
}

customElements.define('header-component', Header);

