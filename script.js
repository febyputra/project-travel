let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
   loop:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   grabCursor:true,
   loop:true,
   autoHeight:true,
   spaceBetween: 20,
   breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
   },
});

const loadMoreBtn = document.querySelector(".packages .load-more .btn");
let currentItem = 3;

loadMoreBtn.onclick = () => {
   const boxes = document.querySelectorAll(".packages .box-container .box");

   for (let i = currentItem; i < currentItem + 3; i++) {
      boxes[i].style.display = "inline-block";

      currentItem += 3;
      if (currentItem >= boxes.length) {
         loadMoreBtn.style.display = "none";
      }
   }
}

function whatsapp () {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var address = document.getElementById("address").value;
var location = document.getElementById("location").value;
var guests = document.getElementById("guests").value;
var date = document.getElementById("date").value;

var url = "https://wa.me/6287865430699?text="
+"Name : "+name+"%0a"
+"Email : "+email+"%0a"
+"Phone : "+phone+"%0a"
+"Address : "+address+"%0a"
+"Location : "+location+"%0a"
+"Guests : "+guests+"%0a"
+"Date : "+date;

window.open(url, '_blank').focus();
}