const burgerIcon = document.getElementById('burger');
const headtext = document.getElementById('headertext');
const sidebar = document.querySelector('.sidebar');
const page = document.querySelector('.page');

burgerIcon.addEventListener('click', function() {
    // Toggle burger icon src
    if (burgerIcon.src.includes('burger-icon.svg')) {
        burgerIcon.src = 'icons/cross-icon.svg';
        headtext.style.animation = "headertext 1s forwards";
        sidebar.style.display = "flex";
        sidebar.style.animation = "sidebaranimation 1s forwards";

    } else {
        burgerIcon.src = 'icons/burger-icon.svg';
        headtext.style.animation = "headertext-reverse 1.5s forwards";
        sidebar.style.animation = "sidebaranimation-reverse 1s forwards";
        setTimeout(function() {
            sidebar.style.display = "none";
        }, 1000);
        
        
    }   
});
