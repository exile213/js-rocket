var timer = null;
var countdownNumber = 10;

var changeState = function (state){
    document.body.className='body-state' + state;
    clearInterval(timer);
    countdownNumber = 10; 

    if(state ==2 ){
        timer=setInterval(function(){
            countdownNumber =countdownNumber- 1;
            document.getElementById('countdown').innerHTML = countdownNumber;

            if(countdownNumber <=0){
                changeState(3);
            }
        },500)
    }
    else if(state == 3){
            var success = setTimeout(function(){
                    var randomNum =Math.round(Math.random()*10)
                    console.log(randomNum)
                    if(randomNum > 5){
                        //LAUNCH SUCCESS
                        changeState(4);
                    }else{
                        //LAUNCH FAILED , try again
                        changeState(5);
                    }
            },2000);
    }
} 