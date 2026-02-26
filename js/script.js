// faq

const mainq = document.querySelectorAll(".mainq");
mainq.forEach((q) => {
    q.addEventListener("click",
    function () {
        const mainans = this.nextElementSibling;
        const icon = this.querySelector("span");

        document.querySelectorAll(".mainans").
        forEach((ans) => {
            if (ans !== mainans) {
                ans.style.display = "none";
            }
        });

        document.querySelectorAll(".mainq span").
        forEach((sp) => {
            sp.textContent = "+";
        });
        
        if (mainans.style.display === "block") {
            mainans.style.display = "none";
            icon.textContent = "+";
        } else {
            mainans.style.display = "block";
            icon.textContent = "-";
        }

    });
});


// scroll

document.addEventListener("DOMContentLoaded", function () {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // animate once (professional style)
            }
        });
    }, {
        threshold: 0.25
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

});


// navigation
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); 
let autoSlide;

function nextSlide() {
    // Hide the current slide
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the new slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // If we've reached the video slide stop auto-sliding
    if (currentSlide === slides.length - 1) {
        clearInterval(autoSlide);
    }
}
// Arrow button controls
document.querySelector('.arrow.right').addEventListener('click', () => {
    nextSlide();
    clearInterval(autoSlide);
    startAuto();
});

document.querySelector('.arrow.left').addEventListener('click', () => {
    prevSlide();
    clearInterval(autoSlide);
    startAuto();
});

// Dot controls
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        clearInterval(autoSlide);
        startAuto();
    });
});

// Start auto-slide function
function startAuto() {
    autoSlide = setInterval(nextSlide, 10000);
}

//first slide ctive
slides[currentSlide].classList.add('active');
dots[currentSlide].classList.add('active');

startAuto();