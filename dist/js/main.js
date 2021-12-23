const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn_burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const menuNavItem = document.querySelectorAll('.menu-nav_item')
const welcomeText = document.querySelector('.home_name')
const calender = document.querySelector('.calender')
const showCalenderBtn = document.querySelector('#show-cal')
const carouselImages = document.querySelector(".carousel_images")
const carouselButtons = document.querySelectorAll('carousel_button')

let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

// function toggleMenu() {
//     if (!showMenu) {
//         hamburger.classList.add('open');
//         showMenu = true
//     } else {
//         hamburger.classList.remove('open')
//     }
// }
  
//lightbox

const lightbox = document.createElement('div')
const img = document.createElement('img')
const images = document.querySelectorAll('.grid img')


lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        img.src = e.target.src

        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget ) return
    lightbox.classList.remove('active')
})
// switching between mobile and desktop view
function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.toggle('open')
        nav.classList.toggle('open')
        menuNav.classList.toggle('open')
        menuNavItem.forEach(item => {
            item.classList.toggle('open')
        })
    }
} 


//introductry animation
window.addEventListener("load", () => {
    welcomeText.classList.add('animate');
})

//show calender 
showCalenderBtn.addEventListener('click', () => {
    calender.style.display = 'flex'
    showCalenderBtn.style.display = "none"
})