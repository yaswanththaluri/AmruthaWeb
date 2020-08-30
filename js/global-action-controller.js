$(document).ready(function () {
    var navItems = document.getElementsByClassName("nav-item");

    var navToPage = function() {
        var selectdItem = this.getAttribute("nav-item");
        if(selectdItem === "home") {
            window.location.href='/AmruthaWeb/index.html';
        }
        else if(selectdItem === "placements") {
            window.location.href='/AmruthaWeb/Placements.html';
        }
    };

    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', navToPage, false);
    }
});