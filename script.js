function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=function(){};var prevScrollPos=window.pageYOffset;function toggleExemplo(o){o=document.getElementById(o);o.style.display="none"===o.style.display?"block":"none"}window.onscroll=function(){var o=document.getElementById("back-to-top");20<document.body.scrollTop||20<document.documentElement.scrollTop?o.style.display="block":o.style.display="none";o=window.pageYOffset;o<prevScrollPos?document.querySelector("nav").classList.remove("hidden"):document.querySelector("nav").classList.add("hidden"),prevScrollPos=o}; window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});