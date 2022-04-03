

const sr = ScrollReveal({     distance: '60px',     duration: 2500,     delay: 100, reset: true })

/*===== INDEX =====*/ 

sr.reveal(`#aboutus_title`,{origin: 'left', interval: 2200, delay: 200 })
sr.reveal(`#img1`,{origin: 'top', interval: 2200, delay: 400})
sr.reveal(`#img2`,{origin: 'bottom', interval: 2200, delay: 600})
sr.reveal(`#details__one`,{origin: 'right', interval: 2200, delay: 800})


sr.reveal(`#details__two`,{origin: 'left', interval: 2200, delay: 200})
sr.reveal(`#img3`,{origin: 'top', interval: 2200, delay: 400})
sr.reveal(`#img4`,{origin: 'bottom', interval: 2200, delay: 600})


sr.reveal(`.Core__title`,{origin: 'left', interval: 2200})
sr.reveal(`#value1`,{origin: 'bottom', interval: 2200, delay: 200})
sr.reveal(`#value2`,{origin: 'bottom', interval: 2200, delay: 400})
sr.reveal(`#value3`,{origin: 'bottom', interval: 2200, delay: 600})
sr.reveal(`#value4`,{origin: 'bottom', interval: 2200, delay: 800})

sr.reveal(`.Client__title`,{origin: 'left', interval: 2200});
sr.reveal(`#client1`,{origin: 'bottom', interval: 2200, delay: 200})
sr.reveal(`#client2`,{origin: 'bottom', interval: 2200, delay: 400})
sr.reveal(`#client3`,{origin: 'bottom', interval: 2200, delay: 600})
sr.reveal(`#client4`,{origin: 'bottom', interval: 2200, delay: 800})
sr.reveal(`#client5`,{origin: 'bottom', interval: 2200, delay: 1000})
sr.reveal(`#client6`,{origin: 'bottom', interval: 2200, delay: 1200})
sr.reveal(`#client7`,{origin: 'bottom', interval: 2200, delay: 1400})
sr.reveal(`#client8`,{origin: 'bottom', interval: 2200, delay: 1600})


/*===== SERVICE =====*/ 

sr.reveal(`#services__title`,{origin: 'left',delay: 200})
sr.reveal(`.services__details`,{origin: 'left',delay: 400 })
sr.reveal(`#main__box1`,{origin: 'bottom', delay: 600 })
sr.reveal(`#main__box2`,{origin: 'bottom',delay: 800 })

sr.reveal(`#servicessub__boxs1`,{origin: 'bottom',delay: 1000 })
sr.reveal(`#servicessub__boxs2`,{origin: 'bottom',delay: 1100 })
sr.reveal(`#servicessub__boxs3`,{origin: 'bottom',delay: 1200 })
sr.reveal(`#servicessub__boxs4`,{origin: 'bottom',delay: 1300 })
sr.reveal(`#servicessub__boxs5`,{origin: 'bottom',delay: 1400 })
sr.reveal(`#servicessub__boxs6`,{origin: 'bottom',delay: 1500 })
sr.reveal(`#servicessub__boxs7`,{origin: 'bottom',delay: 1600 })
sr.reveal(`#servicessub__boxs8`,{origin: 'bottom',delay: 1700 })




/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId)=>
{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) 
    {
        toggle.addEventListener('click',()=>
        {nav.classList.toggle('show')})
    }

}
showMenu('nav-toggle','nav-menu')


/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction()
{
    //active
    navLink.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')

    //remove menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))





let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active2";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}




