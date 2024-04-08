// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
    function scrollToSection(sectionId) {
            var section = document.getElementById(sectionId);
    section.classList.add('highlight');
    setTimeout(function () {
        section.classList.remove('highlight');
            }, 3000); // Timer
    section.scrollIntoView({behavior: 'smooth' });
        }