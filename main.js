'use strict'



// Make navbar transparent when it is in the top
const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height

document.addEventListener('scroll', ( )=> {
    // console.log(window.scrollY)
    // console.log(`navbarHeight: ${navbarHeight}`)
    
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark')
    }
});
//Handle scrolling when tapping on the navbar menu

const navbarMenu =  document.querySelector('.navbar__menu')

navbarMenu.addEventListener('click', (event)=>{
    const target= event.target
    const link = target.dataset.link
    
    if (link == null){
        return
    }else {
        // console.log(event.target.dataset.link);
        scrollIntoView(link)
    }
})
// Handle Contack me btn 
const homeContactBtn = document.querySelector('.home__contact')

homeContactBtn.addEventListener('click', ()=>{
    scrollIntoView('#contact')
})

// home section transparent with scrolling 

const home = document.querySelector('#home_container')
const homeHeight = home.getBoundingClientRect().height

document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 -window.scrollY / homeHeight
})







// Function

function scrollIntoView(selector)  {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior:'smooth'})
}