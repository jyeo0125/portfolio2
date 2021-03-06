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
    }
    navbarMenu.classList.remove('open')
    scrollIntoView(link)
    
})

// Navbar toggle btn for small and mobile

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});




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


// Show 'arrow' btn when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible')
    } else {
        arrowUp.classList.remove('visible')
    }
})

// Handle click 'arrow'btn
arrowUp.addEventListener('click', ( )=>{
    scrollIntoView('#home')
})

// Projects

const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')





workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter
    if(filter == null) {
        return
    }

// Remove selectiom from orevious item and select the new
const active = document.querySelector('.category__btn.selected')
active.classList.remove('selected')
const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode
target.classList.add('selected')


projectContainer.classList.add('anim-out');
setTimeout(() => {
    projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
    } else {
        project.classList.add('invisible');
    }
    });
    projectContainer.classList.remove('anim-out');
}, 300);
    
    
    // console.log(filter);
})

// Function

function scrollIntoView(selector)  {
    const scrollTo = document.querySelector(selector)
    scrollTo.scrollIntoView({behavior:'smooth', block:"center"})
}