          /*section2------*/
const leftbutton = document.querySelector("button.button2");
const rightbutton = document.querySelector("button.button3");
const section2 = document.getElementById('section2');

const introTag = document.querySelector(".story_detail1");
const detailTag = document.querySelector("div.story p.story_detail2");

leftbutton.addEventListener("click", function() {
  introTag.innerHTML = `시흥갯골은 경기도에서 유일한 내만 갯벌로, 바다에서 도심 중심부까지 이어지는 
        수로를 통해 바닷물이 들어오고 나가고 있어 멋진 풍경을 자랑합니다.`;
  detailTag.innerHTML = `자연 생태계가 온전히 보존되어 있는 갯골에는 농게, 방게 등의
          갑각류, 양서류를 비롯해 많은 생물들이 살고 있고, 가을이면
          빨갛게 변하는 퉁퉁마디, 칠면초 등의 염생식물도 볼 수 있습니다.
          검은 머리 물떼새, 저어새, 황조롱이 등의 천연기념물과 멸종위기
          동물에 해당하는 조류도 자주 관찰 됩니다. 이렇게 다양한 생물이
          방문하거나 살고 있는 것은 자연이 만든 갯골 생태계가 올바르게
          작용하고 있다는 것을 의미합니다.`;

  leftbutton.style.backgroundColor = '#ffffff';
  leftbutton.style.color = '#08522D';

  rightbutton.style.backgroundColor = 'transparent';
  rightbutton.style.color = '#ffffff';
  section2.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('image/section2_2.jpg')";
});

rightbutton.addEventListener("click", function() {
  introTag.innerHTML = `시흥갯골 생태의 중요성과 시흥염전의 역사, 아름다움을 널리 알리기 위해 
시흥갯골축제가 2006년 처음으로 개최되었습니다.`;
  detailTag.innerHTML = `전쟁과 휴전으로 북쪽에 집중되어 남쪽에서는 구하기 힘들었던 소금을 생산하고자
   1930년대 초에 경기만, 특히 서해안 일대에 집중적으로 염전이 조성되었습니다.
   소래염전은 전국에서 손꼽히는 소금 생산량으로 1950년대에서 1960년대에 걸쳐
   소금창고가 급속도로 많이 건립되었지만 중국에서 값싼 소금이 수입되기 시작해 점
   점 생산량이 줄었고, 결국 1996년 폐염전이 된 후 1990년대 후반까지 소금창고
   수십 채가 그 자리를 지키고 있었지만 21동이 철거되어 아쉽게도 현재까지 남은 소
   금창고는 2동 뿐입니다. 뒤늦게 가치를 인정받아 보전을 위해 민관이 함께 노력한
   결과 소금창고는 2022년 근대문화유산에 경기도 등록문화재로 등록되었습니다.`;

  rightbutton.style.backgroundColor = '#ffffff';
  rightbutton.style.color = '#08522D';

  leftbutton.style.backgroundColor = 'transparent';
  leftbutton.style.color = '#ffffff';
  section2.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('image/section2.jpg')";
})

/*클릭하면 사진 랜덤으로 보이기---*/
const photoWrap = document.querySelector("div.photo-wrap");
const photos = photoWrap.querySelectorAll("img");

photoWrap.addEventListener("mouseover", function(){

  // for(let i = 0 ; i < photos.length; i++){
  //   let randomX = Math.round(Math.random()*5)*10; //0,6,12,18,24,30
  //   let randomY = Math.round(Math.random()*5)*10; //0,6,12,18,24,30
  //   photos[i].style.transform = `translate(${randomX}px, ${randomY}px)`;
  // }

  photos.forEach(photo =>{
    let randomX = Math.round(Math.random()*4)*20 - 40; // 0,20,40,60,80 // -40, -20, 0, 20, 40
    let randomY = Math.round(Math.random()*4)*20 - 40; 
    photo.style.transform = `translate(${randomX}px, ${randomY}px)`;
  })
})

photoWrap.addEventListener("mouseout", function(){
  photos.forEach(photo =>{
      photo.style.transform = `translate(0px, 0px)`;
  })
})

let clickNum = 0;
photoWrap.addEventListener("click", function(){
  clickNum++;
  console.log(clickNum); //1,2,3,4,5
  console.log(clickNum); //1,2,3,4,0,1,2,3,4,0

  photos[clickNum%photos.length].style.zIndex = clickNum;
})

const photo = document.querySelectorAll('.photo');

const descriptionElement = document.querySelector('.description');


photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    descriptionElement.textContent = descriptions[index];
  });
});

