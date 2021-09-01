const menuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn_burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const menuNavItem = document.querySelectorAll('.menu-nav_item')

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