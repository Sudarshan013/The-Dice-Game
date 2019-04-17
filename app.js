var active_player,dice_score,local_score,score,gamePlaying;
init();
document.querySelector('.btn-roll').addEventListener('click',function()
{if(gamePlaying)
    {
    dice_score=Math.floor((Math.random()*6)+1);
    //console.log
   var DOMobj=document.querySelector('.dice');
    DOMobj.style.display='block';
    DOMobj.src='dice-'+dice_score+'.png';
    
    if(dice_score!==1)
    {
        local_score+=dice_score;
        document.querySelector('#current-'+active_player).textContent=local_score;
    }
    else{
        active_player===0? active_player = 1: active_player= 0;
        console.log(active_player);
        local_score=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
    }  
   }
   // local_score+=dice_score;
    //document.querySelector('#current-0').textContent=local_score;
    //active_player==0?active_player=1:active_player=*/
});
document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(gamePlaying)
    {
    score[active_player]+=local_score;
    document.querySelector('#score-'+active_player).textContent=score[active_player];
    if(score[active_player]>= 100)
    {
      document.querySelector('#name-'+active_player).textContent='Winner';
      document.querySelector('.dice').style.display='none';
      document.querySelector('.player-'+active_player+'-panel').classList.toggle('active');
      document.querySelector('.player-0-panel').classList.add('.winner');
       gamePlaying=false;
    }
    else{
        nextPlayer();
    }
}
});
function nextPlayer()
{
    active_player===0? active_player = 1: active_player= 0;
        console.log(active_player);
        local_score=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',init);
function init()
{
    gamePlaying=true;
     score= [0,0];
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
active_player=0;
dice_score;
 local_score=0;
document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('.dice').style.display='none';

}