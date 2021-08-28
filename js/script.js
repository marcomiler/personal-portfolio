const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';



let navLink = document.querySelectorAll('.nav__link');

// PREVIOUSLY SELECTED TOPIC ( CHECKING FROM LOCAL STORAGE )
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// WE OBTAIN THE CURRENT THEME THAT THE INTERFACE HAS BY VALIDITING THE DARK THEME CLASS 
const getCurrentTheme = () => document.body.classList.contains( darkTheme ) ? 'dark' : 'light' ;
const getCurrentIcon = () => document.body.classList.contains( iconTheme ) ? 'uil-moon' : 'uil-sun' ;

// WE NEED TO VALIDATE IF USER HAS PREVIOUSLY CHOOSEN A TOPIC
if( selectedTheme ){
    document.body.classList[ selectedTheme === 'dark' ? 'add' : 'remove' ]( darkTheme );
    themeButton.classList[ selectedIcon === 'uil-moon' ? 'add' : 'remove' ]( iconTheme );
}

// ACTIVATE/DESACTIVATE THE THEME MANUALLY WITH THE BUTTON
themeButton.addEventListener( 'click', () => {
    // ADD OR REMOVE THE DARK/LIGHT ICON -- ICON THEME
    document.body.classList.toggle( darkTheme );
    themeButton.classList.toggle( iconTheme );

    // WE SAVE THE THEME AND THE CURRENT ICON THAT THE USER HAS CHOOSEN
    localStorage.setItem( 'selected-theme', getCurrentTheme() );
    localStorage.setItem( 'selected-icon', getCurrentIcon() );
});

console.log("theme setting is working!");

const navMenu = document.getElementById('nav-menu');
const navtoggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// MENU SHOW
/* VALIDATE IF THE CONSTANT EXISTS */
if( navtoggle ){
    navtoggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if( navClose ){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 

// REMOVE MENU PROFILE
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu');
}

navLink.forEach( n => n.addEventListener( 'click', linkAction ));

// TYPEWRITE EFFECT

// new Typewriter('#typewriter', {
//     strings: ['Miler Rodriguez Marco', 'Web-developer'],
//     autoStart: true,
//     loop: true,
//     cursor: "|"
// });



//===================================== SCROLL UP =========================
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);


//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);