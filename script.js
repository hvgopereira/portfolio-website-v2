const header = document.querySelector('.top-header');
const homeSection = document.querySelector('.main-principal');
const aboutSection = document.querySelector('.bg-about');
const serviceSection = document.querySelector('.bg-services');
const projectSection = document.querySelector('.bg-project');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const homePosition = homeSection.offsetTop;
    const aboutPosition = aboutSection.offsetTop;
    const servicePosition = serviceSection.offsetTop;
    const projectPosition = projectSection.offsetTop;

    if (scrollPosition < aboutPosition) {
        header.classList.remove('scrolled-about');
        header.classList.remove('scrolled-service');
        header.classList.remove('scrolled-project');
        header.classList.add('scrolled-home');
    } else if (scrollPosition >= aboutPosition && scrollPosition < servicePosition) {
        header.classList.remove('scrolled-home');
        header.classList.remove('scrolled-service');
        header.classList.remove('scrolled-project');
        header.classList.add('scrolled-about');
    } else if (scrollPosition >= servicePosition && scrollPosition < projectPosition) {
        header.classList.remove('scrolled-home');
        header.classList.remove('scrolled-about');
        header.classList.remove('scrolled-project');
        header.classList.add('scrolled-service');
    } else {
        header.classList.remove('scrolled-home');
        header.classList.remove('scrolled-about');
        header.classList.remove('scrolled-service');
        header.classList.add('scrolled-project');
    }
});
