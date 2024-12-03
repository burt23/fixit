class CustomServices extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const section = document.createElement("section");
    section.className = "section";

    section.innerHTML = `

     <h2>Our Services</h2>
            <ul>
                <li class="service-item zoom-in">
                    <h3><b>3D Printing</b></h3>
                    <p>Custom prototypes, models, and parts with precision and speed. Custom CAD Services available.</p>
                </li>
                <li class="service-item zoom-in">
                    <h3>Automotive Technician</h3>
                    <p>Expert maintenance and repair services to keep your vehicle running smoothly.</p>
                </li>
                <li class="service-item zoom-in">
                    <h3>Bicycle Expert</h3>
                    <p>Specialized bicycle technician available for all your bike needs from tune-ups to upgrades.</p>
                </li>
                <li class="service-item zoom-in">
                    <h3>Item Assembly</h3>
                    <p>Expert assembly services for a wide range of items. We've got the tools and expertise to get it
                        built right the first time.</p>
                </li>
                <li class="service-item zoom-in">
                    <h3>Business Solutions</h3>
                    <p>Customized solutions for your business needs. Call us for a free consultation.</p>
                </li>
                <li class="service-item zoom-in">
                    <h3>Stereo Installation</h3>
                    <p>Whether its a home or car stereo, we've got you covered. We love music!</p>
                </li>
            </ul>
    `;

    const style = document.createElement("style");
    style.textContent = `
ul {
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  display: flex;
}


.service-item {
    background-color: #2a2a2a;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    padding: 20px;
    flex: 1 1 200px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.7);
  }
 }
}`;

    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "styles.css");
    shadow.appendChild(linkElem);

    // Attach the elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(section);
  }

  connectedCallback() {
    console.log("CustomServices added to the page.");
  }

  disconnectedCallback() {
    console.log("CustomServices removed from the page.");
    clearInterval(this.interval);
  }
}

customElements.define("custom-services", CustomServices);
