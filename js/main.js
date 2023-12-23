 // Показать, скрыть мобильнео меню
  const headerMenu = document.querySelector('#header-menu');
  const navIcon = document.querySelector('#nav-icon');

  navIcon.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    headerMenu.classList.toggle('open')
  });

  // При клике обходим ссылки и скрываем меню 
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (item) {

    item.addEventListener('click', function() {
      navIcon.classList.remove('nav-icon--active');
      headerMenu.classList.remove('open');
    })
  })
