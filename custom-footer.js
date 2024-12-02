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
            background: #1d2021 !important;
            color: #ffffff;
            width: 100vw;
            padding: 30px 0;
            text-align: center;
        }

        .footer-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            max-width: 800px;
            margin: 0 auto;
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
