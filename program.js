// 네비게이션-------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var section1 = document.getElementById('section1');
    
    function checkScroll() {
        var section1Height = section1.offsetHeight;
        var section1Top = section1.getBoundingClientRect().top + window.pageYOffset;
        var triggerPoint = section1Top + (section1Height * 1 / 10);
        
        if (window.pageYOffset >= triggerPoint) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
});

// 팝업띄우기-------------------------------------------------------------------------
const popupIconTag = document.querySelector(".icon1 .popup_icon");

popupIconTag.addEventListener("mouseover", function() {
const popupTag = document.querySelector(".popup");
popupTag.classList.add('opacity_vis');

console.log("able")
});

popupIconTag.addEventListener("mouseout", function() {
const popupTag = document.querySelector(".popup");
popupTag.classList.remove('opacity_vis');
});

// 상세정보화면으로 내리기-------------------------------------------------------------------------
const section2Tag = document.getElementById("section2");
const detail_iconTag = document.querySelector(".icon1 .detail_icon");

detail_iconTag.addEventListener("click", function() {
    let section2Rect = section2Tag.getBoundingClientRect();
    let section2Top = section2Rect.top + window.pageYOffset;
    // let section2Mid = section2Top + section2Rect.height / 2;
    let windowMid = window.innerHeight / 2;
    
    window.scrollTo({
        top: section2Top - windowMid + section2Rect.height / 2,
        behavior: 'smooth'
    });
    
    console.log("click");
});

popupIconTag.addEventListener("mouseover", function() {
    popupIconTag.src = `source/Group 386.png`;
    });
popupIconTag.addEventListener("mouseout", function() {
    popupIconTag.src = `source/image 25.png`;
    });

detail_iconTag.addEventListener("mouseover", function() {
    detail_iconTag.src = `source/Group 387.png`;
    });
detail_iconTag.addEventListener("mouseout", function() {
    detail_iconTag.src = `source/image 26.png`;
    });

// 화살표클릭시 이미지넘어감-------------------------------------------------------------------------
const productImg = document.querySelector(".main-img img")
const leftButton = document.querySelector(".left-b")
const rightButton = document.querySelector(".right-b")


let currentNumber = 1;

leftButton.addEventListener("click", function(){
console.log(currentNumber);
currentNumber--;

if(currentNumber < 1){
    currentNumber = 5;
}
productImg.src = `source/program${currentNumber}.jpg`;

})

rightButton.addEventListener("click", function(){
console.log(currentNumber);
currentNumber++;

if(currentNumber > 5){
    currentNumber = 1;
}
productImg.src = `source/program${currentNumber}.jpg`;

})

leftButton.addEventListener("mouseover", function() {
    leftButton.src = `source/image 33.png`;
    });
leftButton.addEventListener("mouseout", function() {
    leftButton.src = `source/image 32.png`;
    });

rightButton.addEventListener("mouseover", function() {
    rightButton.src = `source/image 34.png`;
    });
rightButton.addEventListener("mouseout", function() {
    rightButton.src = `source/image 31.png`;
    });

// 순차적으로 보이게-------------------------------------------------------------------------
const animatedTags = document.querySelectorAll("h4, ul, .detail_right img, .detail_right p")
animatedTags.forEach(tag => {
    tag.style.opacity = 0;
})

document.addEventListener("scroll", function() {

    let delay = 0.1;
    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if(tagTop < window.innerHeight && tagBottom > 0){
            tag.style.animation = `fadeIn 1s ${delay}s both`;
            console.log("appear");
            delay += 0.1;
        }else{
            tag.style.animation = 0;
            console.log("hide");
        }
    })
});

// 티셔츠 바꾸기-------------------------------------------------------------------------
const TImg = document.querySelector(".detail_right img")

let TNumber = 1;

TImg.addEventListener("click", function(){
console.log(TNumber);
TNumber++;

if(TNumber > 3){
    TNumber = 1;
}
TImg.src = `source/T${TNumber}.png`;

})