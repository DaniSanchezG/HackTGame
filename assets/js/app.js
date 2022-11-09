window.addEventListener("load", () => {
    let sidebar = document.querySelector("#sidebar");
    let close = document.querySelector(".close");
    let menu = document.querySelector("#square");

    close.addEventListener("click", () => {
        sidebar.style.width = "0";
    })

    menu.addEventListener("click", () => {
        sidebar.style.width = "65%";
    })
});