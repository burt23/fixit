class CustomContact extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const header = document.createElement("section");
    header.className = "header";

    header.innerHTML = `
        <section id="yelp">
            <div class="yelp-link bounce-in">
                <a href="https://biz.yelp.com/biz_info/seFmSxwpOilWPooRoKLuPg" target="_blank">
                    <img src="images/yelp.png" alt="Yelp Logo">
                    <p>Check out our reviews on Yelp!</p>
                </a>
            </div>
        </section>
        <section class="contact-info">


            <h4><a href="mailto:info@fixitworks.com">info@fixitworks.com</a></h4>
            <h4><a href="tel:5127771176">512.777.1176</a></h4>
        </section>
    `;

    // Append styles
    const style = document.createElement("style");
    style.textContent = `
        .yelp-link {
            margin: 2rem 0;
            animation: bounceIn 2s ease-in-out;
        }

        .yelp-link a {
            text-decoration: none;
            color: #e0e0e0;
        }       
        .yelp-link img {
            width: 100px;
            margin-bottom: 0.5em;

        .contact-info {
            background: linear-gradient(15deg, #1a1a1a, #2a2a2a);
            width: 100vw !important;
            padding: 0 !important;
            margin: 0 !important;
        }

        /* Ensure target sections have position: relative */
        .footer,
        .contact-info {
            position: relative;
            overflow: hidden;
        }
    `;
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "styles.css");
    shadow.appendChild(linkElem);

    // Attach the elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(header);
  }

  connectedCallback() {
    // Lifecycle method called when the element is added to the DOM
    console.log(" added to the page.");
  }

  disconnectedCallback() {
    // Cleanup if needed when the element is removed from the DOM
    console.log(" removed from the page.");
  }
}

// Define the new element
customElements.define("custom-contact", CustomContact);
