var mario = document.querySelector('.mario');
    bowser = document.querySelector('.bowser');
    win = document.querySelector('.victory');
let x  = 0;
    y = 0;
    c = 0;
var jump = setInterval(() => {
    x += 100;
    y += -32;
    c++;
    console.log(c);
    if (c <= 7)
        animation();
    else{
        win.style.display = "block";
        clearInterval(jump);
    }
}, 1000);
function animation(){
    if (c < 5){
        anime({
            targets: mario,
            keyframes: [
                {translateY: y, delay: 200, duration: 500},
                {translateX: x, delay: 50, duration: 500}
            ]
        })
    }
    if (c == 6){
        anime({
            targets: mario,
            keyframes: [
                {translateY: y - 32, duration: 450},
                {translateX: x + 50, delay: 200, duration: 500},
                {translateY: -70, delay: 200, duration: 500},
                {translateY: -180, delay: 200, duration: 400}
            ],
            complete: function(){
                anime({
                    targets: bowser,
                    keyframes: [
                        {translateY: -70, duration: 450},
                        {translateY: 450, duration: 600}
                    ]
                })
            }
        })
    }       
}

