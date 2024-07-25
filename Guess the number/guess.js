let random= Math.trunc(Math.random()*20+1)
let remai = 10;
const ngame = document.getElementById('newgame');

document.getElementById('submit').addEventListener('click',function(){
    const inputnum = Number(document.getElementById('inumber').value);
    if (inputnum == 0 || inputnum > 20 || inputnum == '')
    {
        document.getElementById('head').textContent = 'Enter a Valid Number'
    }
    else if (inputnum > random)
    {
        if (remai > 1)
        {
        document.getElementById('head').textContent = 'Guessed number is too high'
        document.getElementById('num').textContent= inputnum
        document.getElementById('inumber').value = 0;
        remai--
        document.getElementById('remainig').textContent = remai ;
        }
        else
        {
            document.getElementById('head').textContent = 'Game over'
            document.getElementById('remainig').textContent = 0;

        }
        document.getElementById('num').textContent= inputnum
    }
    else if (inputnum < random)
        {
            if (remai > 1)
            {
            document.getElementById('head').textContent = 'Guessed number is too low';
            document.getElementById('num').textContent= inputnum
            document.getElementById('inumber').value = 0;
            remai--
            document.getElementById('remainig').textContent = remai ;
            }
            else
            {
                document.getElementById('head').textContent = 'Game over';
                document.getElementById('remainig').textContent = 0;
            }   
        }
        else 
        {
            document.getElementById('head').textContent = `You win your high score is ${remai}`;
            document.getElementById('num').textContent= inputnum

        }
})

// New game button will reset all values 
document.getElementById('newgame').addEventListener('click', function (){


    document.getElementById('head').textContent = 'Guess a number'
    document.getElementById('inumber').value = 0 ;
    document.getElementById('num').textContent=0;
    remai = 10
    document.getElementById('remainig').textContent = remai

})