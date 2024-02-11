                        /*SEARCH*/

const   searchForm = document.getElementById('search-form-show'),
        searchClose = document.getElementById('search-close'),
        searchContent = document.getElementById('search-content')

/* SHOW SEARCH */
if(searchForm){
    searchForm.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}
/* HIDE SEARCH */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

                        /*LOGIN*/
const   loginForm = document.getElementById('login-form-show'),
        loginClose = document.getElementById('login-close'),
        loginContent = document.getElementById('login-content'),
        loginButton = document.getElementById('login-button')

/* SHOW LOGIN */
if(loginForm){
    loginForm.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}
/* HIDE LOGIN */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

if(loginButton){
  loginButton.addEventListener('click', () =>{
      loginContent.classList.remove('show-login')
  })
}

                          /*SIGNUP*/
const   signupForm = document.getElementById('signup-form-show'),
        signupClose = document.getElementById('signup-close'),
        signupContent = document.getElementById('signup-content'),
        signupButton = document.getElementById('signup-button')

/* SHOW signup */
if(signupForm){
    signupForm.addEventListener('click', () =>{
        signupContent.classList.add('show-signup')
        loginContent.classList.remove('show-login')
    })
}
/* HIDE signup */
if(signupClose){
    signupClose.addEventListener('click', () =>{
        signupContent.classList.remove('show-signup')
    })
}

if(signupButton){
  signupButton.addEventListener('click', () =>{
      signupContent.classList.remove('show-signup')
  })
}


                        /*HEADER SHADOW*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50  ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


                        /*HOME SWIPER*/
document.addEventListener('DOMContentLoaded', function () {
  let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 3,
    centeredSlides: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  });
});

                        /*BEST SELLER SWIPER*/

document.addEventListener('DOMContentLoaded', function () {
    let swiperBestSeller = new Swiper('.best_seller_swiper', {
      loop: true,
      spaceBetween: 16,
      grabCursor: true,
      slidesPerView: 3,
      centeredSlides: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    }
  );
});

                        /*REVIEWS SWIPER*/

document.addEventListener('DOMContentLoaded', function () {
    let swiperReview = new Swiper('.review_swiper', {
      loop: true,
      spaceBetween: 16,
      grabCursor: true,
      slidesPerView: 3,
      centeredSlides: true,
    });
  });

                        /*SHOW SCROLL UP*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 50  ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

                    /*SCROLL SECTIONS ACTIVE LINK*/

const sections = document.querySelectorAll('section[id]')   /* sve section elemente sprema u node listu pod nazivom sections */

const scrollActive = () =>{   /* provjera trenutne pozicije skrolanja */
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 20,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)