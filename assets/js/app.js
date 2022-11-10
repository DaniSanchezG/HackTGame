window.addEventListener("load", () => {
    let sidebar = document.querySelector("#sidebar");
    let close = document.querySelector(".close");
    let menu = document.querySelector("#square")
    let btnlogin = document.querySelector("#btnlogin");
    let btnloginDesktop = document.querySelector("#btnlogin1");
    let btnModal = document.querySelector("#modalAdd");
    let closeModal = document.querySelectorAll(".close-modal");
    let btnSignUp = document.querySelector("#btnsignup");
    let btnSignUpDesktop = document.querySelector("#btnsignup1");
    let signUpModal = document.querySelector("#sign-up");
    

    // sidebar menu for mobile/tablet
    close.addEventListener("click", () => {
        sidebar.style.width = "0";
    })

    menu.addEventListener("click", () => {
        sidebar.style.width = "65%";
    })

    // VENTANA MODAL LOGIN

    btnlogin.addEventListener("click", (e) => {
    btnModal.classList.toggle("opacity");
    });

    btnloginDesktop.addEventListener("click", (e) => {
        btnModal.classList.toggle("opacity");
    });
  
    closeModal[0].addEventListener("click", (e) => {
    btnModal.classList.toggle("opacity");
    });

    // VENTANA MODAL SIGN UP

    btnSignUp.addEventListener("click", (e) => {
        //console.log("working open sign up");
        signUpModal.classList.toggle("opacity");
        signUpModal.style.display = "block";
    });

    btnSignUpDesktop.addEventListener("click", (e) => {
        //console.log("working open sign up");
        signUpModal.classList.toggle("opacity");
        signUpModal.style.display = "block";
        });

    closeModal[1].addEventListener("click", (e) => {
        //console.log("working close sign up");
        signUpModal.classList.toggle("opacity");
        signUpModal.style.display = "none";
    });
    
});