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

// 양옆 화살표 이미지 호버시 변경-------------------------------------------------------------------------
const leftTag = document.querySelector(".left img");
const leftpTag = document.querySelector(".left p");

leftTag.addEventListener("mouseover", function() {
    leftTag.src = `source/Group 371.png`;
    leftpTag.style.fontWeight = "bold";

    console.log("in")
});
leftTag.addEventListener("mouseout", function() {
    leftTag.src = `source/Group 24.png`;
    leftpTag.style.fontWeight = "400";

    console.log("out")
});


const rightTag = document.querySelector(".right img");
const rightpTag = document.querySelector(".right p");

rightTag.addEventListener("mouseover", function() {
    rightTag.src = `source/Group 372.png`;
    rightpTag.style.fontWeight = "bold";

    console.log("in")
});
rightTag.addEventListener("mouseout", function() {
    rightTag.src = `source/Group 30.png`;
    rightpTag.style.fontWeight = "400";

    console.log("out")
});

// 양옆 화살표 이미지 클릭시 내용바뀌게-------------------------------------------------------------------------
const principles = [
{
time1:"09:00", 
time2:"19:30", 
time3:"10:00", 
time4:"21:00", 
name1: "오이도역(함현중학교 건너편 시티버스 정류장)",
name2: "오이도역 >> 축제장",
name3: "축제장 >> 오이도역",
pre: "신천역",
next: "시흥시청 정문",
},
{
time1:"09:30", 
time2:"19:00", 
time3:"10:00", 
time4:"21:00", 
name1: "시흥시청 정문",
name2: "시흥시청 정문 >> 축제장",
name3: "축제장 >> 시흥시청 정문",
pre: "오이도역",
next: "시흥시청역",
},
{
time1:"09:30", 
time2:"19:00", 
time3:"10:00", 
time4:"21:00", 
name1: "시흥시청역 2번 출구",
name2: "시흥시청역 >> 축제장",
name3: "축제장 >> 시흥시청역",
pre: "시흥시청 정문",
next: "신천역",
},
{
time1:"09:00", 
time2:"19:30", 
time3:"10:00", 
time4:"21:00", 
name1: "신천역 5번 출구",
name2: "신천역 >> 축제장",
name3: "축제장 >> 신천역",
pre: "시흥시청역",
next: "오이도역",
},

]

const name1Tag = document.querySelector(".bus_name h2")
const name2Tag = document.querySelector(".in th")
const name3Tag = document.querySelector(".out th")

const time1Tag = document.querySelector(".in tbody tr:nth-child(2) td:nth-child(1)")
const time2Tag = document.querySelector(".in tbody tr:nth-child(2) td:nth-child(2)")
const time3Tag = document.querySelector(".out tbody tr:nth-child(2) td:nth-child(1)")
const time4Tag = document.querySelector(".out tbody tr:nth-child(2) td:nth-child(2)")

const locationTag = document.querySelector(".location")
const stationTag = document.querySelector(".station")

let currentNumber = 1;

leftTag.addEventListener("click", function(){
console.log(currentNumber);

currentNumber--;
if(currentNumber < 1){
currentNumber = 4;
}

locationTag.src = `source/location${currentNumber}.png`;
stationTag.src = `source/station${currentNumber}.png`;

name1Tag.innerHTML = principles[currentNumber-1].name1;
name2Tag.innerHTML = principles[currentNumber-1].name2;
name3Tag.innerHTML = principles[currentNumber-1].name3;

time1Tag.innerHTML = principles[currentNumber-1].time1;
time2Tag.innerHTML = principles[currentNumber-1].time2;
time3Tag.innerHTML = principles[currentNumber-1].time3;
time4Tag.innerHTML = principles[currentNumber-1].time4;

leftpTag.innerHTML = principles[currentNumber-1].pre;
rightpTag.innerHTML = principles[currentNumber-1].next;
})


rightTag.addEventListener("click", function(){
console.log(currentNumber);

currentNumber++;
if(currentNumber > 4){
currentNumber = 1;
}

locationTag.src = `source/location${currentNumber}.png`;
stationTag.src = `source/station${currentNumber}.png`;

name1Tag.innerHTML = principles[currentNumber-1].name1;
name2Tag.innerHTML = principles[currentNumber-1].name2;
name3Tag.innerHTML = principles[currentNumber-1].name3;

time1Tag.innerHTML = principles[currentNumber-1].time1;
time2Tag.innerHTML = principles[currentNumber-1].time2;
time3Tag.innerHTML = principles[currentNumber-1].time3;
time4Tag.innerHTML = principles[currentNumber-1].time4;

leftpTag.innerHTML = principles[currentNumber-1].pre;
rightpTag.innerHTML = principles[currentNumber-1].next;
})