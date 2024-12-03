class CustomTypeformButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const section = document.createElement("section");
    section.className = "section";

    section.innerHTML = `
          <section class="general-inquiry">
        <h2>Get in touch</h2>
        <button class="typeform-button">General Inquiry</button>
      </section>
    `;

    const style = document.createElement("style");
    style.textContent = `
    
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
    console.log("CustomTypeformButton added to the page.");
  }

  disconnectedCallback() {
    // Cleanup if needed when the element is removed from the DOM
    console.log("CustomTypeformButton removed from the page.");
    clearInterval(this.interval);
  }
}

customElements.define("custom-typeform-button", CustomTypeformButton);
