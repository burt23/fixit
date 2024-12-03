class CustomFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const footer = document.createElement("footer");
    footer.className = "footer";

    footer.innerHTML = `
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="contact.html">Contact</a>
                <a href="privacy.html">Privacy Policy</a>
                <a href="pricing.html">Pricing</a>
                <a href="about.html">About Us</a>
            </div>
        `;

    const style = document.createElement("style");
    style.textContent = `
        .footer {
            background: #181a1b !important;
            width: 100vw;
            padding: 3rem;
            text-align: center;
        }

        .footer-links {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1.6rem;
            max-width: 800px;
            margin: 0 auto;
        }
        a {
            color: #9d9588!important;
        }
        `;

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "styles.css");
    shadow.appendChild(linkElem);

    // Attach the elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(footer);
  }

  connectedCallback() {
    // Lifecycle method called when the element is added to the DOM
    console.log("CustomFooter added to the page.");
  }

  disconnectedCallback() {
    // Cleanup if needed when the element is removed from the DOM
    console.log("CustomFooter removed from the page.");
  }
}

customElements.define("custom-footer", CustomFooter);
