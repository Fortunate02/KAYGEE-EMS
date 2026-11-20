// =====================================
// SIDEBAR MOBILE TOGGLE
// =====================================

function toggleSidebar() {

    const sidebar = document.getElementById("sidebar");

    const overlay = document.getElementById("sidebarOverlay");

    sidebar.classList.toggle("show");

    overlay.classList.toggle("show");

}


// =====================================
// COLLAPSIBLE SIDEBAR MENUS
// =====================================

function toggleMenu(menuId, button) {

    const menu = document.getElementById(menuId);

    menu.classList.toggle("show");

    button.classList.toggle("open");

}


// =====================================
// PROFILE DROPDOWN
// =====================================

function toggleProfile() {

    const dropdown = document.getElementById("profileDropdown");

    dropdown.classList.toggle("show");

}


// CLOSE PROFILE WHEN CLICKING OUTSIDE
document.addEventListener("click", function(event) {

    const profile = document.querySelector(".profile-container");

    const dropdown = document.getElementById("profileDropdown");

    if (
        profile &&
        dropdown &&
        !profile.contains(event.target)
    ) {

        dropdown.classList.remove("show");

    }

});


// =====================================
// CLOSE MOBILE SIDEBAR ON NAVIGATION
// =====================================

document.querySelectorAll(".sidebar a").forEach(function(link) {

    link.addEventListener("click", function() {

        if (window.innerWidth <= 768) {

            document.getElementById("sidebar").classList.remove("show");

            document.getElementById("sidebarOverlay").classList.remove("show");

        }

    });

});