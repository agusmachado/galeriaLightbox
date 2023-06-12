const galeria = document.querySelectorAll(".galeria .image");
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const imagenActual = previewBox.querySelector(".current-img");
const imagenFaltantes = previewBox.querySelector(".total-img");
const sombra = document.querySelector(".sombra");

let newIndex = 0;

function preview() {
  let selectedImgUrl = galeria[newIndex].querySelector("img").src;
  previewImg.src = selectedImgUrl;
  imagenActual.textContent = newIndex + 1; // Mostrar el índice actualizado de la imagen
}

window.onload = () => {
  for (let i = 0; i < galeria.length; i++) {
    imagenFaltantes.textContent = galeria.length - 1; // Mostrar la cantidad total de imágenes menos la imagen actual

    galeria[i].addEventListener("click", () => {
      newIndex = i;
      preview();
      previewBox.classList.add("show"); 
      sombra.style.display = "block";
      document.querySelector("body").style.overflow = "hidden";
      
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");

      prevBtn.style.display = newIndex === 0 ? "none" : "block";
      nextBtn.style.display = newIndex === galeria.length - 1 ? "none" : "block";
    });
  }

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  prevBtn.addEventListener("click", () => {
    newIndex--;
    preview();
    prevBtn.style.display = newIndex === 0 ? "none" : "block";
    nextBtn.style.display = "block";
  });

  nextBtn.addEventListener("click", () => {
    newIndex++;
    preview();
    prevBtn.style.display = "block";
    nextBtn.style.display = newIndex === galeria.length - 1 ? "none" : "block";
  });

  closeIcon.addEventListener("click", () => {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    previewBox.classList.remove("show");
    sombra.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  });
};

