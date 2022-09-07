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
var swiper = new Swiper(".notice-line .mySwiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});


var swiper = new Swiper(".promtion .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  pagination: {
    el:'.promtion .swiper-pagination',
    clickable: true
  },
  navigation : {
    prevEl: '.promtion .swiper-perv',
    nextEl: '.promtion .swiper-next'
  }
});



// toggle
const promtionEl = document.querySelector('.promtion');
const promationToggleBtn = document.querySelector('.toggle-promtion');
let isHidePromation = false;

promationToggleBtn.addEventListener('click',function(){
  isHidePromation = !isHidePromation    // !를 붙히면 '반대로 적용되게해주세요' 라는 의미
  if(isHidePromation){
    //숨김처리
    promtionEl.classList.add('hide');
  } else{
    //보임처리
    promtionEl.classList.remove('hide');
  }
});