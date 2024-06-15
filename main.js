import "./style.css";

const headerBackgroundOnScroll = () => {
      const fixedDiv = document.querySelector("#header__background");
      const headerContact = document.querySelector("#header__contact");

      function handleScroll() {
    if (window.scrollY > 0) {
      fixedDiv.classList.remove("bg-blue-950", "text-white");
      headerContact.classList.remove("border-white", "bg-slate-600");
    } else {
      fixedDiv.classList.add("bg-blue-950", "text-white");
    }
      }

      window.addEventListener("scroll", handleScroll);
}

const menuButtonOnClick = () => {
  const openMenu = document.getElementById("open__menu__button");
  const closeMenu = document.getElementById("close__menu__button");
  const menu = document.getElementById("menu");

  openMenu.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  });

  const heroButton = document.getElementById("heroButton");
  heroButton.addEventListener("click", () => {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    const heroSection = document.getElementById("hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  });

  const galeriButton = document.getElementById("galeriButton");
  galeriButton.addEventListener("click", () => {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    const galeriSection = document.getElementById("galeri");
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const photoSection = document.getElementById("photoSection");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );

    const data = await response.json();

    data.forEach((photo) => {
      const photoDiv = document.createElement("div");
      photoDiv.classList.add("div__image");

      const img = document.createElement("img");
      img.classList.add("img__image");
      img.src = photo.thumbnailUrl;
      img.alt = photo.title;

      const title = document.createElement("p");
      title.classList.add("title__image");
      title.textContent = photo.title;

      const link = document.createElement("a");
      link.classList.add("link__image");
      link.target = "_blank"
      link.href = photo.url;
      link.textContent = "View Full Image";

      photoDiv.appendChild(img);
      photoDiv.appendChild(title);
      photoDiv.appendChild(link);

      photoSection.appendChild(photoDiv);
    });

    headerBackgroundOnScroll()

    menuButtonOnClick()
  } catch (error) {
    console.error(error);
  }
});
