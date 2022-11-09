window.addEventListener("load", () => {
    let sidebar = document.querySelector("#sidebar");
    let close = document.querySelector(".close");
    let menu = document.querySelector("#square");
    let closeModal = document.querySelector(".close-modal");
    let signUp = document.querySelector("#sign-up");

    close.addEventListener("click", () => {
        sidebar.style.width = "0";
    })

    menu.addEventListener("click", () => {
        sidebar.style.width = "65%";
    })

    closeModal.addEventListener("click", () => {
        signUp.style.display = "none"; 
    })
});