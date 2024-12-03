class CustomFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const footer = document.createElement("footer");
    footer.className = "footer";

    footer.innerHTML = `
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="pricing.html">Pricing</a>
        <a href="privacy.html">Privacy</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-date" id="footer-date">
        Carpe Diem ~ 
      </div>
    `;

    const style = document.createElement("style");
    style.textContent = `

    .footer{
    background: #181a1b;
    width: 100vw;
  margin: 2rem auto;
  padding: 2rem 0;
    }
      .footer-links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;
        max-width: 800px;
        margin: 0 auto 1rem auto;
      }


      .footer-date {
        margin-top: 1rem;
        font-size: 1.2rem;
      }
    `;

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "styles.css");
    shadow.appendChild(linkElem);

    // Attach the elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(footer);

    // Initialize the date
    this.updateDate();

    // Update the date every 24 hours
    this.interval = setInterval(() => this.updateDate(), 86400000); // 24 * 60 * 60 * 1000 ms
  }

  connectedCallback() {
    // Lifecycle method called when the element is added to the DOM
    console.log("CustomFooter added to the page.");
  }

  disconnectedCallback() {
    // Cleanup if needed when the element is removed from the DOM
    console.log("CustomFooter removed from the page.");
    clearInterval(this.interval);
  }

  updateDate() {
    const dateElem = this.shadowRoot.getElementById("footer-date");
    const now = new Date();

    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;
    dateElem.textContent = `${formattedDate}`;
  }
}

customElements.define("custom-footer", CustomFooter);
