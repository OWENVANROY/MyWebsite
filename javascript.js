/*$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  */
 
  // verkrijg het hoogte van het navigatie-element
  const navHeight = document.getElementById('navigatiebar').offsetHeight;

  // voeg een eventlistener toe om te scrollen naar de juiste sectie van de pagina
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const targetTop = target.offsetTop - navHeight;
  
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });