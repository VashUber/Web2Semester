var goomba = document.querySelector(".goomba");
    i = document.querySelector('.left').offsetWidth / 2 - 70;
    btn = document.querySelector(".stop-pause");
    cloud = document.querySelector(".cloud");
let current_position_L = 0;
    current_position_R = i;
    current_position = 0;
    flag = false;
let move = setInterval(function(){
    if (flag == false){
        current_position_L++;
        if (current_position_L <= i){
            current_position = current_position_L;
        }
        else{
            current_position_R--;  
            if (current_position_R >= 0){
                current_position = current_position_R;
            }
            else{
                current_position_L = 0;
                current_position_R = i;
            }
        }
        draw(current_position);
    }
}, 5)
function draw(current_position) {
    goomba.style.left = current_position + 'px';
}
btn.onclick = () =>{
    if (flag == false){
        btn.textContent = "Пуск";
        flag = true;
    }
    else{
        btn.textContent = "Стоп";
        flag = false;
    }
}
