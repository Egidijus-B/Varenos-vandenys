  
const navReveal=()=>{
  const burger=document.querySelector('.burger');
  const nav=document.querySelector(".nav");
  burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');

      // Burger Animation 
      burger.classList.toggle('toggle');
  })
}
navReveal();


//accordion buttons

var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){

    //Toggle buttons
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  });
}

//scroll to top button

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("act");
  } else {
    toTop.classList.remove("act");
  }
})