let but = document.querySelector('.button')
let menu = document.querySelector('.BurgerMenu')
let lamp = document.querySelector('.Lamp')

but.onclick = () =>{
    lamp.classList.toggle("lamp-active")
}

menu.onclick = () =>{
    menu.classList.toggle("menu-active")
}