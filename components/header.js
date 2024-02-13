
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
		    <nav>
		        <a href="index.html"><i class="fa-solid fa-house"></i></a>
		        <a href="about.html"><i class="fa-solid fa-circle-info"></i></a>
		        <a href="stuff.html"><i class="fa-solid fa-code"></i></a>
		        <a href="contact.html"><i class="fa-solid fa-envelope"></i></a>
		        <a href="blog.html"><i class="fa-solid fa-rss"></i></a>
		    </nav>
    `;
  }
}

customElements.define('header-component', Header);

