window.addEventListener("load", () => {
  // Header
  let sidebar = document.querySelector("#sidebar");
  let close = document.querySelector(".close");
  let menu = document.querySelector("#square");
  let closeModal = document.querySelector(".close-modal");
  let signUp = document.querySelector("#sign-up");

  close.addEventListener("click", () => {
    sidebar.style.width = "0";
  });

  menu.addEventListener("click", () => {
    sidebar.style.width = "65%";
  });

  closeModal.addEventListener("click", () => {
    signUp.style.display = "none";
  });

  // Slideshow

  let sliderPoints = document.querySelectorAll(".slideChangePoint");
  let imgToChange = document.querySelector(".imgSlideShow");
  let imgCounter = 1;
  for (let i = 0; i < sliderPoints.length; i++) {
    sliderPoints[i].addEventListener("click", () => {
      imgCounter = i + 1;
      imgToChange.classList.toggle("scpopacity");
      setTimeout(() => {
        imgToChange.src = `assets/img/slider/${imgCounter}.jpg`;
      }, 500);
      setTimeout(() => {
        imgToChange.classList.toggle("scpopacity");
      }, 520);
    });
  }
  let scroll = 0;

  // Show menu on scroll up
  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (scroll >= window.scrollY) {
      document.querySelector("#header").style.position = "fixed";
    } else {
      document.querySelector("#header").style.position = "absolute";
    }
    scroll = window.scrollY - 1;
  });
});
