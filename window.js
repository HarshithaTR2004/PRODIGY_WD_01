window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#222";
    } else {
        navbar.style.backgroundColor = "#333";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#menu .item");

    function handleMenuItemClick(event) {
        menuItems.forEach(function(item) {
            item.classList.remove("active-menu");
        });

        event.target.closest(".item").classList.add("active-menu");
    }

    menuItems.forEach(function(item) {
        item.addEventListener("click", handleMenuItemClick);
    });
});
