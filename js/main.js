// search
const searchEl = document.querySelector('.search');
const searchIputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchIputEl.focus();
});

searchIputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchIputEl.setAttribute('placeholder', '통합검색');
});

searchIputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchIputEl.setAttribute('placeholder', '');
});



// badges
const badgeEl = document.querySelector('header .badges');

// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    gsap.to(badgeEl, .5, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .5, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));


//gsap.to(요소, 지속시간, 옵션)  애니메이션 js
//hero img fadein
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7,
    opacity: 1
  });
});



// swiper
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});
