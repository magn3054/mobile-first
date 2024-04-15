const burgerIcon = document.getElementById('burger');
const headtext = document.getElementById('wordmark');
const sidebar = document.querySelector('.sidebar');
const page = document.querySelector('.page');

burgerIcon.addEventListener('click', function() {
    // Toggle burger icon src
    if (burgerIcon.src.includes('burger-icon.svg')) {
        burgerIcon.src = 'icons/cross-icon.svg';
        headtext.style.animation = "wordmark 1s forwards";
        sidebar.style.display = "flex";
        sidebar.style.animation = "sidebaranimation 1s forwards";

    } else {
        burgerIcon.src = 'icons/burger-icon.svg';
        headtext.style.animation = "wordmark-reverse 1.5s forwards";
        sidebar.style.animation = "sidebaranimation-reverse 1s forwards";
        setTimeout(function() {
            sidebar.style.display = "none";
        }, 1000);
        
        
    }   
});




const dropDowns = document.querySelectorAll('.dropplus');
dropDowns.forEach(dropDown => {
    const parentElement = dropDown.closest('.undermenu');
    const dropDownContainer = parentElement.querySelector('.dropdown-container');

    dropDown.addEventListener('click', function() {
        // Toggle the display of the dropdown container
        if (dropDownContainer.style.display === "flex") {
            dropDownContainer.style.display = "none";
            dropDown.src = 'icons/plus-icon.svg';
        } else {
            dropDownContainer.style.display = "flex";
            dropDown.src = 'icons/minus-icon.svg';
    }});
});