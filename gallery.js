// 마우스포인터
        // document.addEventListener('mousemove', function(e) {
        //     var circle = document.getElementById('circle');
            
        //     var x = e.clientX + window.pageXOffset;
        //     var y = e.clientY + window.pageYOffset;
        //     circle.style.transform = `translate(${x}px, ${y}px)`;
        // });

        // 모달
        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('modal');
            const modalImg = document.getElementById('modal-img');
            const closeBtn = document.getElementsByClassName('close')[0];

            const imageLinks = document.querySelectorAll('.imgcon a');
            imageLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    modal.style.display = 'block';
                    modalImg.src = link.href;
                });
            });

            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });