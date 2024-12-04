class CustomContact extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const section = document.createElement("section");
    section.className = "custom-contact";

    section.innerHTML = `
<section class="contact-info">

            <h1>Contact Info</h1>
            <div class="contact-container">
                <div class="contact-item">
                    <label class="contact-label">Email</label>
                    <a class="contact-link" href="mailto:info@fixitworks.com">info@fixitworks.com</a>
                </div>
                <div class="contact-item">
                    <label class="contact-label">Phone</label>
                    <a class="contact-link" href="tel:5127771176">512.777.1176</a>
                </div>
                <div class="contact-item">
                    <label class="contact-label">Location</label>
                    <span class="contact-text">Austin, TX</span>
                </div>
            </div>
        </section>

        <section id="yelp">
            <div class="yelp-link bounce-in">
                <a href="https://biz.yelp.com/biz_info/seFmSxwpOilWPooRoKLuPg" target="_blank">
                    <img src="images/yelp.png" alt="Yelp Logo">
                    <p>Check out our reviews on Yelp!</p>
                </a>
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

     
        .yelp-link img {
            width: 100px;
            margin-bottom: 0.5em;
        }

        .contact-info {
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
            display: flex;
            align-items: center;        
            justify-content: center;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            max-width: 200px;

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
    const linkElem2 = document.createElement("link");
    linkElem2.setAttribute("rel", "stylesheet");
    linkElem2.setAttribute("href", "assets/css/milligram.min.css");

    shadow.appendChild(linkElem);

    // Attach the elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(section);
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
