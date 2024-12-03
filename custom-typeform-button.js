class CustomTypeformButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const section = document.createElement("section");
    section.className = "section";

    section.innerHTML = `
          <section class="general-inquiry">
        <h2>Get in touch</h2>
        <button id="tbtn">General Inquiry</button>
      </section>
    `;

    const style = document.createElement("style");
    style.textContent = `
      /* Add your styles here */

.tf-v1-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.8);
  }
  
  .tf-v1-popup iframe {
    width: 100vw;
    height: 100vh;
  }
    `;

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "styles.css");
    shadow.appendChild(linkElem);

    // Attach the elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(section);
  }

  connectedCallback() {
    // Lifecycle method called when the element is added to the DOM
    console.log("CustomTypeformButton added to the page.");

    if (window.tf && typeof window.tf.createPopup === "function") {
      const { open, close, toggle, refresh } =
        window.tf.createPopup("szzt6Eul");
      const button = this.shadowRoot.querySelector("#tbtn");
      if (button) {
        button.addEventListener("click", () => {
          toggle();
          console.log("Typeform popup toggled");
        });
      } else {
        console.error(
          "Button with class 'typeform-button' not found in shadow DOM."
        );
      }
    } else {
      console.error("Typeform library 'window.tf' is not loaded.");
    }
  }

  disconnectedCallback() {
    // Cleanup if needed when the element is removed from the DOM
    console.log("CustomTypeformButton removed from the page.");
    const button = this.shadowRoot.querySelector("#tbtn");
    if (button) {
      button.removeEventListener("click", this.toggleHandler);
    }
  }
}

customElements.define("custom-typeform-button", CustomTypeformButton);
