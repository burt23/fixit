class CustomHeader extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor.

    // Attach a shadow root to the element.
    const shadow = this.attachShadow({ mode: "open" });

    // Create elements
    const header = document.createElement("section");
    header.className = "header";

    header.innerHTML = `

            <span><h2>FixIT WORKS</h2></span>
                <p class="tagline fade-in"><i>Do it Right or Do it Twice!!</i></p>
        `;

    // Append styles
    const style = document.createElement("style");
    style.textContent = `
            .header {
                display: flex;
                justify-content: center;
                align-items: baseline;
                background-image: initial;
                gap: 4.2rem;
                background-color: initial;
                flex-direction: row;
                transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
                width: 100vw;
                background-color: #181a1b;
                padding: 3rem !important;
            }
                h2{
                margin: }
                .header > div > h1 {
                 font-family: 'Faster', sans-serif !important;
                }
            
            #logo {
                height: 115px;
                margin-right: 42px;
                
            }
            
            .tagline {
                color: #ccc;
                opacity: 0;
                font-weight: 600;
                font-family: 'Honk', sans-serif;
                transition: opacity 2s ease-in;
            }
            .fade-in {
                opacity: 1;
            }

            @keyframes fade-in {
                from {
                    opacity: 0;
                }

    to {
        opacity: 1;
    }
}
        `;

    // link stylesheet
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
    console.log("CustomHeader added to the page.");
  }

  disconnectedCallback() {
    // Cleanup if needed when the element is removed from the DOM
    console.log("CustomHeader removed from the page.");
  }
}

// Define the new element
customElements.define("custom-header", CustomHeader);
