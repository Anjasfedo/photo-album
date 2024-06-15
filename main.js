import "./style.css";
// Import helper functions
import { hiddenElement, showElement } from "./libs";

// Change header background color based on scroll
const headerBackgroundOnScroll = () => {
  const fixedDiv = document.getElementById("header__background");
  const headerContact = document.getElementById("header__contact");

  // Scroll behavior to change class state
  const handleScroll = () => {
    if (window.scrollY > 0) {
      fixedDiv.classList.remove("bg-blue-950", "text-white");
      headerContact.classList.remove("border-white", "bg-slate-600");
    } else {
      fixedDiv.classList.add("bg-blue-950", "text-white");
    }
  };

  window.addEventListener("scroll", handleScroll);
};

// Menu button behavior on mobile view (md:)
const menuButtonOnClick = () => {
  const openMenu = document.getElementById("open__menu__button");
  const closeMenu = document.getElementById("close__menu__button");
  const menu = document.getElementById("menu");

  // Show the menu element onclick of #open__menu__button
  openMenu.addEventListener("click", () => {
    showElement(menu);
  });

  // Hide the menu element onclick of #close__menu__button
  closeMenu.addEventListener("click", () => {
    hiddenElement(menu);
  });

  // Logic to hero button of mobile
  const heroButton = document.getElementById("heroButton");
  heroButton.addEventListener("click", () => {
    hiddenElement(menu);
    const heroSection = document.getElementById("hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  });
  
  // Logic to gallery button of mobile
  const galleryButton = document.getElementById("galleryButton");
  galleryButton.addEventListener("click", () => {
    hiddenElement(menu);
    const gallerySection = document.getElementById("gallery");
    gallerySection.scrollIntoView({ behavior: "smooth" });
  });
};

// Activate the function

// Trigger when the page loaded
document.addEventListener("DOMContentLoaded", async () => {
  const photoSection = document.getElementById("photoSection");

  try {
    // Fetch data from API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );

    // Take the data and change it into json
    const data = await response.json();

    // Populate data to #photoSection
    data.forEach((photo) => {
      // Create Div element as container
      const photoDiv = document.createElement("div");
      photoDiv.classList.add("div__image");

      // img to serve the image
      const img = document.createElement("img");
      img.classList.add("img__image");
      img.src = photo.thumbnailUrl;
      img.alt = photo.title;

      // Title of Image
      const title = document.createElement("p");
      title.classList.add("title__image");
      title.textContent = photo.title;

      // Link to fully show the image
      const link = document.createElement("a");
      link.classList.add("link__image");
      link.target = "_blank";
      link.href = photo.url;
      link.textContent = "Lihat Gambar";

      // Append elements to the Div container
      photoDiv.appendChild(img);
      photoDiv.appendChild(title);
      photoDiv.appendChild(link);

      // Append Div container to #photoSection
      photoSection.appendChild(photoDiv);
    });

    // Trigger the background scroll behavior
    headerBackgroundOnScroll();

    // Activate the button for mobile
    menuButtonOnClick();
  } catch (error) {
    // Log the console for debugging purposes
    console.error(error);
  }
});
