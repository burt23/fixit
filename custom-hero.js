class CustomHero extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const hero = document.createElement("section");
    hero.className = "hero";

    hero.innerHTML = `
        <h1>Do it right or do it twice</h1>
    `;

    shadow.appendChild(hero);

    const style = document.createElement("style");
    style.textContent = `
        .hero {
            text-align: center;
            border: 1px solid red;
        }
    `;

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "styles.css");
    shadow.appendChild(linkElem);

    shadow.appendChild(style);
  }

  connectedCallback() {
    console.log("CustomHero added to the page.");
  }

  disconnectedCallback() {
    console.log("CustomHero removed from the page.");
  }
}
