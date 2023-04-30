var typingEffect = new Typed(".multiText", {
    strings: ["Backend", "Fullstack", "Frontend"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    bachDelay : 1500
  })

//Dark mode

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
    
    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

});


const codingDiv = document.querySelector('.front');
const extraDiv = document.querySelector('.back');
const extraBtn = document.querySelector('#extraBtn');
const codingBtn = document.querySelector('#codingBtn');

extraBtn.addEventListener('click', function (){
  codingDiv.classList.add('hide');
  extraDiv.classList.remove('hide');
  console.log('extra clicked');
});
codingBtn.addEventListener('click', function (){
  extraDiv.classList.add('hide');
  codingDiv.classList.remove('hide');
  console.log('coding clicked');
});




