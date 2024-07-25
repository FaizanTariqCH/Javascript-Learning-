const start= document.getElementById('start')
const pause= document.getElementById('pause')
const body = document.getElementById('body')

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


start.addEventListener('click',function (){
    

    const colorinterval = setInterval(() => {body.style.backgroundColor = getRandomColor();
        
    }, 1000);
    pause.addEventListener('click', function(){
        clearInterval(colorinterval)
    })
   
})

