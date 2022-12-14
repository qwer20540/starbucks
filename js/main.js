// badges + to-top
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500) {
    gsap.to(badgeEl, .5, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .5, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));

// 클릭시 페이지 맨위로
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



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


var swiper = new Swiper('.awards .mySwiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-perv',
    nextEl: '.awards .swiper-next'
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


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatObject('.floating1', 1, 15);
floatObject('.floating2', .5, 15);
floatObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic
      .Scene({
        triggerElement: spyEl,  //보여짐 여부를 감사할 요소를 지정
        triggerHook: 0.6
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
});


