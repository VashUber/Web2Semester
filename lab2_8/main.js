let shine = document.querySelector('.shine')
let but = document.querySelector('.button')
let lamp = document.querySelector('.lamp-up')
let count = 0

but.onclick = () =>{
    if (count % 2 == 0){
        shine.style.display = 'unset'
        lamp.style.fill = '#f5ea56'
    }
    else{
        shine.style.display = 'none'
        lamp.style.fill = '#000'
    }
    count+=1
}