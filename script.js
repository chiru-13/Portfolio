function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('show-menu');
}

function sendMail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        message: message,
    };

    emailjs.send('service_id', 'template_id', templateParams)
        .then((response) => {
            alert('Message Sent Successfully');
        }, (error) => {
            alert('Failed to Send Message');
        });
}
