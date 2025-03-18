// Smooth Scroll to Sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Explore Now Button Action
function explore() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}
