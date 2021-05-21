let but = document.querySelector('.button')
    menu = document.querySelector('.BurgerMenu')
    lamp = document.querySelector('.Lamp')

but.onclick = () =>{
    lamp.classList.toggle("lamp-active")
}

menu.onclick = () =>{
    menu.classList.toggle("menu-active")
}