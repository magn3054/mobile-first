function Home() {
  window.location.href = "https://havnerundfart.mdamsgaard.dk";  
}

function openNav() {
    document.getElementById("Nav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("Nav").style.width = "0%";
}


var dropdown = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.parentNode.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var plusicons = document.querySelectorAll('.plusicon');
plusicons.forEach(plusicon => {
    plusicon.addEventListener('click', function() {
        if (plusicon.src.includes('minus-icon.svg')) {
            plusicon.src = 'icons/plus-icon.svg';
        } else {
            plusicon.src = 'icons/minus-icon.svg';
        }
    });
});


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("header").style.display = "flex";
//   } else {
//     document.querySelector("header").style.display = "none";
//   }
//   prevScrollpos = currentScrollPos;
// }

var prevScrollpos = window.scrollY;
var scrollThreshold = 100; // Adjust this threshold as needed

window.addEventListener("scroll", function() {
  var currentScrollPos = window.scrollY;
  var scrollDifference = Math.abs(currentScrollPos - prevScrollpos);
  
  if (scrollDifference >= scrollThreshold) {
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("header").style.display = "flex";
    } else {
      document.querySelector("header").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  }
});