/*----메인*/
const bannerTitle = document.querySelector('.banner_title');
const bannerDetail = document.querySelector('.banner_detail');

// 애니메이션 클래스 정의
const animatedClass = 'animated';

// 0.3초 후에 애니메이션 클래스 추가
setTimeout(() => {
  bannerTitle.classList.add(animatedClass);
  bannerDetail.classList.add(animatedClass);
}, 300);


const ellipse = document.querySelector('.ellipse');

const contenttitle = document.querySelector('.content_title');
const contentdetail1 = document.querySelector('.content_detail1');
const contentdetail2 = document.querySelector('.content_detail2');
const gallery = document.querySelector('.gallery_nav');

const subtitle = document.querySelector('.sub_title');
const year = document.querySelector('.year');

// 스크롤 이벤트 핸들러
window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

  if (contenttitle.getBoundingClientRect().top < windowHeight) {
    contenttitle.classList.add(animatedClass);
  }

  if (contentdetail1.getBoundingClientRect().top < windowHeight) {
    contentdetail1.classList.add(animatedClass);
  }

  if (contentdetail2.getBoundingClientRect().top < windowHeight) {
    contentdetail2.classList.add(animatedClass);
  }

  if (gallery.getBoundingClientRect().top < windowHeight) {
    gallery.classList.add(animatedClass);
  }

  if (ellipse.getBoundingClientRect().top < windowHeight) {
    ellipse.classList.add(animatedClass);
  }

  if (subtitle.getBoundingClientRect().top < windowHeight) {
    subtitle.classList.add(animatedClass);
  }

  if (year.getBoundingClientRect().top < windowHeight) {
    year.classList.add(animatedClass);
  }
});

const buttonTags = document.querySelectorAll("div.buttons2 div.button")
const imgTag = document.querySelector("img.poster")
const mainyear = document.querySelector(".main_year")
const mainfes = document.querySelector(".main_fes")
const maindetail = document.querySelector(".main_detail")

buttonTags[0].addEventListener("mouseover",function(){
    console.log("button 1");
    imgTag.src = "year/18.jpg";

    mainyear.innerHTML = `2023`;
    mainfes.innerHTML = `18회 시흥갯골축제`;
    maindetail.innerHTML = `기간 : 2023.9.22(금)~24(일)
주제 : 세상에서 가장 큰 생태예술놀이터
장소 : 갯골생태공원
주최 주관: 시흥시
🏆대한민국 문화관광축제 선정
🏆경기도 대표축제 선정
🏆피너클어워드 친환경프로그램 금상`;

  })
  
  buttonTags[1].addEventListener("mouseover", function(){
    console.log("button 2");
    imgTag.src = "year/17.jpg";

    mainyear.innerHTML = `2022`;
    mainfes.innerHTML = `17회 시흥갯골축제`;
    maindetail.innerHTML = `기간 : 2022.9.23(금)~25(일)
주제 : 우리 곁에 돌아온 갯골
장소 : 갯골생태공원
주최 : 시흥시
주관 : 시흥갯골축제추진위원회
🏆대한민국 문화관광축제 선정
🏆경기도 대표축제 선정
🏆문화관광콘텐츠대상 선정
🏆피너클어워드 은상,동상수상`;
  })
  
  buttonTags[2].addEventListener("mouseover", function(){
    console.log("button 3");
    imgTag.src = "year/16.jpg";

    mainyear.innerHTML = `2021`;
    mainfes.innerHTML = `16회 시흥갯골축제`;
    maindetail.innerHTML = `슬로건 : 갯골에서 안부를 묻다 갯골에게 안부를 묻다
기간 : 2021.9월~10월
장소 : 온라인 / 시흥갯골생태공원
주최 : 시흥시
주관 : 시흥갯골축제추진위원회
🏆대한민국 문화관광축제 선정
🏆경기도 대표축제 선정
🏆문화관광콘텐츠대상 선정
🏆피너클어워드 2관왕`;
  })
  
  buttonTags[3].addEventListener("mouseover", function(){
    console.log("button 4");
    imgTag.src = "year/15.jpg";

    mainyear.innerHTML = `2020`;
    mainfes.innerHTML = `15회 시흥갯골축제`;
    maindetail.innerHTML = `  기간 : 2020.9.16(수)~10.30(금)
주제 : 세상에서 가장 큰 생태예술놀이터
장소 : 온라인
주제 : 축제가 일상으로 찾아갑니다.
주최 : 시흥시
주관 : 시흥갯골축제추진위원회
🏆대한민국 문화관광축제 선정
🏆경기도 대표축제 선정
🏆문화관광콘텐츠대상 선정`;
  })