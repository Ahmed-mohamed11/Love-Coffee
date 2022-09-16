
$(document).ready(function () {
    $(".navbar a").on('click', function () {
        $(".navbar a").removeClass("active");
 $(this).addClass("active");
    });
    
    
});
  $(document).ready(function(){
        $('.content9').click(function(){
          $('.content9').toggleClass("heart-active")
          $('.text9').toggleClass("heart-active")
          $('.numb').toggleClass("heart-active")
          $('.heart').toggleClass("heart-active")
        });
      });

 $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut();
        }
    });




let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
