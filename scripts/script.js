document.addEventListener('DOMContentLoaded', function () {
    var mainNav = document.getElementById('mainNav');
    var navElement = document.querySelector('nav');
    var threshold = navElement.getBoundingClientRect().top + window.scrollY; // Set the threshold to the top position of the <ul> element
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var currentScrollTop = window.scrollY;

        // Check if the user has scrolled beyond the threshold
        if (currentScrollTop > threshold) {
            // Scrolled beyond the threshold, show the navbar
            mainNav.classList.remove('hidden');
        } else {
            // Not scrolled beyond the threshold, hide the navbar
            mainNav.classList.add('hidden');
        }

        lastScrollTop = currentScrollTop;
    });
});
