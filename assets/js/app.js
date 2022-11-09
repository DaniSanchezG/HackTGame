window.addEventListener("load", () => {
    let sliderPoints = document.querySelectorAll(".slideChangePoint");
    let imgToChange = document.querySelector(".imgSlideShow");
    let imgCounter = 1;
    for (let i = 0; i < sliderPoints.length; i++) {
        sliderPoints[i].addEventListener("click", () => {
            imgCounter = i + 1;
            imgToChange.classList.toggle("scpopacity");
            // imgToChange.src = `assets/img/slider/${imgCounter}.jpg`;
            setTimeout(() => {
                imgToChange.src = `assets/img/slider/${imgCounter}.jpg`;
            }, 500);
            setTimeout(() => {
                imgToChange.classList.toggle("scpopacity");
            }, 520);
        });
    };
});