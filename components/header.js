class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="menu-toggle" id="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav class="navbar">
          <li><a href="index.html">home</a></li>
          <li><a href="about.html">about</a></li>
          <li><a href="stuff.html">projects</a></li>
	      <li><a href="adamicro.html">adaμ</a></li>
          <li><a href="contact.html">contact</a></li>
          <li><a href="blog.html">blog</a></li>
          
        </nav>
      </header>
    `;

    // Add event listener for menu toggle
    const mobileMenuToggle = this.querySelector('#mobile-menu');
    const navbar = this.querySelector('.navbar');

    mobileMenuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }
}

customElements.define('header-component', Header);
