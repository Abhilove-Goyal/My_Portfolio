const typedTextElement = document.querySelector('.typed-text');
const words = ["Student", "Web Developer", "Competitive Coder", "Python Developer", "Data Scientist(soon)"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;
let typingSpeed = 200;

function type() {
    const fullText = words[wordIndex];
    
    // Check if we are deleting or typing
    if (isDeleting) {
        currentWord = fullText.substring(0, letterIndex--);  // Remove a letter
    } else {
        currentWord = fullText.substring(0, letterIndex++);  // Add a letter
    }
    
    typedTextElement.textContent = currentWord;

    if (!isDeleting && letterIndex === fullText.length) {
        // Word fully typed, pause and start deleting after a delay
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && letterIndex === 0) {
        // Word fully deleted, move to next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;  // Loop through words
    }

    // Adjust typing speed for typing vs deleting
    let speed = isDeleting ? 100 : typingSpeed;

    setTimeout(type, speed);
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', type);
 //Scrolling animation 
 document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    let lastScrollTop = 0;

    const observer = new IntersectionObserver((entries) => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        entries.forEach(entry => {
            // Only animate when scrolling down
            if (entry.isIntersecting && scrollTop > lastScrollTop) {
                entry.target.classList.add('show');
            }
        });

        // Update last scroll position
        lastScrollTop = scrollTop;
    }, { threshold: 0.2 }); // Trigger when 20% of the card is visible

    cards.forEach(card => {
        observer.observe(card); // Observe all cards
    });
});

//NAVBAR TOGGLE 

    function toggleNavbar() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    }

// Adding a glow effect to each card on hover
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('glow');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('glow');
    });
});

// email resend
