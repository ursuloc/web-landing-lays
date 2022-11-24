const button = document.querySelector('.button__header')
const nav = document.querySelector('.header__content')

button.addEventListener('click',()=>{
    nav.classList.toggle('active')
})