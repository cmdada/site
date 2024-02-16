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
          <a href="index.html"><i class="fa-solid fa-house"></i></a>
          <a href="about.html"><i class="fa-solid fa-circle-info"></i></a>
          <a href="stuff.html"><i class="fa-solid fa-code"></i></a>
	      <a href="adamicro.html">aμ</a>
          <a href="contact.html"><i class="fa-solid fa-envelope"></i></a>
          <a href="blog.html"><i class="fa-solid fa-rss"></i></a>
          
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
