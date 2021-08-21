const btn = document.querySelector('.menu-btn');
const navToggle = document.querySelector('.side-container');

btn.addEventListener('click', function(){
   // let hasClass = navToggle.classList.contains('show-links');
   // // console.log(hasClass);
   // if(hasClass){
   //    navToggle.classList.remove('show-links');
   // }else{
   //    navToggle.classList.add('show-links');
   // }
   navToggle.classList.toggle('show-links');
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
   let heightValue = navbar.getBoundingClientRect().height;
   let scrollHeight = window.pageYOffset;
   // console.log(heightValue);
   if(scrollHeight > heightValue){
      navbar.classList.add('fixed-navbar');
   }else{
      navbar.classList.remove('fixed-navbar')
   }
})
