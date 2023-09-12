const menu = document.getElementById("menu");
const wrapper = document.getElementById("wrapper");
const close = document.getElementById("close");

menu.addEventListener("click", function () {
    wrapper.style.display = "block";
})

close.addEventListener("click", function () {
    wrapper.style.display = "none";
})