const header = document.querySelector('.top-header');
const homeSection = document.querySelector('.main-principal');
const aboutSection = document.querySelector('.bg-about');
const serviceSection = document.querySelector('.bg-services');
const projectSection = document.querySelector('.project-title');
const contactSection = document.querySelector('.bg-contact-me');

// Define a margem superior para ativar a classe scrolled-project
const projectMargin = 200; // Ajuste conforme necessário

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const homePosition = homeSection.offsetTop;
    const aboutPosition = aboutSection.offsetTop;
    const servicePosition = serviceSection.offsetTop;
    const projectPosition = projectSection.offsetTop;
    const scrolledPosition = projectPosition - projectMargin;
    const contactPosition = contactSection.offsetTop;

    if (scrollPosition < aboutPosition) {
        header.classList.remove('scrolled-about', 'scrolled-service', 'scrolled-project', 'scrolled-project-margin', 'scrolled-contact');
        header.classList.add('scrolled-home');
    } else if (scrollPosition >= aboutPosition && scrollPosition < servicePosition) {
        header.classList.remove('scrolled-home', 'scrolled-service', 'scrolled-project', 'scrolled-project-margin', 'scrolled-contact');
        header.classList.add('scrolled-about');
    } else if (scrollPosition >= servicePosition && scrollPosition < scrolledPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-project', 'scrolled-project-margin', 'scrolled-contact');
        header.classList.add('scrolled-service');
    } else if (scrollPosition >= scrolledPosition && scrollPosition < projectPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-service', 'scrolled-project', 'scrolled-contact');
        header.classList.add('scrolled-project-margin');
    } else if (scrollPosition >= projectPosition && scrollPosition < contactPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-service', 'scrolled-project', 'scrolled-contact');
        header.classList.add('scrolled-project');
    } else if (scrollPosition >= contactPosition) {
        header.classList.remove('scrolled-home', 'scrolled-about', 'scrolled-service', 'scrolled-project', 'scrolled-project-margin');
        header.classList.add('scrolled-contact');
    }
});
