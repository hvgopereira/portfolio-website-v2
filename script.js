const header = document.querySelector('.top-header');
const homeSection = document.querySelector('.main-principal');
const aboutSection = document.querySelector('.bg-about');
const serviceSection = document.querySelector('.bg-services');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const homePosition = homeSection.offsetTop;
    const aboutPosition = aboutSection.offsetTop;
    const servicePosition = serviceSection.offsetTop;

    if (scrollPosition < aboutPosition) {
        header.classList.remove('scrolled-about');
        header.classList.remove('scrolled-service');
        header.classList.add('scrolled-home');
    } else if (scrollPosition >= aboutPosition && scrollPosition < servicePosition) {
        header.classList.remove('scrolled-home');
        header.classList.remove('scrolled-service');
        header.classList.add('scrolled-about');
    } else {
        header.classList.remove('scrolled-home');
        header.classList.remove('scrolled-about');
        header.classList.add('scrolled-service');
    }
});


// window.addEventListener('wheel', function(e) {
//     e.preventDefault();
//     const delta = e.deltaY;
//     if (delta > 0) {
//         window.scrollBy({
//             top: window.innerHeight,
//             left: 0,
//             behavior: 'smooth'
//         });
//     } else {
//         window.scrollBy({
//             top: -window.innerHeight,
//             left: 0,
//             behavior: 'smooth'
//         });
//     }
// });
