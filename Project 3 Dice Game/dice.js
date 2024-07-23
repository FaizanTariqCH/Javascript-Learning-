const newGame = document.querySelector('.btn-new');
const rollDice = document.querySelector('.btn-roll');

const holdDice = document.querySelector('.btn-hold')

const playerScore1 = document.getElementById('score--0')
const playerScore2 = document.getElementById('score--1')
const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')
const diceroll = document.querySelector('.dice')


let current = 0;
let activeplayer = 0;
let scores =[0,0]
let playing = true;



rollDice.addEventListener('click', function()
{
    if(playing){
    const dicenum = Math.trunc (Math.random()*6)+1;

    console.log(dicenum);

    diceroll.src= `dice-${dicenum}.png`
    diceroll.removeAttribute('hidden')

    if (dicenum !==1)
    {
        current += dicenum
        document.getElementById(`current--${activeplayer}`).textContent= current;
    }
    else
    {
        document.getElementById(`current--${activeplayer}`).textContent= 0;
        activeplayer =activeplayer ===0 ? 1 : 0;
        diceroll.setAttribute('hidden',true);
        current = 0;
       document.querySelector('.player-0').classList.toggle('player-active');
       document.querySelector('.player-1').classList.toggle('player-active');
       
    }
    
}})

holdDice.addEventListener('click', function()
    {
        if (playing){
      scores[activeplayer] = current + scores[activeplayer];
      
      document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer]
      if (scores[activeplayer] >= 5)
        {
            playing = false;

            document.querySelector('.player-0').classList.remove('player-active');
            document.querySelector('.player-1').classList.remove('player-active');
            
            diceroll.setAttribute('hidden',true);
            
            document.querySelector(`.player-${activeplayer}`).classList.toggle('player1won');
            
        }
else {
      document.getElementById(`current--${activeplayer}`).textContent= 0;
      activeplayer =activeplayer ===0 ? 1 : 0;
      diceroll.setAttribute('hidden',true);
      current = 0;
     document.querySelector('.player-0').classList.toggle('player-active');
     document.querySelector('.player-1').classList.toggle('player-active');
}
    }})


newGame.addEventListener('click',function(){
    
    
    playing =true;
    current = 0;
    scores = [0,0]
    playerScore1.textContent=0;
    playerScore2.textContent=0;

    currentScore0.textContent=0;
    currentScore1.textContent=0;
    
    activeplayer = activeplayer ===1 ? 0 :0;
    document.querySelector('.player-0').classList.add('player-active');
     document.querySelector('.player-1').classList.remove('player-active');

     document.querySelector('.player-0').classList.remove('player1won');
     document.querySelector('.player-1').classList.remove('player1won');
    


    diceroll.setAttribute('hidden',true)
    playing =true;

})
