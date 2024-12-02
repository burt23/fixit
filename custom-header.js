class CustomHeader extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor.

    // Attach a shadow root to the element.
    const shadow = this.attachShadow({ mode: "open" });

    // Create elements
    const header = document.createElement("section");
    header.className = "header";

    header.innerHTML = `
            <img id="logo" src="images/logo_transparent.png" alt="FixIT Works Logo">
            <div>
                <p class="tagline fade-in"><i>Do it Right or Do it Twice!!</i></p>
            </div>
        `;

    // Append styles
    const style = document.createElement("style");
    style.textContent = `
            .header {
                display: flex;
                align-items: center;
                padding: 20px;
                background-image: initial;
                background-color: initial;
                flex-direction: row;
                border: 1px solid #333;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                border-radius: 15px;
                transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
            }
            
            #logo {
                height: 115px;
                margin-right: 42px;
                
            }
            
            .tagline {
                font-size: 1.2em;
                color: #ccc;
                opacity: 0;
                font-weight: 600;
                font-family: 'Arial', sans-serif;
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
