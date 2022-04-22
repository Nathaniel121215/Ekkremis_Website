
const sr = ScrollReveal({     distance: '60px',     duration: 3500,     delay: 100})

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



/*===== MEET THE TEAM =====*/ 
sr.reveal(`#meettheteam__title`,{origin: 'left',delay: 200})

sr.reveal(`.teamonedetails1`,{origin: 'left',delay: 400})
sr.reveal(`.teamonedetails2`,{origin: 'left',delay: 600})
sr.reveal(`.teamonedetails3`,{origin: 'left',delay: 800})

sr.reveal(`#timg1`,{origin: 'top',delay: 1000})
sr.reveal(`#timg2`,{origin: 'bottom',delay: 1200})
sr.reveal(`#timg3`,{origin: 'bottom'})


/*===== WHY CHOOSE US =====*/ 

sr.reveal(`#whychooseus__title`,{origin: 'left',delay: 200})
sr.reveal(`.questions__group`,{origin: 'left',delay: 400})


/*===== CONTACT US =====*/ 
sr.reveal(`.contactus__title`,{origin: 'left',delay: 200})
sr.reveal(`.contact__data`,{origin: 'left',delay: 400})
sr.reveal(`.contact__form`,{origin: 'left',delay: 600})

sr.reveal(`.mapsec`,{origin: 'bottom',delay: 1000})



/*===== HRIS =====*/ 
sr.reveal(`.HIRS__title`,{origin: 'left',delay: 200})
sr.reveal(`.HIRS__details`,{origin: 'left',delay: 400})
sr.reveal(`.mainbox2`,{origin: 'left',delay: 600})

sr.reveal(`.HIRS__box2`,{origin: 'bottom',delay: 800})




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



/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)









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




