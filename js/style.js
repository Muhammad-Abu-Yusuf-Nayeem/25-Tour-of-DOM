const sections = document.querySelectorAll("section");
console.log(sections);

for (const section of sections) {
  section.style.border = "2px solid steelblue";
  section.style.marginBottom = "4px";
  section.style.borderRadius = "5px";
  section.style.paddingLeft = "8px";
  section.style.backgroundColor = "cyan";
}

const placesContainer = document.getElementById("places-container");
placesContainer.style.backgroundColor = "yellowgreen";

const DOM = document.getElementById("domDE");
DOM.classList.add("yellow-bg");
DOM.classList.add("text-center");

