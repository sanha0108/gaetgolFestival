const contentleft1 = document.querySelector('.content_left1');
const contentright = document.querySelector('.content_right');
const contentleft2 = document.querySelector('.content_left2');

// 애니메이션 클래스 정의
const animatedClass = 'animated';

// 스크롤 이벤트 핸들러
window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

  if (contentleft1.getBoundingClientRect().top < windowHeight) {
    contentleft1.classList.add(animatedClass);
  }

  if (contentright.getBoundingClientRect().top < windowHeight) {
    contentright.classList.add(animatedClass);
  }

  if (contentleft2.getBoundingClientRect().top < windowHeight) {
    contentleft2.classList.add(animatedClass);
  }
});