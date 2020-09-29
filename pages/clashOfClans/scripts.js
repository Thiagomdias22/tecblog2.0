(function() {
  
  var slideContainer = $('.slide-container');
  
  slideContainer.slick();
  
  $('.clash-card__image img').hide();
  $('.slick-active').find('.clash-card img').fadeIn(200);
  
  // On before slide change
  slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-active').find('.clash-card img').fadeOut(1000);
  });
  
  // On after slide change
  slideContainer.on('afterChange', function(event, slick, currentSlide) {
    $('.slick-active').find('.clash-card img').fadeIn(200);
  });
  
})();

const dryBones = document.getElementById('dryBones');

function wander(num){
   let rando = Math.floor((Math.random() * num) + 1);
   let leftBound = dryBones.animate(
     [
        {transform: 'translate3D(0, -12px, 0) scale(2)'},
        {transform: 'translate3D(-'+rando+'vw, -12px, 0) scale(2)', offset: 0.35},
        {transform: 'translate3D(-'+rando+'vw, -12px, 0) scale(-2, 2)', offset: 0.35},
        {transform: 'translate3D('+rando+'vw, -12px, 0) scale(-2, 2)', offset: 0.75},
        {transform: 'translate3D('+rando+'vw, -12px, 0) scale(2)', offset: 0.75},
        {transform: 'translate3D(0, -12px, 0) scale(2)'},
     ],{
        duration: 12000,
        iterations: Infinity
     }
   );
}

wander(25);

// leftBound.

// setInterval(()=>{
//    dryBones.style.transform = "translateX(-10vw)";
// }, 1000);