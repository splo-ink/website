const section = document.querySelector('section');
const logo = document.querySelector('.logo');
const FPS = 60;
let xPos;
let yPos;
let xSpeed = 4;
let ySpeed = 4;


function resetLogo(){
    section.style.height = window.innerHeight + 'px';
    section.style.width = window.innerWidth + 'px';
    
    xPos = 10;
    yPos = 10;
}

function update(){
    logo.style.left = xPos + 'px';
    logo.style.top = yPos + 'px';
}

setInterval(()=>{
    if (xPos + logo.clientWidth >= window.innerWidth || xPos <= 0){
        xSpeed = -xSpeed;
    }
    if (yPos + logo.clientHeight >= window.innerHeight || yPos <= 0){
        ySpeed = -ySpeed;
    }
    xPos += xSpeed;
    yPos += ySpeed;
    update();
},1000/FPS)

window.addEventListener('resize', ()=>{
  resetLogo();
})

resetLogo()