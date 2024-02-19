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
          <a href="index.html">home</a>
          <a href="about.html">about</a>
          <a href="stuff.html">projects</a>
	      <a href="adamicro.html">adaμ</a>
	      <a href="cmu.html">cmu</a>
          <a href="contact.html">contact</a>
          <a href="blog.html">blog</a>
    <div class="theme-switch-wrapper">
        <button class="theme-switch" onclick="switchTheme()">[high contrast mode]</button>
    </div>
    
          
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
