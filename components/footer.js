class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          display: flex;
          flex-direction: column;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          align-items: center;
          justify-content: flex-end;
          text-align: center;
          padding-bottom: 0.25vw;
          padding-top: 0.25vw;
          background-color: #333333;
        }
      </style>
      <footer>
        <code>created in raw html by ada t (adas.software)</code>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
