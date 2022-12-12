// -Slide in animations-
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-slide');
        }
        else {
            entry.target.classList.remove('show-slide');
        }
    });
});


const slideElements = document.querySelectorAll('.anim-slide');
slideElements.forEach((el) => observer.observe(el));