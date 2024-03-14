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
              <li>
                <a href="index.html">[home]</a>
                <a href="about.html">[about]</a>
                <a href="stuff.html">[projects]</a>
                <a href="adamicro.html">[adaμ]</a>
                <a href="contact.html">[contact]</a>
                <a href="art.html">[art]</a>
                <a href="blog.html">[blog]</a>
              </li>
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
