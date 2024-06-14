document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            lightbox.classList.add('visible');
            lightboxImg.classList.remove('show');
            setTimeout(() => {
                lightboxImg.src = thumbnail.dataset.full;
                lightboxImg.classList.add('show'); 
            }, 100);
            currentIndex = index;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('visible');
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) < 0 ? thumbnails.length - 1 : (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        changeImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        changeImage(currentIndex);
    });

    function changeImage(index) {
        lightboxImg.classList.remove('show');
        setTimeout(() => {
            lightboxImg.src = thumbnails[index].dataset.full;
            lightboxImg.classList.add('show');
        }, 100);
    }
});
