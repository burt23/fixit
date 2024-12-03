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

            <h1>Contact Info</h1>

            <div class="contact-container">
            <div>

                <div class="contact-item">
                    <h3 class="contact-label">Email:</h3>
                    <a class="contact-link" href="mailto:info@fixitworks.com">info@fixitworks.com</a>
                </div>
                </div>
                <div>
                    <div class="contact-item">
                        <h3 class="contact-label">Phone:</h3>
                    <a class="contact-link" href="tel:5127771176">512.777.1176</a>
                </div>
                </div>
                <div>
                <div class="contact-item">
                    <h3 class="contact-label">Location:</h3>
                    <p class="contact-text">Austin, TX</p>
                </div>
                </div>
            </div>
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
            color: #e0e0e0;
        }       
        .yelp-link img {
            width: 100px;
            margin-bottom: 0.5em;
        }

        .contact-info {
            background: linear-gradient(15deg, #1a1a1a, #2a2a2a);
            width: 100vw !important;
            padding: 1rem !important;
            margin: 0 !important;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .contact-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
            width: 100%;
            max-width: 800px;
        }

        .contact-item {
            flex: 1 1 200px;
            text-align: center;
        }

        .contact-label {
            font-weight: bold;
            margin-right: 0.5em;
            color: #ffffff;
        }

        .contact-link {
            color: #9d9588;
            text-decoration: none;
        }

        .contact-text {
            color: #9d9588;
            margin: 0;
        }

        /* Ensure target sections have position: relative */
        .footer,
        .contact-info {
            position: relative;
            overflow: hidden;
        }

        /* Responsive adjustments */
        @media (max-width: 600px) {
            .contact-item {
                flex-direction: column;
                align-items: flex-start;
            }

            .contact-label {
                margin-bottom: 0.3em;
            }
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
    console.log("CustomContact added to the page.");
  }

  disconnectedCallback() {
    // Cleanup if needed when the element is removed from the DOM
    console.log("CustomContact removed from the page.");
  }
}

// Define the new element
customElements.define("custom-contact", CustomContact);
