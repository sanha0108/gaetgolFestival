// 마우스포인터
document.addEventListener('mousemove', function(e) {
    var circle = document.getElementById('circle');
    
    var x = e.clientX + window.pageXOffset;
    var y = e.clientY + window.pageYOffset;
    circle.style.transform = `translate(${x}px, ${y}px)`;
});

// 섹션2도달시 헤더 백그라운드 생성
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var section2 = document.getElementById('section2');
    
    function checkScroll() {
        var section2Height = section2.offsetHeight;
        var section2Top = section2.getBoundingClientRect().top + window.pageYOffset;
        var triggerPoint = section2Top;
        
        if (window.pageYOffset >= triggerPoint) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
});

document.addEventListener("DOMContentLoaded", function() {
    const BGimages = document.querySelectorAll(".backimg img");
    const leafimages = document.querySelectorAll(".leaf img");
    const cloudimages = document.querySelectorAll(".cloud img");
    const starsimages = document.querySelectorAll(".stars img");
    const mainTitle = document.querySelectorAll(".maintitle div");
    const mtTop = document.querySelector(".mt_top");
    const mtBottom = document.querySelector(".mt_bottom");

    BGimages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }, index * 200);
    });

    leafimages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }, index * 400);
    });

    cloudimages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }, index * 300);
    });

    starsimages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
        }, index * 300);
    });
});

// // section3
// document.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     var windowHeight = window.innerHeight;
//     var section3 = document.getElementById('section3');
//     var container3 = document.querySelector('.container3');

//     // section3의 하단 위치를 계산
//     var section3Bottom = section3.offsetTop + section3.offsetHeight;

//     // section3의 높이의 1.5배 만큼 스크롤했을 때 container3가 이동
//     var additionalScroll = section3.offsetHeight * 1.5;

// if (scrollPosition >= section3Bottom - windowHeight) {
//     var scrollPastSection3Bottom = scrollPosition - (section3Bottom - windowHeight);

//     // section3 높이의 1.5배 만큼 스크롤했을 때 container3가 완전히 왼쪽으로 이동
//     if (scrollPastSection3Bottom >= additionalScroll) {
//         container3.style.marginLeft = '-' + container3.scrollWidth + 'px';
//     } else {
//         // 스크롤 위치에 따라 margin-left 값을 계산
//         var marginLeftValue = 100 - (scrollPastSection3Bottom / additionalScroll * 100);
//         container3.style.marginLeft = marginLeftValue + 'vw';
//     }
// } else {
//     // section3의 하단에 도달하기 전에는 초기 상태 유지
//     container3.style.marginLeft = '100vw';
// }
// });


document.querySelectorAll('a[data-filter]').forEach(aTag => {
    aTag.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
        filterItems(filter);
    });
});

function filterItems(filter) {
    document.querySelectorAll('.filter-item').forEach(item => {
        if (filter === 'all') {
            item.classList.remove('hidden');
        } else if (item.id === filter) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// section4 스크립트 컨텐츠
document.addEventListener('DOMContentLoaded', function () {
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const mapWrapper = document.querySelector('.mapWrapper');
    const mapcons = document.querySelectorAll('.mapcon');
    let currentIndex = 0;

    function updateVisibility() {
        mapcons.forEach((mapcon, index) => {
            if (index === currentIndex) {
                mapcon.classList.add('visible4');
                mapcon.classList.remove('hidden');
            } else {
                mapcon.classList.add('hidden');
                mapcon.classList.remove('visible4');
            }
        });
    }

    leftBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('left button clicked');
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = mapcons.length - 1;
        }
        mapWrapper.style.transform = `translate3d(-${currentIndex * 100}%, 0, 0)`;
        updateVisibility();
    });

    rightBtn.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('right button clicked');
        if (currentIndex < mapcons.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        mapWrapper.style.transform = `translate3d(-${currentIndex * 100}%, 0, 0)`;
        updateVisibility();
    });

    updateVisibility();
});



// section5 컨텐츠 필터링
document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.cateCon');
    const items = document.querySelectorAll('.filter-item');
    const contentContainer = document.querySelector('.content5');
    let currentIndex = 0; // 추가된 부분: currentIndex를 전역 변수로 이동

    function updateContent() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 117}%)`;
        });
    }

    // 카테고리 필터 기능
    categories.forEach(category => {
        category.addEventListener('click', function () {
            categories.forEach(cat => cat.classList.remove('clicked'));
            this.classList.add('clicked');

            const filter = this.getAttribute('data-filter');
            items.forEach(item => {
                if (filter === 'all' || item.id === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // 카테고리 클릭 시 currentIndex 초기화
            currentIndex = 0; // 추가된 부분: currentIndex를 0으로 초기화
            updateContent(); // 추가된 부분: updateContent 함수 호출
        });
    });

    // 초기 상태 설정
    document.querySelector('.cateCon[data-filter="all"]').click();
});

// 컨텐츠 좌우 버튼
document.addEventListener("DOMContentLoaded", function() {
    const leftBtn = document.querySelector(".con5btn:first-of-type");
    const rightBtn = document.querySelector(".con5btn:last-of-type");
    const content = document.querySelector(".content5");
    const items = document.querySelectorAll(".filter-item");
    let currentIndex = 0;

    function updateContent() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 23.5}vw)`;
        });
    }

    leftBtn.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateContent();
        }
    });

    rightBtn.addEventListener("click", function() {
        if (currentIndex < items.length - 9) {
            currentIndex++;
            updateContent();
        }
    });

    updateContent();
});

// 배너 영역 스크립트
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.bannerbtn');
    const sections = document.querySelectorAll('.bannerCon');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});