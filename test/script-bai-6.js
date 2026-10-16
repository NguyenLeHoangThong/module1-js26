// admin
// 123456

const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

let isShowPassword = false;
eye.addEventListener("click", () => {
    if (isShowPassword) {
        passwordInput.type = "password"
    }
    else {
        passwordInput.type = ""
    }
    isShowPassword = !isShowPassword;
})




loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Username: ", usernameInput.value)
    console.log("Password: ", passwordInput.value)

    if (usernameInput.value !== "admin" || passwordInput.value !== "123456789") {
        errorMessage.innerHTML = "Dang nhap that bai!"
        usernameInput.className = "error-input"
    }
    else {
        window.location.href = "./products.html";
    }
});


passwordInput.addEventListener("keypress", () => {
    if (passwordInput.value.length < 8) {
        errorMessage.innerHTML = "Vui long nhap mat khau lon hon hoac bang 8 ki tu."
    }
    else {
        errorMessage.innerHTML = ""
    }
})



const catImages = [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/250px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1280px-Cat03.jpg?utm_source=vi.wiktionary.org&utm_campaign=index&utm_content=thumbnail",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-Np3Q8B29fcByHQqTDc4Gapx27KbzPyr5PLdYO0s_mZVtHAjpq1O6uM&s=10"
]
const catGallery = document.getElementById("cat-gallery");
let imageIndex = 0;
catGallery.src = catImages[imageIndex];

catGallery.addEventListener("click", () => {
    imageIndex++;

    if (imageIndex === catImages.length) {
        imageIndex = 0;
    }

    catGallery.src = catImages[imageIndex];
})
