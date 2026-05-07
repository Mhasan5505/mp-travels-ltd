
const slides = document.querySelectorAll('.hero-slide');
let si = 0;
if (slides.length) {
    setInterval(() => {
        slides[si].classList.remove('active');
        si = (si + 1) % slides.length; slides[si].classList.add('active')
    }, 4000)
}
const counters = document.querySelectorAll('.counter');
let counted = false;
function runCounters() {
    if (counted) return;
    const box = document.querySelector('.counter-wrap');
    if (!box || box.getBoundingClientRect().top > innerHeight)
        return;
    counted = true;
    counters.forEach(el => {
        const target = +el.dataset.target;
        let n = 0;
        const inc = Math.max(1, Math.ceil(target / 90));
        const t = setInterval(() => {
            n += inc;
            if (n >= target) {
                n = target;
                clearInterval(t)
            }
            el.textContent = n.toLocaleString() + ' +'
        }, 25)
    })
}
function reveal() {
    document.querySelectorAll('.reveal').forEach(e => {
        if (e.getBoundingClientRect().top < innerHeight - 80) e.classList.add('show')
    }); runCounters()
}
addEventListener('scroll', reveal);
addEventListener('load', reveal);
const topBtn = document.querySelector('.back-top');
addEventListener('scroll', () => {
    if (topBtn) topBtn.style.display = scrollY > 450 ? 'block' : 'none'
});
if (topBtn) topBtn.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}); 
