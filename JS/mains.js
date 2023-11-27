document.getElementById("menuIcon").addEventListener("click", function () {
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.right === "0px") {
        mobileMenu.style.right = "-250px";
    } else {
        mobileMenu.style.right = "0px";
    }
});
