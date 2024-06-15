import './style.css'

// main.js

document.addEventListener("DOMContentLoaded", function () {
  const photoSection = document.getElementById("photoSection");

  fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((photo) => {
        const photoDiv = document.createElement("div");
        photoDiv.classList.add("div__image")

        const img = document.createElement("img");
        img.classList.add("img__image")
        img.src = photo.thumbnailUrl;
        img.alt = photo.title;

        const title = document.createElement("h3");
        title.classList.add("title__image")
        title.textContent = photo.title;

        const link = document.createElement("a");
        link.classList.add("link__image");
        link.href = photo.url;
        link.textContent = "View Full Image";

        photoDiv.appendChild(img);
        photoDiv.appendChild(title);
        photoDiv.appendChild(link);

        photoSection.appendChild(photoDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching photos:", error);
    });
});
