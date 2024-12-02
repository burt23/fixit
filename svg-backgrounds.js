// svg-backgrounds.js

function addSVGBackground(targetSelector, svgContent) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        const svgNS = "http://www.w3.org/2000/svg";
        const svgElem = document.createElementNS(svgNS, "svg");
        svgElem.setAttribute("xmlns", svgNS);
        svgElem.setAttribute("width", "100%");
        svgElem.setAttribute("height", "100%");
        svgElem.setAttribute("preserveAspectRatio", "none");
        svgElem.setAttribute("viewBox", "0 0 100 100");
        svgElem.innerHTML = svgContent;
        svgElem.classList.add("svg-background");
        targetElement.prepend(svgElem);
        targetElement.style.position = "relative";
        targetElement.style.overflow = "hidden";
    }
}

// Apply SVG Backgrounds
addSVGBackground('.footer', footerSVGContent);
addSVGBackground('.contact-info', contactSVGContent);


function addSVGBackground(a, b) { const c = document.querySelector(a); if (c) { const d = "http://www.w3.org/2000/svg", e = document.createElementNS(d, "svg"); e.setAttribute("xmlns", d), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e.setAttribute("preserveAspectRatio", "none"), e.setAttribute("viewBox", "0 0 100 100"), e.innerHTML = b, e.classList.add("svg-background"), c.prepend(e), c.style.position = "relative", c.style.overflow = "hidden" } }
const footerSVGContent = `<defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0 L0 0 0 10" fill="none" stroke="#01579b" stroke-width="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/>`, contactSVGContent = `<defs><linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#e0f7fa;stop-opacity:1"/><stop offset="100%" style="stop-color:#b3e5fc;stop-opacity:1"/></linearGradient></defs><path d="M0 30 Q50 60 100 30 T200 30 V100 H0 Z" fill="url(#waveGradient)" transform="scale(0.5)" opacity="0.7"/><path d="M0 50 Q50 80 100 50 T200 50 V100 H0 Z" fill="url(#waveGradient)" transform="scale(0.5)" opacity="0.5"/>`;
addSVGBackground('.footer', footerSVGContent);
addSVGBackground('.contact-info', contactSVGContent);

