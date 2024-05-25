const header = document.querySelector('.top-header');
const homeSection = document.querySelector('.main-principal');
const aboutSection = document.querySelector('.bg-about');
const serviceSection = document.querySelector('.bg-services');
const projectSection = document.querySelector('.project-title');
const contactSection = document.querySelector('.bg-contact-me');
const footerSection = document.querySelector('.bg-footer');


const projectMargin = 200; // MARGIN PROJECT 

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const homePosition = homeSection.offsetTop;
    const aboutPosition = aboutSection.offsetTop;
    const servicePosition = serviceSection.offsetTop;
    const projectPosition = projectSection.offsetTop;
    const scrolledPosition = projectPosition - projectMargin;
    const contactPosition = contactSection.offsetTop;
    const footerPosition = footerSection.offsetTop;

    if (scrollPosition < aboutPosition) {
        header.classList.remove('scrolled-about', 'scrolled-service', 'scrolled-project', 'scrolled-project-margin', 'scrolled-contact', 'scrolled-footer');
        header.classList.add('scrolled-home');
    } else if (scrollPosition >= aboutPosition && scrollPosition < servicePosition) {
        header.classList.remove('scrolled-home', 'scrolled-service', 'scrolled-project', 'scrolled-project-margin', 'scrolled-contact', 'scrolled-footer');
        header.classList.add('scrolled-about');
    } else if (scrollPosition >= servicePosition && scrollPosition < scrolledPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-project', 'scrolled-project-margin', 'scrolled-contact', 'scrolled-footer');
        header.classList.add('scrolled-service');
    } else if (scrollPosition >= scrolledPosition && scrollPosition < projectPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-service', 'scrolled-project', 'scrolled-contact', 'scrolled-footer');
        header.classList.add('scrolled-project-margin');
    } else if (scrollPosition >= projectPosition && scrollPosition < contactPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-service', 'scrolled-project-margin', 'scrolled-contact', 'scrolled-footer');
        header.classList.add('scrolled-project');
    } else if (scrollPosition >= contactPosition && scrollPosition < footerPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-service', 'scrolled-project', 'scrolled-project-margin', 'scrolled-footer');
        header.classList.add('scrolled-contact');
    } else if (scrollPosition >= footerPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-service', 'scrolled-project', 'scrolled-project-margin', 'scrolled-contact');
        header.classList.add('scrolled-footer');
    }
});
