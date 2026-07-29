// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


// Simple welcome message

console.log("Welcome to Ankush Digital Skills Portfolio Website");
