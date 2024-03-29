//Ganti hamburger icon ke x
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link / Pindah Fungsi Class Pas di Scroll atau pindah slide
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    // Sticky Navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //Hapus toggle icon dan navbar ketika di klik navbar link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// Scroll Reveal

ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Junior Developer', 'UI/UX Designer', 'Graphic Designer', 'Online Marketer', 'Fotografer', 'Videografer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// const form = document.querySelector('form');
// const fullname = document.getElementsByid("name");
// const email = document.getElementsByid("email");
// const phone = document.getElementsByid("phone");
// const subject = document.getElementsByid("subject");
// const mess = document.getElementsByid("message");

// function sendEmail() {
//     const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

//     email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "kafahnadzare@gmail.com",
//         Password : "2F0024A87FE4714923FFED548925DA65C6E0",
//         To : 'kafahnadzare@gmail.com',
//         From : "kafahnadzare@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("Submit", (e) => {
//     e.preventDefault();

//     sendEmail();

// });