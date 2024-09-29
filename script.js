
const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const closeBtn = document.querySelector(".close");

loginBtn.onclick = function() {
    loginPopup.style.display = "block";
}

closeBtn.onclick = function() {
    loginPopup.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == loginPopup) {
        loginPopup.style.display = "none";
    }
}