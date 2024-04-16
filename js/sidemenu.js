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