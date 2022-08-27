//Burger
const burger = document.querySelector('.burger'); 
const burgerMenu = document.querySelector('.burger-menu');

document.querySelector('.burger').addEventListener('click', function(){
    burgerMenu.classList.toggle('active');
});


//Drop Down Menu
const click = document.querySelector('.drop-down-button'); 
const dropDownMenu = document.querySelector('.drop-down-list');

document.querySelector('.drop-down-button').addEventListener('click', function(){
    dropDownMenu.classList.toggle('active');
});

//FRAME number
let number = document.getElementById('first_number'); 

document.querySelector('.right_arrow').addEventListener('click', function () {
    number.innerHTML++;
 });

 document.querySelector('.left_arrow').addEventListener('click', function () {
    number.innerHTML--;
 });



//Carousel
let offset = 0; 
const sliderLine = document.querySelector('.slider_list'); 

document.querySelector('.next_slider').addEventListener('click', function () {
   offset = offset + 300;
   if( offset > 1900) {
       offset = 0;
   }
    sliderLine.style.right = offset + 'px'; 
});

document.querySelector('.prev_slider').addEventListener('click', function () {
    offset = offset - 300;
    if( offset < 0) {
        offset = 1900;
    }
     sliderLine.style.right = offset + 'px'; 
 });
