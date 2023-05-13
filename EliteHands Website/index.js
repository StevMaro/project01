
function toggleDropdown(event) {
    var dropdown = document.getElementById("myDropdown");
    var container = document.querySelector(".container");
    container.classList.toggle("change");
    if (dropdown.style.display === "block") {
        dropdown.classList.add("slide-up");
        setTimeout(function() {
            dropdown.style.display = "none";
            dropdown.classList.remove("slide-up");
        }, 2500);
    } else {
        dropdown.style.display = "block";
    }
    event.stopPropagation();
}

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("myDropdown");
    var container = document.querySelector(".container");
    if (
        event.target.closest(".container") ||
        event.target.closest("#myDropdown")
    ) {
        return;
    }
    dropdown.classList.add("slide-up");
    setTimeout(function() {SSSSSS
        dropdown.style.display = "none";
        dropdown.classList.remove("slide-up");
        container.classList.remove("change");
    }, 2500);
});
function toggleOptions() {
    const quickLinks = document.querySelector('.qck-links');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    quickLinks.classList.toggle('active');
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
}


