
const sr = ScrollReveal({     distance: '60px',     duration: 3500,     delay: 100})

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
sr.reveal(`.teamonedetails4`,{origin: 'left',delay: 1000})

sr.reveal(`#timg1`,{origin: 'top',delay: 1200})
sr.reveal(`#timg2`,{origin: 'bottom',delay: 1400})

sr.reveal(`.show_3`,{origin: 'bottom',delay: 1300})
sr.reveal(`.teamone2`,{origin: 'left',delay: 1500})



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


/*===== HRIS FEATURE =====*/ 

sr.reveal(`.homepage__data`,{origin: 'left',delay: 200})
sr.reveal(`.first__img`,{origin: 'bottom',delay: 500})

sr.reveal(`.second__box1`,{origin: 'bottom',delay: 200})
sr.reveal(`.second__box2`,{origin: 'bottom',delay: 400})

/*===== HIMS FEATURE =====*/ 

sr.reveal(`#show1`,{origin: 'left',delay: 200})
sr.reveal(`#show2`,{origin: 'left',delay: 400})
sr.reveal(`#show3`,{origin: 'left',delay: 600})
sr.reveal(`#show4`,{origin: 'left',delay: 800})
sr.reveal(`#show5`,{origin: 'bottom',delay: 1000})







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



